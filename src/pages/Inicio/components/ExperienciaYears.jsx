import logoAtlantida from "../../../images/logo-atlantida.png";

const ExperienciaYears = () => {
  return (
    <section className="container-page px-2 pt-4 pb-9">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 row-gap-3">
        <article className="flex-1">
          <h2
            className="text-4xl text-secondary-color"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            111 años de <span className="mb:inline block">trayectoria y</span>{" "}
            experiencia
          </h2>
        </article>

        <article className="bg-tertiary-color w-full flex-1 rounded-lg p-8">
          <div>
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-40"
              src={logoAtlantida}
              alt="Logo Atlantida"
            />
          </div>

          <div className="text-center mt-6">
            <button type="button" className="button-red-primary">
              Conoce más
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ExperienciaYears;
