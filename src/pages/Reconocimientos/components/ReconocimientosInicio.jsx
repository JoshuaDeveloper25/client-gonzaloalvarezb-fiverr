import headerReconocimientos from "../../../images/header-reconocimientos.png";

const ReconocimientosInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="max-w-md text-4xl leading-10 md:mb-8 mb-0">
            Premiados por excelencia, reconocidos por nuestro compromiso
          </h1>
        </article>

        <article className="max-w-3xl mx-auto">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={headerReconocimientos}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default ReconocimientosInicio;
