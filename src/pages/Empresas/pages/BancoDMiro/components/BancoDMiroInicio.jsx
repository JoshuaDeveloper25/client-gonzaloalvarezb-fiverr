import inversionesFinancieras from "../../../../../images/banco-d-miro-inicio.png";
import logoBancoDMiro from "../../../../../images/nuestraempresa2.png";
import { Link } from "react-router-dom";

const BancoDMiroInicio = () => {
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
            <Link to={"#"}>
              <img
                loading="lazy"
                decoding="async"
                className="w-92 mb-6"
                src={logoBancoDMiro}
                alt="Logo Grupo Sur Atlántida"
              />
            </Link>
            <Link to={`https://www.d-miro.com/`} className="btn-normal button-red-primary">
              Conoce más
            </Link>
          </article>

          <article className="max-w-lg mx-auto mt-5">
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

export default BancoDMiroInicio;
