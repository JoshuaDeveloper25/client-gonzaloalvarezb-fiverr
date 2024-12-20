import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ModalComponent from "../../../components/ModalComponent";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { getError } from "../../../utils/getError";
import formatDate from "../../../utils/formatDate";
import Spinner from "../../../components/Spinner";
import Table from "../../../components/Table";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  // Get all users
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await axios?.get(`${import.meta.env.VITE_BASE_URL}/users/get-users`),
  });

  console.log(data);

  // Table headers and keys
  const columns = [
    {
      header: "Nombre",
      accessorKey: "name",
    },

    {
      header: "Email",
      accessorKey: "email",
    },

    {
      header: "Rol",
      accessorKey: "role",
    },

    {
      header: "Creado",
      accessorKey: "createdAt",
      cell: (info) => {
        return (
          <span className="capitalize">
            {formatDate(info?.row?.original?.createdAt)}
          </span>
        );
      },
    },

    {
      header: "Acciones",
      cell: (info) => <CellCustomElement dataRow={info?.row?.original} />,
    },
  ];

  if (isLoading) {
    return (
      <div className="-z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container-page md:px-3 px-0 my-5 w-full">
      <CreateUser />

      <Table columns={columns} data={data?.data} />
    </div>
  );
};

export default ManageUsers;

