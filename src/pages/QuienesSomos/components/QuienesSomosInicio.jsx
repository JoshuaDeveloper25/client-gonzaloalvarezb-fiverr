import hombreHeader from "../../../images/quienes-somos-header.png";

const QuienesSomosInicio = () => {
  return (
    <section className="bg-tertiary-color py-3">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="max-w-sm text-4xl leading-10 md:mb-8 mb-0">
            Somos un grupo regional, con{" "}
            <span style={{ fontFamily: "Nunito Sans Black" }}>
              más de 111 años de trayectoria y experiencia
            </span>
          </h1>
        </article>

        <article className="max-w-2xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={hombreHeader}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default QuienesSomosInicio;
