import { TECollapse } from "tw-elements-react";
import { useState } from "react";

const AtlantidaCasaValoresFinanciamientoTarjetas = () => {
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
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Facturas comerciales
          </h3>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="facturasComercialesDescripcion">
            <button
              className={`${
                activeElement === "facturasComercialesDescripcion" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("facturasComercialesDescripcion")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Descripción</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "facturasComercialesDescripcion"
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
            show={activeElement === "facturasComercialesDescripcion"}
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
          <h2 className="mb-0" id="facturasComercialesCronograma">
            <button
              className={`${
                activeElement === "facturasComercialesCronograma" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("facturasComercialesCronograma")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Pasos cronograma</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "facturasComercialesCronograma"
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
            show={activeElement === "facturasComercialesCronograma"}
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
          <h2 className="mb-0" id="facturasComercialesClientes">
            <button
              className={`${
                activeElement === "facturasComercialesClientes" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("facturasComercialesClientes")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Nuestros clientes</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "facturasComercialesClientes"
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
            show={activeElement === "facturasComercialesClientes"}
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

        <article className="bg-[#F3F3F3] md:px-10 px-2 md:py-12 py-5 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Papel comercial
          </h3>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="papelComercialDecripcion">
            <button
              className={`${
                activeElement === "papelComercialDecripcion" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("papelComercialDecripcion")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Descripción</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "papelComercialDecripcion"
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
            show={activeElement === "papelComercialDecripcion"}
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
          <h2 className="mb-0" id="papelComercialGarantias">
            <button
              className={`${
                activeElement === "papelComercialGarantias" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("papelComercialGarantias")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Garantías</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "papelComercialGarantias"
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
            show={activeElement === "papelComercialGarantias"}
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
          <h2 className="mb-0" id="papelComercialCronograma">
            <button
              className={`${
                activeElement === "papelComercialCronograma" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("papelComercialCronograma")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Cronograma Papel Comercial</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "papelComercialCronograma"
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
            show={activeElement === "papelComercialCronograma"}
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
          <h2 className="mb-0" id="papelComercialClientes">
            <button
              className={`${
                activeElement === "papelComercialClientes" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("papelComercialClientes")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Nuestros clientes</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "papelComercialClientes"
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
            show={activeElement === "papelComercialClientes"}
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

        <article className="bg-[#F3F3F3] md:px-10 px-2 md:py-12 py-5 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Emisión de Obligaciones
          </h3>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="emisionObligacionesDescripcion">
            <button
              className={`${
                activeElement === "emisionObligacionesDescripcion" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("emisionObligacionesDescripcion")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Descripción</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "emisionObligacionesDescripcion"
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
            show={activeElement === "emisionObligacionesDescripcion"}
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
          <h2 className="mb-0" id="emisionObligacionesTipos">
            <button
              className={`${
                activeElement === "emisionObligacionesTipos" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("emisionObligacionesTipos")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Tipos de Obligaciones</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "emisionObligacionesTipos"
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
            show={activeElement === "emisionObligacionesTipos"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <div className="md:px-7">
              <h3 className="family-nunito-regular font-bold">
                Obligaciones Convertibles en Acciones (OCAS)
              </h3>
              <p>
                Son obligaciones con amortización de capital al vencimiento, en
                donde el inversionista decidirá si quiere que le paguen el
                capital o si prefiere ser socio/accionista de la empresa.
              </p>

              <h3 className="family-nunito-regular mt-5 font-bold">
                Obligaciones regulares
              </h3>
              <p>
                Las obligaciones regulares son títulos valor que representan un
                compromiso de pago al inversionista.
              </p>
            </div>
          </TECollapse>

          {/* Accordion 3 */}
          <h2 className="mb-0" id="emisionObligacionesGarantias">
            <button
              className={`${
                activeElement === "emisionObligacionesGarantias" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("emisionObligacionesGarantias")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Garantías</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "emisionObligacionesGarantias"
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
            show={activeElement === "emisionObligacionesGarantias"}
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
          <h2 className="mb-0" id="emisionObligacionesCronogramas">
            <button
              className={`${
                activeElement === "emisionObligacionesCronogramas" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("emisionObligacionesCronogramas")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Cronogramas de la Emisión</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "emisionObligacionesCronogramas"
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
            show={activeElement === "emisionObligacionesCronogramas"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti possimus fugit unde nihil nemo dicta! Enim ratione ad
              excepturi ut reiciendis amet. Accusantium dolores accusamus, odit
              inventore distinctio minus!
            </p>
          </TECollapse>

          {/* Accordion 5 */}
          <h2 className="mb-0" id="emisionObligacionesClientes">
            <button
              className={`${
                activeElement === "emisionObligacionesClientes" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("emisionObligacionesClientes")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Nuestros Clientes</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "emisionObligacionesClientes"
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
            show={activeElement === "emisionObligacionesClientes"}
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

        <article className="bg-[#F3F3F3] md:px-10 px-2 md:py-12 py-5 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Acciones
          </h3>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="accionesDescripcion">
            <button
              className={`${
                activeElement === "accionesDescripcion" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("accionesDescripcion")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Descripción</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "accionesDescripcion"
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
            show={activeElement === "accionesDescripcion"}
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
          <h2 className="mb-0" id="accionesTipos">
            <button
              className={`${
                activeElement === "accionesTipos" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("accionesTipos")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Tipos de Acciones</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "accionesTipos"
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
            show={activeElement === "accionesTipos"}
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

        <article className="bg-[#F3F3F3] md:px-10 px-2 md:py-12 py-5 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Titularización
          </h3>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="titularizacionDescripcion">
            <button
              className={`${
                activeElement === "titularizacionDescripcion" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("titularizacionDescripcion")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Descripción</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "titularizacionDescripcion"
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
            show={activeElement === "titularizacionDescripcion"}
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
          <h2 className="mb-0" id="titularizacionTipos">
            <button
              className={`${
                activeElement === "titularizacionTipos" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("titularizacionTipos")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Tipos de Titularizaciones</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "titularizacionTipos"
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
            show={activeElement === "titularizacionTipos"}
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
          <h2 className="mb-0" id="titularizacionClientes">
            <button
              className={`${
                activeElement === "titularizacionClientes" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("titularizacionClientes")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Nuestros clientes</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "titularizacionClientes"
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
            show={activeElement === "titularizacionClientes"}
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

export default AtlantidaCasaValoresFinanciamientoTarjetas;
