import mision from "../../../../../images/mision.jpeg";

const AtlantidaInsuranceAboutMision = () => {
  return (
    <section className="container-page mt-10">
      <div className="flex flex-col-reverse sm:flex-row gap-5">
        <article className="self-center flex-1 sm:px-4">
          <h2 className="text-3xl text-primary-color family-nunito-black mb-4">
            Misión
          </h2>
          <p>
            Nuestra misión es el compromiso hacia nuestros clientes de asesorar
            y presentar las mejores condiciones en seguros para brindar
            seguridad a su persona, familia y patrimonio.
          </p>
        </article>

        <article className="flex-1">
          <img
            decoding="async"
            loading="lazy"
            className="rounded-3xl"
            src={mision}
          />
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceAboutMision;
