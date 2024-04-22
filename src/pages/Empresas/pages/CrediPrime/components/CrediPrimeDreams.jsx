import hombrePaginaIcono from "../../../../../images/indicador13.png";
import listoCirculoIcono from "../../../../../images/indicador14.png";

const CrediPrimeDreams = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page py-20">
        <div className="flex flex-col sm:flex-row items-center">
          <article className="flex-1">
            <h2 className="text-secondary-color max-w-[15rem] mx-auto text-center text-2xl">
              Conduce tus sueños con nuestro financiamiento
            </h2>

            <div className="text-center">
              <button className="button-red-primary mt-8">Conoce más</button>
            </div>
          </article>

          <article className="flex-1 md:my-0 my-9">
            <img
              decoding="async"
              loading="lazy"
              src={hombrePaginaIcono}
              alt={`Hombre Pagina Icono`}
              className="w-36 mx-auto"
            />
          </article>

          <article className="flex-1 lg:ms-16 ms-0 space-y-3">
            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-9"
                  decoding="async"
                  loading="lazy"
                  src={listoCirculoIcono}
                  alt="Icono de Circulo Listo"
                />
              </div>

              <div>
                <h3
                  className="text-secondary-color text-xl"
                  style={{ fontFamily: "Nunito Sans Black" }}
                >
                  CrediFinance
                </h3>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-9"
                  decoding="async"
                  loading="lazy"
                  src={listoCirculoIcono}
                  alt="Icono de Circulo Listo"
                />
              </div>

              <div>
                <h3
                  className="text-secondary-color text-xl"
                  style={{ fontFamily: "Nunito Sans Black" }}
                >
                  Crediprime <span className="block">Express</span>
                </h3>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-9"
                  decoding="async"
                  loading="lazy"
                  src={listoCirculoIcono}
                  alt="Icono de Circulo Listo"
                />
              </div>

              <div>
                <h3
                  className="text-secondary-color text-xl"
                  style={{ fontFamily: "Nunito Sans Black" }}
                >
                  MicroPrime
                </h3>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-9"
                  decoding="async"
                  loading="lazy"
                  src={listoCirculoIcono}
                  alt="Icono de Circulo Listo"
                />
              </div>

              <div>
                <h3
                  className="text-secondary-color text-xl"
                  style={{ fontFamily: "Nunito Sans Black" }}
                >
                  FinancePrime
                </h3>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div>
                <img
                  className="w-9"
                  decoding="async"
                  loading="lazy"
                  src={listoCirculoIcono}
                  alt="Icono de Circulo Listo"
                />
              </div>

              <div>
                <h3
                  className="text-secondary-color text-xl"
                  style={{ fontFamily: "Nunito Sans Black" }}
                >
                  Seminuevos
                </h3>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CrediPrimeDreams;
