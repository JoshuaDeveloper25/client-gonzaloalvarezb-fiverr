import inversionesFinancieras from "../../../../../images/header-inversiones-financieras.png";
import logoInversionesFinancieras from "../../../../../images/nuestraempresa1.png";
import { Link } from "react-router-dom";

const InversionesFinancierasInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page">
        {/* <div className="pt-3"> 
          <Link className="text-primary-color font-bold" to={"/empresas"}>
           {'< Regresar al sitio Suratlántida'}
          </Link>
        </div> */}

        <div className="flex flex-col lg:flex-row justify-between items-center md:gap-3">
          <article className="max-w-md text-secondary-color lg:py-0 py-4">
            <Link to={"#"}>
              <img
                loading="lazy"
                decoding="async"
                className="w-72 mb-6"
                src={logoInversionesFinancieras}
                alt="Logo Grupo Sur Atlántida"
              />
            </Link>
            <p className="text-secondary-color text-justify leading-6">
              Inversiones Financieras Atlántida Ecuador IFA EC S.A., es una
              holding ecuatoriana, que fue constituida para liderar el Grupo
              Financiero Atlántida en Ecuador.
            </p>
          </article>

          <article className="max-w-3xl mx-auto">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={inversionesFinancieras}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default InversionesFinancierasInicio;
