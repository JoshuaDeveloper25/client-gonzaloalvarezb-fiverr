import headerCasaValores from "../../../../../images/casa-valores-header.png";

const AtlantidaCasaValoresInicioSubheader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="max-w-sm text-4xl leading-10 md:mb-8 mb-0">
            <span className="family-nunito-black">
              {" "}
              Líder en las bolsas de{" "}
            </span>{" "}
            <span className="family-nunito-black md:block inline">
              valores de Ecuador
            </span>{" "}
            con más de 15 años de{" "}
            <span className="md:block inline">experiencia</span>
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

export default AtlantidaCasaValoresInicioSubheader;
