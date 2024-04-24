import inversionImagen from "../../../../images/reditum-metricas.png";

const ReditumFeatures = () => {
  return (
    <section className="container-page my-10 md:space-y-16 space-y-6">
      <div className="flex flex-col md:flex-row items-center md:my-0 my-16 gap-8">
        {/* Feature 1 */}
        <article className="flex-[55%]">
          <img
            className={`w-full mx-auto lg:h-[25rem] object-cover rounded-3xl`}
            loading="lazy"
            decoding="async"
            src={inversionImagen}
          />
        </article>

        <article className="flex-1">
          <h3 className="text-secondary-color text-lg mb-3">
            Software de inteligencia financiera que provee datos sobre el
            mercado de capitales de Ecuador y Centroamérica.
          </h3>
          <p className="text-secondary-color text-sm">
            Brinda a sus usuarios herramientas gráficas y reportes dinámicos
            para analizar cualquier información en cuestión de segundos.
          </p>
        </article>
      </div>

      <div className="flex flex-col md:flex-row items-center sm:gap-8 gap-3">
        {/* Feature 2 */}
        <article className="flex-1">
          <h2
            className="text-secondary-color/90 text-3xl mb-1"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            PMG
          </h2>
          <h3 className="text-secondary-color text-lg mb-3">
            Software para facilitar la administración de portafolios de clientes
            institucionales.
          </h3>
          <p className="text-secondary-color text-sm">
            La plataforma se actualiza automáticamente con la información
            publicada en Reditum Market Data. Cada cliente tiene acceso
            exclusivo a su portafolio de inversiones, con reportes exclusivos y
            actualizados del mismo cumpliendo con los requerimientos de los
            respectivos entes de control.
          </p>
        </article>

        <article className="md:flex-[23%] flex-[55%] sm:mb-0 mb-5">
          <img
            className={`w-full mx-auto lg:h-[20rem] object-cover rounded-3xl`}
            loading="lazy"
            decoding="async"
            src={`https://dummyimage.com/600x400/000/fff`}
          />
        </article>
      </div>

      <div className="flex flex-col-reverse md:my-0 my-10 md:flex-row items-center sm:gap-8 gap-3">
        {/* Feature 3 */}
        <article className="md:flex-[23%] flex-[55%]">
          <img
            className={`w-full mx-auto lg:h-[25rem] object-cover rounded-3xl`}
            loading="lazy"
            decoding="async"
            src={"https://dummyimage.com/600x400/000/fff"}
          />
        </article>

        <article className="flex-1">
          <h3
            className="text-secondary-color/90 text-3xl mb-1"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            Crediapp
          </h3>
          <p className="text-secondary-color text-lg">
            Aplicación web de marca blanca para la originación de crédito y/o
            aperturas de cuenta de ahorros.
          </p>
        </article>
      </div>
    </section>
  );
};

export default ReditumFeatures;
