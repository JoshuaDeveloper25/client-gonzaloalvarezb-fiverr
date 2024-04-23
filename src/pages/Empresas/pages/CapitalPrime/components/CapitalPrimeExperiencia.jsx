import dolarIcono from "../../../../../images/indicador22.png";
import paginaListoIcono from "../../../../../images/indicador21.png";

const CapitalPrimeExperiencia = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 items-center gap-8">
          <article className="sm:col-span-3 md:col-span-1 col-span-3">
            <h2 className="md:text-2xl text-center text-xl text-secondary-color">
              Nuestra experiencia garantiza:{" "}
              <span className="sm:block inline">gestión efectiva y transparente</span> en
              la recuperación de su cartera
            </h2>
            <div className="text-center">
              <button type="button" className="mt-5 button-red-primary">
                Conoce más
              </button>
            </div>
          </article>

          <article className="sm:col-span-1 col-span-3 md:my-0 my-9">
            <img
              src={dolarIcono}
              className="w-16 h-16 object-contain mx-auto"
            />
            <h3 className="text-center text-xl text-primary-color my-3">
              <span
                className="block"
                style={{ fontFamily: "Nunito Sans Black" }}
              >
                + US $ 60 Millones
              </span>{" "}
            </h3>
            <p className="text-secondary-color text-center">Administrados</p>
          </article>

          <article className="sm:col-span-1 col-span-3 space-y-3">
            <img
              src={paginaListoIcono}
              className="w-16 h-16 object-contain mx-auto"
            />
            <h3 className="text-center text-xl text-primary-color my-3">
              <span
                className="block"
                style={{ fontFamily: "Nunito Sans Black" }}
              >
                + 20 IFIS
              </span>{" "}
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
