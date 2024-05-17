import casaValoresHeader from "../../../../../images/atlantida-casa-valores-header.png";
import logoAtlantidaCasaValores from "../../../../../images/nuestraempresa4.png";
import { Link } from "react-router-dom";
Link;

const AtlantidaCasaValoresInicio = () => {
  return (
    <section className="bg-tertiary-color">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center md:gap-3">
        <article className="max-w-md text-secondary-color lg:py-0 py-4">
          <img
            loading="lazy"
            decoding="async"
            className="w-92 mb-6"
            src={logoAtlantidaCasaValores}
            alt="Logo Grupo Sur Atlántida"
          />
          <p className="text-secondary-color text-justify my-4">
            Atlántida Casa de Valores, con más de 15 años de trayectoria en el
            mercado de valores ecuatoriano, se ha consolidado como una empresa
            líder en las bolsas del país.
          </p>
          <Link to={"/casa-valores-inicio"}>
            <button className="button-red-primary" type="button">
              Conoce más
            </button>
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
    </section>
  );
};

export default AtlantidaCasaValoresInicio;
