import sistemaFinancieroIcono from "../../../../../../images/mercadoDisponible1.png";
import mercadoValoresIcono from "../../../../../../images/indicador9.png";
import segurosIcono from "../../../../../../images/mercadoDisponible3.png";
import economiaLocal from "../../../../../../images/mercadoDisponible4.png";

const ReditumMercados = () => {
  return (
    <section className="container-page my-10">
      <h2
        className="text-primary-color text-2xl md:mb-16 mb-4 text-center"
        style={{ fontFamily: "Nunito Sans Black" }}
      >
        Mercados Disponibles
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8">
        <article className="text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-cover mx-auto mb-3"
            src={sistemaFinancieroIcono}
            alt="Sistema Financiero Icono"
          />
          <h3 style={{ fontFamily: "Nunito Sans Black" }} className="text-lg">
            Sistema <span className="block">Financiero</span>
          </h3>
        </article>

        <article className="text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-cover mx-auto mb-3"
            src={mercadoValoresIcono}
            alt="Mercado de Valores Icono"
          />
          <h3 style={{ fontFamily: "Nunito Sans Black" }} className="text-lg">
            Mercado de <span className="block">Valores</span>
          </h3>
        </article>

        <article className="text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-cover mx-auto mb-3"
            src={segurosIcono}
            alt="Mano Listo Icono"
          />
          <h3 style={{ fontFamily: "Nunito Sans Black" }} className="text-lg">
            Seguros
          </h3>
        </article>

        <article className="text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-16 object-cover mx-auto mb-3"
            src={economiaLocal}
            alt="Lupa Icono"
          />
          <h3 style={{ fontFamily: "Nunito Sans Black" }} className="text-lg">
            Economía
            <span className="block">Local</span>
          </h3>
        </article>
      </div>
    </section>
  );
};

export default ReditumMercados;
