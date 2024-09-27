import checkIcono from "../../../../../../images/indicador14.png";

const AtlantidaAdvisorsAsesoriaInversionistasHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
        <article className="flex-[30%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color sm:text-[2.6rem] text-[1.8rem] leading-[1.3] font-bold family-nunito-semibold">
            Atlántida Advisors ofrece gestión{" "}
            <span className="md:block inline">
              patrimonial integral y diversas
            </span>{" "}
            alternativas financieras a sus{' '}
            <span className="md:block inline">clientes</span>
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>
        </article>

        <article className="flex-1 text-center my-8">
          <h2 className="text-primary-color font-bold text-5xl mb-2 family-nunito-regular">
            + 90 <span className="block">Millones</span>
          </h2>
          <h3 className="text-secondary-color text-3xl">
            Inversiones <span className="block">Vigentes</span> Asesoradas
          </h3>
        </article>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-7 gap-5">
        <div className="flex gap-2">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="sm:flex-[80%] flex-[75%]">
            <p className="text-secondary-color text-sm">
              Optimizar la rentabilidad del patrimonio de sus clientes, mediante
              una correcta administración de riesgo, respetando un principio
              básico «preservación y crecimiento del patrimonio en el largo
              plazo».
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="sm:flex-[80%] flex-[75%]">
            <p className="text-secondary-color text-sm">
              Asesorar, representar y acompañar a sus clientes en la
              administración integral de su portafolio.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="sm:flex-[80%] flex-[75%]">
            <p className="text-secondary-color text-sm">
              Poner al servicio de sus clientes información transparente,
              herramientas financieras y técnicas de gestión patrimonial.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="sm:flex-[80%] flex-[75%]">
            <p className="text-secondary-color text-sm">
              Entregar un servicio personalizado y enfocado en satisfacer las
              necesidades particulares de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaAdvisorsAsesoriaInversionistasHeader;
