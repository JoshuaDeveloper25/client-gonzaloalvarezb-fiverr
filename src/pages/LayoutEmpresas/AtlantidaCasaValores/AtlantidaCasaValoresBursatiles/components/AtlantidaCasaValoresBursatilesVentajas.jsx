import cerditoIcono from "../../../../../images/cerdito.png";
import cartaMano from "../../../../../images/mano-carta.png";
import metricasArribaIcono from "../../../../../images/metricas-persona.png";
import atencionIcono from "../../../../../images/asesoria-icono.png";
import manoDolar from "../../../../../images/indicador10.png";

const AtlantidaCasaValoresBursatilesVentajas = () => {
  return (
    <section className="container-page md:my-20 my-8">
      <h2 className="text-primary-color family-nunito-black text-2xl md:mb-8 mb-4 text-center">
        Ventajas de invertir a través de Atlántida Casa de Valores
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
        <article className="bg-[#F3F3F3] md:px-14 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-18 object-cover"
            src={cartaMano}
            alt="Custodia de Títulos Valores Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-3 border-primary-color">
            Custodia de Títulos <span className="block">Valores</span>
          </h3>
          <p className="text-secondary-color pt-2">
            Garantiza la seguridad necesaria en los títulos físicos de nuestros
            clientes a través de la custodia con una Institución Financiera.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-14 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-18 object-contain"
            src={metricasArribaIcono}
            alt="Gobierno Corporativo Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-3 leading-6 border-primary-color">
            Diversificación
          </h3>
          <p className="text-secondary-color pt-2">
            Ofrecemos múltiples alternativas para alcanzar un portafolio
            rentable de títulos de valores.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-14 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-18 object-cover"
            src={cerditoIcono}
            alt="Cerdito Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-3 border-primary-color">
            No existen montos{" "}
            <span className="block">mínimos para invertir</span>
          </h3>
          <p className="text-secondary-color pt-2">
            Todo depende de la disponibilidad de tus ahorros.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-14 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-14 h-18 object-cover"
            src={atencionIcono}
            alt="Soporte Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-3 border-primary-color">
            Asesoría personalizada
          </h3>
          <p className="text-secondary-color pt-2">
            Enfocada en optimizar el tiempo de los inversionistas.
          </p>
        </article>

        <article className="bg-[#F3F3F3] md:px-14 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-18 object-cover"
            src={manoDolar}
            alt="Análisis de Proyectos Icono"
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-3 border-primary-color">
            Liquidez inmediata
          </h3>
          <p className="text-secondary-color pt-2">
            Puedes vender en cualquier momentos tus inversiones.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresBursatilesVentajas;
