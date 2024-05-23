import logoPersonas from "../../../../../images/seguros-personales-icono.png";
import segurosPersonales from "../../../../../images/seguros-personales.jpg";

const AtlantidaInsuranceInicioPersonales = () => {
  return (
    <section className="bg-tertiary-color relative sm:mt-24 sm:mb-18 mb-10 mt-4">
      <div className="container-page my-6">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center md:gap-3 gap-0">
          <article className="text-secondary-color md:py-10 py-2">
            <img decoding="async" loading="lazy" src={logoPersonas} />
            <h2 className="family-nunito-black leading-[1.2] font-bold lg:text-5xl text-3xl mb-2">
              Seguros <span className="block">Personales</span>
            </h2>
          </article>

          <article className="max-w-md md:absolute static right-28 -top-10 flex-1 sm:mt-0 mt-2">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl "
              src={segurosPersonales}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioPersonales;
