import metricas from "../../../../../images/indicador9.png";
import inversionImagen from "../../../../../images/fiduciaria-negocios2.jpg";

const FiduciariaAtlantidaInversion = () => {
  return (
    <section className="sm:grid grid-cols-4 gap-8 container-page my-10">

      <article className="md:col-span-3 col-span-2 md:mb-0 mb-8">
        <img
          className={`md:w-[80%] w-full mx-auto md:h-[25rem] object-cover rounded-3xl`}
          loading="lazy"
          decoding="async"
          src={inversionImagen}
          alt={"Imagen de Negocios Fiduciarios"}
        />
      </article>

      <article className="md:col-span-1 col-span-2 self-center text-center md:space-y-2 space-y-4">
        <img
          className="w-14 mx-auto"
          loading="lazy"
          decoding="async"
          src={metricas}
        />
        <h2
          className="text-3xl text-secondary-color family-nunito-black"
          
        >
          Fondos de Inversión
        </h2>
        <p className="text-secondary-color">
          Es un vehículo especializado de inversión que mediante un comité
          técnico, logra generar excelentes rendimientos, liquidez y
          diversificación con los mejores títulos valores.
        </p>

        <button className="button-red-primary" type="button">
          Conoce más
        </button>
      </article>
    </section>
  );
};

export default FiduciariaAtlantidaInversion;
