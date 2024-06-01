import pdfIcono from "../../../../../images/pdf-icono.png";
import { Link } from "react-router-dom";
import { TECollapse } from "tw-elements-react";
import { useState } from "react";

import downloadIcon from "../../../../../images/descargar-2.png";

const FiduciariaAtlantidaMarcoPost = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <section className="container-page my-8">
      <h2 className="text-2xl text-secondary-color mb-8">
        A continuación, encontrará información y{" "}
        <span className="sm:block inline">documentación relevante:</span>
      </h2>
      <div className="space-y-6">
        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">Documentos</h3>
          </div>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="documentos1">
            <button
              className={`${
                activeElement === "documentos1" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentos1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Código Orgánico Monetario y Financiero
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentos1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0`
                  }  ml-auto h-3 w-3 shrink-0 fill-[#D9D9D9] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                  </svg>
                </span>
              </div>
            </button>
          </h2>

          <TECollapse
            show={activeElement === "documentos1"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <div className="flex items-center pb-2 border-b">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-8"
                  src={downloadIcon}
                />
              </div>
              <div>
                <Link
                  target="_blank"
                  className="text-primary-color hover:underline hover:opacity-55"
                  to={
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/04/b95f06cb454fb4dbaa64af14e051d0a7.pdf"
                  }
                >
                  Código Orgánico Monetario y Financiero
                </Link>
              </div>
            </div>
          </TECollapse>

          {/* Accordion 2 */}
          <h2 className="mb-0" id="documentos2">
            <button
              className={`${
                activeElement === "documentos2" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentos2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Codificación de Resoluciones Monetarias, Financieras, de
                  Valores y Seguros
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentos2"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0`
                  }  ml-auto h-3 w-3 shrink-0 fill-[#D9D9D9] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                  </svg>
                </span>
              </div>
            </button>
          </h2>

          <TECollapse
            show={activeElement === "documentos2"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <div className="flex items-center pb-2 border-b">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-8"
                  src={downloadIcon}
                />
              </div>
              <div>
                <Link
                  target="_blank"
                  className="text-primary-color hover:underline hover:opacity-55"
                  to={
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/04/3f58c70f269fd5abef497cf15038d278.pdf"
                  }
                >
                  Codificación de Resoluciones Monetarias, Financieras, de
                  Valores y Seguros
                </Link>
              </div>
            </div>
          </TECollapse>
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaMarcoPost;
