import { Link } from "react-router-dom";
import inversionesFinancieras from "../../../../../images/header-crediprime.png";
import logoCrediprime from "../../../../../images/nuestraempresa8.png";

const CrediPrimeInicio = () => {
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
            <Link to={"#"}>
              <img
                loading="lazy"
                decoding="async"
                className="w-72 mb-6"
                src={logoCrediprime}
                alt="Logo Grupo Sur Atlántida"
              />
            </Link>
            <Link
              to={"https://www.crediprime.com/home"}
              className="button-red-primary"
            >
              Conoce más
            </Link>
          </article>

          <article className="max-w-3xl mx-auto">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={inversionesFinancieras}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default CrediPrimeInicio;
