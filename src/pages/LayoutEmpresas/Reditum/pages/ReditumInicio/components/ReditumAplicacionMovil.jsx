import checkIcon from "../../../../../../images/indicador14.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const ReditumAplicacionMovil = () => {
  return (
    <section className="md:py-14 py-2">
      <div className="container-page flex flex-col-reverse md:flex-row justify-between md:items-start items-center gap-3">
        <article className="text-secondary-color md:py-8 py-2">
          <h2 className="max-w-md text-3xl family-nunito-black">
            Aplicación Móvil
          </h2>

          <p className="max-w-xl leading-6 my-3">
            App Móvil que facilita el acceso a la información del mercado
            financiero de la región desde cualquier dispositivo móvil IOS o
            Android.
          </p>

          <p className="text-secondary-color font-bold family-nunito-regular">
            La aplicación cuenta con:
          </p>

          <div className="my-5 space-y-3">
            <div className="flex items-center gap-4">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  src={checkIcon}
                  className="w-8"
                />
              </div>

              <div>
                <p className="text-secondary-color">
                  Reportes de Mercados: SF, SP, MV, EC en tiempo real.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  src={checkIcon}
                  className="w-8"
                />
              </div>

              <div>
                <p className="text-secondary-color">
                  Reportes de tu entidad vs su competencia en tiempo real.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  src={checkIcon}
                  className="w-8"
                />
              </div>

              <div>
                <p className="text-secondary-color">
                  Todos tus analisis del mercado, a un clic de distancia.
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:gap-8 gap-4">
            <button className="leading-[1] hover:opacity-55 animation-fade flex items-center gap-3 bg-[#E8E8E8] md:px-6 px-2 py-2 rounded-md">
              <div>
                <FaGooglePlay className="text-black text-xl" />
              </div>
              <div>
                <p className="text-start text-xs">GET IT ON</p>{" "}
                <p className="text-black font-bold">Google Play</p>
              </div>
            </button>

            <button className="leading-[1] hover:opacity-55 animation-fade flex items-center gap-3 bg-[#E8E8E8] md:px-6 px-2 py-2 rounded-md">
              <div>
                <FaApple className="text-black text-2xl" />
              </div>
              <div>
                <p className="text-start text-xs">Download on the</p>{" "}
                <p className="text-black font-bold text-start">App Store</p>
              </div>
            </button>
          </div>
        </article>

        <article className="max-w-xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full rounded-3xl"
            src={`https://dummyimage.com/600x400/000/fff`}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default ReditumAplicacionMovil;
