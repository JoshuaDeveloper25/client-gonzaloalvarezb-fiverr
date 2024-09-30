const AtlantidaAdvisorsFeatures = () => {
  return (
    <section className="container-page space-y-9 mb-14">
      <div className="flex flex-col md:flex-row md:items-center md:max-w-none max-w-lg md:mx-0 mx-auto lg:gap-24 gap-3">
        <article className="max-w-xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full rounded-3xl"
            src={`https://dummyimage.com/600x400/000/fff`}
            alt={"Imagen del Header"}
          />
        </article>

        <article className="max-w-x text-secondary-color">
          <h2 className="text-3xl family-nunito-black">
            Asesoría para <span className="block">Empresas</span>
          </h2>

          <p className="leading-6 my-3">
            Atlántida Advisors asiste a sus clientes en la toma{" "}
            <span className="block">
              de decisiones cruciales para su negocio
            </span>
          </p>

          <button type="submit" className="btn-normal button-red-primary-outline">
            Conoce más
          </button>
        </article>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:max-w-none max-w-lg md:mx-0 mx-auto lg:gap-24 gap-3">
        <article className="max-w-xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full rounded-3xl"
            src={`https://dummyimage.com/600x400/000/fff`}
            alt={"Imagen del Header"}
          />
        </article>

        <article className="max-w-x text-secondary-color">
          <h2 className="text-3xl family-nunito-black">
            Asesoría para <span className="block">Inversionistas</span>
          </h2>

          <p className="leading-6 my-3">
            Atlántida Advisors mediante sus servicios de
            <span className="block">
              gestión patrimonial integral, ofrece a sus clientes un
            </span>
            abanico de alternativas financieras
          </p>

          <button type="submit" className="btn-normal button-red-primary-outline">
            Conoce más
          </button>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaAdvisorsFeatures;
