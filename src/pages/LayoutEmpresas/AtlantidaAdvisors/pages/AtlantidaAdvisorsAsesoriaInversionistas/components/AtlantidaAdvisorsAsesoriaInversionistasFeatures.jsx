import cerditoIcono from "../../../../../../images/cerdito.png";
import inversionDirectaIcono from "../../../../../../images/indicador9.png";
import gobiernoCorporativoIcono from "../../../../../../images/flechas-derecha-izquierda.png";
import analisisProyecto from "../../../../../../images/indicador10.png";

const AtlantidaAdvisorsAsesoriaInversionistasFeatures = () => {
  return (
    <section className="container-page md:my-20 my-8">
      <h2 className="text-primary-color family-nunito-black text-2xl md:mb-8 mb-4 text-center">
        Características
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-18 object-cover"
            src={cerditoIcono}
            alt="Cerdito Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Optimización
          </h3>
          <p className="text-secondary-color pt-2">
            Optimizar y maximizar los recursos de los inversionistas con
            rendimientos atractivos.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-18 object-cover"
            src={inversionDirectaIcono}
            alt="Inversión Directa Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Riesgo Controlado
          </h3>
          <p className="text-secondary-color pt-2">
            Contemplar la diversificación del patrimonio de los clientes en
            diversas industrias de producción local y de exportación.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-18 object-contain"
            src={gobiernoCorporativoIcono}
            alt="Gobierno Corporativo Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 leading-6 border-primary-color">
            Diversificación
          </h3>
          <p className="text-secondary-color pt-2">
            Contemplar la diversificación del patrimonio de los clientes en
            diversas industrias de producción local y de exportación.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-18 object-cover"
            src={analisisProyecto}
            alt="Análisis de Proyectos Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Asesoría
          </h3>
          <p className="text-secondary-color pt-2">
            Asesoría enfocada en las necesidades particulares de cada
            inversionista.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaAdvisorsAsesoriaInversionistasFeatures;
