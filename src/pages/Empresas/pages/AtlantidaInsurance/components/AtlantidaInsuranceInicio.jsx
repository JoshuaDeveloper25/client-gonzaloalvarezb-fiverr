import { Link } from "react-router-dom";
import casaValoresHeader from "../../../../../images/atlantida-insurance-inicio.png";
import logoInsurance from "../../../../../images/nuestraempresa7.png";

const AtlantidaInsuranceInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page">
        {/* <div className="pt-3">
          <Link className="text-primary-color font-bold" to={"/empresas"}>
            {"< Regresar al sitio Suratlántida"}
          </Link>
        </div> */}

        <div className="flex flex-col lg:flex-row justify-between items-center md:gap-3">
          <article className="max-w-md text-secondary-color lg:py-0 py-4">
            <Link // to={"/insurance-inicio"}
              to="#"
            >
              <img
                loading="lazy"
                decoding="async"
                className="w-92 mb-6"
                src={logoInsurance}
                alt="Logo Grupo Sur Atlántida"
              />
            </Link>
            <p className="text-secondary-color text-justify my-4">
              Atlántida Insurance se destaca como una Agencia Asesora Productora
              de Seguros, con un enfoque claro en el asesoramiento personalizado
              para cada uno de nuestros clientes, esforzándonos en brindarles
              las mejores condiciones agregando valor tecnológico y operativo a
              nuestros asegurados.
            </p>
            {/* <Link
              className="button-red-primary"
              // to={"https://insuratlan.com/ "}
              to={"/insurance-inicio"}
            >
              Conoce más
            </Link> */}
          </article>

          <article className="max-w-2xl mx-auto  mt-5">
            <img
              decoding="async"
              loading="lazy"
              className="w-full"
              src={casaValoresHeader}
              alt={"Imagen del Header"}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicio;
