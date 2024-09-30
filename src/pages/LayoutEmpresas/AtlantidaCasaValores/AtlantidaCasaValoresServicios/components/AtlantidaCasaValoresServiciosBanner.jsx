import { Link } from "react-router-dom";

const AtlantidaCasaValoresServiciosBanner = () => {
  return (
    <section className="bg-primary-color py-16">
      <div className="flex flex-col sm:flex-row items-center sm:gap-16 gap-3 container-page">
        <div>
          <h2 className="text-white text-center text-3xl family-nunito-regular">
            Sistema de Administración de Portafolio
          </h2>
        </div>

        <div>
          <Link
            className="btn-normal button-red-primary-outline2 px-20"
            target="_blank"
            to={"https://miportafolio.suratlantida.com/ "}
          >
            Acceder
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresServiciosBanner;
