import casaValoresHeader from "../../../../../images/casa-valores-intermediacion-header.png";

const AtlantidaCasaValoresIntermediacionHeader = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page py-6">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center md:gap-3 gap-0">
          <article className="text-secondary-color md:py-5 py-2">
            <h2 className="family-nunito-black leading-[1.2] font-bold lg:text-5xl text-3xl mb-2">
              Tarifario
            </h2>
          </article>

          <article className="max-w-lg mx-auto flex-1 sm:mt-0 mt-2">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={casaValoresHeader}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresIntermediacionHeader;
