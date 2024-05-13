import fiduciariaGestion from "../../../../../images/fiduciaria-gestion.png";

const FiduciariaAtlantidaInicioVentajas = () => {
  return (
    <section className="container-page">
      <article className="flex flex-col justify-center gap-2 text-center my-9">
        <h2 className="family-nunito-black text-primary-color text-2xl">
          ¿Cuáles son las ventajas de un fideicomiso?
        </h2>
        <h2 className="text-secondary-color text-4xl">
          Facilita la gestión sobre bienes
        </h2>

        <div className="max-w-2xl mx-auto">
          <img className="w-full" src={fiduciariaGestion} />
        </div>
      </article>

      <article className="md:my-16 my-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
          <div className="text-secondary-color bg-tertiary-color rounded-2xl py-10 px-7 col-span-1">
            <h3 className="family-nunito-black border-b-4 border-b-primary-color pb-3 text-2xl">
              Constituye
            </h3>
            <ul className="list-disc space-y-2 pt-5 px-6">
              <li>Es quien transfiere los bienes. </li>
              <li>
                Establece las instrucciones a ser cumplidas por la Fiduciaria.
              </li>
              <li>Puede ser beneficiario del Fideicomiso.</li>
            </ul>
          </div>

          <div className="text-secondary-color bg-tertiary-color rounded-2xl py-10 px-7 col-span-1">
            <h3 className="family-nunito-black border-b-4 border-b-primary-color pb-3 text-2xl">
              Fiduciaria
            </h3>
            <ul className="list-disc space-y-2 pt-5 px-6">
              <li>Recibe los bienes para su administración. </li>
              <li>Ejecuta la gestión encomendada.</li>
              <li>Son entes autorizados y regulados por la ley.</li>
            </ul>
          </div>

          <div className="text-secondary-color bg-tertiary-color rounded-2xl py-10 px-7 col-span-1">
            <h3 className="family-nunito-black border-b-4 border-b-primary-color pb-3 text-2xl">
              Beneficiario
            </h3>
            <ul className="list-disc space-y-2 pt-5 px-6">
              <li>
                Recibe los beneficios establecidos en el contrato del negocio
                fiduciario.{" "}
              </li>
              <li>
                Puede ser cualquier persona, incluso el mismo Constituyente.
              </li>
              <li>No puede ser la fiduciaria.</li>
              <li>No puede ser la Entidad Fiduciaria</li>
              <li>Irrevocabilidad</li>
              <li>Inembargabilidad</li>
              <li>Aporte exento de impuestos de transferencia</li>
              <li>Patrimonio autónomo</li>
            </ul>
          </div>
        </div>
      </article>

      <article>
        <div className="flex flex-col justify-center gap-2 text-center my-9">
          <h2 className="text-secondary-color family-nunito-regular text-3xl">
            Negocios Fiduciarios
          </h2>
          <h2 className="text-secondary-color text-lg max-w-md mx-auto">
            Son negocios de confianza que sirven para cumplir las instrucciones
            de un mandante por medio de un tercero.
          </h2>
        </div>
      </article>
    </section>
  );
};

export default FiduciariaAtlantidaInicioVentajas;
