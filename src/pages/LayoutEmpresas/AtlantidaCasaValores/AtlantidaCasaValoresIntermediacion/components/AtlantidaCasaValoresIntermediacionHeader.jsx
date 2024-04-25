const AtlantidaCasaValoresIntermediacionHeader = () => {
  return (
    <section>
      <div className="container-page my-6">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center md:gap-3 gap-0">
          <article className="text-secondary-color md:py-5 py-2">
            <h2 className="family-nunito-regular leading-[1.2] font-bold lg:text-5xl text-3xl mb-2">
              Intermediación de <span className="block">Valores</span>
            </h2>
          </article>

          <article className="max-w-md flex-1 sm:mt-0 mt-2">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={`https://dummyimage.com/600x400/000/fff`}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresIntermediacionHeader;
