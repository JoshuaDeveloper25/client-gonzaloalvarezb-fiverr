const CrecimientoSostenible = () => {
  return (
    <section className="container-page px-2 my-14">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <article className="flex-1 md:mb-0 mb-4">
          <h2 className="max-w-sm mx-auto text-4xl text-secondary-color">
            Confía en nosotros para un
            <span style={{ fontFamily: "Nunito Sans Black" }}>
              {" "}
              crecimiento sostenible
            </span>{" "}
            y una economía más fuerte
          </h2>
        </article>

        <article className="flex-1 space-y-5">
          <p className="text-secondary-color text-justify">
            IFA nace con políticas del Buen Gobierno Corporativo y cuenta con un
            directorio de profesionales de excelencia y amplia trayectoria en la
            industria financiera.
          </p>

          <p className="text-secondary-color text-justify">
            IFA comprometerá su esfuerzo y expertise para asegurar que las
            riquezas generadas en Ecuador se queden en el país, fortaleciendo la
            economía y abriendo nuevas oportunidades e inversión para el
            crecimiento sostenible del Ecuador.
          </p>
        </article>
      </div>
    </section>
  );
};

export default CrecimientoSostenible;
