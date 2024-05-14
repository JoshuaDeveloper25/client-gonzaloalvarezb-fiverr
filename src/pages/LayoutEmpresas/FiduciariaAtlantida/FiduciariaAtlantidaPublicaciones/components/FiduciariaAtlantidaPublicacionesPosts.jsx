import pdfIcono from "../../../../../images/pdf-icono.png";
import { TECollapse } from "tw-elements-react";
import { useState } from "react";

const FiduciariaAtlantidaPublicacionesPosts = () => {
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
      <div className="space-y-6">
        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">
              Fiduciaria Atlántida
            </h3>
          </div>

          {/* Accordion */}
          <h2 className="mb-0" id="documentosFiduciaria">
            <button
              className={`${
                activeElement === "documentosFiduciaria" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentosFiduciaria")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Documentos</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentosFiduciaria"
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
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">Fondos</h3>
          </div>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="fideicomisos1">
            <button
              className={`${
                activeElement === "fideicomisos1" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Fondo Fit</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos1"
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
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 2 */}
          <h2 className="mb-0" id="fideicomisos2">
            <button
              className={`${
                activeElement === "fideicomisos2" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Fondo Élite</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos2"
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
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 3 */}
          <h2 className="mb-0" id="fideicomisos3">
            <button
              className={`${
                activeElement === "fideicomisos3" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Fondo Ágil</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fondoAgil"
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
            show={activeElement === "fondoAgil"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">
              Fideicomisos de Titularización
            </h3>
          </div>

          {/* Accordion 1 */}
          <h2 className="mb-0" id="fideicomisos1">
            <button
              className={`${
                activeElement === "fideicomisos1" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Primera Titularización Cartera Factorplus
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos1"
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
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 2 */}
          <h2 className="mb-0" id="fideicomisos2">
            <button
              className={`${
                activeElement === "fideicomisos2" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Primera Titularización Cartera Automotriz - Originarsa
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos2"
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
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 3 */}
          <h2 className="mb-0" id="fideicomisos3">
            <button
              className={`${
                activeElement === "fideicomisos3" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Fideicomiso de Titularización de Cartera Novacredit III
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos3"
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
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 4 */}
          <h2 className="mb-0" id="fideicomisos4">
            <button
              className={`${
                activeElement === "fideicomisos4" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Fideicomiso de Titularización de Cartera Novacredit IV
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos4"
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
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 5 */}
          <h2 className="mb-0" id="fideicomisos5">
            <button
              className={`${
                activeElement === "fideicomisos5" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Primera Titularización Cartera Microcrédito Insotec
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos5"
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
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 6 */}
          <h2 className="mb-0" id="fideicomisos6">
            <button
              className={`${
                activeElement === "fideicomisos6" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos6")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Titularización Guayaquil Countr y Club
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos6"
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
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 7 */}
          <h2 className="mb-0" id="fideicomisos7">
            <button
              className={`${
                activeElement === "fideicomisos7" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos7")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Segunda Titularización Cartera Microcrédito Insotec
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos7"
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
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 8 */}
          <h2 className="mb-0" id="fideicomisos8">
            <button
              className={`${
                activeElement === "fideicomisos8" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos8")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Primera Titularización Sindicada Rentas NX - RNT
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos8"
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
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 9 */}
          <h2 className="mb-0" id="fideicomisos9">
            <button
              className={`${
                activeElement === "fideicomisos9" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos9")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Fideicomiso de Titularización de Cartera Novacredit V
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos9"
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
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 10 */}
          <h2 className="mb-0" id="fideicomisos10">
            <button
              className={`${
                activeElement === "fideicomisos10" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos10")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Segunda Titularización de Cartera Factorplus
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos10"
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
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 11 */}
          <h2 className="mb-0" id="fideicomisos11">
            <button
              className={`${
                activeElement === "fideicomisos11" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos11")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Tercera Titularización de Cartera Microcredito Insotec
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos11"
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
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 12 */}
          <h2 className="mb-0" id="fideicomisos12">
            <button
              className={`${
                activeElement === "fideicomisos12" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos12")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Fideicomiso Titularizacion Proyecto Nuevo Transporte Guayaquil
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos12"
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
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>

          {/* Accordion 13 */}
          <h2 className="mb-0" id="fideicomisos13">
            <button
              className={`${
                activeElement === "fideicomisos13" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fideicomisos13")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Fideicomiso Titularizacion Botaniqo</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fideicomisos13"
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
            show={activeElement === "fideicomisos13"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">
              Fideicomisos Inmobiliarios
            </h3>
          </div>

          {/* Accordion */}
          <h2 className="mb-0" id="documentosFideicomisos">
            <button
              className={`${
                activeElement === "documentosFideicomisos" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentosFideicomisos")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Documentos</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentosFideicomisos"
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
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">Encargo Fiduciario</h3>
          </div>

          {/* Accordion */}
          <h2 className="mb-0" id="documentosEncargo">
            <button
              className={`${
                activeElement === "documentosEncargo" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentosEncargo")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Documentos</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentosEncargo"
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
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">
              Fideicomiso de Administración
            </h3>
          </div>

          {/* Accordion */}
          <h2 className="mb-0" id="documentosAdmin">
            <button
              className={`${
                activeElement === "documentosAdmin" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentosAdmin")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Documentos</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentosAdmin"
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
            show={activeElement === "documentosAdmin"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">
              Fideicomiso de Inversión
            </h3>
          </div>

          {/* Accordion */}
          <h2 className="mb-0" id="documentosInversion">
            <button
              className={`${
                activeElement === "documentosInversion" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentosInversion")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Documentos</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentosInversion"
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
            show={activeElement === "documentosInversion"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">
              Fideicomiso de Garantía
            </h3>
          </div>

          {/* Accordion */}
          <h2 className="mb-0" id="documentosGarantia">
            <button
              className={`${
                activeElement === "documentosGarantia" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentosGarantia")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Documentos</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentosGarantia"
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
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95">
          <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
            <img
              loading="lazy"
              decoding="async"
              className="w-12 h-12 object-cover"
              src={pdfIcono}
            />
            <h3 className="family-nunito-black text-xl">
              Rendiciones Cuentas de Encargos Fiduciarios SAGAP
            </h3>
          </div>

          {/* Accordion */}
          <h2 className="mb-0" id="documentosSAGAP">
            <button
              className={`${
                activeElement === "documentosSAGAP" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("documentosSAGAP")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Documentos</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "documentosSAGAP"
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
            show={activeElement === "documentosSAGAP"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p>
          </TECollapse>
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaPublicacionesPosts;
