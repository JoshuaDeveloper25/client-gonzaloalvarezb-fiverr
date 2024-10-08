import nuestraempresa1 from "../../../../../images/nuestraempresa1.png";
import nuestraempresa2 from "../../../../../images/nuestraempresa2.png";
import nuestraempresa3 from "../../../../../images/nuestraempresa3.png";
import nuestraempresa4 from "../../../../../images/nuestraempresa4.png";
import nuestraempresa5 from "../../../../../images/nuestraempresa5.png";
import nuestraempresa6 from "../../../../../images/nuestraempresa6.png";
import nuestraempresa7 from "../../../../../images/nuestraempresa7.png";
import nuestraempresa8 from "../../../../../images/nuestraempresa8.png";

import { Link } from "react-router-dom";

const EmpresasLogos = () => {
  return (
    <section className="container-page my-16">
      {/* Desktop */}
      <div className="md:block hidden">
        <article className="md:mb-6 mb-0">
          <Link to={`/empresas/banco-d-miro`}>
            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa2}
                alt="Nuestra Empresa 2"
              />
            </div>
          </Link>
        </article>

        <article className="flex flex-col md:flex-row justify-center md:gap-36 gap-5">
          <div className="text-center">
            <Link to={"/empresas/fiduciaria-atlantida"}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa3}
                alt="Nuestra Empresa 3"
              />
            </Link>
          </div>

          <div className="text-center">
            <Link to={`/empresas/reditum`}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa6}
                alt="Nuestra Empresa 6"
              />
            </Link>
          </div>
        </article>

        <article className="flex flex-col md:flex-row justify-center items-center md:gap-28 gap-0 md:mx-5 mx-0">
          <div className="text-center">
            <Link to={"/empresas/atlantida-casa-valores"}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa4}
                alt="Nuestra Empresa 4"
              />
            </Link>
          </div>

          <div className="text-center bg-tertiary-color rounded-full p-3 h-64 min-w-64 flex justify-center items-center">
            <Link to={"/empresas/inversiones-financieras-atlantida"}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-52 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa1}
                alt="Nuestra Empresa 1"
              />
            </Link>
          </div>

          <div className="text-center">
            <Link to={"/empresas/crediprime"}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa8}
                alt="Nuestra Empresa 8"
              />
            </Link>
          </div>
        </article>

        <article className="flex flex-col md:flex-row justify-evenly">
          <div className="text-center">
            <Link to="/empresas/atlantida-insurance">
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa7}
                alt="Nuestra Empresa 7"
              />
            </Link>
          </div>

          <div className="text-center">
            <Link to="/empresas/capitalprime">
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa5}
                alt="Nuestra Empresa 5"
              />
            </Link>
          </div>
        </article>
      </div>

      {/* Responsive */}
      <div className="md:hidden block">
        <div className="flex justify-center">
          <div className="text-center flex justify-center items-center bg-tertiary-color w-[15rem] h-[15rem] rounded-full p-3">
            <Link to={"/empresas/inversiones-financieras-atlantida"}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-52 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa1}
                alt="Nuestra Empresa 1"
              />
            </Link>
          </div>
        </div>

        <article className="md:mb-6 mb-0">
          <Link to={`/empresas/banco-d-miro`}>
            <div className="text-center">
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa2}
                alt="Nuestra Empresa 2"
              />
            </div>
          </Link>
        </article>

        <article className="flex flex-col md:flex-row justify-center md:gap-36 gap-5">
          <div className="text-center">
            <Link to={"/empresas/fiduciaria-atlantida"}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa3}
                alt="Nuestra Empresa 3"
              />
            </Link>
          </div>

          <div className="text-center">
            <Link to={"/empresas/atlantida-casa-valores"}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa4}
                alt="Nuestra Empresa 4"
              />
            </Link>
          </div>
        </article>

        <article className="flex flex-col md:flex-row justify-center items-center md:gap-28 gap-0 md:mx-5 mx-0">
          <div className="text-center">
            <Link to="/empresas/atlantida-insurance">
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa7}
                alt="Nuestra Empresa 7"
              />
            </Link>
          </div>

          <div className="text-center">
            <Link to={`/empresas/reditum`}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa6}
                alt="Nuestra Empresa 6"
              />
            </Link>
          </div>
        </article>

        <article className="flex flex-col md:flex-row justify-evenly">
          <div className="text-center">
            <Link to={"/empresas/crediprime"}>
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa8}
                alt="Nuestra Empresa 8"
              />
            </Link>
          </div>

          <div className="text-center">
            <Link to="/empresas/capitalprime">
              <img
                decoding="async"
                loading="lazy"
                className="mx-auto w-44 h-20 object-contain hover:opacity-75 animation-fade"
                src={nuestraempresa5}
                alt="Nuestra Empresa 5"
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default EmpresasLogos;
