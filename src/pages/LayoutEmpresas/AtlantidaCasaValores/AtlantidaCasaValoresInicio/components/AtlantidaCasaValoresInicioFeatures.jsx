import portafoliosIcono from "../../../../../images/manoDolar.png";
import financiamientoIcono from "../../../../../images/dinero-blanco.png";
import intermediacionIcono from "../../../../../images/inter-icono.png";
import { Link } from "react-router-dom";

const AtlantidaCasaValoresInicioFeatures = () => {
  return (
    <section className="container-page space-y-8 my-6">
      <div className="flex flex-col min-[810px]:flex-row gap-4 gap-y-3">
        <div className="flex-1 min-[810px]:max-w-full max-w-md mx-auto">
          <img
            className="h-full w-full rounded-3xl"
            src={`https://dummyimage.com/600x400/000/fff`}
            decoding="async"
            loading="lazy"
          />
        </div>

        <div className="min-[810px]:flex hidden flex-1 flip-card">
          <div
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 1s",
            }}
            className="group relative w-full h-full flip-card-inner"
          >
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="bg-primary-color absolute flex flex-col justify-center w-full h-full rounded-3xl md:px-16 px-0 flip-card-front"
            >
              <div>
                <img
                  className="w-24 h-20 object-cover"
                  src={portafoliosIcono}
                  decoding="async"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="leading-8 text-white family-nunito-black font-bold text-3xl mt-5">
                  Administración de{" "}
                  <span className="lg:block inline">Portafolios</span>
                </h3>
              </div>
            </div>

            <div
              style={{ backfaceVisibility: "hidden" }}
              className="bg-primary-color text-white absolute flex flex-col justify-center w-full h-full rounded-3xl px-16 flip-card-back"
            >
              <p>
                Atlántida Casa de Valores ofrece de forma exclusiva a sus
                clientes la plataforma tecnológica más avanzada del mercado, que
                permite administrar de manera más eficiente su portafolio de
                inversiones, con información siempre disponible y actualizada.
              </p>
              <Link
                className="family-nunito-black mt-5"
                to={`#`}
              >{`Ver más >`}</Link>
            </div>
          </div>
        </div>

        <div className="min-[810px]:hidden flex">
          <div className="bg-primary-color text-white border-b max-w-md mx-auto text-center rounded-3xl w-full py-10 px-6">
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-16"
                src={portafoliosIcono}
              />
            </div>

            <div>
              <h3 className="leading-8 text-white family-nunito-black font-bold text-2xl mt-2">
                Administración de <span className="block">Portafolios</span>
              </h3>
            </div>

            <div className="h-1 w-40 bg-white mx-auto my-3"></div>

            <p className="my-3">
              Atlántida Casa de Valores ofrece de forma exclusiva a sus clientes
              la plataforma tecnológica más avanzada del mercado, que permite
              administrar de manera más eficiente su portafolio de inversiones,
              con información siempre disponible y actualizada.
            </p>
            <Link
              className="family-nunito-black mt-5"
              to={`#`}
            >{`Ver más >`}</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-[810px]:flex-row gap-4 gap-y-3">
        <div className="flex-1 min-[810px]:max-w-full max-w-md mx-auto">
          <img
            decoding="async"
            loading="lazy"
            className="h-full w-full rounded-3xl"
            src={`https://dummyimage.com/600x400/000/fff`}
          />
        </div>

        <div className="min-[810px]:flex hidden flex-1 flip-card">
          <div
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 1s",
            }}
            className="group relative w-full h-full flip-card-inner"
          >
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="bg-primary-color absolute flex flex-col justify-center w-full h-full rounded-3xl md:px-16 px-0 flip-card-front"
            >
              <div>
                <img
                  decoding="async"
                  loading="lazy"
                  className="w-24 h-20 object-cover"
                  src={financiamientoIcono}
                />
              </div>

              <div>
                <h3 className="leading-8 text-white family-nunito-black font-bold text-3xl mt-5">
                  Financiamiento
                </h3>
              </div>
            </div>

            <div
              style={{ backfaceVisibility: "hidden" }}
              className="bg-primary-color text-white absolute flex flex-col justify-center w-full h-full rounded-3xl px-16 flip-card-back"
            >
              <p>
                Atlántida Casa de Valores ofrece de forma exclusiva a sus
                clientes la plataforma tecnológica más avanzada del mercado, que
                permite administrar de manera más eficiente su portafolio de
                inversiones, con información siempre disponible y actualizada.
              </p>
              <Link
                className="family-nunito-black mt-5"
                to={`#`}
              >{`Ver más >`}</Link>
            </div>
          </div>
        </div>

        <div className="min-[810px]:hidden flex">
          <div className="bg-primary-color text-white border-b max-w-md mx-auto text-center rounded-3xl w-full py-10 px-6">
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-16"
                src={portafoliosIcono}
              />
            </div>

            <div>
              <h3 className="leading-8 text-white family-nunito-black font-bold text-2xl mt-2">
                Financiamiento
              </h3>
            </div>

            <div className="h-1 w-40 bg-white mx-auto my-3"></div>

            <p className="my-3">
              Atlántida Casa de Valores ofrece de forma exclusiva a sus clientes
              la plataforma tecnológica más avanzada del mercado, que permite
              administrar de manera más eficiente su portafolio de inversiones,
              con información siempre disponible y actualizada.
            </p>
            <Link
              className="family-nunito-black mt-5"
              to={`#`}
            >{`Ver más >`}</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-[810px]:flex-row gap-4 gap-y-3">
        <div className="flex-1 min-[810px]:max-w-full max-w-md mx-auto">
          <img
            decoding="async"
            loading="lazy"
            className="h-full w-full rounded-3xl"
            src={`https://dummyimage.com/600x400/000/fff`}
          />
        </div>

        <div className="min-[810px]:flex hidden flex-1 flip-card">
          <div
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 1s",
            }}
            className="group relative w-full h-full flip-card-inner"
          >
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="bg-primary-color absolute flex flex-col justify-center w-full h-full rounded-3xl md:px-16 px-0 flip-card-front"
            >
              <div>
                <img
                  decoding="async"
                  loading="lazy"
                  className="w-24 h-20 object-cover"
                  src={intermediacionIcono}
                />
              </div>

              <div>
                <h3 className="leading-8 text-white family-nunito-black font-bold text-3xl mt-5">
                  Intermediación bursátil
                </h3>
              </div>
            </div>

            <div
              style={{ backfaceVisibility: "hidden" }}
              className="bg-primary-color text-white absolute flex flex-col justify-center w-full h-full rounded-3xl px-16 flip-card-back"
            >
              <p>
                Atlántida Casa de Valores ofrece de forma exclusiva a sus
                clientes la plataforma tecnológica más avanzada del mercado, que
                permite administrar de manera más eficiente su portafolio de
                inversiones, con información siempre disponible y actualizada.
              </p>
              <Link
                className="family-nunito-black mt-5"
                to={`#`}
              >{`Ver más >`}</Link>
            </div>
          </div>
        </div>

        <div className="min-[810px]:hidden flex">
          <div className="bg-primary-color text-white border-b max-w-md mx-auto text-center rounded-3xl w-full py-10 px-6">
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-16"
                src={portafoliosIcono}
              />
            </div>

            <div>
              <h3 className="leading-8 text-white family-nunito-black font-bold text-2xl mt-2">
                Intermediación <span className="block">bursátil</span>
              </h3>
            </div>

            <div className="h-1 w-40 bg-white mx-auto my-3"></div>

            <p className="my-3">
              Atlántida Casa de Valores ofrece de forma exclusiva a sus clientes
              la plataforma tecnológica más avanzada del mercado, que permite
              administrar de manera más eficiente su portafolio de inversiones,
              con información siempre disponible y actualizada.
            </p>
            <Link
              className="family-nunito-black mt-5"
              to={`#`}
            >{`Ver más >`}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresInicioFeatures;
