import grupoHeader from "../../../images/empresas-inicio.png";
import logoAtlantida from "../../../images/logo-atlantida.png";

const EmpresasInicio = () => {
  return (
    <section className="bg-tertiary-color px-2">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <img
            loading="lazy"
            decoding="async"
            className="w-72"
            src={logoAtlantida}
            alt="Logo Grupo Sur Atlántida"
          />
        </article>

        <article className="max-w-xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={grupoHeader}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default EmpresasInicio;
