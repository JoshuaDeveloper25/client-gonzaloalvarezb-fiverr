const ReditumInicio = () => {
  return (
    <section className="my-6">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center lg:gap-8">
        <article className="lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color text-4xl">
            <span className="family-nunito-black">
              Reditum Market Data
            </span>
            <span className="sm:block inline my-2">
              {" "}
              Software de inteligencia {' '}
            </span>
            financiera y bursátil
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>
          <p className="max-w-lg text-secondary-color my-4">
            Actualmente Reditum, procesa toda la información financiera,
            económica y bursátil de Ecuador y Centroamérica en su software de
            inteligencia de mercado
          </p>
        </article>

        <article className="max-w-md mx-auto mt-5">
          <img
            decoding="async"
            loading="lazy"
            className="w-full rounded-3xl"
            src={`https://dummyimage.com/600x400/000/fff`}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default ReditumInicio;
