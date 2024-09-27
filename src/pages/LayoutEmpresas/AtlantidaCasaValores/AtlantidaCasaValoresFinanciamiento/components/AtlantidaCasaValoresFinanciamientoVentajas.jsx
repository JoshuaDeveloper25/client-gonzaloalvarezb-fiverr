import checkIcono from "../../../../../images/indicador14.png";

const AtlantidaCasaValoresFinanciamientoVentajas = () => {
  return (
    <section className="container-page md:my-20 my-8">
      <h2 className="text-primary-color family-nunito-black text-2xl md:mb-14 mb-4 text-center">
        Ventajas
      </h2>

      <div className="grid min-[610px]:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 my-6">
        <div className="col-span-1 flex gap-3 items-start">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="md:flex-[80%] flex-[75%]">
            <p className="text-secondary-color leading-relaxed text-md">
              Acceso a montos importantes de financiamiento.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-start">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="md:flex-[80%] flex-[75%]">
            <p className="text-secondary-color leading-relaxed text-md">
              Estructura financiera en función de la capacidad de endeudamiento
              y de pago.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-start">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="md:flex-[80%] flex-[75%]">
            <p className="text-secondary-color leading-relaxed text-md">
              El ser parte del mercado bursátil, otorga un valor agregado a la
              empresa.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-start">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="md:flex-[80%] flex-[75%]">
            <p className="text-secondary-color leading-relaxed text-md">
              Garantía General (declaración juramentada) mas no garantía
              específica(Hipotecaria y/o prendaria).
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-start">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="md:flex-[80%] flex-[75%]">
            <p className="text-secondary-color leading-relaxed text-md">
              Alta probabilidad de participación del sector público como
              inversionistas privados.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex gap-3 items-start">
          <div className="flex-1">
            <img
              className="w-10"
              decoding="async"
              loading="lazy"
              src={checkIcono}
            />
          </div>

          <div className="md:flex-[80%] flex-[75%]">
            <p className="text-secondary-color leading-relaxed text-md">
              Tasas atractivas de Financiamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresFinanciamientoVentajas;
