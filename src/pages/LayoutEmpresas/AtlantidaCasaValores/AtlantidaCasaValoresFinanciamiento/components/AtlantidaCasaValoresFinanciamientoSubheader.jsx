import headerCasaValores from "../../../../../images/casa-valores-financiamiento-header.png";

const AtlantidaCasaValoresFinanciamientoSubheader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="md:text-5xl text-4xl md:leading-10 mb-3">
            Proyectos de
            <span className="sm:block inline">
              {" "}
              <span className="family-nunito-black">financiamiento</span> a
              corto,{" "}
            </span>{" "}
            mediano y largo plazo
          </h1>
          <h2 className="max-w-md leading-6 text-lg">
            Para la obtención de recursos a través de las herramientas que pone
            a consideración el mercado de valores ecuatoriano.
          </h2>
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

export default AtlantidaCasaValoresFinanciamientoSubheader;
