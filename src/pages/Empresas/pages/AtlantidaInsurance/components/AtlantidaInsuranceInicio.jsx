import { useNavigate } from "react-router-dom";
import casaValoresHeader from "../../../../../images/atlantida-insurance-inicio.png";
import logoReditum from "../../../../../images/nuestraempresa7.png";

const AtlantidaInsuranceInicio = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center md:gap-3">
        <article className="max-w-md text-secondary-color lg:py-0 py-4">
          <img
            loading="lazy"
            decoding="async"
            className="w-92 mb-6"
            src={logoReditum}
            alt="Logo Grupo Sur Atlántida"
          />
          <p className="text-secondary-color text-justify my-4">
            Atlántida Insurance se destaca como una Agencia Asesora Productora
            de Seguros, con un enfoque claro en el asesoramiento personalizado
            para cada uno de nuestros clientes, esforzándonos en brindarles las
            mejores condiciones agregando valor tecnológico y operativo a
            nuestros asegurados.
          </p>
          <button className="button-red-primary" onClick={() => navigate(`/insurance-inicio`)} type="button">
            Conoce más
          </button>
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
    </section>
  );
};

export default AtlantidaInsuranceInicio;
