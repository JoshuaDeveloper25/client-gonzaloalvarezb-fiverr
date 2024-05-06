import logoPersona from "../../../../../images/seguros-corporativo-icono.png";

const AtlantidaInsuranceInicioCorporativo = () => {
  return (
    <section className="bg-tertiary-color relative sm:mt-24 sm:mb-18 mb-10 mt-4">
      <div className="container-page my-6">
        <div className="flex flex-col sm:flex-row items-center gap-8">

          <article className="max-w-md md:-mt-20 mt-0 flex-1">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl "
              src={`https://dummyimage.com/600x400/000/fff`}
            />
          </article>

          <article className="text-secondary-color md:py-10 py-2">
            <img src={logoPersona} />
            <h2 className="family-nunito-black leading-[1.2] font-bold lg:text-5xl text-3xl mb-2">
              Seguros <span className="block">Corporativos</span>
            </h2>
          </article>
          
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioCorporativo;
