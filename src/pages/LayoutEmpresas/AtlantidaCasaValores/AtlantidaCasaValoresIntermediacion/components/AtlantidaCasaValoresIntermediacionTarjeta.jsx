import dineroIcono from "../../../../../images/indicador2.png";

import { TECollapse } from "tw-elements-react";
import { useState } from "react";

const AtlantidaCasaValoresIntermediacionTarjeta = () => {
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
      <div className="grid grid-cols-1 md:gap-10 gap-8">
        <article className="bg-[#F3F3F3] md:px-10 px-2 md:py-12 py-5 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            decoding="async"
            loading="lazy"
            className="w-20"
            src={dineroIcono}
          />
          <h3 className=" family-nunito-black text-xl border-b-2 py-3 border-primary-color">
            Listado
          </h3>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="listadoValores">
            <button
              className={`${
                activeElement === "listadoValores" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("listadoValores")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Descripción</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "listadoValores"
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
            show={activeElement === "listadoValores"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti possimus fugit unde nihil nemo dicta! Enim ratione ad
              excepturi ut reiciendis amet. Accusantium dolores accusamus, odit
              inventore distinctio minus!
            </p>
          </TECollapse>

          {/* Accordion 2 */}
          <h2 className="mb-0" id="listadoPortafolios">
            <button
              className={`${
                activeElement === "listadoPortafolios" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("listadoPortafolios")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Administración de portafolios</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "listadoPortafolios"
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
            show={activeElement === "listadoPortafolios"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti possimus fugit unde nihil nemo dicta! Enim ratione ad
              excepturi ut reiciendis amet. Accusantium dolores accusamus, odit
              inventore distinctio minus!
            </p>
          </TECollapse>

          {/* Accordion 3 */}
          <h2 className="mb-0" id="listadoFinanciera">
            <button
              className={`${
                activeElement === "listadoFinanciera" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("listadoFinanciera")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Estructuración Financiera de Emisiones de Valores
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "listadoFinanciera"
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
            show={activeElement === "listadoFinanciera"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti possimus fugit unde nihil nemo dicta! Enim ratione ad
              excepturi ut reiciendis amet. Accusantium dolores accusamus, odit
              inventore distinctio minus!
            </p>
          </TECollapse>

          {/* Accordion 4 */}
          <h2 className="mb-0" id="listadoLegal">
            <button
              className={`${
                activeElement === "listadoLegal" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("listadoLegal")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Estructuración Legal de Emisiones de Valores
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "listadoLegal"
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
            show={activeElement === "listadoLegal"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti possimus fugit unde nihil nemo dicta! Enim ratione ad
              excepturi ut reiciendis amet. Accusantium dolores accusamus, odit
              inventore distinctio minus!
            </p>
          </TECollapse>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresIntermediacionTarjeta;
