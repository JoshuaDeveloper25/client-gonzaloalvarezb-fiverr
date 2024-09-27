const ReditumServicios = () => {
  return (
    <section className="container-page md:my-16 my-6">
      <h2
        className="text-primary-color text-2xl md:mb-16 mb-4 text-center family-nunito-black"
      >
        Servicios
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8">
        <article className="text-secondary-color text-center col-span-1">
          <h3 className="family-nunito-black text-2xl">
            Acceso a<span className="block">Mercados</span>
          </h3>
          <p className="text-center mt-3">
            Acceso dinámico a{" "}
            <span className="block">información del mercado</span>
          </p>
        </article>

        <article className="text-secondary-color text-center col-span-1">
          <h3 className="family-nunito-black text-2xl">
            Información <span className="block">Actualizada</span> en Vivo
          </h3>
          <p className="text-center mt-3">
            La plataforma se actualiza automáticamente con la publicación de
            nueva información.
          </p>
        </article>

        <article className="text-secondary-color text-center col-span-1">
          <h3 className="family-nunito-black text-2xl">
            Herramientas <span className="block">Dinámicas</span> para Análisis
          </h3>
          <p className="text-center mt-3">
            Rankings
            <span className="block">Gráficos Evolutivos</span>
            Curvas de rendimiento.
          </p>
        </article>

        <article className="text-secondary-color text-center col-span-1">
          <h3 className="family-nunito-black text-2xl">
            Servicio de
            <span className="block">Investigación</span>
          </h3>
          <p className="text-center mt-3">
            Cualquier información del{" "}
            <span className="block">mercado en formato de</span> base de datos.
          </p>
        </article>
      </div>
    </section>
  );
};

export default ReditumServicios;
