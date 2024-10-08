import hombreHeader from "../../../images/header-contactanos.png";

const HeaderInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="max-w-md text-4xl leading-10 mb-8">
            La inversión más importante, es la confianza de nuestros clientes
          </h1>
        </article>

        <article className="max-w-lg">
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

export default HeaderInicio;
