import nuestraEmpresa9 from "../../../images/nuestraempresa9.png";
import nuestraEmpresa2 from "../../../images/nuestraempresa2.png";
import nuestraEmpresa3 from "../../../images/nuestraempresa3.png";
import nuestraEmpresa4 from "../../../images/nuestraempresa4.png";

import nuestraEmpresa5 from "../../../images/nuestraempresa5.png";
import nuestraEmpresa6 from "../../../images/nuestraempresa6.png";
import nuestraEmpresa7 from "../../../images/nuestraempresa7.png";
import nuestraEmpresa8 from "../../../images/nuestraempresa8.png";
import nuestraEmpresa10 from "../../../images/nuestraempresa10.png";
import nuestraEmpresa11 from "../../../images/nuestraempresa11.png";
import { Link } from "react-router-dom";

const NuestroGrupo = () => {
  return (
    <section className="bg-tertiary-color py-12">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 grid-cols-1 place-items-center gap-6">
        {/* Banco d miro */}
        <div className="text-center h-full">
          <Link to={`/empresas/banco-d-miro`}>
            <img
              loading="lazy"
              decoding="async"
              src={nuestraEmpresa2}
              className="w-32"
            />
          </Link>
        </div>        
        
        {/* Fiduciaria Atlántida */}
        <div className="text-center h-full">
          <Link to={`/empresas/fiduciaria-atlantida`}>
            <img
              loading="lazy"
              decoding="async"
              src={nuestraEmpresa3}
              className="w-32"
            />
          </Link>
        </div>

        {/* Atlántida Casa de Valores */}
        <div className="text-center  h-full">
          <Link to={`/empresas/atlantida-casa-valores`}>
            <img
              loading="lazy"
              decoding="async"
              src={nuestraEmpresa4}
              className="w-40 h-12 object-contain "
            />
          </Link>
        </div>

        {/* Atlántida Insurance */}
        <div className="text-center  h-full">
          <Link to={`/empresas/atlantida-insurance`}>
            <img
              loading="lazy"
              decoding="async"
              src={nuestraEmpresa7}
              className="w-32 "
            />
          </Link>
        </div>

        {/* Reditum */}
        <div className="text-center  h-full">
          <Link to={`/empresas/reditum`}>
            <img
              loading="lazy"
              decoding="async"
              src={nuestraEmpresa6}
              className="w-32 "
            />
          </Link>
        </div>

        {/* CrediPrime */}
        <div className="text-center  h-full">
          <Link to={`/empresas/crediprime`}>
            <img
              loading="lazy"
              decoding="async"
              src={nuestraEmpresa8}
              className="w-40 h-12 object-contain "
            />
          </Link>
        </div>

        {/* CapitalPrime */}
        <div className="text-center  h-full">
          <Link to={`/empresas/capitalprime`}>
            <img
              loading="lazy"
              decoding="async"
              src={nuestraEmpresa5}
              className="w-40 h-12 object-contain "
            />
          </Link>
        </div>

      </div>

      <div className="text-center mt-14">
        <Link
          className="btn-big-label button-red-primary rounded-md py-2"
          to={`https://www.grupofinancieroatlantida.com`}
          target="_blank"
        >
          Conoce más sobre nuestro Grupo
        </Link>
      </div>
    </section>
  );
};

export default NuestroGrupo;
