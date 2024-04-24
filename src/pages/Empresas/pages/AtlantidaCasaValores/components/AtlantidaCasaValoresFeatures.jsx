import manoDineroIcono from "../../../../../images/indicador10.png";
import metricasPersonasIcono from "../../../../../images/indicador15.png";
import computadoraAtlantidaIcono from "../../../../../images/indicador16.png";

const AtlantidaCasaValoresFeatures = () => {
  return (
    <section className="container-page my-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
        <article className="bg-tertiary-color p-10 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={computadoraAtlantidaIcono}
            alt="Computadora Atlantida Icono"
          />
          <h3 className="family-nunito-black text-lg">
            Administración de <span className="block">Portafolios</span>
          </h3>
          <div className="h-2 w-10 mx-auto bg-primary-color my-6"></div>
          <p>
            Atlántida Casa de Valores ofrece de forma exclusiva a sus clientes
            la plataforma tecnológica más avanzada del mercado, que permite
            administrar de manera más eficiente su portafolio de inversiones,
            con información siempre disponible y actualizada.
          </p>
        </article>

        <article className="bg-tertiary-color p-10 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={metricasPersonasIcono}
            alt="Metricas Personas Icono"
          />
          <h3 className="text-lg family-nunito-black">
            Intermediación <span className="block">Bursátil</span>
          </h3>
          <div className="h-2 w-10 mx-auto bg-primary-color my-6"></div>
          <p>
            Atlántida Casa de Valores pone en contacto la oferta y demanda de
            títulos valores registrados en las bolsas del país.
          </p>
        </article>

        <article className="bg-tertiary-color p-10 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={manoDineroIcono}
            alt="Mano Dinero Icono"
          />
          <h3 className="family-nunito-black text-lg mt-7">
            Financiamiento
          </h3>
          <div className="h-2 w-10 mx-auto bg-primary-color my-6"></div>
          <p>
            Atlántida Casa de Valores ofrece a sus clientes acceso a nuevas
            fuentes de financiamiento a través del mercado de valores.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresFeatures;
