import portafoliosIcono from "../../../../../images/manoDolar.png";
import financiamientoIcono from "../../../../../images/dinero-blanco.png";

import fiduciariaNegocios from "../../../../../images/fiduciaria-negocios2.jpg";
import fiduciariaInversion from "../../../../../images/fiduciaria-negocios.jpg";

import { Link } from "react-router-dom";

const FiduciariaAtlantidaInicioFeatures = () => {
  return (
    <section className="container-page space-y-8 my-6">
      <div className="flex flex-col min-[810px]:flex-row gap-4 gap-y-3">
        <div className="flex-1 min-[810px]:max-w-full max-w-md mx-auto">
          <img
            className="h-full w-full rounded-3xl"
            src={fiduciariaNegocios}
            decoding="async"
            loading="lazy"
          />
        </div>

        <div className="min-[810px]:flex hidden flex-1 flip-card">
          <Link to={"/fiduciaria-negocios"} className="w-full">
            <div
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 1s",
              }}
              className="group relative w-full h-full "
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
                    Negocios <span className="block">Fiduciarios</span>
                  </h3>
                </div>
              </div>

              {/* <div
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
            </div> */}
            </div>
          </Link>
        </div>

        <div className="min-[810px]:hidden flex">
          <Link to={"/fiduciaria-negocios"} className="w-full">
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
                  Negocios <span className="block">Fiduciarios</span>
                </h3>
              </div>

              <div className="h-1 w-40 bg-white mx-auto my-3"></div>

              {/* <p className="my-3">
              Atlántida Casa de Valores ofrece de forma exclusiva a sus clientes
              la plataforma tecnológica más avanzada del mercado, que permite
              administrar de manera más eficiente su portafolio de inversiones,
              con información siempre disponible y actualizada.
            </p>
            <Link
              className="family-nunito-black mt-5"
              to={`#`}
            >{`Ver más >`}</Link> */}
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse min-[810px]:flex-row gap-4 gap-y-3">
        <div className="min-[810px]:flex hidden flex-1 flip-card">
          <Link to={"/fiduciaria-fondos"} className="w-full">
            <div
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 1s",
              }}
              className="group relative w-full h-full "
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
                    Fondos <span className="block">de Inversión</span>
                  </h3>
                </div>
              </div>

              {/* <div
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
            </div> */}
            </div>
          </Link>
        </div>

        <div className="min-[810px]:hidden flex">
          <Link to={"/fiduciaria-fondos"} className="w-full">
            <div className="bg-primary-color text-white border-b max-w-md mx-auto text-center rounded-3xl w-full py-10 px-6">
              <div>
                <img
                  decoding="async"
                  loading="lazy"
                  className="mx-auto w-16"
                  src={financiamientoIcono}
                />
              </div>

              <div>
                <h3 className="leading-8 text-white family-nunito-black font-bold text-2xl mt-2">
                  Fondos <span className="block">de Inversión</span>
                </h3>
              </div>

              <div className="h-1 w-40 bg-white mx-auto my-3"></div>

              {/* <p className="my-3">
              Atlántida Casa de Valores ofrece de forma exclusiva a sus clientes
              la plataforma tecnológica más avanzada del mercado, que permite
              administrar de manera más eficiente su portafolio de inversiones,
              con información siempre disponible y actualizada.
            </p>
            <Link
              className="family-nunito-black mt-5"
              to={`#`}
            >{`Ver más >`}</Link> */}
            </div>
          </Link>
        </div>

        <div className="flex-1 min-[810px]:max-w-full max-w-md mx-auto">
          <img
            decoding="async"
            loading="lazy"
            className="h-full w-full rounded-3xl"
            src={fiduciariaInversion}
          />
        </div>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaInicioFeatures;
