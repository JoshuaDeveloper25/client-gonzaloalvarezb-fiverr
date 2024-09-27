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
                  Plazo de permanencia inicial 360 días
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
                  Política de rescate anticipado
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
                  Solicitud de rescate 7 días hábiles
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
                  Horario de notificación 15h00
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
                  Títulos con calificación superior a A
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
                  Rendimiento referencial proyectado
                  <span className="block">7% a 7.5%</span>
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
                  Aporte inicial desde $1
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
                  Aporte inicial desde $1
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
