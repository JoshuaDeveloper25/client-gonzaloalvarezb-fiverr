const AtlantidaCasaValoresBursatilesHeader = () => {
  return (
    <section className="container-page my-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:max-w-none max-w-lg md:gap-6 gap-0  mx-auto">
        <article className="flex-1 text-center md:my-8 my-3">
          <h2 className="text-primary-color font-bold text-5xl sm:mb-3 family-nunito-regular">
            6.2 Billones
          </h2>
        </article>

        <article className="flex-[25%] lg:w-full w-auto text-secondary-color">
          <h1 className="text-secondary-color sm:text-3xl text-xl leading-[1.3] text-center font-bold family-nunito-semibold">
            Negociados históricamente en las{" "}
            <span className="md:block inline">
              bolsas de valores ecuatorianas
            </span>
          </h1>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresBursatilesHeader;
