import fiduciariaHeader from "../../../../../images/fiduciaria-atlantida-header.png";
import logoFiduciariaAtlantida from "../../../../../images/nuestraempresa3.png";
import { Link } from "react-router-dom";

const FiduciariaAtlantidaInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page">
        {/* <div className="pt-3">
          <Link className="text-primary-color font-bold" to={"/empresas"}>
            {"< Regresar al sitio Suratlántida"}
          </Link>
        </div> */}

        <div className="flex flex-col lg:flex-row justify-between items-center md:gap-3">
          <article className="max-w-md text-secondary-color lg:py-0 py-4">
            <Link to={`/fiduciaria-inicio`}>
              <img
                loading="lazy"
                decoding="async"
                className="w-92 mb-6"
                src={logoFiduciariaAtlantida}
                alt="Logo Grupo Sur Atlántida"
              />
            </Link>
            <p className="text-secondary-color text-justify my-4">
              Administradora de Fondos y Fideicomisos conformada por un grupo de
              profesionales multidisciplinarios con amplia experiencia en
              materia fiduciaria, financiera y legal. Regulada y controlada por
              la Superintendencia de Compañías Valores y Seguros.
            </p>
            <Link
              className="button-red-primary"
              // to={`https://suratlantida.com/fiduciaria/`}
              to={`/fiduciaria-inicio`}
            >
              Conoce más
            </Link>
          </article>

          <article className="max-w-lg  mt-5">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={fiduciariaHeader}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaInicio;
