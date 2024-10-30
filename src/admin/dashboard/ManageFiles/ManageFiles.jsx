import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ModalComponent from "../../../components/ModalComponent";
import { MdDelete, MdModeEdit } from "react-icons/md";
import InputBox from "../../../components/InputBox";
import { getError } from "../../../utils/getError";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import Table from "../../../components/Table";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const ManageFiles = () => {
  const [searchParams] = useSearchParams();
  const pageName = searchParams.get("pageName");
  const sectionName = searchParams.get("sectionName");
  const accordionName = searchParams.get("accordionName");

  // Get all pdfFiles
  const { data, isLoading } = useQuery({
    queryKey: ["pdfFiles", pageName, sectionName, accordionName],
    queryFn: async () =>
      await axios?.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/pdf-managements/upload?pageName=${pageName}&sectionName=${sectionName}&accordionName=${accordionName}`
      ),
  });

  // Table headers and keys
  const columns = [
    {
      header: "Página",
      accessorKey: "pageName",
    },

    {
      header: "Sección",
      accessorKey: "sectionName",
    },

    {
      header: "Acordeón",
      accessorKey: "accordionName",
    },

    {
      header: "Acciones",
      cell: (info) => <CellCustomElement dataRow={info?.row?.original} />,
    },
  ];

  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container-page md:px-3 px-0 my-5">
      <CreateElement />

      <Table columns={columns} data={data?.data} />
    </div>
  );
};

export default ManageFiles;

// Create Element
const CreateElement = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  // Create
  const createElementMutation = useMutation({
    mutationFn: (elementInfo) =>
      axios.post(
        `${import.meta.env.VITE_BASE_URL}/pdf-managements/upload`,
        elementInfo
      ),

    onSuccess: () => {
      queryClient.invalidateQueries(["pdfFiles"]);
      toast.success(`Exitosamente creado!`);
      setShowModal(!showModal);
    },

    onError: (err) => {
      toast.error(getError(err));
      console.log(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("uploadDocuments", e?.target?.uploadDocuments?.files[0]);

    const elementInfo = {
      uploadDocuments: formData.get("uploadDocuments"),
      pageName: e?.target?.pageName?.value,
      sectionName: e?.target?.sectionName?.value,
      accordionName: e?.target?.accordionName?.value,
    };

    if (
      [
        elementInfo?.uploadDocuments,
        elementInfo?.pageName,
        elementInfo?.sectionName,
        elementInfo?.accordionName,
      ].includes("")
    ) {
      return toast.error("Llena los espacios disponibles!");
    }

    createElementMutation?.mutate(elementInfo);
  };

  return (
    <>
      <button
        className="btn-normal button-red-primary"
        onClick={() => setShowModal(!showModal)}
      >
        Crear Elemento
      </button>

      {/* Modal Of Create an Element */}
      <ModalComponent
        setShowModal={setShowModal}
        showModal={showModal}
        titleModal={"Crear Elemento"}
        showBtn={false}
      >
        <form onSubmit={handleSubmit}>
          <InputBox
            propInput={{
              name: "pageName",
              required: true,
              type: "text",
            }}
            labelTitle={"Nombre de Página"}
          />

          <InputBox
            propInput={{
              name: "sectionName",
              required: true,
              type: "text",
            }}
            labelTitle={"Nombre de Sección"}
          />

          <InputBox
            propInput={{
              name: "accordionName",
              required: true,
              type: "text",
            }}
            labelTitle={"Nombre de Acordeón"}
          />

          <input
            type="file"
            className="rounded bg-tertiary-color mb-3"
            name="uploadDocuments"
            accept="image/*"
          />

          <button
            className="btn-normal button-red-primary w-full disabled:bg-red-200"
            disabled={createElementMutation?.isPending}
          >
            {createElementMutation?.isPending ? "Creando..." : "Crear"}
          </button>
        </form>
      </ModalComponent>
    </>
  );
};

// Actions component from table
const CellCustomElement = ({ dataRow }) => {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  // Create
  const { mutate, isPending } = useMutation({
    mutationFn: (instructorInfo) =>
      axios.put(
        `${import.meta.env.VITE_BASE_URL}/instructors/${dataRow?._id}`,
        instructorInfo
      ),

    onSuccess: () => {
      queryClient.invalidateQueries(["instructors"]);
      toast.success(`Exitosamente editado!`);
      setShowModal(!showModal);
    },

    onError: (err) => {
      toast.error(getError(err));
      console.log(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const dataSend = {
      instructorName: data.get("instructorName"),
      description: data.get("instructorDesc"),
    };

    mutate(dataSend);
  };

  // Delete
  const deleteMutation = useMutation({
    mutationFn: (instructorInfo) =>
      axios.delete(
        `${import.meta.env.VITE_BASE_URL}/instructors/${dataRow?._id}`,
        instructorInfo
      ),

    onSuccess: () => {
      queryClient.invalidateQueries(["instructors"]);
      toast.success(`Exitosamente eliminado!`);
    },

    onError: (err) => {
      toast.error(getError(err));
      console.log(err);
    },
  });

  const handleDelete = () => {
    const confirmDelete = confirm("Desea eliminar este elemento?");

    if (!confirmDelete) return;

    deleteMutation.mutate();
  };

  const isDisabled = isPending;

  return (
    <>
      <article className="flex gap-2 text-3xl">
        <button
          disabled={deleteMutation.isPending}
          onClick={() => setShowModal(true)}
          className="text-blue-500"
        >
          <MdModeEdit />
        </button>

        <button
          disabled={deleteMutation.isPending}
          className="text-primary-color"
          onClick={handleDelete}
        >
          <MdDelete />
        </button>
      </article>

      {/* Modal Of Edit an Element */}
      <ModalComponent
        setShowModal={setShowModal}
        showModal={showModal}
        titleModal={"Editar Elemento"}
        showBtn={false}
      >
        <form onSubmit={handleSubmit}>
          <InputBox
            propInput={{
              name: "instructorName",
              required: true,
              defaultValue: dataRow?.instructorName,
              disabled: isDisabled,
              type: "text",
            }}
            labelTitle={"Nombre"}
          />

          <InputBox
            propInput={{
              name: "instructorDesc",
              required: true,
              defaultValue: dataRow?.description,
              disabled: isDisabled,
              type: "text",
            }}
            labelTitle={"Descripción"}
          />

          <input
            type="file"
            className="rounded bg-tertiary-color mb-3"
            defaultValue={dataRow?.uploadDocuments}
            name="uploadDocuments"
            accept="image/*"
          />

          <button
            className="btn-normal button-red-primary w-full"
            disabled={isDisabled}
          >
            Editar
          </button>
        </form>
      </ModalComponent>
    </>
  );
};
