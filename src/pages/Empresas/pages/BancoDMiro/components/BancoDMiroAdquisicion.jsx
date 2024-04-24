import adquisicion from "../../../../../images/adquisicion.jpg";

const BancoDMiroAdquisicion = () => {
  return (
    <section className="bg-tertiary-color md:py-14 py-2">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="max-w-xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full rounded-3xl"
            src={adquisicion}
            alt={"Imagen del Header"}
          />
        </article>

        <article className="text-secondary-color md:py-8 py-2">
          <h2 className="max-w-md text-3xl family-nunito-black">
            Adquisición de Banco D-Miro (ECUADOR) por parte del Grupo Financiero
            Atlántida
          </h2>

          <p className="max-w-xl leading-6 my-3">
            Banco D-Miro S.A. pasa a ser una empresa subsidiaria del Grupo
            Financiero Atlántida, teniendo como principal accionista a
            Inversiones Financieras Atlántida S.A. INVATLÁN.
          </p>

          <p className="max-w-xl leading-6">
            Esta integración tiene como propósito ampliar las oportunidades de
            atención a clientes regionales y atender nuevas necesidades
            financieras del público local con el objetivo de fortalecer el
            mercado ecuatoriano.
          </p>
        </article>
      </div>
    </section>
  );
};

export default BancoDMiroAdquisicion;
