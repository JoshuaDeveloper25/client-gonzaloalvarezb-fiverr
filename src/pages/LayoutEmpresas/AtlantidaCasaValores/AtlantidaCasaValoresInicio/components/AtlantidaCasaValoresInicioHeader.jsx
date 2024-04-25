import checkIcono from "../../../../../images/indicador14.png";

const AtlantidaCasaValoresInicioHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:max-w-none max-w-lg md:gap-6 gap-0  mx-auto">
        <article className="flex-[25%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color sm:text-[2.6rem] text-[2rem] leading-[1.3] font-bold family-nunito-semibold">
            Atlántida Casa de Valores, líder{" "}
            <span className="md:block inline">en las bolsas de valores de</span>{" "}
            Ecuador con más de 15 años de
            <span className="md:block inline">experiencia</span>
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>

          <div className="flex  flex-col gap-y-7">
            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <img
                  className="w-10"
                  decoding="async"
                  loading="lazy"
                  src={checkIcono}
                />
              </div>

              <div className="sm:flex-[85%] flex-[73%]">
                <p className="text-secondary-color leading-relaxed text-sm">
                  Atlántida Casa de Valores, con más de 15 años de trayectoria,
                  se ha consolidado como una empresa líder en las bolsas de
                  valores de Ecuador, con un volumen transaccional histórico que
                  supera los US $4.2 billones.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <img
                  className="w-10"
                  decoding="async"
                  loading="lazy"
                  src={checkIcono}
                />
              </div>

              <div className="sm:flex-[85%] flex-[73%]">
                <p className="text-secondary-color leading-relaxed text-sm">
                  Ha obtenido financiamiento para empresas en el mercado de
                  valores por más de US $551 millones a través de emisiones de
                  títulos valores.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="flex-1">
                <img
                  className="w-10"
                  decoding="async"
                  loading="lazy"
                  src={checkIcono}
                />
              </div>

              <div className="sm:flex-[85%] flex-[73%]">
                <p className="text-secondary-color leading-relaxed text-sm">
                  En la actualidad, administra más de US $15 millones en
                  portafolios de inversión de{" "}
                  <span className="block">terceros</span>.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="flex-1 text-center md:my-8 my-3">
          <h2 className="text-primary-color font-bold text-5xl mb-2 family-nunito-regular">
            4.2 <span className="block">Billones</span>
          </h2>
          <h3 className="text-secondary-color text-3xl">
            Volumen <span className="block">transaccional</span> histórico
          </h3>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresInicioHeader;
