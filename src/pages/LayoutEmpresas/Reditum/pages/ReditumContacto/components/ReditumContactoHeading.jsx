import hombresHeader from "../../../../../../images/reditum-contacto-header.png";

const ReditumContactoHeading = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row  items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="text-3xl sm:text-5xl leading-10 md:mb-8 mb-0">
            Tu mejor <span className="family-nunito-black">herramienta</span>{" "}
            <span className="sm:block inline family-nunito-black">
              para decisiones
            </span>{" "}
            <span className="family-nunito-black">bursátiles</span>
          </h1>
        </article>

        <article className="pt-0 md:pt-5 mx-auto max-w-4xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={hombresHeader}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default ReditumContactoHeading;
