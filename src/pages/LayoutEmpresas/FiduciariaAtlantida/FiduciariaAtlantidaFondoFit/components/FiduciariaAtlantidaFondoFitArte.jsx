const FiduciariaAtlantidaFondoFitArte = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page md:py-20 py-6">
        <div className="grid sm:grid-cols-2 items-center gap-8">
          <article className="col-span-1">
            <h2 className="family-nunito-black text-2xl text-secondary-color">
              El arte no está en ganar dinero, sino en{" "}
              <span className="block">
                invertirlo inteligentemente y hacerlo crecer
              </span>
            </h2>
            <p className="text-secondary-color mt-2">
              Este simulador te ayudará a evaluar tu rendimiento y conocer el
              valor de tu inversión al final de periodo.
            </p>
          </article>

          <article className="col-span-1 space-y-3">
            <h3 className="text-center text-secondary-color text-3xl my-3">
              Simula tu plan <span className="block">de inversión</span>
            </h3>
            <div className="text-center">
              <button className="button-red-primary">Simular ahora</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondoFitArte;
