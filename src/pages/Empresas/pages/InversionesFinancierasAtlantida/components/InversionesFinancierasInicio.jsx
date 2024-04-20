import inversionesFinancieras from "../../../../../images/inversiones-financieras-inicio.png";
import logoInversionesFinancieras from "../../../../../images/nuestraempresa1.png";

const InversionesFinancierasInicio = () => {
  return (
    <section className="bg-tertiary-color px-2">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center md:gap-3">
        <article className="max-w-md text-secondary-color lg:py-0 py-4">
          <img
            loading="lazy"
            decoding="async"
            className="w-92 mb-6"
            src={logoInversionesFinancieras}
            alt="Logo Grupo Sur Atlántida"
          />
          <p className="text-secondary-color text-justify leading-6">
            Inversiones Financieras Atlántida Ecuador IFA EC S.A., es una
            holding ecuatoriana, que fue constituida para liderar el Grupo
            Financiero Atlántida en Ecuador.
          </p>
        </article>

        <article className="max-w-md mx-auto mt-5">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={inversionesFinancieras}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default InversionesFinancierasInicio;
