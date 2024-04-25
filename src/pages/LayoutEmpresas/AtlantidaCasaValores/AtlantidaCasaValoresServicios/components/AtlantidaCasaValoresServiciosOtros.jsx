import hojaCheckIcono from "../../../../../images/indicador21.png";
import manoDineroIcono from "../../../../../images/indicador10.png";
import portafolioIcono from "../../../../../images/asesoria-icono.png";
import asesoriaIcono from "../../../../../images/maleta-icono.png";

const AtlantidaCasaValoresServiciosOtros = () => {
  return (
    <section className="container-page md:my-20 my-8">
      <h2 className="text-primary-color family-nunito-black text-2xl md:mb-8 mb-4 text-center">
        Otros servicios
      </h2>

      <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-14 gap-4">
        <article className="bg-[#F3F3F3] lg:px-24 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-contain"
            src={hojaCheckIcono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 pt-3 pb-5 border-primary-color">
            Custodia de Títulos Valores
          </h3>
          <p className="text-secondary-color pt-6">
            Garantiza la seguridad necesaria en los títulos físicos de nuestros
            clientes a través de la custodia con una Institución Financiera.
          </p>
        </article>

        <article className="bg-[#F3F3F3] lg:px-24 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-contain"
            src={manoDineroIcono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 pt-3 pb-5 border-primary-color">
            Gestión de Cobro
          </h3>
          <p className="text-secondary-color pt-6">
            Se encarga del manejo de todos los procesos operativos de cobro de
            todos los títulos físicos y desmaterializados que mantenga el
            cliente
          </p>
        </article>

        <article className="bg-[#F3F3F3] lg:px-24 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-24 h-24 object-contain"
            src={asesoriaIcono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 pt-3 pb-5 leading-6 border-primary-color">
            Control de Concentración Portafolio
          </h3>
          <p className="text-secondary-color pt-6">
            Composición del portafolio de acuerdo a los segmentos y porcentajes
            máximos de inversión obligatoria impuestos por los Órganos de
            Control.
          </p>
        </article>

        <article className="bg-[#F3F3F3] lg:px-24 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-12 h-20 object-contain"
            src={portafolioIcono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 pt-3 pb-5 border-primary-color">
            Asesoría Permanente
          </h3>
          <p className="text-secondary-color pt-6">
            A través de alternativas de inversión, envío de perspectivas macro
            económicas, capacitaciones.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresServiciosOtros;
