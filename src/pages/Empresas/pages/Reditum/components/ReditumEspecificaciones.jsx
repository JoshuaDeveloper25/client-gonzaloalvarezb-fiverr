import metricas from "../../../../../images/indicador9.png";
import inversionImagen from "../../../../../images/reditum-metricas.png";

const ReditumEspecificaciones = () => {
  return (
    <section className="sm:grid grid-cols-4 gap-8 container-page md:my-24 my-8">
      <article className="md:col-span-3 col-span-2 md:mb-0 mb-8">
        <img
          className={`w-full mx-auto lg:h-[25rem] object-cover rounded-3xl`}
          loading="lazy"
          decoding="async"
          src={inversionImagen}
          alt={"Imagen de Negocios Fiduciarios"}
        />
      </article>

      <article className="md:col-span-1 col-span-2 self-center">
        <p className="text-secondary-color">
          Nuestro software de inteligencia financiera brinda a los usuarios
          herramientas gráficas y reportes dinámicos, permitiendo el análisis de
          información en cuestión de segundos.
        </p>
      </article>
    </section>
  );
};

export default ReditumEspecificaciones;
