import headerCasaValores from "../../../../../images/casa-valores-servicios-header.png";

const AtlantidaCasaValoresServiciosSubheader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="text-4xl leading-10 md:mb-8 mb-0">
            Líder en
            <span className="family-nunito-black">
              {" "}
              administración de{" "}
            </span>{" "}
            <span className="sm:block inline">
              <span className="family-nunito-black">
                portafolios de inversión
              </span>{" "}
              de
            </span>{" "}
            terceros en Ecuador
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

export default AtlantidaCasaValoresServiciosSubheader;
