import nuestraempresa1 from "../../../images/nuestraempresa1.png";
import nuestraempresa2 from "../../../images/nuestraempresa2.png";
import nuestraempresa3 from "../../../images/nuestraempresa3.png";
import nuestraempresa4 from "../../../images/nuestraempresa4.png";
import nuestraempresa5 from "../../../images/nuestraempresa5.png";
import nuestraempresa6 from "../../../images/nuestraempresa6.png";
import nuestraempresa7 from "../../../images/nuestraempresa7.png";
import nuestraempresa8 from "../../../images/nuestraempresa8.png";
import { Link } from "react-router-dom";

const EmpresasLogos = () => {
  return (
    <section className="container-page md:my-20 my-5">
      <article className="grid sm:grid-cols-4 grid-cols-2 gap-10">
        <div className="text-center">
          <Link
            to={`/empresas/inversiones-financieras-atlantida`}
            target="_blank"
          >
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-36 h-14 object-contain hover:opacity-75 animation-fade cursor-pointer"
              src={nuestraempresa1}
              alt="Nuestra Empresa 1"
            />
          </Link>
        </div>

        <div className="text-center">
          <Link to={`/empresas/banco-d-miro`} target="_blank">
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-36 h-14 object-contain hover:opacity-75 animation-fade cursor-pointer"
              src={nuestraempresa2}
              alt="Nuestra Empresa 2"
            />
          </Link>
        </div>

        <div className="text-center">
          <Link to={`/empresas/fiduciaria-atlantida`} target="_blank">
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-36 h-14 object-contain hover:opacity-75 animation-fade cursor-pointer"
              src={nuestraempresa3}
              alt="Nuestra Empresa 3"
            />
          </Link>
        </div>

        <div className="text-center">
          <Link to={`/empresas/atlantida-casa-valores`} target="_blank">
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-36 h-14 object-contain hover:opacity-75 animation-fade cursor-pointer"
              src={nuestraempresa4}
              alt="Nuestra Empresa 4"
            />
          </Link>
        </div>

        <div className="text-center">
          <Link to={`/empresas/crediprime`} target="_blank">
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-36 h-14 object-contain hover:opacity-75 animation-fade cursor-pointer"
              src={nuestraempresa5}
              alt="Nuestra Empresa 5"
            />
          </Link>
        </div>

        <div className="text-center">
          <Link to={`/empresas/reditum`} target="_blank">
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-36 h-14 object-contain hover:opacity-75 animation-fade cursor-pointer"
              src={nuestraempresa6}
              alt="Nuestra Empresa 6"
            />
          </Link>
        </div>

        <div className="text-center">
          <Link to={``} target="_blank">
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-36 h-14 object-contain hover:opacity-75 animation-fade cursor-pointer"
              src={nuestraempresa7}
              alt="Nuestra Empresa 7"
            />
          </Link>
        </div>

        <div className="text-center">
          <Link to={``} target="_blank">
            <img
              decoding="async"
              loading="lazy"
              className="mx-auto w-36 h-14 object-contain hover:opacity-75 animation-fade cursor-pointer"
              src={nuestraempresa8}
              alt="Nuestra Empresa 8"
            />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default EmpresasLogos;
