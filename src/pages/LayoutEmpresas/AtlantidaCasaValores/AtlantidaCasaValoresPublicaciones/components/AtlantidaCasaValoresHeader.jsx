const AtlantidaCasaValoresHeader = () => {
  return (
    <section className="container-page">
      <div className="flex flex-col lg:flex-row justify-between items-center md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
        <article className="flex-[30%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color sm:text-[2.6rem] text-[1.8rem] leading-[1.3] font-bold family-nunito-semibold">
            Publicaciones de Atlántida{" "}
            <span className="md:block inline">Casa de Valores</span>
          </h1>
          <div className="h-1 w-full bg-primary-color my-10"></div>
        </article>

        <article className="flex-1 text-center"></article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresHeader;
