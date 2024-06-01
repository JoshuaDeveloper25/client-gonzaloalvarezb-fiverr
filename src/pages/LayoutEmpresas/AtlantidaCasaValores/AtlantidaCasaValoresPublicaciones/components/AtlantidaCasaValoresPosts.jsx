import descargar1Icono from "../../../../../images/descargar-1.png";
import descargar2Icono from "../../../../../images/descargar-2.png";
import { useState } from "react";

import PDFAccordion from "../../../../../components/PDFAccordion";
import { TECollapse } from "tw-elements-react";

const AtlantidaCasaValoresPosts = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <section className="container-page my-12">
      <div className="grid items-start sm:grid-cols-2 grid-cols-1 md:gap-16 gap-8">
        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-18 h-18 object-cover"
            src={descargar1Icono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Publicaciones 2024
          </h3>

          {/* Accordion */}
          <h2 className="mb-0" id="publicacion2024">
            <button
              className={`${
                activeElement === "publicacion2024" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("publicacion2024")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Click para desplegar toda la información
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "publicacion2024"
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

          <PDFAccordion
            LinkText={"Resolución No. SCVS INMV DNAR 2024 00009518"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2024/05/resolucion-9518-INSCRIP-OP-VAL-JUAN-DIEGO-PAZ-Y-MINO-firmada.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2024"}
            className={"py-5"}
          />

          <PDFAccordion
            LinkText={"Resolución No. SCVS-INMV-DNAR-2024-00006524"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2024/04/resolucion-No-SCVS-INMV-DNAR-2024-00006524-operador-de-valores-sra-diana-carolina-pena-brandoFHRL.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2024"}
            className={"py-0"}
          />

          <PDFAccordion
            LinkText={"Resolución No. SCVS-INMV-DNAR-2024-00005769"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2024/03/resolucion-5769-marg-moi-y-mo-atlantida.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2024"}
            className={"py-0"}
          />

          <PDFAccordion
            LinkText={"Resolución SCVS-INMV-DNAR-2024-00003974"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2024/02/resolucion-no-SCVS-INMV-DNAR-2024-00003974.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2024"}
            className={"py-0"}
          />
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-18 h-18 object-cover"
            src={descargar1Icono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Publicaciones 2023
          </h3>

          {/* Accordion */}
          <h2 className="mb-0" id="publicacion2023">
            <button
              className={`${
                activeElement === "publicacion2023" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("publicacion2023")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Click para desplegar toda la información
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "publicacion2023"
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

          <PDFAccordion
            LinkText={"Aviso de privacidad de datos personales ACCITLAN"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2023/05/Aviso-de-privacidad-proteccio%CC%81n-de-datos-personales-ACCITLAN.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2023"}
            className={"py-5"}
          />

          <PDFAccordion
            LinkText={"Resolución SCVS-INMV-DNAR-2023-00040716"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2023/07/RESOLUCION-40716-MARG.-MANUAL-L.A.-ACCITLAN-signed.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2023"}
            className={"py-0"}
          />
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-18 h-18 object-cover"
            src={descargar1Icono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Publicaciones 2022
          </h3>

          {/* Accordion */}
          <h2 className="mb-0" id="publicacion2022">
            <button
              className={`${
                activeElement === "publicacion2022" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("publicacion2022")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Click para desplegar toda la información
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "publicacion2022"
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

          <PDFAccordion
            LinkText={"Resolución SCVS-INMV-DNAR-2022-00005850"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2022/08/atlantida-casa-de-valores-resolucion-5058.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2022"}
            className={"py-5"}
          />

          <PDFAccordion
            LinkText={"Resolución SCVS-INMV-DNAR-2022-00005778"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2022/08/atlantida-casa-de-valores-resolucion-cancelacion-operador-de-valores.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2022"}
            className={"py-0"}
          />

          <PDFAccordion
            LinkText={"Resolución SCVS-INMV-DNAR-2022-00003419"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2022/04/resolucion-no-SCVS-INMV-DNAR-2022-00003-419-JUAN-DIEGO-PAZ-Y-MINO-JARAMILLO.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2022"}
            className={"py-0"}
          />

          <PDFAccordion
            LinkText={"Resolución SCVS-INMV-DNAR-2022-00004367"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2022/06/atlantida-casa-de-valores-20220610150744.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2022"}
            className={"py-0"}
          />
        </article>

        <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-18 h-18 object-cover"
            src={descargar1Icono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Publicaciones 2021
          </h3>

          {/* Accordion */}
          <h2 className="mb-0" id="publicacion2021">
            <button
              className={`${
                activeElement === "publicacion2021" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("publicacion2021")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Click para desplegar toda la información
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "publicacion2021"
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

          <PDFAccordion
            LinkText={"Resolución 4282"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2022/04/resolucion-4282-marginacion-manual-de-lavado-de-activos-signed.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2021"}
            className={"py-5"}
          />

          <PDFAccordion
            LinkText={"Resolución 5579"}
            LinkTo={
              "https://suratlantida.com/casa-de-valores/wp-content/uploads/2022/04/fiduciaria-atlantida-resolucion-5579-marginacion-manuales-atlantida-signed.pdf"
            }
            activeElement={activeElement}
            id={"publicacion2021"}
            className={"py-0"}
          />
        </article>

        {/* <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-18 h-18 object-cover"
            src={descargar1Icono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Publicaciones 2020
          </h3>

          <h2 className="mb-0" id="publicacion2020">
            <button
              className={`${
                activeElement === "publicacion2020" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("publicacion2020")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Click para desplegar toda la información
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "publicacion2020"
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
            show={activeElement === "publicacion2020"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <div className="flex gap-3 space-y-2 items-center">
              <div>
                <img
                  className="w-9"
                  loading="lazy"
                  decoding="async"
                  src={descargar2Icono}
                />
              </div>

              <div>
                <p className="text-md">
                  Aviso de privacidad de datos personales 1
                </p>
              </div>
            </div>
            <div className="flex gap-3 space-y-2 items-center">
              <div>
                <img
                  className="w-9"
                  loading="lazy"
                  decoding="async"
                  src={descargar2Icono}
                />
              </div>

              <div>
                <p className="text-md">
                  Aviso de privacidad de datos personales 2
                </p>
              </div>
            </div>

            <div className="flex gap-3 space-y-2 items-center">
              <div>
                <img
                  className="w-9"
                  loading="lazy"
                  decoding="async"
                  src={descargar2Icono}
                />
              </div>

              <div>
                <p className="text-md">
                  Aviso de privacidad de datos personales 3
                </p>
              </div>
            </div>

            <div className="flex gap-3 space-y-2 items-center">
              <div>
                <img
                  className="w-9"
                  loading="lazy"
                  decoding="async"
                  src={descargar2Icono}
                />
              </div>

              <div>
                <p className="text-md">
                  Aviso de privacidad de datos personales 4
                </p>
              </div>
            </div>
          </TECollapse>
        </article> */}

        {/* <article className="bg-[#F3F3F3] md:px-10 px-2 py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-18 h-18 object-cover"
            src={descargar1Icono}
          />
          <h3 className="family-nunito-black text-xl border-b-2 py-1 border-primary-color">
            Publicaciones 2019
          </h3>

          <h2 className="mb-0" id="publicacion2019">
            <button
              className={`${
                activeElement === "publicacion2019" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("publicacion2019")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">
                  Click para desplegar toda la información
                </p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "publicacion2019"
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
            show={activeElement === "publicacion2019"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
          >
            <div className="flex gap-3 space-y-2 items-center">
              <div>
                <img
                  className="w-9"
                  loading="lazy"
                  decoding="async"
                  src={descargar2Icono}
                />
              </div>

              <div>
                <p className="text-md">
                  Aviso de privacidad de datos personales 1
                </p>
              </div>
            </div>
            <div className="flex gap-3 space-y-2 items-center">
              <div>
                <img
                  className="w-9"
                  loading="lazy"
                  decoding="async"
                  src={descargar2Icono}
                />
              </div>

              <div>
                <p className="text-md">
                  Aviso de privacidad de datos personales 2
                </p>
              </div>
            </div>

            <div className="flex gap-3 space-y-2 items-center">
              <div>
                <img
                  className="w-9"
                  loading="lazy"
                  decoding="async"
                  src={descargar2Icono}
                />
              </div>

              <div>
                <p className="text-md">
                  Aviso de privacidad de datos personales 3
                </p>
              </div>
            </div>

            <div className="flex gap-3 space-y-2 items-center">
              <div>
                <img
                  className="w-9"
                  loading="lazy"
                  decoding="async"
                  src={descargar2Icono}
                />
              </div>

              <div>
                <p className="text-md">
                  Aviso de privacidad de datos personales 4
                </p>
              </div>
            </div>
          </TECollapse>
        </article> */}
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresPosts;
