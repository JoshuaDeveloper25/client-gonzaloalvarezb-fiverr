import capitalprime1 from "../../../../../images/capital-prime1.jpg";
import capitalprime2 from "../../../../../images/capital-prime2.jpg";

const CapitalPrimeFeatures = () => {
  return (
    <section>
      <div className="container-page space-y-8 my-16">
        {/* 1 */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center md:gap-3 gap-0">
          <article className="text-secondary-color md:py-5 py-2">
            <h2
              className=" text-3xl text-primary-color mb-2"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Inbound y Outbound
            </h2>

            <p className="text-2xl leading-7">
              Servicio al cliente y ventas{" "}
              <span className="sm:block inline">omnicanal</span>
            </p>
          </article>

          <article className="lg:max-w-xl max-w-md sm:mt-0 mt-2">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={capitalprime1}
              alt={"Dos Personas Mirando la Computadora"}
            />
          </article>
        </div>

        {/* 2 */}
        <div className="flex flex-col lg:flex-row items-center md:gap-5 gap-0">
          <article className="lg:max-w-xl max-w-md sm:mb-0 mb-2">
            <img
              decoding="async"
              loading="lazy"
              className="w-full rounded-3xl"
              src={capitalprime2}
              alt={"Dos Personas Hablando Sobre un Problema"}
            />
          </article>

          <article className="text-secondary-color md:py-5 py-2">
            <h2
              className="max-w-[30rem] sm:mx-0 mx-auto text-3xl text-primary-color mb-2"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Gestión y administración de{" "}
              <span className="">cartera, ventas y atención al</span>{" "}
              cliente
            </h2>

            <p className="text-2xl max-w-[30rem] sm:mx-0 mx-auto  leading-8">
              Contamos con la capacidad para{" "}
              <span className="sm:block inline">brindar soluciones de forma</span> rápida
              y eficiente.{" "}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CapitalPrimeFeatures;
