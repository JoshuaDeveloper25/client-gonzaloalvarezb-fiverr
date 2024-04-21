import inversionesFinancieras from "../../../../../images/banco-d-miro-inicio.png";
import logoBancoDMiro from "../../../../../images/nuestraempresa2.png";

const BancoDMiroInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center md:gap-3">
        <article className="max-w-md text-secondary-color lg:py-0 py-4">
          <img
            loading="lazy"
            decoding="async"
            className="w-92 mb-6"
            src={logoBancoDMiro}
            alt="Logo Grupo Sur Atlántida"
          />
          <button className="button-red-primary" type="button">Conoce más</button>
        </article>

        <article className="max-w-lg mx-auto mt-5">
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

export default BancoDMiroInicio;
