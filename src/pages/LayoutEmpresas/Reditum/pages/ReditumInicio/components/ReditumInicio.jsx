import reditumHeader from "../../../../../../images/reditum-inicio-header.png";
import { Link } from "react-router-dom";

const ReditumInicio = () => {
  return (
    <section className="pt-6 bg-tertiary-color relative">
      <div className="container-page ">
        <div className="pt-3">
          <Link className="text-primary-color font-bold" to={"/empresas"}>
            {"< Regresar al sitio Suratlántida"}
          </Link>
        </div>
        <div className=" flex flex-col md:flex-row items-center">
          <article className="flex-1 lg:w-full w-auto text-secondary-color z-30 lg:py-8 py-3">
            <h1 className="text-secondary-color text-4xl">
              <span className="family-nunito-black">Reditum Market Data</span>
              <span className="sm:block inline my-2">
                {" "}
                Software de inteligencia{" "}
              </span>
              financiera y bursátil
            </h1>
            <p className="max-w-lg text-secondary-color my-4">
              Actualmente Reditum, procesa toda la información financiera,
              económica y bursátil de Ecuador y Centroamérica en su software de
              inteligencia de mercado
            </p>
          </article>

          <article className="flex-1">
            <div className="max-w-2xl">
              <img
                decoding="async"
                loading="lazy"
                className="w-full"
                src={reditumHeader}
                alt={"Imagen del Header"}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ReditumInicio;
