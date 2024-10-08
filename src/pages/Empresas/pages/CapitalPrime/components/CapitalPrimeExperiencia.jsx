import dolarIcono from "../../../../../images/indicador22.png";
import paginaListoIcono from "../../../../../images/indicador21.png";
import { Link } from "react-router-dom";

const CapitalPrimeExperiencia = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 items-center gap-8">
          <article className="sm:col-span-3 md:col-span-1 col-span-3">
            <h2 className="md:text-2xl text-center text-xl text-secondary-color">
              Nuestra experiencia garantiza:{" "}
              <span className="sm:block inline">
                gestión efectiva y transparente
              </span>{" "}
              en la recuperación de su cartera
            </h2>
            <div className="text-center">
              <Link
                to={"https://capitalprimeec.com/home"}
                className="mt-5 btn-normal button-red-primary"
              >
                Conoce más
              </Link>
            </div>
          </article>

          <article className="sm:col-span-1 col-span-3 md:my-0 my-9">
            <img
              loading="lazy"
              decoding="async"
              src={dolarIcono}
              className="w-16 h-16 object-contain mx-auto"
            />
            <h3 className="text-center text-xl text-primary-color my-3">
              <span className="block family-nunito-black">
                + US $ 60 Millones
              </span>{" "}
            </h3>
            <p className="text-secondary-color text-center">Administrados</p>
          </article>

          <article className="sm:col-span-1 col-span-3 space-y-3">
            <img
              loading="lazy"
              decoding="async"
              src={paginaListoIcono}
              className="w-16 h-16 object-contain mx-auto"
            />
            <h3 className="text-center text-xl text-primary-color my-3">
              <span className="block family-nunito-black">+ 20 IFIS</span>{" "}
            </h3>
            <p className="text-secondary-color text-center leading-5">
              Administra y Gestiona <span className="block">Cobranza</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CapitalPrimeExperiencia;