// Create User
const CreateUser = ({ queries }) => {
  const [seeRepeatPassword, setSeeRepeatPassword] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const queryClient = useQueryClient();

  // Create
  const createUserMutation = useMutation({
    mutationFn: (userInfo) =>
      axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, userInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success(`Usuario exitosamente creado!`);
    },
    onError: (err) => {
      toast.error(getError(err));
      console.log(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      name: e?.target?.name?.value?.trim(),
      email: e?.target?.email?.value?.trim(),
      password: e?.target?.password?.value?.trim(),
    };

    if (Object.values(userInfo).includes("")) {
      return toast.error("¡Todos los campos son obligatorios!");
    } else if (userInfo?.password !== e?.target?.repeatPassword?.value) {
      return toast.error("¡Contraseñas no coinciden!");
    }

    createUserMutation?.mutate(userInfo);

    if (createUserMutation?.error) return;

    e?.target?.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full py-2.5 px-2.5 border rounded shadow-lg hover:shadow-2xl animation-fade"
      >
        <h3 className="text-2xl font-semibold mb-3 text-black/80d">
          Crear Usuario
        </h3>

        {/* Nombre */}
        <label>
          <span className="font-semibold">Nombre</span>
          <input
            className="rounded px-2 bg-tertiary-color mb-3 w-full py-1 outline-primary-color block"
            name="name"
            type="text"
          />
        </label>

        {/* Email */}
        <label>
          <span className="font-semibold">Email</span>
          <input
            className="rounded px-2 bg-tertiary-color mb-3 w-full py-1 outline-primary-color block"
            name="email"
            type="email"
          />
        </label>

        {/* Contraseña */}
        <label>
          <span className="font-semibold">Contraseña</span>
          <div className="relative z-10">
            <input
              className="rounded px-2 bg-tertiary-color mb-3 w-full py-1 outline-primary-color block"
              type={seePassword ? "text" : "password"}
              name="password"
            />

            <button
              onClick={() => setSeePassword(!seePassword)}
              className="absolute top-2 right-2"
              type="button"
            >
              {seePassword ? <IoEye /> : <IoMdEyeOff />}
            </button>
          </div>
        </label>

        {/* Repetir Contraseña */}
        <label>
          <span className="font-semibold">Repetir Contraseña</span>
          <div className="relative z-10">
            <input
              className="rounded px-2 bg-tertiary-color mb-3 w-full py-1 outline-primary-color block"
              type={seeRepeatPassword ? "text" : "password"}
              name="repeatPassword"
            />

            <button
              onClick={() => setSeeRepeatPassword(!seeRepeatPassword)}
              className="absolute top-2 right-2 z-50"
              type="button"
            >
              {seeRepeatPassword ? <IoEye /> : <IoMdEyeOff />}
            </button>
          </div>
        </label>

        <button
          className="btn-normal button-red-primary disabled:bg-red-200"
          disabled={createUserMutation?.isPending}
        >
          {createUserMutation?.isPending ? "Creando..." : "Crear"}
        </button>
      </form>
    </>
  );
};

// Actions component from table
const CellCustomElement = ({ dataRow }) => {
  const [seeRepeatPassword, setSeeRepeatPassword] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();

  // Edit
  const { mutate, isPending, error } = useMutation({
    mutationFn: (elementInfo) =>
      axios.put(
        `${import.meta.env.VITE_BASE_URL}/users/edit-user/${dataRow?._id}`,
        elementInfo
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
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

    const userInfo = {
      name: e?.target?.name?.value?.trim(),
      email: e?.target?.email?.value?.trim(),
      password: e?.target?.password?.value?.trim(),
    };

    if (!userInfo?.name || !userInfo?.email) {
      return toast.error("¡El campo de nombre e email son obligatorios!");
    } else if (userInfo?.password !== e?.target?.repeatPassword?.value) {
      return toast.error("¡Contraseñas no coinciden!");
    }

    mutate(userInfo);

    if (error) return;

    e?.target?.reset();
  };

  // Delete
  const deleteMutation = useMutation({
    mutationFn: (elementInfo) =>
      axios.delete(
        `${import.meta.env.VITE_BASE_URL}/users/delete-user/${dataRow?._id}`,
        elementInfo
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success(`Exitosamente eliminado!`);
    },
    onError: (err) => {
      toast.error(getError(err));
      console.log(err);
    },
  });

  const handleDelete = () => {
    const confirmDelete = confirm("Deseas eliminar este usuario?");

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
        titleModal={"Editar Usuario"}
        showBtn={false}
      >
        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <label>
            <span className="font-semibold">Nombre</span>
            <input
              className="rounded px-2 bg-tertiary-color mb-3 w-full py-1 outline-primary-color block"
              defaultValue={dataRow?.name}
              name="name"
              type="text"
            />
          </label>

          {/* Email */}
          <label>
            <span className="font-semibold">Email</span>
            <input
              className="rounded px-2 bg-tertiary-color mb-3 w-full py-1 outline-primary-color block"
              defaultValue={dataRow?.email}
              name="email"
              type="email"
            />
          </label>

          {/* Contraseña */}
          <label className="block">
            <span className="font-semibold">Contraseña</span>
            <div className="relative z-10">
              <input
                className="rounded px-2 bg-tertiary-color w-full py-1 outline-primary-color block"
                type={seePassword ? "text" : "password"}
                placeholder="Ingrese Contraseña Nueva"
                name="password"
              />

              <button
                onClick={() => setSeePassword(!seePassword)}
                className="absolute top-2 right-2"
                type="button"
              >
                {seePassword ? <IoEye /> : <IoMdEyeOff />}
              </button>
            </div>
            <span className="block mb-3 text-yellow-500 text-sm font-bold mt-1">
              Si no va a editar su contraseña, déjelo en blanco.
            </span>
          </label>

          {/* Repetir Contraseña */}
          <label className="block">
            <span className="font-semibold">Repetir Contraseña</span>
            <div className="relative z-10">
              <input
                className="rounded px-2 bg-tertiary-color mb-3 w-full py-1 outline-primary-color block"
                type={seeRepeatPassword ? "text" : "password"}
                placeholder="Repita Contraseña Nueva"
                name="repeatPassword"
              />

              <button
                onClick={() => setSeeRepeatPassword(!seeRepeatPassword)}
                className="absolute top-2 right-2"
                type="button"
              >
                {seeRepeatPassword ? <IoEye /> : <IoMdEyeOff />}
              </button>
            </div>
          </label>

          <button
            className="btn-normal button-red-primary w-full disabled:bg-primary-color/50"
            disabled={isPending}
          >
            {isPending ? "Guardando cambios..." : "Editar"}
          </button>
        </form>
      </ModalComponent>
    </>
  );
};
