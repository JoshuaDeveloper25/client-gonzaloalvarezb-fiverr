import headerCasaValores from "../../../../../images/casa-valores-publicaciones-header.png";

const AtlantidaCasaValoresHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row justify-between items-center md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
          <article className="flex-1 lg:w-full w-auto text-secondary-color lg:py-8 py-3">
            <h1 className="text-secondary-color sm:text-[2.6rem] text-[1.8rem] leading-[1.3] font-bold family-nunito-semibold">
              <span className="family-nunito-black">Publicaciones</span>{" "}
              <span className="md:block inline">de Atlántida</span> Casa de
              Valores
            </h1>
          </article>

          <article className="flex-1 text-center">
            <div className="max-w-5xl mx-auto">
              <img
                decoding="async"
                loading="lazy"
                className="w-full"
                src={headerCasaValores}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresHeader;
