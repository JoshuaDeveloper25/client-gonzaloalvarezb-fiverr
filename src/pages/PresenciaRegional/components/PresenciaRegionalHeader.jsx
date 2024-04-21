import headerPresenciaRegional from "../../../images/presencia-regional-header.png";

const PresenciaRegionalHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="max-w-sm text-4xl leading-10 md:mb-8 mb-0">
            Somos un Grupo Financiero, con{" "}
            <span style={{ fontFamily: "Nunito Sans Black" }}>
              presencia multinacional
            </span>
          </h1>
        </article>

        <article className="max-w-2xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={headerPresenciaRegional}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default PresenciaRegionalHeader;
