import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import ModalComponent from "../../../components/ModalComponent";
import InputBox from "../../../components/InputBox";
import { getError } from "../../../utils/getError";
import Spinner from "../../../components/Spinner";
import Table from "../../../components/Table";
import { MdModeEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const ManageFiles = () => {
  const columns = [
    {
      header: "Name",
      accessorKey: "instructorName",
    },

    {
      header: "Description",
      accessorKey: "description",
    },

    {
      header: "Actions",
      cell: (info) => <CellCustomInstructor dataRow={info?.row?.original} />,
    },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["pdfFiles"],
    queryFn: async () =>
      await axios?.get(`${import.meta.env.VITE_BASE_URL}/instructors/`),
  });

  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container-page md:px-3 px-0 my-5">
      {/* --> Table */}
      <Table columns={columns} data={data} />
    </div>
  );
};

const CellCustomInstructor = ({ dataRow }) => {
  const [showModal, setShowModal] = useState(false);

  const queryClient = useQueryClient();

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
    const confirmDelete = confirm("Desea eliminar este instructor?");

    if (!confirmDelete) return;

    deleteMutation.mutate();
  };

  console.log(dataRow);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const dataSend = {
      instructorName: data.get("instructorName"),
      description: data.get("instructorDesc"),
    };

    mutate(dataSend);
  };

  const isDisabled = isPending;

  return (
    <>
      <div className="flex gap-2 text-3xl">
        <button
          disabled={deleteMutation.isPending}
          onClick={() => setShowModal(true)}
          className="text-blue-500"
        >
          <MdModeEdit />
        </button>
        {/* <button
          disabled={deleteMutation.isPending}
          onClick={handleDelete}
          className="text-primary-color"
        >
          <MdDelete />
        </button> */}
      </div>

      <ModalComponent
        setShowModal={setShowModal}
        showModal={showModal}
        titleModal={"Editar Instructor"}
        showBtn={false}
      >
        <form onSubmit={handleSubmit}>
          <div className="px-3">
            <InputBox
              propInput={{
                name: "instructorName",
                required: true,
                defaultValue: dataRow?.instructorName,
                disabled: isDisabled,
              }}
              labelTitle={"Nombre"}
            />

            <InputBox
              propInput={{
                name: "instructorDesc",
                required: true,
                defaultValue: dataRow?.description,
                disabled: isDisabled,
              }}
              labelTitle={"Descripción"}
            />
          </div>
          <button className="btn w-full" disabled={isDisabled}>
            Editar
          </button>
        </form>
      </ModalComponent>
    </>
  );
};

export default ManageFiles;
