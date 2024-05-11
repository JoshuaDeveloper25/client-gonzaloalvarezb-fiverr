import headerCasaValores from "../../../../../images/casa-valores-bursatiles-header.png";

const AtlantidaCasaValoresBursatilesSubheader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="md:text-5xl text-3xl md:leading-12 mb-3">
            <span className="family-nunito-black">Realiza o vende {" "}</span>
            <span className="sm:block inline family-nunito-black">
              inversiones bursátiles{" "}
            </span>
            respaldados por los{" "}
            <span className="sm:block inline">mayores Operadores</span>
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

export default AtlantidaCasaValoresBursatilesSubheader;
