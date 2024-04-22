import casaValoresHeader from "../../../../../images/reditum-header.png";
import logoReditum from "../../../../../images/nuestraempresa6.png";

const ReditumInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center md:gap-3">
        <article className="max-w-md text-secondary-color lg:py-0 py-4">
          <img
            loading="lazy"
            decoding="async"
            className="w-92 mb-6"
            src={logoReditum}
            alt="Logo Grupo Sur Atlántida"
          />
          <h2
            className="text-primary-color text-2xl"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
             
            Reditum Market Data
          </h2>
          <p className="text-secondary-color text-justify mt-2 mb-4">
            Optimiza la búsqueda y análisis de información a través de nuestro
            software de inteligencia de mercado. Accede a datos financieros,
            económicos y bursátiles de Ecuador y Centroamérica, potenciando así
            una ventaja estratégica con información en tiempo real.
          </p>
          <button className="button-red-primary" type="button">
            Conoce más
          </button>
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
    </section>
  );
};

export default ReditumInicio;
