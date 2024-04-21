const NuestraHistoria = () => {
  return (
    <section className="container-page py-3 my-8">
      <div className="flex flex-col md:flex-row lg:items-center items-start gap-7">
        <article className="flex-1">
          <div className="flex flex-col gap-5">
            <h2
              className="md:text-start text-center text-primary-color text-3xl leading-7"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Nuestra <span className="block">Historia</span>
            </h2>

            <p className="text-secondary-color text-justify">
              Grupo Financiero Atlántida se ha caracterizado por ser pionero en
              la introducción de nuevos servicios, innovación y soluciones
              financieras.
            </p>

            <p className="text-secondary-color text-justify">
              Sus empresas han sido un motor para la economía. Desde sus inicios
              se destaca la función que cumplió Banco Atlántida como emisor de
              papel moneda, en Honduras por 37 años (1913 – 1950), hasta la
              actualidad como facilitador de importantes operaciones crediticias
              y de inversión para el desarrollo de proyectos empresariales.
            </p>

            <p className="text-secondary-color text-justify">
              En 2020, Grupo Financiero Atlántida consolida su proceso de
              expansión al iniciar operaciones en Ecuador mediante la
              conformación de Grupo Sur Atlántida.
            </p>
          </div>
        </article>

        <article className="flex-1">
          <img
            decoding="async"
            loading="lazy"
            className="w-full rounded-3xl"
            src={`https://dummyimage.com/600x400/000/fff`}
            alt="Imagen de Nuestra Historia"
          />
        </article>
      </div>
    </section>
  );
};

export default NuestraHistoria;
