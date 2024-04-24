const AtlantidaAdvisorsAsesoriaEmpresasHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between  items-center md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
        <article className="flex-[30%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1
            className="text-secondary-color text-[2.6rem] leading-[1.1] font-bold"
            style={{ fontFamily: "Nunito Sans Semibold" }}
          >
            Atlántida Advisors asiste a sus{" "}
            <span className="md:block inline">
              clientes en la toma de decisiones
            </span>{" "}
            cruciales para su negocio
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>

          <p className="text-secondary-color mt-5">
            A través de los servicios de Atlántida Advisors los clientes reciben
            un minucioso análisis financiero mediante el cual se evaluarán
            distintos escenarios para la correcta ejecución de sus estrategias y
            en generar valor para sus accionistas o inversionistas
          </p>
        </article>

        <article className="flex-1 text-center my-8">
          <h2
            className="text-primary-color font-bold text-5xl mb-2"
            style={{ fontFamily: "Nunito Sans Regular" }}
          >
            + 40 <span className="block">Industrias</span>
          </h2>
          <h3 className="text-secondary-color text-3xl">
            Exitosamente <span className="block">Asesoradas</span>
          </h3>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaAdvisorsAsesoriaEmpresasHeader;
