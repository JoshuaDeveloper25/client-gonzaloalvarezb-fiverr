import pdfIcono from "../../../../../images/pdf-icono.png";
import { TECollapse } from "tw-elements-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import downloadIcon from "../../../../../images/descargar-2.png";

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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Certifcado-de-Inscripción.pdf"
                  }
                >
                  Certificado de Inscripción
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Resolución-Autorización-Fiduamericas.pdf"
                  }
                >
                  Resolución Autorización Fiduamericas
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Manual-de-prevención.pdf"
                  }
                >
                  Manuales de Prevención
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Resolución-No-SCVS-IRQ-DRMV-2020-00001420.pdf"
                  }
                >
                  Resolución Nº SCVS-IRQ-DRMV-2020-00001420 (Fecha Publicación
                  27FEB2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Extracto-Cambio-Denominación.pdf"
                  }
                >
                  Extracto Cambio Denominación (Fecha Publicación 27FEB2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/03/EXTRACTO-AUMENTO-DE-CAPITAL-FIDUTLAN-signed.pdf"
                  }
                >
                  Extracto Aumento de Capital (Fecha Publicación 15MAR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/03/RES-AUMENTO-DE-CAPITAL-FIDUTLAN-signed.pdf"
                  }
                >
                  Resolución Aumento de Capital (Fecha Publicación 15MAR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/05/AVISO-DE-PRIVACIDAD-PROTECCION-DE-DATOS-PERSONALES-PARA-PUBLICAR-MAY-2023.pdf"
                  }
                >
                  Aviso de Privacidad de Protección de Datos Personales (Fecha
                  Publicación 24MAY2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/07/Resolucion-00040504-Marginacion-Manuales-Fidutlan.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00040504 - Marginación
                  Manuales Fiduciaria Atlántida (Fecha Publicación 12JUL2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFiduciaria"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/09/Resolucion-No.-SCVS-IRQ-DRMV-2023-00042710.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00042710 - Reformas Manuales
                  Fiduciaria Atlántida (Fecha Publicación 22SEP2023)
                </Link>
              </div>
            </div>
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
          <h2 className="mb-0" id="fondos1">
            <button
              className={`${
                activeElement === "fondos1" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fondos1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Fondo Fit</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fondos1"
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
            show={activeElement === "fondos1"}
            className="!mt-0 !rounded-b-none !shadow-none py-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/1.-Resolución-Aprobación-Fondo-FIT-Fiduamericas.pdf"
                  }
                >
                  Resolución Aprobación Fondo Fit
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fondos1"}
            className="!mt-0 !rounded-b-none !shadow-none py-5 my-7"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/2.-Certificado-De-Inscripción-SC-Fondo-FIT.pdf"
                  }
                >
                  Certificado de Inscripción Fondo Fit
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fondos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/calificacion-certificado-fit-dic-23.pdf"
                  }
                >
                  Certificado de Calificación Fondo Fit
                </Link>
              </div>
            </div>
          </TECollapse>

          {/* Accordion 2 */}
          <h2 className="mb-0" id="fondos2">
            <button
              className={`${
                activeElement === "fondos2" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fondos2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Fondo Élite</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "fondos2"
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
            show={activeElement === "fondos2"}
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/12/resolucion-autorizacion-fondo-elite-17-diciembre8421.pdf"
                  }
                >
                  Resolución Aprobación Fondo de Inversión Administrado Elite (21DIC2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fondos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/10/Fondo-Elite-Certificado-de-inscripcion.pdf"
                  }
                >
                  Certificado de Inscripción Fondo Élite
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fondos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/calificacion-certificado-elite-dic-23.pdf"
                  }
                >
                  Certificado de Calificación Fondo Élite
                </Link>
              </div>
            </div>
          </TECollapse>

          {/* Accordion 3 */}
          <h2 className="mb-0" id="fondos3">
            <button
              className={`${
                activeElement === "fondos3" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start pt-5 pb-4 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fondos3")}
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
            show={activeElement === "fondos3"}
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/03/RESOLUCION-5649-INSCRIPCION-FONDO-DE-INVERSION-AGIL.pdf"
                  }
                >
                  Resolución Aprobación Fondo de Inversión Administrado Ágil
                  (15MAR2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fondos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/03/Certificado-de-Inscripcion-Fondo-de-Inv-Adm-AGIL.pdf"
                  }
                >
                  Certificado de Inscripción Fondo Agil
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fondos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/certificado-fondo-agil-abril-2024.pdf"
                  }
                >
                  Certificado de Calificación Fondo Ágil
                </Link>
              </div>
            </div>
          </TECollapse>

          {/* Accordion 4 */}
          <h2 className="mb-0" id="fondos4">
            <button
              className={`${
                activeElement === "fondos4" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start  pb-4 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("fondos4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <p className="text-sm">Fondo Confía</p>
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
            show={activeElement === "fondos4"}
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/2.-Certificado-de-Inscripción-Fondo-de-Inv-Adm-CONFIA.pdf"
                    // "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/resolucion-9527-inscrip-fondo-de-inv-adm-confia-002.pdf"
                  }
                >
                  {/* Resolución No. SCVS-INMV-DNAR-2024-00009527 */}
                  Certificado de inscripción
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fondos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    // "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/certificado-de-inscripcion-fondo-de-inv-adm-confia.pdf"
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/1.-RESOLUCION-9527-INSCRIP.-FONDO-DE-INV.-ADM.-CONFIA.pdf"
                  }
                >
                  Resolución de aprobación
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/SCVS-IRQ-DRMV-SAR-208-0006310-Factorplus.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Resolución No.
                  SCVS-IRQ-DRMV-SAR-2018-00006310 (21JUL2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/Resolucion-No.-SCVS-IRQ-DRMV-2020-00006912.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Resolución No.
                  SCVS-IRQ-DRMV-2020-00006912 (30OCT2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/Resolucion-No.-SCVS-IRQ-DRMV-2023-00037569.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Resolución No.
                  SCVS-IRQ-DRMV-2023-00037569 (14ABR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/CONVOCATORIA-ASAMBLEA-GENERAL-DE-INVERSIONISTAS.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Primera
                  Convocatoria Asamblea - (Fecha Publicación 31OCT2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/SEGUNDA-CONVOCATORIA-ASAMBLEA-GENERAL-DE-INVERSIONISTAS-FACTORPLUS.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Segunda
                  Convocatoria Asamblea - (Fecha Publicación 01FEB2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/TERCERA-CONVOCATORIA-ASAMBLEA-GENERAL-DE-INVERSIONISTAS-FACTORPLUS30ABR2019.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Tercera
                  Convocatoria Asamblea - (Fecha Publicación 30ABR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/CUARTA-CONVOCATORIA-ASAMBLEA-INVERSIONISTAS-FACTORPLUS-26JUL2019.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Cuarta
                  Convocatoria Asamblea - (Fecha Publicación 26JUL2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/5TA.-CONVOCATORIA-ASAMBLEA-INVERSIONISTAS-FACTORPLUS.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Quinta
                  Convocatoria Asamblea - (Fecha Publicación 04MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Acta-Asamblea-I-Tamo-13-V-2020.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Acta Asamblea
                  TRAMO I - (Fecha Publicación 19MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Escritura-publica-Reforma-Acta-de-Emision-Factorplus.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Adendum
                  Reformatorio para el Acta de Emisión
                  "VTC-PRIMERA-1-FACTORPLUS" - (Fecha Publicación 22JUN2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/RENDICION-DE-CUENTAS-INVERSIONISTAS-NOV.-2018-Factorplus.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 1era. Rendición
                  de Cuentas Inversionistas (30NOV2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/RENDICION-DE-CUENTAS-INVERSIONISTAS-FEB.-2019-Factorplus.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 2da. Rendición
                  de Cuentas Inversionistas (28FEB2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/RENDICION-DE-CUENTAS-INVERSIONISTAS-MAY.-2019-Factorplus.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 3era. Rendición
                  de Cuentas Inversionistas (31MAY2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/RENDICION-DE-CUENTAS-INVERSIONISTAS-AGO.-2019-Factorplus.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 4ta. Rendición
                  de Cuentas Inversionistas (31AGO2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Rendicion-de-cuentas-Inversionistas-Nov-2019.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 5ta. Rendición
                  de Cuentas Inversionistas (30NOV2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Rendicion-de-cuentas-Inversionistas-Feb-2020.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 6ta. Rendición
                  de Cuentas Inversionistas (28FEB2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Rendicion-de-cuentas-Inversionistas-May-2020.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 7ma. Rendición
                  de Cuentas Inversionistas (31MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/Rendicion-de-cuentas-Ago-2020-Inversionistas.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 8va. Rendición
                  de Cuentas Inversionistas (31AGO2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/12/Factorplus-Rendicion-de-cuentas-Nov-2020-Inversionistas.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 9na. Rendición
                  de Cuentas Inversionistas (30NOV2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/Factorplus-Rendicion-de-cuentas-Feb-2021-Inversionistas.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 10ma. Rendición
                  de Cuentas Inversionistas (28FEB2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/07/12.-Rendicion-de-cuentas-May.-2021.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 11ra. Rendición
                  de Cuentas Inversionistas (31MAY2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/13.-Rendicion-de-cuentas-Ago.-2021.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 12da. Rendición
                  de Cuentas Inversionistas (31AGO2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/14.-Rendicion-de-cuentas-Nov.-2021.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 13ra. Rendición
                  de Cuentas Inversionistas (30NOV2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/03/Factorplus-Rendicion-de-cuentas-Feb-2022-Inversionistas.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 14ta. Rendición
                  de Cuentas Inversionistas (28FEB2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Factorplus-Rendicion-de-cuentas-Mayo2022-Inversionistas.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 15ta. Rendición
                  de Cuentas Inversionistas (31MAY2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/09/Rendicion-de-cuentas-Ago-2022-Inversionistas.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 16ta. Rendición
                  de Cuentas Inversionistas (31AGO2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/17.-Rendicion-de-cuentas-Dic.-2022.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: 17ta. Rendición
                  de Cuentas Inversionistas (31DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/TITULARIZACION-DE-CARTERA-FACTORPLUS-Dic.-2018.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (DIC2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/EXTRACTO-CALIFICADORA-DE-RIESGO-Factorplus-Abr.-2019.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (ABR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/TITULARIZACION-DE-CARTERA-FACTORPLUS-Oct.-2019.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (OCT2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/TITULARIZACION-DE-CARTERA-FACTORPLUS-Abr.2020.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/TITULARIZACION-DE-CARTERA-FACTORPLUS-Oct.-2020.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (OCT2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/TITULARIZACION-DE-CARTERA-FACTORPLUS-Abr.-2021.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (ABR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/INFORMEFINAL-FACTORPLUS-OCT-2021.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (OCT2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/TITULARIZACION-DE-CARTERA-FACTORPLUS-Abr.2022.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (ABR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos1"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/335-2022-INFORMEFINAL-FACTORPLUS-1TIT-DIC.pdf"
                  }
                >
                  Factorplus- Primera Titularización de Cartera: Extracto
                  Calificadora de Riesgo (OCT2022)
                </Link>
              </div>
            </div>
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
                    "https://drive.google.com/file/d/1m-AR-rf3KbegWItTTGgp7nuXIsomXPnH/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Resolucion No. SCVS-IRQ-DRMV-SAR-2018-000010445 (16NOV2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/03/RESOL-Cancelacion-Tit-Originarsa.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Resolucion No. SCVS-IRQ-DRMV-2023-00036838 (16MAR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1m2NJ8H7oGyV0CHpYEXwNjHJdUaCdl34f/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Extracto Calificadora de Riesgo (NOV2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1G8XwMzCDeQs_ZlL8jGDf89hvl1tqdC7r/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Extracto Calificadora de Riesgo (MAR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1wq7zhcCKFsAskwxeOKHnupbnvBAWXP3Z/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Extracto Calificadora de Riesgo (JUL2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/Tit.-Originarsa-Informe-Calificacion-Riesgos-Jul-2020.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Extracto Calificadora de Riesgo (JUL2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/Informe-Calificacion-de-Riesgos-Ene-2021.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Extracto Calificadora de Riesgo (ENE2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Informe-Calificacion-Riesgos-Jul-2021.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Extracto Calificadora de Riesgo (JUL2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/090-2022-INFORMEFINAL-ORIGINARSA-1TIT-MARZO.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Extracto Calificadora de Riesgo (DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/11/269-2022-INFORMEFINAL-ORIGINARSA-1TIT-SEP.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Extracto Calificadora de Riesgo (JUL2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/13P02rMCtkaoc1hrv9VI4QYNOAplQb___/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Primera Convocatoria Asamblea (Fecha Publicación 15ene2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1Bf7bqDwFv6Kx6i4gO70fgCPz-KDlDYM9/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  Segunda Convocatoria Asamblea (Fecha Publicación 16mar2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1wwDrkWhPS7eMZ7FdK1HZVsbhaW8w_wcy/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  1era. Rendición de Cuentas Inversionistas (31DIC2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1amUdfm-x9AX4wL9bO_sGMLKexZvZHl-i/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz: 2da.
                  Rendición de Cuentas Inversionistas (31MAR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1RVy3QFWLZy3GXY_b0xAOGKaZd8_1pmsN/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  3era. Rendición de Cuentas Inversionistas (30JUN2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1hBSLTlFV3JoVYLEVWHh30aJULDgrOCsq/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz: 4ta.
                  Rendición de Cuentas Inversionistas (30SEP2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1iOk_RWNxRMjdLvXcpD7Hl_VpQ02wRbnb/view?usp=sharing"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz: 5ta.
                  Rendición de Cuentas Inversionistas (31DIC2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Rendicion-de-cuentas-Mar2020-Inversionistas.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz: 5ta.
                  Rendición de Cuentas Inversionistas (31MAR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1n0loSXuXG5i4FdD5Vl__Z7QciQOqBes8/view"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz: 6ta.
                  Rendición de Cuentas Inversionistas (30JUN2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/Originarsa-Rendicion-de-cuentas-Sep2020-inversionistas.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz: 7ma.
                  Rendición de Cuentas Inversionistas (30SEP2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/02/Originarsa-Rendicion-de-cuentas-Dic2020-Inversionistas.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz: 8va.
                  Rendición de Cuentas Inversionistas (31DIC2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/Originarsa-Rendicion-de-cuentas-Mar2021-Inversionistas.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz: 9na.
                  Rendición de Cuentas Inversionistas (31MAR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/07/Originarsa-Rendicion-de-cuentas-Jun2021-Inversionistas.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  10ma. Rendición de Cuentas Inversionistas (30JUN2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/11/Originarsa-Rendicion-de-cuentas-Sep2021-Inversionistas.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  11va. Rendición de Cuentas Inversionistas (30SEP2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/02/Originarsa-Rendicion-de-cuentas-Dic-2021-Inversionistas.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  12da. Rendición de Cuentas Inversionistas (31DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/12.-Rendicion-Cuentas-Mar.-2022.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  13ra. Rendición de Cuentas Inversionistas (31MAR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/07/Rendicion-de-cuentas-Junio-2022-inversionista.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  14va. Rendición de Cuentas Inversionistas (30JUN2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/Rendicion-de-cuentas-Septiembre-2022-Inversionistas-1.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  15va. Rendición de Cuentas Inversionistas (30SEPT2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos2"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/15.-Rendicion-de-cuentas-Dic-2022-Final.pdf"
                  }
                >
                  Originarsa- Primera Titularización de Cartera Automotriz:
                  16va. Rendición de Cuentas Inversionistas (31DIC2022)
                </Link>
              </div>
            </div>
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
                    "https://drive.google.com/file/d/1yAcmZJedfkbCb1yWLriERPE0HJU1aI0c/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Resolucion No. SCVS-IRQ-DRMV-SAR-2018-00011925 (21DIC2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/10/Resolucion-00069340-cance-Novacredit-III.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Resolucion No. SCVS-IRQ-DRMV-2023-00069340 (26OCTC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1sBpaN5mZtaQ9zxRJTuIP9Bt76GWbjJK6/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Extracto Calificadora de Riesgo (MAY2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/12/TIT.-NOVACREDIT-III-INFORME-CALIFICADORA-30-09-2019.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Extracto Calificadora de Riesgo (SEP2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/06/TIT.-NOVACREDIT-III-INFORME-CALIFICADORA-31-03-2021.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Extracto Calificadora de Riesgo (MAR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/TIT.-NOVACREDIT-III-INFORME-CALIFICADORA-30-11-2021.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Extracto Calificadora de Riesgo (NOV2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/07/218-2022-RESUMEN-NOVACREDIT-3TIT-JULIO-2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Extracto Calificadora de Riesgo (MAY2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/017-2023-INFORME-NOVECREDIT-3-TIT-ene23.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Extracto Calificadora de Riesgo (NOV2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1AdlEQaZUTxiW0LdlX1DivSl93CxMbt2D/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Primera Convocatoria Asamblea Clase A - Clase B (Fecha
                  Publicación 06MAR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1oy3dhb0CXEMpWrV0bYxwzYRi3xLG1cmm/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Segunda Convocatoria Asamblea Clase A - Clase B (Fecha
                  Publicación 05ABR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1Hjy9COra7rVyN8MEHKLhrjATebJfu53y/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Tercera Convocatoria Asamblea Clase A - Clase B (Fecha
                  Publicación 06MAY2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/19Nb0Lul1F3DpVPJ6xX7gxXZFUVky5N53/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Primera Convocatoria Asamblea Clase C (Fecha Publicación
                  03ABR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1NTQEBCmmqEcoq2YSHhdr0rQOECqGRDuT/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Segunda Convocatoria Asamblea Clase C (Fecha Publicación
                  03MAY2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1ldwnQ9sdYeZUGpL82EmUcoBS7rgzYGzI/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  Tercera Convocatoria Asamblea Clase C (Fecha Publicación
                  03JUN2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1aTHtR96jyD_8elGbwQV4S2l5Lto5ebk3/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  1era. Rendición de Cuentas Inversionistas (31MAR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1RxPFUXexCOO_vcNULXA2g9vxARdWJsx1/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III: 2da.
                  Rendición de Cuentas Inversionistas (30JUN2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/17fqn-McMjGsHanqVpkBuNbsFGGRknwZ2/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  3era. Rendición de Cuentas Inversionistas (30SEP2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1Zmb2CnPsOaiQ0xh287bvAtj-N9uCy1BZ/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III: 4ta.
                  Rendición de Cuentas Inversionistas (31DIC2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Rendicion-de-cuentas-Mar-2020-Inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III: 5ta.
                  Rendición de Cuentas Inversionistas (31MAR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1neHTKBJ150i-lE7Vh5IZJyLoPhdked4l/view"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III: 6ta.
                  Rendición de Cuentas Inversionistas (30JUN2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/Novacredit-III-Rendicion-de-cuentas-Sep-2020-inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III: 7ma.
                  Rendición de Cuentas Inversionistas (30SEP2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Rendicion-de-cuentas-Dic-2020-Inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III: 8va.
                  Rendición de Cuentas Inversionistas (31DIC2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/Rendicion-de-cuentas-Mar2021-Inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III: 9na.
                  Rendición de Cuentas Inversionistas (31MAR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/07/Rendicion-de-cuentas-Jun2021-Inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  10ma. Rendición de Cuentas Inversionistas (30JUN2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/11/Novacredit-III-Rendicion-de-cuentas-Sep-2020-inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  11va. Rendición de Cuentas Inversionistas (30SEP2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/02/Rendicion-de-cuentas-Dic-2021-inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  12da. Rendición de Cuentas Inversionistas (31DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/03/Rendicion-de-cuentas-Febrero-2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  13ra. Rendición de Cuentas Inversionistas (28FEB2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Tit.-Novacredit-III-Rendicion-de-cuentas-May22-Inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  14ta. Rendición de Cuentas Inversionistas (31MAY2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/09/Tit.-Novacredit-III-Rendicion-de-cuentas-Ago.22-Inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  15ta. Rendición de Cuentas Inversionistas (31AGO2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Tit.-Novacredit-III-Rendicion-de-cuentas-Nov22-Inversionistas-1.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  16ta. Rendición de Cuentas Inversionistas (30NOV2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos3"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/03/RENDICION-DE-CUENTAS-INVERSIONISTAS-FEBRERO-2023-TITULARIZACION-DE-CARTERA-NOVACREDIT-III-4.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera III:
                  17ta. Rendición de Cuentas Inversionistas (28FEB2023)
                </Link>
              </div>
            </div>
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
                    "https://drive.google.com/file/d/1zGuqzoU_4Vf06mCknAkVmrD2XsfWvjf5/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Resolucion No. SCVS-IRQ-DRMV-SAR-2019-00004833 (17JUN2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1dvx8cKrUkKFdfuAFi-I_xOAj5_EKy1hU/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (MAY2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/CALIFICACION-TIT.-NOVACREDIT-IV-Sep19.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (SEP2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/CALIFICACION-TIT.-NOVACREDIT-IV-Mar20.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (MAR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/12/CALIFICACION-TIT.-NOVACREDIT-IV-Sep20.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (SEP2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/06/CALIFICACION-TIT.-NOVACREDIT-IV-Mar.21.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (MAR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/12/CALIFICACION-TIT.-NOVACREDIT-IV-Sep.-21.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (SEP2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/CALIFICACION-TIT.-NOVACREDIT-IV-Mayo.22.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (MAR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/INFORME-CALIFICADORA-TIT.-NOVACREDIT-IV-SEPT-2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (SEP2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/05/111-2023-INFORME-FINAL-NOVACREDIT-4TIT-MAYO.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Extracto Calificadora de Riesgo (MAR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1opk0HCgBVV0q69TAbVW3p1dLi2GnLrrl/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 1era.
                  Rendición de Cuentas Inversionistas (31AGO2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1dJBktKI-gNYO9sccf53DHHxscSsI1TIq/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 2da.
                  Rendición de Cuentas Inversionistas (30NOV2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Rendicion-de-cuentas-Novacredit-IV-Inversionistas-Feb-2020.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 3ra.
                  Rendición de Cuentas Inversionistas (29FEB2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1ZbtSUKcfPVR1kqs8elTi6Of_WqIPyhAg/view"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 4ta.
                  Rendición de Cuentas Inversionistas (31MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/Rendicion-de-cuentas-Inversionistas-Ago-2020.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 5ta.
                  Rendición de Cuentas Inversionistas (31AGO2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/12/TIT.-NOVACREDIT-IV-Rendicion-de-cuentas-Inversionistas-Nov-2020.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 6ta.
                  Rendición de Cuentas Inversionistas (30NOV2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/Rendicion-de-cuentas-Inversionistas-Feb2021.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 7ma.
                  Rendición de Cuentas Inversionistas (28FEB2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/07/Rendicion-de-cuentas-Inversionistas-May2021.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 8va.
                  Rendición de Cuentas Inversionistas (31MAY2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/03/TIT.-NOVACREDIT-IV-Rendicion-de-cuentas-Inversionistas-Feb-2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 11ra.
                  Rendición de Cuentas Inversionistas (28FEB2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/TIT.-NOVACREDIT-IV-Rendicion-de-cuentas-Inversionistas-May2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 12da.
                  Rendición de Cuentas Inversionistas (31MAY2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/09/TIT.-NOVACREDIT-IV-Rendicion-de-cuentas-Inversionistas-Ago-2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 13ra.
                  Rendición de Cuentas Inversionistas (31AGO2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/TIT.-NOVACREDIT-IV-Rendicion-de-cuentas-Inversionistas-Nov-2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 14ra.
                  Rendición de Cuentas Inversionistas (30NOV2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/03/RENDICION-DE-CUENTAS-INVERSIONISTAS-FEBRERO-2023-TITULARIZACION-DE-CARTERA-NOVACREDIT-IV-3.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV: 15va.
                  Rendición de Cuentas Inversionistas (28FEB2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1y0fDMw90nr1wrHRLnSjsa3KhqETDN4c1/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Primera Convocatoria Asamblea Clase A (Fecha Publicación
                  14AGO2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1xvDyiDavKnK3_cUMTvDF2kgz3zhXwL-g/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Segunda Convocatoria Asamblea Clase A (Fecha Publicación
                  11SEP201)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1yEOMU82ugsZ72Y3Oy77KXGukDRB8yZiI/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Tercera Convocatoria Asamblea Clase A (Fecha Publicación
                  09OCT2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1yFhI3AaHWYq7wT2wDtRRf55jkg71wqLz/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Primera Convocatoria Asamblea Clase B (Fecha Publicación
                  18AGO2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1y3oI8JtluKT4FlwNqmI8st7FNKBW7PiS/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Segunda Convocatoria Asamblea Clase B (Fecha Publicación
                  17SEP201)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1y6bkuPtTiItsenKA_1wh1oQ7ZIeQGS-5/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Tercera Convocatoria Asamblea Clase B (Fecha Publicación
                  16OCT2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1y90OcE1mEO2SYFEWdep0HX0eJcH_pcOz/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Primera Convocatoria Asamblea Clase C (Fecha Publicación
                  25AGO2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1yAurS1kwZQpUg9ztt2S9w2xDP2iPZKsO/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Segunda Convocatoria Asamblea Clase C (Fecha Publicación
                  24SEP201)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos4"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1yBjjShBNcRues5HjI385FPZ9gIJ2hN2Z/view?usp=sharing"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera IV:
                  Tercera Convocatoria Asamblea Clase C (Fecha Publicación
                  24OCT2019)
                </Link>
              </div>
            </div>
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
                    "https://drive.google.com/file/d/1aK4yetaXmm4KnO4iuX2QPemtzNR2Upy6/view?usp=sharing"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Resolución No. SCVS-IRQ-DRMV-2019-00037695 (18NOV2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1aK4yetaXmm4KnO4iuX2QPemtzNR2Upy6/view?usp=sharing"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (SEP2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Titularizacion-Insotec-Informe-Calificacion-31Ene2020.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (ENE2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/Titularizacion-Insotec-Informe-Calificacion-31Jul20.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (JUL2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/Titularizacion-Insotec-Informe-Calificacion-31Ene21.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (ENE2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/10/Titularizacion-Insotec-Informe-Calificacion-31Jul21.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (JUL2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/04/6.-Titularizacion-Insotec-Informe-Calificacion-31Ene22.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (ENE2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/09/7.-Titularizacion-Insotec-Informe-Calificacion-30Jun22.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (JUN2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/PRIMERA-CONVOCATORIA-ASAMBLEA-INVERSIONISTAS-SERIES-A-Y-E-INSOTEC.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Primera Convocatoria Asamblea Series A y E (Fecha Publicación
                  26FEB2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/PRIMERA-CONVOCATORIA-ASAMBLEA-INVERSIONISTAS-SERIE-C-INSOTEC.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Primera Convocatoria Asamblea Serie C (Fecha Publicación
                  02MAR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/PRIMERA-CONVOCATORIA-ASAMBLEA-SERIE-B-INSOTEC.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Primera Convocatoria Asamblea Serie B (Fecha Publicación
                  05ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/2da-CONVOCATORIA-ASAMBLEA-1-serie-A-y-E.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Segunda Convocatoria Asamblea Serie A y E (Fecha Publicación
                  06ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/PRIMERA-CONVOCATORIA-ASAMBLEA-INVERSIONISTAS-SERIE-D-Insotec.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Primera Convocatoria Asamblea Serie D (Fecha Publicación
                  08ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/2da-CONVOCATORIA-ASAMBLEA-1-serie-C-Insotec.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Segunda Convocatoria Asamblea Serie C (Fecha Publicación
                  13ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/2da-CONVOCATORIA-ASAMBLEA-1-serie-B.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Segunda Convocatoria Asamblea Serie B (Fecha Publicación
                  15MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/2da-CONVOCATORIA-ASAMBLEA-1-serie-D.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Segunda Convocatoria Asamblea Serie D (Fecha Publicación
                  18MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/3ra-CONVOCATORIA-ASAMBLEA-1-serie-A-y-E.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Tercera Convocatoria Asamblea Series A y E (Fecha Publicación
                  14MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/3ra-CONVOCATORIA-ASAMBLEA-1-serie-C.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Tercera Convocatoria Asamblea Serie C (Fecha Publicación
                  19MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/3ra-CONVOCATORIA-ASAMBLEA-1-serie-B.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Tercera Convocatoria Asamblea Serie B (Fecha Publicación
                  22MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/3ra-CONVOCATORIA-ASAMBLEA-1-serie-D.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  Tercera Convocatoria Asamblea Serie D (Fecha Publicación
                  24MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/Rendicion-Insotec-Inversionistas-Mar.2020.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  1ra. Rendición de Cuentas Inversionistas (31MAR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/Rendicion-Insotec-Sep.2020-inversionistas.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  2da. Rendición de Cuentas Inversionistas (30SEP2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/Rendicion-Insotec-Mar.2021-inversionistas.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  3ra. Rendición de Cuentas Inversionistas (31MAR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/11/Rendicion-Insotec-Sep.-2021-inversionistas.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  4ta. Rendición de Cuentas Inversionistas (30SEP2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Rendicion-Insotec-Mar.-2022-inversionistas.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  5ta. Rendición de Cuentas Inversionistas (31MAR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos5"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/03/Rendicion-Insotec-FINAL-inversionistas.pdf"
                  }
                >
                  Insotec - Primera Titularización Cartera Microcrédito INSOTEC:
                  6ta. Rendición Final de Cuentas Inversionistas (10MAR2023)
                </Link>
              </div>
            </div>
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
                    "https://drive.google.com/file/d/16_ZKeXDI2ldeNsYE_N7Zdicu33MB3Bps/view?usp=sharing"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Resolución No. SCVS-INMV-2019-00038861 (17DIC2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/12VgPS1tT-fpDjUZ-dmf4TPF_v4MaYwjg/view?usp=sharing"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (OCT2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/INFORME-CALIFICADORA-GCC-ABRIL-2020.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/INFORME-CALIFICADORA-GCC-OCTUBRE-2020.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (OCT2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/INFORME-TITULARIZACION-GCC-ABRIL-2021.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (ABR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/INFORME-TITULARIZACION-GCC-OCT-2021.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (OCT2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/INFORME-TITULARIZACION-GCC-ABRIL-2022.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (ABR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/02/TITULARIZACION-GUAYAQUIL-COUNTRY-CLUB.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (NOV2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/05/TITULARIZACION-GUAYAQUIL-COUNTRY-CLUB-Informe-calificadora-a-feb-2023.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (FEB2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/11/INFORME-CALIFICACION-RIESGOS-TITULARIZACION-GUAYAQUIL-COUNTRY-CLUB-a-ago2023-2.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (AGOS2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/TITULARIZACION-GUAYAQUIL-COUNTRY-CLUB.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (FEB2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/titularizacion-guayaquil-country-club.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Extracto Calificadora de Riesgo (ABR2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/CONVOCATORIA-ASAMBLEA-GENERAL-DE-INVERSIONISTAS-Guayaquil-Country-Club.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Primera Convocatoria Asamblea (Fecha Publicación
                  25MAR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/2da-CONVOCATORIA-ASAMBLEA-TGCC.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Segunda Convocatoria Asamblea (Fecha Publicación
                  06MAY2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/09/3ra-CONVOCATORIA-ASAMBLEA-TGCC.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Tercera Convocatoria Asamblea (Fecha Publicación
                  15JUN2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/06/CONVOCATORIA-TIT-GCC-JUN2021.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Cuarta Convocatoria Asamblea (Fecha Publicación
                  22JUN2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/06/SUSPENSION-CONVOCATORIA-ASAMBLEA-INVERSIONISTAS-Guayaquil-Country-Club.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Suspensión Cuarta Convocatoria Asamblea (Fecha
                  Publicación 30JUN2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/10/Convocatoria-Tit.-GCC.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: Quinta Convocatoria Asamblea (Fecha Publicación
                  7OCT2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/12-c03O1AkItZGzbLP1aWfnOCtdqhH75h/view"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 1ra. Rendición de Cuentas Inversionistas (30ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/06/Tit.-GCC-Rendicion-de-cuentas-Oct2020-inversionistas.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 2da. Rendición de Cuentas Inversionistas (31OCT2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/06/Tit.-GCC-Rendicion-de-cuentas-Abr2021-Inversionistas.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 3ra. Rendición de Cuentas Inversionistas (30ABR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Tit.-GCC-Rendicion-de-cuentas-Oct2021-Inversionistas.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 4ta. Rendición de Cuentas Inversionistas (31OCT2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Tit.-GCC-Rendicion-de-cuentas-Abril22-Inversionistas-1.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 5ta. Rendición de Cuentas Inversionistas (30ABR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/Tit.-GCC-Rendicion-de-cuentas-Oct2022-inversionistas.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 6ta. Rendición de Cuentas Inversionistas (31OCT2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/Tit.-GCC-Rendicion-de-cuentas-Octubre-2023-inversionistas.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 7ma. Rendición de Cuentas Inversionistas (31OCT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Tit.-GCC-Rendicion-de-cuentas-Octubre-2023-inversionistas-8va.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 8va. Rendición de Cuentas Inversionistas (31OCT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos6"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Rendicion-de-cuentas-Abril-2024-TGC-9na.pdf"
                  }
                >
                  Guayaquil Country Club - Titularización Guayaquil Country
                  Club: 9na. Rendición de Cuentas Inversionistas (30ABR2024)
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/05/Resolucion-SCVS-II-Titularizacion-INSOTEC.pdf"
                  }
                >
                  Segunda Titularización Cartera Microcrédito Insotec:
                  Resolución No. SCVS-IRQ-DRMV-2021-00004168 (17MAY2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/10/INFORME-CALIFICACION-SEGUNDA-TIT-INSOTEC-JUL2021.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (JUL2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/2.-INFORME-CALIFICACION-SEGUNDA-TIT-INSOTEC-ENE2022.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (ENE2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/09/3.-INFORME-CALIFICACION-SEGUNDA-TIT-INSOTEC-JUN2022.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (JUN2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/03/SEGUNDA-TITULARIZACION-CARTERA-INSOTEC.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/09/SEGUNDA-TITULARIZACION-CARTERA-INSOTEC-1.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (JUN2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/03/048-2024-INFORMEFINAL-2TIT-INSOTEC-FEBRERO.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Extracto Calificadora de Riesgo (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/10/Segunda-Tit.-Insotec-Convocatoria-Sep-2021.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Primera Convocatoria Asamblea (Fecha Publicación 30SEP2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/12/2da-Convocatoria-Oct2021.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Segunda Convocatoria Asamblea (Fecha Publicación 29OCT2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/12/Tercera-Convocatoria-Nov21.pdf"
                  }
                >
                  Insotec - Segunda Titularización Cartera Microcrédito INSOTEC:
                  Tercera Convocatoria Asamblea (Fecha Publicación 30NOV2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Rendicion-Insotec-II-Oct.-2021-Inversionistas.pdf"
                  }
                >
                  Segunda Titularización Cartera Microcrédito INSOTEC: 1ra.
                  Rendición de Cuentas Inversionistas (31OCT2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Rendicion-Insotec-II-Abr.-2022-inversionistas.pdf "
                  }
                >
                  Segunda Titularización Cartera Microcrédito INSOTEC: 2da.
                  Rendición de Cuentas Inversionistas (30ABR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/Rendicion-Insotec-II-Oct-2022-inversionistas.pdf"
                  }
                >
                  Segunda Titularización Cartera Microcrédito INSOTEC: 3ra.
                  Rendición de Cuentas Inversionistas (31OCT2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/06/Rendicion-Insotec-II-Abr-2023-inversionistas.pdf"
                  }
                >
                  Segunda Titularización Cartera Microcrédito INSOTEC: 5ta.
                  Rendición de Cuentas Inversionistas (30ABR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/Rendicion-Insotec-II-Oct-2023-inversionistas.pdf"
                  }
                >
                  Segunda Titularización Cartera Microcrédito INSOTEC: 6ta.
                  Rendición de Cuentas Inversionistas (31OCT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos7"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Rendicion-Insotec-II-Abr.-2024-inversionistas-7ma.pdf"
                  }
                >
                  Segunda Titularización Cartera Microcrédito INSOTEC: 7ma.
                  Rendición de Cuentas Inversionistas (30ABR2024)
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/08/Resolucion-Aprobatoria-SCVS-Titularizacion-Sindicada-Flujos-NX-RNT.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Resolución
                  No. SCVS-INMV-DRMV-2021-00006806 (17AGO2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/08/INFORME-FINAL-TITULARIZACION-NX-RNT-JUNIO-2021.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Informe
                  Calificadora de Riesgos (JUN2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/2.-384-2021-INFORME-FINAL-TITULARIZACION-NX-RNT-DIC-2021.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Informe
                  Calificadora de Riesgos (DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/177-2022-INFORME-FINAL-TITULARIZACION-NX-RNT-JUNIO.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Informe
                  Calificadora de Riesgos (JUN2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/336-2022-INFORME-FINAL-TITULARIZACION-NX-RNT-DIC.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Informe
                  Calificadora de Riesgos (OCT2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/331-2023-INFORME-FINAL-TITULARIZACION-NX-RNT-DIC-2023.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Informe
                  Calificadora de Riesgos (OCT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/12/CONVOCATORIA-TIT.-SINDICADA-RENTAS-NX-NRT.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Primera
                  Convocatoria Asamblea Inversionistas (03DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/ACTA-13-12-2021.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Acta
                  Asamblea Inversionistas (13DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/CONVOCATORIA-3-DE-ENERO-DE-2022.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Segunda
                  Convocatoria Asamblea Inversionistas (03ENE2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/ACTA-13-01-2022.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Acta
                  Asamblea Inversionistas (13ENE2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/CONVOCATORIA-1-DE-FEBRERO-DE-2022.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Tercera
                  Convocatoria Asamblea Inversionistas (01FEB2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/ACTA-11-2-2022.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Acta
                  Asamblea Inversionistas (11FEB2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/02/Rendicion-TITULARIZACION-SINDICADA-RENTAS-NX-RNT-Dic.-2021.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: 1ra.
                  Rendición de cuentas inversionistas (31DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/07/Rendicion-Jun.-2022-Inversionistas.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: 2da.
                  Rendición de cuentas inversionistas (30JUN2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/02/Rendicion-Diciembre-2022-Inversionistas.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: 3ra.
                  Rendición de cuentas inversionistas (31DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/08/Rendicion-de-cuentas-Junio-2023.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: 4ta.
                  Rendición de cuentas inversionistas (30JUN2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Rendicion-Diciembre-2023-Inversionistas_compressed-5ta.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: 5ta.
                  Rendición de cuentas inversionistas (31DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos8"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Comunicacion-Inversionistas-Primera-Titularizacion-Sindicada-Rentas-NX-RNT.pdf"
                  }
                >
                  Primera Titularización Sindicada Rentas NX - RNT: Comunicado
                  Inversionistas (14JUN2022)
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/10/Resolucion-No.-SCVS-INMV-DRMV-2021-00008666.pdf"
                  }
                >
                  Fideicomiso de Titularización de Cartera Novacredit V:
                  Resolucion-No.-SCVS-INMV-DRMV-2021-00008666 (05OCT2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/02/CONVOCATORIA-ASAMBLEA-Novacredit-V.pdf"
                  }
                >
                  Fideicomiso de Titularización de Cartera Novacredit V: Primera
                  Convocatoria Asamblea (10DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/02/SEGUNDA-CONVOCATORIA-ASAMBLEA-Novacredit-V.pdf"
                  }
                >
                  Fideicomiso de Titularización de Cartera Novacredit V: Segunda
                  Convocatoria Asamblea (9ENE2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/02/TERCERA-CONVOCATORIA-ASAMBLEA-Novacredit-V.pdf"
                  }
                >
                  Fideicomiso de Titularización de Cartera Novacredit V: Tercera
                  Convocatoria Asamblea (8FEB2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/CONVOCATORIA-ASAMBLEA-Novacredit-V-17-Jun-2024.pdf"
                  }
                >
                  Fideicomiso de Titularización de Cartera Novacredit V: Cuarta Convocatoria Asamblea (17JUN2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/07/ASAMBLEA-INVERSIONISTAS-TIT-CARTERA-NOVACREDIT-V-17-junio-2024.pdf"
                  }
                >
                  Fideicomiso de Titularización de Cartera Novacredit V: Acta de Asamblea de Inversionistas (17JUN2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/INFORME-CALIFICADORA-TIT.-NOVACREDIT-V-JUNIO-2020.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V:
                  Extracto Calificadora de Riesgo (JUN2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/INFORME-CALIFICADORA-TIT.NOVACREDIT-V-FE22.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V:
                  Extracto Calificadora de Riesgo (DIC2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/08/INFORME-CALIFICADORA-TIT.NOVACREDIT-V-AGO22.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V:
                  Extracto Calificadora de Riesgo (JUN2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/INFORME-CALIFICADORA-TIT.-NOVACREDIT-V-DIC-2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V:
                  Extracto Calificadora de Riesgo (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/08/196-2023-INFORME-FINAL-NOVACREDIT-5-TIT-AGO.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V:
                  Extracto Calificadora de Riesgo (JUN2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/03/Informe-Final-Tit.-Novacredit-V-DIC23.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V:
                  Extracto Calificadora de Riesgo (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Rendicion-de-cuentas-Novacredit-V-Oct-2021-inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 1ra.
                  Rendición de Cuentas Inversionistas (31OCT2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/5.-Rendicion-Tit.-Novacredit-V-Ene-2022.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 2da.
                  Rendición de Cuentas Inversionistas (31ENE2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/06/Rendicion-de-cuentas-Novacredit-V-Abril2022-inversionistas.docx-1.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 3ra.
                  Rendición de Cuentas Inversionistas (30ABR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/Rendicion-de-cuentas-Novacredit-V-Julio22-inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 4ta.
                  Rendición de Cuentas Inversionistas (31JUL2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/Rendicion-de-cuentas-Novacredit-V-Oct.22-inversionistas.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 6ta.
                  Rendición de Cuentas Inversionistas (31OCT2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/02/Rendicion-de-cuentas-Titularizacion-Novacredit-V-Ene.2023.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 7ma.
                  Rendición de Cuentas Inversionistas (31ENE2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/Informe-Inversionistas-Titularizacion-Novacredit-V-Julio-2023-1.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 8va.
                  Rendición de Cuentas Inversionistas (31JUL2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/Rendicion-de-cuentas-Inversionistas-Titularizacion-Novacredit-V-Octubre-2023-y-anexos.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 9na.
                  Rendición de Cuentas Inversionistas (31OCT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/Rendicion-de-cuentas-Inversionistas-Titularizacion-Novacredit-V-Octubre-2023-y-anexos.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 10ma.
                  Rendición de Cuentas Inversionistas (31ENE2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos9"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Rendicion-de-cuentas-Inversionistas-Titularizacion-Novacredit-V-Abril-2024-11va.pdf"
                  }
                >
                  Novacredit- Fideicomiso de Titularización de Cartera V: 11va.
                  Rendición de Cuentas Inversionistas (30ABR2024)
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/07/Primer-Informe-Calificador-Factorplus-II-Julio22.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Extracto Calificadora de Riesgo (MAY2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/08/016-2023-INFORMEFINAL-FACTORPLUS-2TIT-ENERO.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Extracto Calificadora de Riesgo (ENE2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/07/180-2023-INFORMEFINAL-FACTORPLUS-2TIT-JULIO.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Extracto Calificadora de Riesgo (MAY2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/02/016-2024-INFORMEFINAL-FACTORPLUS-2TIT-ENE.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Extracto Calificadora de Riesgo (ENE 2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/08/Resolucion-Aprobatoria-II-Titularizacion-Cartera-Factorplus.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Resolución No. SCVS-IRQ-DRMV-2022-00005754 (08AGO2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/11/1era-Convocatoria-Fid.-Segunda-Titularizacion-Cartera-Factorplus.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Primera Convocatoria Asamblea Inversionistas (14NOV2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/2da.-CONVOCATORIA-INVERSIONISTAS.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Segunda Convocatoria Asamblea Inversionistas (1DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/2788_221223124603_001.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Alcance Segunda Convocatoria Asamblea Inversionistas
                  (23DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/TERCERA-CONVOCATORIA.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  Tercera Convocatoria Asamblea Inversionistas (27ENE2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/02/ACTA-27-de-enero-de-2023.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus: Acta
                  de Asamblea Inversionistas (27ENE2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/02/2.-Rendicion-Inversionistas-Diciembre-2022.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus: 2da.
                  Rendicion de Cuentas Inversionitas (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/03/3.-Rendicion-de-cuentas-marzo-2023.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus:
                  3era. Rendicion de Cuentas Inversionitas (MAR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/03/4.-Rendicion-de-cuentas-Junio-2023.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus: 4ta.
                  Rendicion de Cuentas Inversionitas (JUN2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/03/5.-Rendicion-de-cuentas-septiembre-2023.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus: 5ta.
                  Rendicion de Cuentas Inversionitas (SEPT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/03/5.-Rendicion-Inversionistas-Dic-2023.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus: 6ta.
                  Rendición de Cuentas Inversionitas (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos10"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/6.-Rendicion-Inversionistas-Mar-2024.pdf"
                  }
                >
                  Fideicomiso Segunda Titularización de Cartera Factorplus: 7ma.
                  Rendición de Cuentas Inversionitas (MAR2024)
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/TERCERA-TITULARIZACION-DE-CARTERA-INSOTEC-signed.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec:
                  Extracto Calificadora de Riesgo (SEPT2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/06/TERCERA-TITULARIZACION-DE-CARTERA-INSOTEC.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec:
                  Extracto Calificadora de Riesgo (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/3.-CALIFICACION-NOV-2023.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec:
                  Extracto Calificadora de Riesgo (SEPT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/TERCERA-TITULARIZACION-DE-CARTERA-INSOTEC.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec: Extracto Calificadora de Riesgo (MARZ2024)
                </Link>
              </div>
            </div>
          </TECollapse>


          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/RESOLUCION-2022-08943-TITULARIZACION-INSOTEC-signed.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec:
                  Resolución No. SCVS-IRQ-DRMV-2022-00008943 (21DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/09/Resolucion-No.-SCVS-IRQ-DRMV-2023-00042422.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec:
                  Resolución No. SCVS-IRQ-DRMV-2023-00042422 (13SEPT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/Convocatoria-Abr23-signed.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec Primera
                  Convocatoria Asamblea Inversionistas (17ABR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/11/Convocatoria-Asamblea-de-Inversionistas-3era-Titularizacion-Insotec-final.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec
                  Convocatoria Asamblea Extraordinaria Inversionistas
                  (10NOV2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/06/Rendicion-Insotec-III-Abr-2023-inversionistas.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec: 1era.
                  Rendición de Cuentas Inversionistas (ABR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/Rendicion-Insotec-III-Oct-2023-inversionistas.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec: 2da.
                  Rendición de Cuentas Inversionistas (OCT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos11"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/Rendicion-Insotec-III-Abril-2024-inversionistas.pdf"
                  }
                >
                  Tercera Titularización de Cartera Microcredito Insotec: 3era.
                  Rendición de Cuentas Inversionistas (30ABR2024)
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/03/018-2023-INFORME-FINAL-TITULARIZACION-CONSORCIO-STG-signed.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Extracto Calificadora de Riesgo (NOV2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/07/183-2023-INFORME-FINAL-TITULARIZACION-NTG.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Extracto Calificadora de Riesgo (MAY2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/11/INFORME-CALIFICACION-RIESGOS-TITULARIZACION-GUAYAQUIL-COUNTRY-CLUB-a-ago2023-1.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Extracto Calificadora de Riesgos (AGOS2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/02/Informe-NTG-Certificado-AAA.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Extracto Calificadora de Riesgos (ENE2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/03/ResolucionTit.-Proyecto-Nuevo-Transporte-Guayaquil.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Resolución No. SCVS-IRQ-DRMV-2023-00037270
                  (31MAR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Resolucion-No.-SCVS-IRCVSQ-DRMV-2024-00001164-Prorroga.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Resolución SCVS-IRCVSQ-DRMV-2024-00001164
                  (11ENE2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/07/CONVOCATORIA-ASAMBLEA-TIT-PROYECTO-NTG-10-AGOSTO-2023.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Primera Convocatoria Asamblea Inversionistas
                  (10AGO23)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/09/Convocatoria-Asamblea-Inversionistas-sept-2023.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Segunda Convocatoria Asamblea Inversionistas
                  (22SEPT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/10/CONVOCATORIA-ASAMBLEA-TIT-PROYECTO-NTG-20-OCTUBRE-2023.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Tercera Convocatoria Asamblea Inversionistas
                  (06OCT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/11/1804_001.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: Cuarta Convocatoria Asamblea Inversionistas
                  (28nov2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/REND-CTAS-FID-TIT-PROY-NUEVO-TRANSPORTE-GUAYAQUIL-JUNIO-2023.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: 1era Rendición de cuentas (JUN2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos12"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/02/REND-CTAS-INVERSIONISTAS-FID-TIT-PROY-NUEVO-TRANSPORTE-GUAYAQUIL-DICIEMBRE-2023-y-anexos.pdf"
                  }
                >
                  Fideicomiso Titularización Proyecto Nuevo Transporte
                  Guayaquil: 2da Rendición de cuentas (DIC2023)
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/07/TITULARIZACION-BOTANIQO-f-signed.pdf"
                  }
                >
                  Fideicomiso Titularización Botaniqo Informe Calificadora de
                  Riesgos (JUL2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos13"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/02/INFORME-CALIFICADORA-TITULARIZACION-BOTANIQO.pdf"
                  }
                >
                  Fideicomiso Titularización Botaniqo Informe Calificadora de
                  Riesgos (NOV2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos13"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/10/Resolucion-No.-SCVS-IRQ-DRMV-2023-00047288.pdf"
                  }
                >
                  Fideicomiso Titularización Botaniqo: Resoliución No.
                  SCVS-IRQ-DRMV-2023-00047288 (19OCT2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "fideicomisos13"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/06/1.-Rendicion-de-cuentas-Fid.-Tit-Botaniqo_compressed.pdf"
                  }
                >
                  Fideicomiso Titularización Botaniqo: 1era Rendición de cuentas (31ENE2024)
                </Link>
              </div>
            </div>
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
                    "https://drive.google.com/file/d/1iCFg5GtUBlufw4M9SFDMAb85FAJsX6xZ/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2018-00009747 - Fideicomiso
                  Toscana de Calderon (23OCT2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1FPCHd8G_vfTNkU0EalgGeatU1Z8MEjDL/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2018-00007983 - Fideicomiso
                  Riva Di Mare (05SEP2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/14GHs6jZbVRy1JLGgxOmUuEPt1aNb7vwO/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00000192 - Fideicomiso
                  Bellos Horizontes (18ENE2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1n23sIfWdd6BKNpA7MH42X5NQNG8eCAcw/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00000442 - Fideicomiso
                  Retamo Parc (18ENE2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1cN0Wyk1OieerX3KAsQXtj0NN0OFpVO-v/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00001072 - Fideicomiso
                  Parque del Sol (08FEB2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/17qPHZetBEadQinO-PSdHFEAdLmgx0LvB/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00001570 - Fideicomiso
                  Jardines de Carretas (25FEB2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/12g4ODnaxhEfduMgVHkJHPhnYvOsuqgaw/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00001941 - Fideicomiso
                  Valentina Uno (12MAR2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1volUoCHS3OrWXEoYOkjVDN6ip3hKjncP/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00005420 - Fideicomiso
                  MGM (11JUL2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1Vr_SbeUxp2cloyvp14lic5xpQzp88bZS/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00005592 - Fideicomiso
                  Cordovez (16JUL2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1LXmgH-H4SlWmp84v3Nq0i0tUyrdPf5q2/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00005571 - Fideicomiso
                  Kairos Cuatro (18JUL2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1hr81PJFQCmbm-NP--eoktS31GHwIdTf7/view?usp=sharing"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2020-00000296 - Fideicomiso
                  Umiñamed (16ENE2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/2020-Z-RES-INSC-FID-FINCA-LA-GLORIA-numerada-2-1.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2020-00003034 - Fideicomiso Finca
                  La Gloria (29ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/10/RES-INSC-FID-VALLE-DEL-SOL-SEGUNDA-ETAPA-numerada-1.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2020-00003033 - Fideicomiso Valle
                  del Sol (29ABR2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/11/Resolucion-No.-SCVS.IRQ_.DRMV_.2020.00006824-INSC-FID-JUAN-II.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2020-00006824 - Fideicomiso San
                  Juan II (30OCT2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2020/12/2020-Resolucion-No.SCVS_.IRQ_.DRMV_.2020.00008139-Inscripcion-FID-TORREBONICA-numerada8167.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2020-00008139 -
                  FideicomisoTorrebonica (21DIC2020)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/Resolucion-No.-SCVS-IRQ-DRMV-2021-00002984.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2021-00002984 - Fideicomiso Verde
                  Ilaló (08ABR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/08/Resolucion-No.-SCVS-IRQ-DRMV-2021-00006387-DE-02.08.2021-Fid.-Tumbaco-....pdf"
                  }
                >
                  Resolución No. SCVS-INMV-DRMV-2021-00006387 - Fideicomiso
                  Tumbaco (3AGO2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/09/Resolucion-No.-SCVS-INMV-DRMV-2021-00007595-INSC-FID.-EDFI.-NIETO-2.pdf"
                  }
                >
                  Resolución No. SCVS-INMV-DRMV-2021-00007595 - Fideicomiso
                  Edificio Nieto (3SEPTIEMBRE2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/09/Resolucion-SCVS.INMV_.DRMV_.2021.00007937-de-14.09.2021-Fif.-Tumbaco-Fidutlan-Rectif-signed.pdf"
                  }
                >
                  Resolución No. SCVS-INMV-DRMV-2021-00007937 - Fideicomiso
                  Tumbaco (16SEPTIEMBRE2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/10/Resolucion-No.-SCVS-INMV-DRMV-2021-00008385.pdf"
                  }
                >
                  Resolución No. SCVS-INMV-DRMV-2021-00008385 - Fideicomiso
                  Inmobiliario Arandá (29SEPTIEMBRE2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/01/Res.-Negativa-Inscripcion-Caoba.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2021-00011435- Fideicomiso Caoba
                  (3ENERO2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/04/Resolucion-No.-013-2604-FIDEICOMISO-EL-PARAISO-Inscrip.-CPMV-CS.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2022-00002604- Fideicomiso El
                  Paraíso (8ABRIL2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/10/3.2.-Resolucion-No.041-7469-MONTALCINO-FIDUTLAN-EDLT.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2022-00007469- Fideicomiso
                  Inmobiliario Montalcino (31OCT2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/11/RESOLUCION-2022-08035-INSCRIP-FIDEIC-LA-MORITA-signed.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2022-00008035- Fideicomiso RB La
                  Morita (17NOV2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/11/RESOLUCION-2022-08047-INSCRIP-FIDIECOMISO-AKIRA-signed.pdf"
                  }
                >
                  Resolución No. CVS-IRQ-DRMV-2022-00008047- Fideicomiso
                  Inmobiliario Akira (18NOV2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/RESOLUCION-2022-08617-FIDEICOMISO-STA-CATALINA-IMV-signed.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2022-00008617- Fideicomiso
                  Proyecto Santa Catalina (8DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/02/RESOLUCION-2023-033733-FIDEICOMISO-INMOB-ATTIVA-INSCRIP-signed.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00033733- Fideicomiso
                  Inmobiliario Attiva (25ENE2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/02/RESOLUCION-2023-033730-FIDEICOMISO-FLUJOS-TORRE-SOLARI-INSCRIPCION-signed.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00033730- Fideicomiso Flujos
                  Torre Solari (25ENE2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/03/Resolucion-No.-09-37163-INSCRIP-FID-IMOBILIARIO-BOTANIKA-FIDUTLAN-RLV.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00037163- Fideicomiso
                  Inmobiliario Botanika (28MAR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/05/Resolucion-No.-013-37949-FIDEICOMISO-BOSQUES-DE-PUEMBO-FIDUTLAN-INSCRIPCION-MEEV.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00037949- Fideicomiso
                  Bosques de Puembo(03MAYO2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/06/Resolucion-No.-SCVS-IRQ-DRMV-2023-00038287-1-1.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00037949- Fideicomiso
                  Renacimiento (22MAYO2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/08/1.3.-Resolucion-No.-032-41923-SANTORINI-FIDUTLAN-EDLT.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00041923 -Fideicomiso
                  Inmobiliario Santorini (23AGOS2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosFideicomisos"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/12/Resolucion-No.-SCVS-IRQ-DRMV-2023-00094540.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00041923 -Fideicomiso
                  Inmobiliario Alcobendas (22DIC2023)
                </Link>
              </div>
            </div>
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/Rendicion-de-cuentas-Finlink-diciembre-2019.pdf"
                  }
                >
                  Rendición de cuentas Finlink diciembre 2019.pdf
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none pb-5 my-5"
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
                    "https://drive.google.com/file/d/1xzsKuDG_72OlDAmDvp5wnN4ppbqbUQ5V/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2018-00011864 - Encargo
                  Fiduciario El Pedregal de Churoloma (26DIC2018)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://drive.google.com/file/d/1A50LivRQIiRAIDZV-v7AhTRji1kXVdXW/view?usp=sharing"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2019-00000920 - Encargo
                  Fiduciario Hidroeléctrica Palmira (04FEB2019)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/02/Resolucioin-No.-SCVS.IRQ_.DRMV_.2021.0000824-_Fidutlan_insripcioin_Encargo-Olivos-Town-Center_ene_21.pdf"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-2021-00000824 - Encargo
                  Fiduciario Olivos Town Center (29ENE2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/04/Resolucion-No.-014-3184-OLIVOS-TOWN-FIDUTLAN-EDLT.docx.pdf"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-2022-0003184 - Encargo Fiduciario
                  Olivos Town Center (26ABR2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/03/Resolucion-No.-SCVS-IRQ-DRMV-2021-00001857_ENCARGO-EL-OBRAJE-BOSQUE-HABITADO.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2021-00001857 - Encargo El Obraje
                  Bosque Habitado (9MAR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/11/Resolucion-No.-SCVS-IRQ-DRMV-2023-00091126.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00091126 - Encargo El Obraje
                  Bosque Habitado (16NOV2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/04/RESOLUCION-No.-SCVS-IRQ-DRMV-2021-00003034-de-06-04-2021-INSCRIPCION-ENCARGO-BOTANIKA-FIDUTLAN.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2021-00003034 - Encargo Botánika
                  (8ABR2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/08/Resolucion-No.-SCVS-IRQ-DRMV-2021-00006239.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2021-00006239 - Encargo Altamira
                  Vistahermosa (4AGO2021)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/RESOLUCION-2022-08513-ENCARGO-FLUJOS-ECOZONE-signed.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00037648 - Encargo Flujos
                  Ecozone (02DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/Resolucion-No.-SCVS-IRQ-DRMV-2023-00037648-11-DE-17.04.2023-Encargo-Bosques-de-Puembo-Fidutlan-Inscrip.-CPMV.pdf"
                  }
                >
                  Resolución No. SCVS-IRQ-DRMV-2023-00037648 - Encargo Bosques
                  de Puembo (20ABR2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Encargo-Opcion-Auto-Rendicion-Diciembre-2019.pdf"
                  }
                >
                  1ra. Rendición de cuentas (DIC 2019) - Encargo Fiduciario
                  Opción Auto
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Encargo-Opcion-Auto-Rendicion-diciembre-2020.pdf"
                  }
                >
                  2da. Rendición de cuentas (DIC 2020) - Encargo Fiduciario
                  Opción Auto
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/01/Rendicio%CC%81n-de-cuentas-diciembre-2021-Opcion-Auto.docx.pdf"
                  }
                >
                  3ra. Rendición de cuentas (DIC 2021) - Encargo Fiduciario
                  Opción Auto
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-Encargo-Opcionauto-2022.pdf"
                  }
                >
                  4ta. Rendición de cuentas (DIC 2022) - Encargo Fiduciario
                  Opción Auto
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-OA.pdf"
                  }
                >
                  5ta. Rendición de cuentas (DIC 2023) - Encargo Fiduciario
                  Opción Auto
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/Rendicion-de-cuentas-Finlink-diciembre-2019.pdf"
                  }
                >
                  1ra. Rendición de cuentas (DIC 2019) - Encargo Fiduciario
                  Finlink
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Encargo-FINLINK-Rendicion-diciembre-2020.pdf"
                  }
                >
                  2da. Rendición de cuentas (DIC 2020) - Encargo Fiduciario
                  Finlink
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/01/Rendicion-de-cuentas-diciembre-2021-Finlink.docx-.pdf"
                  }
                >
                  3ra. Rendición de cuentas (DIC 2021) - Encargo Fiduciario
                  Finlink
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-Encargo-Finlink-2022.pdf"
                  }
                >
                  4ta. Rendición de cuentas (DIC 2022) - Encargo Fiduciario
                  Finlink
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-FINLINK.pdf"
                  }
                >
                  5ta. Rendición de cuentas (DIC 2023) - Encargo Fiduciario
                  Finlink
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Encargo-Autolider-Rendicion-de-cuentas-diciembre-2019.pdf"
                  }
                >
                  1ra. Rendición de cuentas (DIC 2019) - Encargo Fiduciario de
                  Administración Autolider
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Encargo-Adm.-Autolider-Rendicion-diciembre-2020.pdf"
                  }
                >
                  2da. Rendición de cuentas (DIC 2020) - Encargo Fiduciario de
                  Administración Autolider
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/01/Rendicion-de-cuentas-diciembre-2021-Autolider.-docx-.pdf"
                  }
                >
                  3ra. Rendición de cuentas (DIC 2021) - Encargo Fiduciario de
                  Administración Autolider
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-Encargo-Autolider-2022.pdf"
                  }
                >
                  4ta. Rendición de cuentas (DIC 2022) - Encargo Fiduciario de
                  Administración Autolider
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-AUTOLIDER.pdf"
                  }
                >
                  5ta. Rendición de cuentas (DIC 2023) - Encargo Fiduciario de
                  Administración Autolider
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Encargo-Garantias-Bco-Capital-Rendicion-diciembre-2019.pdf"
                  }
                >
                  1ra. Rendición de cuentas (DIC 2019) - Encargo Fiduciario
                  Garantías Banco Capital
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Encargo-Garantias-Bco-Capital-Rendicion-diciembre-2020.pdf"
                  }
                >
                  2da. Rendición de cuentas (DIC 2020) - Encargo Fiduciario
                  Garantías Banco Capital
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/01/Rendicion-de-cuentas-diciembre-2021-Banco-Capital.docx-.pdf"
                  }
                >
                  3ra. Rendición de cuentas (DIC 2021) - Encargo Fiduciario
                  Garantías Banco Capital
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-Encargo-Banco-Capital-2022.pdf"
                  }
                >
                  4ta. Rendición de cuentas (DIC 2022) - Encargo Fiduciario
                  Garantías Banco Capital
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-BANCO-CAPITAL.pdf"
                  }
                >
                  5ta. Rendición de cuentas (DIC 2023) - Encargo Fiduciario
                  Garantías Banco Capital
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2021/01/Encargo-Gestion-MUPI-Rendicion-diciembre-2020.pdf"
                  }
                >
                  1ra. Rendición de cuentas (DIC 2020) - Encargo Fiduciario
                  Gestión MUPI Vehículos
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/Rendición-de-cuentas-Mutualista-Pichincha-diciembre-2021.docx-.pdf"
                  }
                >
                  2da. Rendición de cuentas (DIC 2021) - Encargo Fiduciario
                  Gestión MUPI Vehículos
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/Rendicio%CC%81n-de-cuentas-Mutualista-Pichincha-diciembre-2021.docx-.pdf"
                  }
                >
                  Rendición de cuentas Mutualista Pichincha diciembre 2021.docx
                  .pdf
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-Encargo-Mupi-2022.pdf"
                  }
                >
                  3ra. Rendición de cuentas (DIC 2022) - Encargo Fiduciario
                  Gestión MUPI Vehículos
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosEncargo"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-MUPI-1.pdf"
                  }
                >
                  4ta. Rendición de cuentas (DIC 2023) - Encargo Fiduciario
                  Gestión MUPI Vehículos
                </Link>
              </div>
            </div>
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
            {/* <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio qui
              itaque fugit sequi molestias cum ratione doloremque iusto ipsam?
              Similique eius mollitia tempore non, est officia dolorem nihil
              maxime ad.
            </p> */}
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/05/RESOLUCION-N%C2%B0-3464-SUSTITUCION-FIDUCIARIA.pdf"
                  }
                >
                  Resolucion No. SCVS-IRQ-DRMV-SNF-2022-00003464 - Fideicomiso
                  de Inversión PUCE (03MAY2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosInversion"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/CONVOCATORIA-A-ASAMBLEA-ORDINARIA-FID-PUCE-2022.pdf"
                  }
                >
                  Convocatoria Asamblea Ordinaria - Fideicomiso de Inversión
                  PUCE (14OCT2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosInversion"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2022/12/CONVOCATORIA-A-ASAMBLEA-EXTRA-ORDINARIA-FID-PUCE-2022.pdf"
                  }
                >
                  Convocatoria Asamblea Extra Ordinaria - Fideicomiso de
                  Inversión PUCE (05DIC2022)
                </Link>
              </div>
            </div>
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
            className="!mt-0 !rounded-b-none !shadow-none py-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/Rendicio%CC%81n-de-cuentas-MUPI.pdf"
                  }
                >
                  Rendición de cuentas - Fideicomiso de Garantía Automotriz
                  Mutualista Pichincha (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-2022-fideicomiso-automotriz-Crediprime.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Automotriz Crediprime
                  (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/04/Rendicion-final-de-cuentas.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Automotriz Crediprime
                  (MARZO2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-2022-fideicomiso-de-garantia-Trebolec.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Garantía Autromotriz
                  Trebolec (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-Trebolec.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Garantía Autromotriz
                  Trebolec (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-2022-fideicomiso-de-garantia-Banco-Capital.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Garantía Autromotriz Banco
                  Capital (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-Banco-Capital.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Garantía Autromotriz Banco
                  Capital (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/04/Resolucion-No.-SCVS-INMV-DNNF-2024-00006599-Fid-de-Garantia-Automotriz-Banco-Capital.pdf"
                  }
                >
                  Resolución No. SCVS-INMV-DNNF-2024-00006599 - Fideicomiso
                  Garantía Autromotriz Banco Capital (30ABR2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-2022-fideicomiso-garantia-Vallejo-Araujo-Imbauto.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Garantía Autromotriz
                  Vallejo Araujo (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-Vallejo-Araujo-Imbauto.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Garantía Autromotriz
                  Vallejo Araujo (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2023/01/Rendicion-de-cuentas-2022-fideicomiso-de-garantia-Banco-del-Austro.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Garantía Autromotriz Banco
                  del Austro (DIC2022)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/01/Rendicion-de-cuentas-Banco-del-Austro.pdf"
                  }
                >
                  Rendicion de cuentas - Fideicomiso Garantía Autromotriz Banco
                  del Austro (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/Resolucio%CC%81n-No.-SCVS-INMV-DNNF-2024-00006529-Fid-de-Garanti%CC%81a-Automotriz-Mutualista-Pichincha.pdf"
                  }
                >
                  Resolución No. SCVS-INMV-DNNF-2024-00006529 - Fideicomiso de
                  Garantía Autromotriz Mutualista Pichincha (12ABRIL2024)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/Rendición-de-cuentas-MUPI.pdf"
                  }
                >
                  Rendición de cuentas - Fideicomiso de Garantía Automotriz
                  Mutualista Pichincha (DIC2023)
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosGarantia"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                    "https://suratlantida.com/fiduciaria/wp-content/uploads/2024/05/Resolución-No.-SCVS-INMV-DNNF-2024-00006529-Fid-de-Garantía-Automotriz-Mutualista-Pichincha.pdf"
                  }
                >
                  Resolución No. SCVS-INMV-DNNF 2024-00006529 Fideicomiso de
                  Garantía Automotriz Mutualista Pichincha (12ABRIL2024)
                </Link>
              </div>
            </div>
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
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                  to={"https://suratlantida.com/fiduciaria/rendiciones/2021/"}
                >
                  Rendiciones Cuentas de Encargos Fiduciarios SAGAP 2021
                </Link>
              </div>
            </div>
          </TECollapse>

          <TECollapse
            show={activeElement === "documentosSAGAP"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                  to={"https://suratlantida.com/fiduciaria/rendiciones/2022/"}
                >
                  Rendiciones Cuentas de Encargos Fiduciarios SAGAP 2022
                </Link>
              </div>
            </div>
          </TECollapse>
          <TECollapse
            show={activeElement === "documentosSAGAP"}
            className="!mt-0 !rounded-b-none !shadow-none my-5"
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
                  to={"https://suratlantida.com/fiduciaria/rendiciones/2023/"}
                >Rendiciones Cuentas de Encargos Fiduciarios SAGAP 2023
                </Link>
              </div>
            </div>
          </TECollapse>

        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaPublicacionesPosts;
