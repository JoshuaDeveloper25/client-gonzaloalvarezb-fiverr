import { Link } from "react-router-dom";

const FiduciariaAtlantidaFondoFitInvertir = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page md:py-20 py-6">
        <div className="grid sm:grid-cols-2 items-center gap-8">
          <article className="col-span-1">
            <h2 className="family-nunito-black text-3xl text-secondary-color">
              Hoy es el mejor momento para{" "}
              <span className="block">empezar a invertir</span>
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

            <div className="text-center mt-3">
            <Link to={"https://fondosatlantida.com/"}>
              <button className="button-red-primary">Simular ahora</button>
            </Link>
          </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondoFitInvertir;
