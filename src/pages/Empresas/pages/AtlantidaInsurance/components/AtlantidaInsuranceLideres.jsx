import manoDolarIcono from "../../../../../images/indicador10.png";
import paginaListoIcono from "../../../../../images/indicador21.png";

const AtlantidaInsuranceLideres = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 items-center gap-8">
          <article className="sm:col-span-3 md:col-span-1 col-span-3">
            <h2 className="md:text-4xl text-3xl  md:px-5 px-0  text-secondary-color">
              Respaldados{" "}
              <span className="lg:block inline">
                por{" "}
                <span style={{ fontFamily: "Nunito Sans Black" }}>líderes</span>
              </span>{" "}
              <span style={{ fontFamily: "Nunito Sans Black" }}>
                del sector
              </span>
            </h2>
            <p className="text-secondary-color text-justify mt-4  md:px-5 px-0">
              Cuenta con la confianza de las principales aseguradoras a nivel
              nacional y las principales reaseguradoras a nivel global.
            </p>
          </article>

          <article className="sm:col-span-1 col-span-3 md:my-0 my-9">
            <img
              src={manoDolarIcono}
              className="w-16 h-16 object-contain mx-auto"
            />
            <h3 className="text-center text-primary-color my-3">
              Más de{" "}
              <span
                className="block"
                style={{ fontFamily: "Nunito Sans Black" }}
              >
                US $ 2 Millones
              </span>{" "}
              en Primas de Negocios <span className="block">Tradicionales</span>
            </h3>
            <p className="text-secondary-color text-center">
              Seguros Generales, Vida,{" "}
              <span className="block">Asistencia Médica, Finanzas</span>
            </p>
          </article>

          <article className="sm:col-span-1 col-span-3 space-y-3">
            <img
              src={paginaListoIcono}
              className="w-16 h-16 object-contain mx-auto"
            />
            <h3 className="text-center text-primary-color my-3">
              Más de{" "}
              <span
                className="block"
                style={{ fontFamily: "Nunito Sans Black" }}
              >
                US $ 3 Millones
              </span>{" "}
              en Seguros Masivos y <span className="block">Financieros</span>
            </h3>
            <p className="text-secondary-color text-center">
              Seguros Masivos Vehiculares,{" "}
              <span className="block">Desgravamen y Micro Seguros</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceLideres;
