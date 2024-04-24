import iconoDineroMano from "../../../../../images/indicador8.png";
import negociosFiduciariosImagen from "../../../../../images/fiduciaria-negocios.jpg";

const FiduciariaAtlantidaNegocios = () => {
  return (
    <section className="sm:grid grid-cols-4 gap-8 container-page my-10">
      <article className="md:col-span-1 col-span-2 self-center text-center space-y-4">
        <img
          className="w-14 mx-auto"
          loading="lazy"
          decoding="async"
          src={iconoDineroMano}
        />
        <h2 className="text-3xl text-secondary-color family-nunito-black">
          Negocios Fiduciarios
        </h2>
        <p className="text-secondary-color">
          Son negocios de confianza que sirven para cumplir las instrucciones de
          un mandante por medio de un tercero.
        </p>

        <button className="button-red-primary" type="button">
          Conoce más
        </button>
      </article>

      <article className="md:col-span-3 col-span-2 md:mt-0 mt-8">
        <img
          className={`md:w-[80%] w-full mx-auto md:h-[25rem] object-cover rounded-3xl`}
          loading="lazy"
          decoding="async"
          src={negociosFiduciariosImagen}
          alt={"Imagen de Negocios Fiduciarios"}
        />
      </article>
    </section>
  );
};

export default FiduciariaAtlantidaNegocios;
