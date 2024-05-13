import headerCasaValores from "../../../../../images/fiduciaria-fondosfit-header.png";

const FiduciariaAtlantidaFondoFitHeader = () => {
  return (
    <section className="bg-tertiary-color md:pt-10">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="md:text-5xl text-3xl md:leading-12 mb-3">
            Tu plazo al <span className="family-nunito-black">mejor</span>{" "}
            <span className="sm:block inline family-nunito-black">
              rendimiento
            </span>
          </h1>
        </article>

        <article className="max-w-xl mx-auto">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={headerCasaValores}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondoFitHeader;
