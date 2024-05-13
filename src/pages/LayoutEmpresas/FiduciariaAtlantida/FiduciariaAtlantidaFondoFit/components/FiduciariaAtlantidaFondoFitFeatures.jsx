import checkIcono from "../../../../../images/indicador14.png";

const FiduciariaAtlantidaFondoFitFeatures = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:max-w-none max-w-lg md:gap-6 gap-0  mx-auto">
        <article className="flex-[25%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h3 className="text-primary-color family-nunito-black text-center text-2xl">
            Características
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8 mb-6">
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
                  Permanencia inicial 90 días
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
                  Incremento opcional desde $10
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
                  Retiros desde el día 15
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
                  Monto de apertura desde $50
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
                  Monto de apertura desde $50
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
                  Inversión en títulos con calificación de{" "}
                  <span className="block">riesgo A- o superior</span>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondoFitFeatures;
