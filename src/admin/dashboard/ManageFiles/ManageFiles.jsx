import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ModalComponent from "../../../components/ModalComponent";
import { MdDelete, MdModeEdit } from "react-icons/md";
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
      header: "Nombre de Archivo",
      accessorKey: "fileTitle",
    },

    {
      header: "Acciones",
      cell: (info) => (
        <CellCustomElement
          queries={{ pageName, sectionName, accordionName }}
          dataRow={info?.row?.original}
        />
      ),
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
      <CreateElement queries={{ pageName, sectionName, accordionName }} />

      <Table
        queries={{ pageName, sectionName, accordionName }}
        columns={columns}
        data={data?.data}
      />
    </div>
  );
};

export default ManageFiles;

// Create Element
const CreateElement = ({ queries }) => {
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

    formData.append("pageName", queries?.pageName);
    formData.append("sectionName", queries?.sectionName);
    formData.append("accordionName", queries?.accordionName);

    createElementMutation?.mutate(formData);

    // If there's any error we don't clear the inputs
    if (createElementMutation?.isError) return;

    // Means there's no errors && we can clear the inputs
    e?.target?.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full py-2.5 px-2.5 border rounded">
        <label>
          <span className="font-semibold">
            Por favor, seleccione un archivo.
          </span>
          <input
            type="file"
            className="rounded bg-tertiary-color mb-3 block"
            accept=".doc,.docx,.xls,.xlsx,.pdf,image/*"
            name="uploadDocuments"
            required
          />
        </label>

        <label>
          <span className="font-semibold">Nombre del Archivo</span>
          <input
            type="text"
            className="rounded outline-none bg-tertiary-color mb-3 w-full py-1.5 px-1.5 block"
            name="fileTitle"
            required
          />
        </label>

        <button
          className="btn-normal button-red-primary disabled:bg-red-200"
          disabled={createElementMutation?.isPending}
        >
          {createElementMutation?.isPending ? "Creando..." : "Crear"}
        </button>
      </form>
    </>
  );
};

// Actions component from table
const CellCustomElement = ({ queries, dataRow }) => {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  // Edit
  const { mutate, isPending } = useMutation({
    mutationFn: (elementInfo) =>
      axios.put(
        `${import.meta.env.VITE_BASE_URL}/pdf-managements/upload/${
          dataRow?._id
        }`,
        elementInfo
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["pdfFiles"]);
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

    const formData = new FormData();

    formData.append("uploadDocuments", e?.target?.uploadDocuments?.files);
    formData.append("pageName", queries?.pageName);
    formData.append("sectionName", queries?.sectionName);
    formData.append("accordionName", queries?.accordionName);

    mutate(formData);

    e?.target?.reset();
  };

  // Delete
  const deleteMutation = useMutation({
    mutationFn: (elementInfo) =>
      axios.delete(
        `${import.meta.env.VITE_BASE_URL}/pdf-managements/upload/${
          dataRow?._id
        }`,
        elementInfo
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["pdfFiles"]);
      toast.success(`Exitosamente eliminado!`);
    },
    onError: (err) => {
      toast.error(getError(err));
      console.log(err);
    },
  });

  const handleDelete = () => {
    const confirmDelete = confirm("Deseas eliminar este archivo?");

    if (!confirmDelete) return;

    deleteMutation.mutate();
  };

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
        titleModal={"Editar"}
        showBtn={false}
      >
        <form onSubmit={handleSubmit}>
          <label>
            <span className="font-semibold">
              Por favor, seleccione un archivo.
            </span>
            <input
              type="file"
              className="rounded bg-tertiary-color mb-3"
              defaultValue={dataRow?.uploadDocuments}
              name="uploadDocuments"
              accept=".doc,.docx,.xls,.xlsx,.pdf,image/*"
            />
          </label>

          <label className="block">
            <span className="font-semibold">Nombre del Archivo</span>
            <input
              type="text"
              className="rounded outline-none bg-tertiary-color mb-3 w-full py-1.5 px-1.5 block"
              defaultValue={dataRow?.fileTitle}
              name="fileTitle"
              required
            />
          </label>

          <button
            className="btn-normal button-red-primary w-full"
            disabled={isPending}
          >
            Editar
          </button>
        </form>
      </ModalComponent>
    </>
  );
};
