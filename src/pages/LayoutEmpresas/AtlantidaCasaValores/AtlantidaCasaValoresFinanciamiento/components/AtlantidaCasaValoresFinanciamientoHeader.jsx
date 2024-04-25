import checkIcono from "../../../../../images/indicador14.png";

const AtlantidaCasaValoresFinanciamientoHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:max-w-none max-w-lg md:gap-6 gap-0  mx-auto">
        <article className="flex-[25%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color sm:text-[2.6rem] text-[2rem] leading-[1.3] font-bold family-nunito-semibold">
            Proyectos de financiamiento a
            <span className="md:block inline">
              corto, mediano y largo plazo
            </span>{" "}
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>
          <p className="text-secondary-color text-justify">
            Atlántida Casa de Valores desarrolla proyectos de financiamiento a
            corto, mediano y largo plazo, para la obtención de recursos a través
            de las herramientas que pone a consideración el mercado de valores
            ecuatoriano.
          </p>
        </article>

        <article className="flex-1 text-center md:my-8 my-3">
          <h2 className="text-primary-color font-bold text-5xl mb-3 family-nunito-regular">
            551 <span className="block">Millones</span>
          </h2>
          <h3 className="text-secondary-color text-3xl">
            Obtenidos en <span className="block">financiamiento para</span>{" "}
            Inversión de Terceros
            <div className="block"> empresas en mercado</div>
            de valores
          </h3>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresFinanciamientoHeader;
