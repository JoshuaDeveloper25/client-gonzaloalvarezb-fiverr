import hombreHeader from "../../../../../images/insurance-servicios.png";

const AtlantidaInsuranceProductosHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-4xl sm:text-5xl leading-10 md:mb-8 mb-0">
            <span className="family-nunito-black">Confianza</span> y respaldo{" "}
            <span className="sm:block inline">
              en cada <span className="family-nunito-black">decisión</span>{" "}
            </span>
            <span className="family-nunito-black">empresarial</span>
          </h1>
          <button className="button-red-primary" type="button">
            Cotiza ahora
          </button>
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-4xl">
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

export default AtlantidaInsuranceProductosHeader;
