import metricas from "../../../../../images/metricas.jpg";
import metricas2 from "../../../../../images/metricas2.jpg";
import metricas3 from "../../../../../images/metricas3.jpg";
import metricas4 from "../../../../../images/lineadetiempo2.png";

const AtlantidaCasaValoresIngresos = () => {
  return (
    <section>
      <div className="container-page space-y-8">
        {/* 1 */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center md:gap-3 gap-0">
          <article className="text-secondary-color md:py-8 py-2 lg:ms-0 ms-4">
            <h2
              className=" text-3xl text-primary-color"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Más de USD $6.2 Billones
            </h2>

            <p className="text-2xl  leading-6">En volumen transaccional</p>
          </article>

          <article className="max-w-xl">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={metricas}
              alt={"Metricas"}
            />
          </article>
        </div>

        {/* 2 */}
        <div className="flex flex-col lg:flex-row items-center md:gap-3 gap-0">
          <article className="max-w-xl">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={metricas2}
              alt={"Metricas"}
            />
          </article>

          <article className="text-secondary-color md:py-8 py-2 md:ms-5 ms-4">
            <h2
              className=" text-3xl text-primary-color"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Más de USD $500 Millones
            </h2>

            <p className="text-2xl  leading-7">
              En financiamiento para empresas{" "}
              <span className="block">en el mercado de valores</span>
            </p>
          </article>
        </div>

        {/* 3 */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center md:gap-3 gap-0">
          <article className="text-secondary-color md:py-8 py-2 lg:ms-0 ms-4">
            <h2
              className=" text-3xl text-primary-color"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Más de USD $210 Millones
            </h2>

            <p className="text-2xl  leading-7">
              Negociados en las bolsas de{" "}
              <span className="block">valores ecuatorianas en el</span> 2023
            </p>
          </article>

          <article className="max-w-xl">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={metricas3}
              alt={"Metricas"}
            />
          </article>
        </div>

        {/* 4 */}
        <div className="flex flex-col lg:flex-row items-center md:gap-3 gap-0">
          <article className="max-w-xl">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={metricas4}
              alt={"Metricas"}
            />
          </article>

          <article className="text-secondary-color md:py-8 py-2 md:ms-5 ms-4">
            <h2
              className=" text-3xl text-primary-color"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Administración de Portafolios
            </h2>

            <p className="text-2xl  leading-7">
              Nuestros clientes confían en{" "}
              <span className="block">nosotros la administración de</span> sus
              recursos
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresIngresos;
