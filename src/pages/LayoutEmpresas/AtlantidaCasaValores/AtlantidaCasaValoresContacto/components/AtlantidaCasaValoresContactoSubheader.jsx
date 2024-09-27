import headerCasaValores from "../../../../../images/casa-valores-contacto-header.png";

const AtlantidaCasaValoresContactoSubheader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="md:text-5xl text-3xl md:leading-12 mb-3">
            Juntos <span className="family-nunito-black">invertimos en </span>
            <span className="sm:block inline">
              <span className="family-nunito-black">tu futuro</span> con
            </span>
            seguridad
          </h1>
        </article>

        <article className="max-w-md mx-auto">
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

export default AtlantidaCasaValoresContactoSubheader;
