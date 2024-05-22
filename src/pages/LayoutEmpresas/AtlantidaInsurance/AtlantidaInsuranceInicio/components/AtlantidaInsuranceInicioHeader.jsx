import { Link } from "react-router-dom";
import hombreHeader from "../../../../../images/insurance-inicio.png";

const AtlantidaInsuranceInicioHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page ">
        <div className="pt-3">
          <Link className="text-primary-color font-bold" to={"/empresas"}>
            {"< Regresar al sitio Suratlántida"}
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row  items-center gap-3">
          <article className="text-secondary-color lg:py-0 py-8">
            <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
              <span className="">
                Te brindamos{" "}
                <span className="sm:block inline">asesoramiento y</span>
              </span>{" "}
              <span className="family-nunito-black ">
                soluciones en seguros{" "}
              </span>
            </h1>
            <button className="button-red-primary" type="button">
              Cotiza ahora
            </button>
          </article>

          <article className="pt-0 md:pt-5 mx-auto max-w-2xl">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={hombreHeader}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioHeader;
