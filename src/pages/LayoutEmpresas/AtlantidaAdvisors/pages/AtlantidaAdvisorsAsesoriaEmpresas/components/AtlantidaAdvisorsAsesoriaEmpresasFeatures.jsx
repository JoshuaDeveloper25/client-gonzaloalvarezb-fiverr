import myA from "../../../../../../images/indicador5.png";
import inversionDirectaIcono from "../../../../../../images/indicador9.png";
import gobiernoCorporativoIcono from "../../../../../../images/metricas-personas.png";
import analisisProyecto from "../../../../../../images/lupa-roja.png";

const AtlantidaAdvisorsAsesoriaEmpresasFeatures = () => {
  return (
    <section className="container-page my-10">
      <h2
        className="text-primary-color text-2xl md:mb-16 mb-4 text-center"
        style={{ fontFamily: "Nunito Sans Black" }}
      >
        Características
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-cover"
            src={myA}
            alt="Edificio Icono"
          />
          <h3
            style={{ fontFamily: "Nunito Sans Black" }}
            className="text-xl border-b-2 py-1 border-primary-color"
          >
            M&A
          </h3>
          <p className="text-secondary-color pt-2">
            El valor de una compañía es un parámetro muy importante de medición
            de la capacidad de ésta para generar recursos de sus accionistas en
            el futuro.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-cover"
            src={inversionDirectaIcono}
            alt="Inversión Directa Icono"
          />
          <h3
            style={{ fontFamily: "Nunito Sans Black" }}
            className="text-xl border-b-2 py-1 border-primary-color"
          >
            Inversión Directa
          </h3>
          <p className="text-secondary-color pt-2">
            Asesoría para desarrollar programas de financiamiento que se ajusten
            a las necesidades específicas de cada empresa.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-contain"
            src={gobiernoCorporativoIcono}
            alt="Gobierno Corporativo Icono"
          />
          <h3
            style={{ fontFamily: "Nunito Sans Black" }}
            className="text-xl border-b-2 py-1 leading-6 border-primary-color"
          >
            Buen Gobierno <span className="block">Corporativo</span>
          </h3>
          <p className="text-secondary-color pt-2">
            Asesoría para implementar los principios necesarios para incentivar
            la protección de los intereses de la compañía y los accionistas,
            creación de valor y el uso eficaz de recursos en forma transparente.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-cover"
            src={analisisProyecto}
            alt="Análisis de Proyectos Icono"
          />
          <h3
            style={{ fontFamily: "Nunito Sans Black" }}
            className="text-xl border-b-2 py-1 border-primary-color"
          >
            Análisis de Proyectos
          </h3>
          <p className="text-secondary-color pt-2">
            Análisis de factibilidad, implementación y estructuración de
            proyectos de inversión.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaAdvisorsAsesoriaEmpresasFeatures;
