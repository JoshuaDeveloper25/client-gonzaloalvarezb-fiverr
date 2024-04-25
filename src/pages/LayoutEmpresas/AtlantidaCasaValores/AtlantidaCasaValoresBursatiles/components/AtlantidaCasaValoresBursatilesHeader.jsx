const AtlantidaCasaValoresBursatilesHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:max-w-none max-w-lg md:gap-6 gap-0  mx-auto">
        <article className="flex-[25%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color sm:text-[2.6rem] text-[1.8rem] leading-[1.3] font-bold family-nunito-semibold">
            Realiza inversiones bursátiles{' '}
            <span className="md:block inline">
              respaldadas el mejor equipo de
            </span>{" "}
            operadores del país
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>
          <p className="text-secondary-color text-justify">
            Atlántida Casa de Valores ofrece a sus clientes la posibilidad de
            realizar o vender inversiones bursátiles, respaldados por la
            experiencia y dinamismo de uno de los mayores equipos de Operadores
            de Bolsa del país.
          </p>
        </article>

        <article className="flex-1 text-center md:my-8 my-3">
          <h2 className="text-primary-color font-bold text-5xl mb-3 family-nunito-regular">
            4.2 <span className="block">Billones</span>
          </h2>
          <h3 className="text-secondary-color text-3xl">
            Volumen <span className="block">transaccional</span> histórico
          </h3>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresBursatilesHeader;
