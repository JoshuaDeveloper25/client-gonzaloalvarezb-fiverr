import checkIcono from "../../../../../images/indicador14.png";

const AtlantidaCasaValoresFinanciamientoHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:max-w-none max-w-lg md:gap-6 gap-0  mx-auto">
        <article className="flex-[25%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            <div className="col-span-1 flex flex-col sm:flex-row gap-3 sm:text-start text-center items-center">
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
                  Acceso a montos importantes de{" "}
                  <span className="md:block inline">financiamiento.</span>
                </p>
              </div>
            </div>

            <div className="col-span-1 flex flex-col sm:flex-row gap-3 sm:text-start text-center items-center">
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
                  Estructura financiera en función de la{" "}
                  <span className="inline md:block">
                    capacidad de endeudamiento y de
                  </span>{" "}
                  <span className="inline md:block">pago.</span>
                </p>
              </div>
            </div>

            <div className="col-span-1 flex flex-col sm:flex-row gap-3 sm:text-start text-center items-center">
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
                  <span className="inline md:block">
                    Garantía General (declaración
                  </span>{" "}
                  <span className="inline md:block">
                    juramentada) más no garantía
                  </span>{" "}
                  específica(Hipotecaria y/o prendaria)
                </p>
              </div>
            </div>

            <div className="col-span-1 flex flex-col sm:flex-row gap-3 sm:text-start text-center items-center">
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
                  Alta probabilidad de participación del{" "}
                  <span className="inline md:block">
                    sector público como inversionistas
                  </span>{" "}
                  privados.
                </p>
              </div>
            </div>

            <div className="col-span-1 flex flex-col sm:flex-row gap-3 sm:text-start text-center items-center">
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
                  El ser parte del mercado bursátil,{" "}
                  <span className="inline md:block">
                    otorga un valor agregado a
                  </span>
                  la empresa.
                </p>
              </div>
            </div>

            <div className="col-span-1 flex flex-col sm:flex-row gap-3 sm:text-start text-center items-center">
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
                  Tasas atractivas de Financiamiento.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="flex-1 text-center md:my-8 my-3">
          <h2 className="text-primary-color font-bold text-5xl mb-2 family-nunito-regular">
            551 <span className="block">Millones</span>
          </h2>
          <h3 className="text-secondary-color text-3xl">
            Obtenidos en <span className="block">financiamiento para</span>{" "}
            empresas en mercado <span className="block">de valores</span>
          </h3>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresFinanciamientoHeader;
