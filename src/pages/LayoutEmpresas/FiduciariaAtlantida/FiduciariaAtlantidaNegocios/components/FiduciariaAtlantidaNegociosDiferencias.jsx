const FiduciariaAtlantidaNegociosDiferencias = () => {
  return (
    <section className="container-page my-16">
      <h3 className="family-nunito-black text-secondary-color text-xl text-center mb-8">
        Diferencias entre Encargo Fiduciario y Fideicomiso
      </h3>

      <article>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="text-secondary-color bg-tertiary-color rounded-2xl py-10 px-7 col-span-1">
            <h3 className="family-nunito-black border-b-4 border-b-primary-color pb-3 text-2xl">
              Regulación y <span className="block">supervisión</span>
            </h3>
            <ul className="list-disc space-y-2 pt-5 px-6">
              <li>
                No existe transferencia de la propiedad de los bienes o
                derechos.{" "}
              </li>
              <li>Se formaliza generalmente mediante contrato privado.</li>
              <li>No se crea un ente con personería jurídica.</li>
            </ul>
          </div>

          <div className="text-secondary-color bg-tertiary-color rounded-2xl py-10 px-7 col-span-1">
            <h3 className="family-nunito-black border-b-4 border-b-primary-color pb-3 text-2xl">
              Fideicomiso <span className="block">Mercantil</span>
            </h3>
            <ul className="list-disc space-y-2 pt-5 px-6">
              <li>
                Transfieren de manera temporal e irrevocable propiedad de bienes
                muebles o inmuebles.{" "}
              </li>
              <li>Se formaliza mediante escritura pública.</li>
              <li>Patrimonio autónomo dotado de personería jurídica.</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FiduciariaAtlantidaNegociosDiferencias;
