import capitalPrimeHeader from "../../../../../images/capital-prime-inicio.png";
import logoCapitalPrime from "../../../../../images/nuestraempresa5.png";
import { Link } from "react-router-dom";

const CapitalPrimeInicio = () => {
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
                className="w-92 mb-6"
                src={logoCapitalPrime}
                alt="Logo Grupo Sur Atlántida"
              />
            </Link>
            <p className="text-secondary-color text-justify my-4">
              Especialistas en cobranza y recuperación de cartera.
            </p>
            <Link
              to={"https://capitalprimeec.com/home"}
              className="button-red-primary"
            >
              Conoce más
            </Link>
          </article>

          <article className="max-w-md mx-auto  mt-5">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={capitalPrimeHeader}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default CapitalPrimeInicio;
