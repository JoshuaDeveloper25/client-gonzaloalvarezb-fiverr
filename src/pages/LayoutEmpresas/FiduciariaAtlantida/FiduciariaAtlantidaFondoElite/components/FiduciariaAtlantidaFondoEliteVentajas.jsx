import flechasInvertidas from "../../../../../images/flechas-derecha-izquierda.png";
import metricaPersona from "../../../../../images/metricas-personas.png";
import metricaExponencial from "../../../../../images/indicador9.png";
import asesoriaIcono from "../../../../../images/maleta-icono.png";
import cerdoIcono from "../../../../../images/cerdito.png";
import ojoIcono from "../../../../../images/ojo-rojo.png";

const FiduciariaAtlantidaFondoFitVentajas = () => {
  return (
    <section className="container-page mb-16">
      <h2 className="text-primary-color family-nunito-black text-2xl md:mb-8 mb-4 text-center">
        Ventajas
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
        <article className="bg-[#F3F3F3] px-6 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-contain"
            src={cerdoIcono}
          />
          <h3 className="family-nunito-black text-xl border-b-4 pt-3 pb-5 border-primary-color">
            Flexibilidad
          </h3>
          <p className="text-secondary-color pt-6">
            El fondo de inversión ofrece liquidez en el momento requerido para
            asegurar que cuentes con tu dinero cuando lo necesites.
          </p>
        </article>

        <article className="bg-[#F3F3F3] px-6 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-16 object-contain"
            src={flechasInvertidas}
          />
          <h3 className="family-nunito-black text-xl border-b-4 pt-3 pb-5 border-primary-color">
            Reinversión
          </h3>
          <p className="text-secondary-color pt-6">
            Diariamente se capitalizan tus rendimientos para tener un
            crecimiento constante durante tu permanencia en el fondo.
          </p>
        </article>

        <article className="bg-[#F3F3F3] px-6 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-24 h-16 object-contain"
            src={asesoriaIcono}
          />
          <h3 className="family-nunito-black text-xl border-b-4 pt-3 pb-5 leading-6 border-primary-color">
            Diversificación
          </h3>
          <p className="text-secondary-color pt-6">
            Reducción de riesgo al invertir el portafolio en diferentes sectores
            económicos para asegurar tu retorno de capital.
          </p>
        </article>

        <article className="bg-[#F3F3F3] px-6 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain"
            src={ojoIcono}
          />
          <h3 className="family-nunito-black text-xl border-b-4 pt-3 pb-5 border-primary-color">
            Regulación y<span className="block">supervisión</span>
          </h3>
          <p className="text-secondary-color pt-6">
            Regulado y controlado por la Superintendencia de Compañías, Seguros
            y Valores, para garantizar tu seguridad y confianza.
          </p>
        </article>

        <article className="bg-[#F3F3F3] px-6 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain"
            src={metricaPersona}
          />
          <h3 className="family-nunito-black text-xl border-b-4 pt-3 pb-5 border-primary-color">
            Administración
            <span className="block">profesional</span>
          </h3>
          <p className="text-secondary-color pt-6">
            Un comité optimiza el manejo del portafolio de inversiones, para
            aprovecha las oportunidades del mercado y optimizar tu tiempo.
          </p>
        </article>

        <article className="bg-[#F3F3F3] px-6 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-20 object-contain"
            src={metricaExponencial}
          />
          <h3 className="family-nunito-black text-xl border-b-4 pt-3 pb-5 border-primary-color">
            Rendimiento
          </h3>
          <p className="text-secondary-color pt-6">
            Una de las mejores tasas del mercado, para maximizar el crecimiento
            de tu dinero.
          </p>
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondoFitVentajas;
