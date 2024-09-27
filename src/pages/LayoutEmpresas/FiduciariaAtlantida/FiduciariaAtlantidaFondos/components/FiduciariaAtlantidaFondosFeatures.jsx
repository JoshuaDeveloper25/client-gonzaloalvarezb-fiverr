import fondoFit from "../../../../../images/fondo-fit-alt.png";
import fondoElite from "../../../../../images/fondo-elite-alt.png";
import fondoConfia from "../../../../../images/fondo-confia-alt.png";
import fondoAgil from "../../../../../images/fondo-agil-alt.png";

const FiduciariaAtlantidaFondosFeatures = () => {
  return (
    <section className="container-page py-16">
      <h2 className="text-center text-3xl font-bold mb-16">
        <span className="text-primary-color">Conoce nuestros</span>{" "}
        <span className="text-secondary-color">Fondos de Inversión</span>
      </h2>

      <div className="flex flex-wrap place-content-center  sm:space-y-0 space-y-10">
        <article className="min-w-[25%]">
          <div>
            <img
              decoding="async"
              loading="lazy"
              className="w-[15rem] h-[15rem] object-contain mx-auto"
              src={fondoAgil}
            />
          </div>

          <div className="text-center mt-8">
            <div className="bg-primary-color py-5 text-white font-semibold uppercase border-r border-white">
              <h3>Fondo Ágil</h3>
            </div>

            <div className="border border-primary-color py-3">
              <p className="mb-5">
                Suscripción desde:{" "}
                <span className="block font-bold">USD $1</span>
              </p>

              <p className="mb-5">
                Incremento desde:{" "}
                <span className="block font-bold">USD $1</span>
              </p>

              <p className="mb-5">
                Permanencia por aporte:{" "}
                <span className="block font-bold">2 días</span>
              </p>

              <p>
                Rescate anticipado:{" "}
                <span className="block font-bold">No aplica</span>
              </p>
            </div>
          </div>
        </article>

        <article className="min-w-[25%]">
          <div>
            <img
              decoding="async"
              loading="lazy"
              className="w-[15rem] h-[15rem] object-contain mx-auto"
              src={fondoFit}
            />
          </div>

          <div className="text-center mt-8">
            <div className="bg-primary-color py-5 text-white font-semibold uppercase border-r border-white">
              <h3>Fondo Fit</h3>
            </div>

            <div className="border border-primary-color py-3">
              <p className="mb-5">
                Suscripción desde:{" "}
                <span className="block font-bold">USD $50</span>
              </p>

              <p className="mb-5">
                Incremento desde:{" "}
                <span className="block font-bold">USD $10</span>
              </p>

              <p className="mb-5">
                Permanencia por aporte:{" "}
                <span className="block font-bold">90 días</span>
              </p>

              <p>
                Rescate anticipado:{" "}
                <span className="block font-bold">15 días</span>
              </p>
            </div>
          </div>
        </article>

        <article className="min-w-[25%]">
          <div>
            <img
              decoding="async"
              loading="lazy"
              className="w-[15rem] h-[15rem] object-contain mx-auto"
              src={fondoElite}
            />
          </div>

          <div className="text-center mt-8">
            <div className="bg-primary-color py-5 text-white font-semibold uppercase border-r border-white">
              <h3>Fondo Élite</h3>
            </div>

            <div className="border border-primary-color py-3">
              <p className="mb-5">
                Suscripción desde:{" "}
                <span className="block font-bold">USD $1</span>
              </p>

              <p className="mb-5">
                Incremento desde:{" "}
                <span className="block font-bold">USD $1</span>
              </p>

              <p className="mb-5">
                Permanencia por aporte:{" "}
                <span className="block font-bold">360 días</span>
              </p>

              <p>
                Rescate anticipado:{" "}
                <span className="block font-bold">181 días</span>
              </p>
            </div>
          </div>
        </article>

        <article className="min-w-[25%]">
          <div>
            <img
              decoding="async"
              loading="lazy"
              className="w-[15rem] h-[15rem] object-contain mx-auto"
              src={fondoConfia}
            />
          </div>

          <div className="text-center mt-8">
            <div className="bg-primary-color py-5 text-white font-semibold uppercase">
              <h3>Fondo Confía</h3>
            </div>

            <div className="border border-primary-color py-3">
              <p className="mb-5">
                Suscripción desde:{" "}
                <span className="block font-bold">USD $1</span>
              </p>

              <p className="mb-5">
                Incremento desde:{" "}
                <span className="block font-bold">USD $1</span>
              </p>

              <p className="mb-5">
                Permanencia por aporte:{" "}
                <span className="block font-bold">720 días</span>
              </p>

              <p>
                Rescate anticipado:{" "}
                <span className="block font-bold">545 días</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondosFeatures;
