import checkIcono from "../../../../../images/indicador14.png";

const AtlantidaCasaValoresServiciosHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:max-w-none max-w-lg md:gap-6 gap-0  mx-auto">
        <article className="flex-[25%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color sm:text-[2.6rem] text-[1.8rem] leading-[1.3] font-bold family-nunito-semibold">
            Atlántida Casa de Valores es líder{' '}
            <span className="md:block inline">
              en administración de portafolios
            </span>{" "}
            de inversión de terceros en{' '}
            <span className="md:block inline">Ecuador</span>
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>
        </article>

        <article className="flex-1 text-center md:my-8 my-3">
          <h2 className="text-primary-color font-bold text-5xl mb-2 family-nunito-regular">
            15 <span className="block">Millones</span>
          </h2>
          <h3 className="text-secondary-color text-3xl">
            Administrados en <span className="block">Portafolios de</span>{" "}
            Inversión de Terceros
          </h3>
        </article>
      </div>

      <div className="grid min-[610px]:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 my-6">
        <div className="col-span-1 flex gap-3 items-center">
          <div className="">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div>
            <p className="text-secondary-color leading-relaxed text-md">
              Diversificación del Riesgo.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-center">
          <div className="">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div>
            <p className="text-secondary-color leading-relaxed text-md">
              Atención personalizada.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-center">
          <div className="">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div>
            <p className="text-secondary-color leading-relaxed text-md">
              Rentabilidad y Seguridad.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-center">
          <div className="">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div>
            <p className="text-secondary-color leading-relaxed text-md">
              Inversión en Sistema Financiero,
            </p>
            <p className="text-secondary-color leading-relaxed text-md">
              Sector Real No Financiero.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-center">
          <div className="">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div>
            <p className="text-secondary-color leading-relaxed text-md">
              Liquidez.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-center">
          <div className="">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div>
            <p className="text-secondary-color leading-relaxed text-md">
              Plataforma propia online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresServiciosHeader;
