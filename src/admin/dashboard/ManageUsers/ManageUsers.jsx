import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ModalComponent from "../../../components/ModalComponent";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { getError } from "../../../utils/getError";
import Spinner from "../../../components/Spinner";
import Table from "../../../components/Table";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  // Get all users
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await axios?.get(`${import.meta.env.VITE_BASE_URL}/users/`),
  });

  // Table headers and keys
  const columns = [
    {
      header: "Nombre",
      accessorKey: "username",
    },

    {
      header: "Email",
      accessorKey: "email",
    },

    {
      header: "Contraseña",
      accessorKey: "password",
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
      <CreateUser />

      <Table columns={columns} data={data?.data} />
    </div>
  );
};

export default ManageUsers;

// Create User
const CreateUser = ({ queries }) => {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  // Create
  const createUserMutation = useMutation({
    mutationFn: (userInfo) =>
      axios.post(`${import.meta.env.VITE_BASE_URL}/users/`, userInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
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

    // const formData = new FormData(e.target);

    // formData.append("pageName", queries?.pageName);
    // formData.append("sectionName", queries?.sectionName);
    // formData.append("accordionName", queries?.accordionName);

    // createUserMutation?.mutate(formData);

    e?.target?.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="border-b pb-8">
        <label>
          <span className="font-semibold">Please, select a file.</span>
          <input
            type="file"
            className="rounded bg-tertiary-color mb-3 block"
            name="uploadDocuments"
            accept="image/*"
            required
            multiple
          />
        </label>

        <button
          className="btn-normal button-red-primary disabled:bg-red-200"
          // disabled={createElementMutation?.isPending}
        >
          {/* {createElementMutation?.isPending ? "Creando..." : "Crear"} */}
        </button>
      </form>
    </>
  );
};

// Actions component from table
const CellCustomElement = ({ dataRow }) => {
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
          <input
            type="file"
            multiple
            className="rounded bg-tertiary-color mb-3"
            defaultValue={dataRow?.uploadDocuments}
            name="uploadDocuments"
            accept="image/*"
          />

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
