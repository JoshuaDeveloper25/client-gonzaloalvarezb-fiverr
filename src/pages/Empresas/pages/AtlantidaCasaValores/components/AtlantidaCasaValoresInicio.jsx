import casaValoresHeader from "../../../../../images/atlantida-casa-valores-header.png";
import logoAtlantidaCasaValores from "../../../../../images/nuestraempresa4.png";
import { Link } from "react-router-dom";

const AtlantidaCasaValoresInicio = () => {
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
            <Link to={`/casa-valores-inicio`}>
              <img
                loading="lazy"
                decoding="async"
                className="w-92 mb-6"
                src={logoAtlantidaCasaValores}
                alt="Logo Grupo Sur Atlántida"
              />
            </Link>
            <p className="text-secondary-color text-justify my-4">
              Atlántida Casa de Valores, con más de 15 años de trayectoria en el
              mercado de valores ecuatoriano, se ha consolidado como una empresa
              líder en las bolsas del país.
            </p>
            <Link
              className="button-red-primary"
              to={"https://suratlantida.com/casa-de-valores/ "}
            >
              Conoce más
            </Link>
          </article>

          <article className="max-w-sm mx-auto  mt-5">
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

export default AtlantidaCasaValoresInicio;
