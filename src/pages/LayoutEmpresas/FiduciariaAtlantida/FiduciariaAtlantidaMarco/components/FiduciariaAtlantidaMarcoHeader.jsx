import headerCasaValores from "../../../../../images/fiduciaria-marco-header.png";

const FiduciariaAtlantidaMarcoHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="md:text-5xl text-3xl family-nunito-black md:leading-12 mb-3">
            Marco Legal
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

export default FiduciariaAtlantidaMarcoHeader;
