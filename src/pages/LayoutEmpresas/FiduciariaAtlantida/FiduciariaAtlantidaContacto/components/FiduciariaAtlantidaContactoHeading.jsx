import personasHeader from "../../../../../images/fiduciaria-contacto-header.png";

const FiduciariaAtlantidaContactoHeading = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            Guiamos tu camino{" "}
            <span className="sm:block inline">
              hacia <span className="family-nunito-black">el éxito</span>
            </span>
            <span className="family-nunito-black"> financiero</span>
          </h1>
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-2xl">
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

export default FiduciariaAtlantidaContactoHeading;
