import casaValoresHeader from "../../../../../images/reditum-header.png";
import logoReditum from "../../../../../images/nuestraempresa6.png";
import { Link } from "react-router-dom";

const ReditumInicio = () => {
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
            <Link to={"/reditum-inicio"}>
              <img
                loading="lazy"
                decoding="async"
                className="w-72 mb-6"
                src={logoReditum}
                alt="Logo Grupo Sur Atlántida"
              />
            </Link>
            <h2 className="text-primary-color text-2xl family-nunito-black">
              Reditum Market Data
            </h2>
            <p className="text-secondary-color text-justify mt-2 mb-4">
              Optimiza la búsqueda y análisis de información a través de nuestro
              software de inteligencia de mercado. Accede a datos financieros,
              económicos y bursátiles de Ecuador y Centroamérica, potenciando
              así una ventaja estratégica con información en tiempo real.
            </p>

            <Link
              className="button-red-primary"
              // to={"https://suratlantida.com/reditum/"}
              to={"/reditum-inicio"}
            >
              Conoce más
            </Link>
          </article>

          <article className="max-w-2xl mx-auto  mt-5">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={casaValoresHeader}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default ReditumInicio;
