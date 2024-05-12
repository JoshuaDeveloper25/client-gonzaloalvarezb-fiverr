import headerCasaValores from "../../../../../images/fiduciaria-inicio-header.png";

const FiduciariaAtlantidaInicioHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-4">
          <h1 className="md:text-5xl text-3xl md:leading-12 mb-3">
            Fiduciaria Atlántida es { ' '}
            <span className="sm:block inline">
              una <span className="family-nunito-black">administradora de{' '}</span>
            </span>
            <span className="family-nunito-black">Fondos y Fideicomisos</span>
          </h1>
        </article>

        <article className="max-w-sm mx-auto">
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

export default FiduciariaAtlantidaInicioHeader;
