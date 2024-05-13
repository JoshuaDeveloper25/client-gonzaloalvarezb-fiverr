const AtlantidaAdvisorsPublicacionesHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col lg:flex-row justify-between items-center md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
        <article className="flex-[30%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color sm:text-[2.6rem] lg:text-start text-center text-[1.8rem] leading-[1.3] font-bold family-nunito-semibold">
            Atlántida Advisors ofrece a{" "}
            <span className="md:block inline">sus clientes un abanico de</span>{" "}
            alternativas financieras
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>
        </article>

        <article className="flex-1 text-center"></article>
      </div>
    </section>
  );
};

export default AtlantidaAdvisorsPublicacionesHeader;
