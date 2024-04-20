import hombreHeader from "../../../images/hombre-header-inicio.png";

const HeaderInicio = () => {
  return (
    <section className="bg-tertiary-color px-2">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="max-w-md text-4xl leading-10 mb-8">
            La inversión más importante, es la confianza de nuestros clientes
          </h1>
          <p className="max-w-xl leading-6">
            En Grupo Sur Atlántida contamos con un equipo humano de
            profesionales, que combinan experiencia e innovación. Personas que
            entienden a personas y pueden brindar soluciones seguras, rentables,
            reales y eficaces, en cada una de las industrias que operamos.
          </p>
        </article>

        <article className="max-w-lg">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={hombreHeader}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default HeaderInicio;
