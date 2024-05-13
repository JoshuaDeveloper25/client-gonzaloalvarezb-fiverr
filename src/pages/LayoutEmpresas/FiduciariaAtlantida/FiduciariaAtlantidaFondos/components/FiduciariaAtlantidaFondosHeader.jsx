import headerCasaValores from "../../../../../images/fiduciaria-fondos-header.png";

const FiduciariaAtlantidaFondosHeader = () => {
  return (
    <section className="bg-tertiary-color md:pt-16">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="md:text-5xl text-3xl md:leading-12 mb-3">
            Pequeño ahorros{" "}
            <span className="sm:block inline">
              hacia <span className="family-nunito-black">{' '}grandes </span>
            </span>
            <span className="family-nunito-black">sueños</span>
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

export default FiduciariaAtlantidaFondosHeader;
