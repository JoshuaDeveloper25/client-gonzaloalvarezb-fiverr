import inversionesFinancieras from "../../../../../images/crediprime-inicio.png";
import logoCrediprime from "../../../../../images/nuestraempresa8.png";

const CrediPrimeInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center md:gap-3">
        <article className="max-w-md text-secondary-color lg:py-0 py-4">
          <img
            loading="lazy"
            decoding="async"
            className="w-92 mb-6"
            src={logoCrediprime}
            alt="Logo Grupo Sur Atlántida"
          />
          <button className="button-red-primary">Conoce más</button>
        </article>

        <article className="max-w-md mx-auto mt-5">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={inversionesFinancieras}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default CrediPrimeInicio;
