const EmpresasColaboradores = () => {
  return (
    <section className="container-page md:my-14 my-5">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <article className="flex-1 md:mb-0 mb-4">
          <h2 className="md:text-5xl text-4xl text-secondary-color">
            Contamos con más de{" "}
            <span className="lg:block inline" style={{ fontFamily: "Nunito Sans Black" }}>
              500 colaboradores
            </span>
          </h2>
        </article>

        <article className="flex-1 space-y-5 md:px-5 px-0">
          <p className="text-secondary-color text-justify">
            El Grupo Sur Atlántida S.L. es un Holding con domicilio en Madrid –
            España.
          </p>

          <p className="text-secondary-color text-justify">
            Se constituyó en el año 2019 para ser el vehículo de inversión de
            INVATLÁN en Ecuador y Perú e inició operaciones en el año 2020.
          </p>

          <p className="text-secondary-color text-justify">
            Las empresas que pertenecen a Grupo Sur Atlántida S.L., cuentan con
            aproximadamente 500 colaboradores, que, a partir de Marzo 2024,
            conforman el Grupo Financiero Atlántida en Ecuador.
          </p>
        </article>
      </div>
    </section>
  );
};

export default EmpresasColaboradores;
