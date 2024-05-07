import personasHeader from "../../../../../images/insurance-contacto.png";

const AtlantidaInsuranceContactoHeading = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            Juntos <span className="family-nunito-black">aseguramos tu</span>{" "}
            <span className="sm:block inline">
              <span className="family-nunito-black">futuro</span> con
              tranquilidad
            </span>
          </h1>
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-4xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={personasHeader}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceContactoHeading;
