import { Link } from "react-router-dom";

const HomeDashboard = () => {
  return (
    <section className="container-page px-3">
      <div className="flex flex-wrap justify-between gap-5 mt-10">
        <Link to={"/admin/gestionar-archivos"}>
          <div
            className={`flex items-center justify-center w-full min-h-[15rem] md:min-w-[30rem] min-w-auto  cursor-pointer border-secondary border animation-fade hover:border-transparent hover:bg-primary-color hover:text-white text-4xl font-bold text-center  text-black  rounded px-5`}
          >
            {`Gestionar Archivos`}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomeDashboard;
