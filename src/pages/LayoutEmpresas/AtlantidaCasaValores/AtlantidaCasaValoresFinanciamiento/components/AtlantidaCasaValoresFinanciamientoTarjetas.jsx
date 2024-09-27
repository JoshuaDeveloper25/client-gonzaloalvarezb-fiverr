import { MdOutlineSsidChart } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TECollapse } from "tw-elements-react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo1 from "../../../../../images/cliente-1.jpg";
import logo2 from "../../../../../images/cliente-2.png";
import logo3 from "../../../../../images/cliente-3.png";
import logo4 from "../../../../../images/cliente-4.jpg";
import logo5 from "../../../../../images/cliente-5.png";
import logo6 from "../../../../../images/cliente-6.png";
import logo7 from "../../../../../images/cliente-7.jpg";
import logo8 from "../../../../../images/cliente-8.png";
import logo9 from "../../../../../images/cliente-9.png";
import logo10 from "../../../../../images/cliente-10.png";

import galarmobilLogo from "../../../../../images/galarmobilLogo.png";
import surPapelLogo from "../../../../../images/surpapelLogo.png";
import ripconcivLogo from "../../../../../images/ripconcivLogo.png";
import superdeporteLogo from "../../../../../images/superdeporteLogo.png";
import botanicoLogo from "../../../../../images/botanicoLogo.png";

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
              Las facturas comerciales negociables son títulos valores a corto
              plazo. Máximo a 181 días que pueden ser emitidas de forma
              desmaterializada y para su negociación cuentan con la autorización
              del emisor de la factura (vendedor) y aceptante (comprador).
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
            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Emisor</h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  <span className="font-bold">1.</span> Carga en el SRI la
                  factura y envía al aceptante.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Atlántida Casa de Valores
                  </h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  <span className="font-bold">2.</span> Gestiona en el depósito
                  centralizado de valores el contrato de desmaterialización así
                  como apertura de la subcuenta al ser el único autorizado para
                  intermediar valores. <span className="font-bold">3.</span>{" "}
                  Envía la información a la SIC (quien tiene 15 días laborales
                  para aceptar la oferta pública).{" "}
                  <span className="font-bold">4.</span>
                  Envía la documentación completa a la Bolsa de Valores para que
                  fije la fecha de negociación (3 días laborales).
                </p>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Aceptante</h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  <span className="font-bold">5.</span> Acepta la factura del
                  emisor en el SRI y vincula a la cosas de valores en la
                  negociación de la factura comercial negociable.
                </p>
              </div>
            </div>
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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 place-items-center">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo1}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo2}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo3}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo4}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo5}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo6}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo7}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo8}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo9}
                />
              </div>

              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
                  src={logo10}
                />
              </div>
            </div>
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
              Una emisión de Obligaciones de Corto Plazo o Papel Comercial,
              consiste en la venta de valores a plazo fijo de corto plazo (menor
              a 359 días); este tipo de título valor es a descuento es decir, no
              tiene tasa de interés, sino un rendimiento y el pago de capital y
              rendimiento es al vencimiento. Se lo utiliza generalmente como una
              alternativa para obtener financiación a corto plazo con un costo
              bajo.
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
            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <MdOutlineSsidChart className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Garantía General (Obligatoria)
                  </h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  El emisor podrá emitir hasta el 80% de sus activos libre de
                  gravamen, respecto a la normativa.
                </p>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <MdOutlineSsidChart className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Garantía Específica (Opcional)
                  </h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  Garantía adicional a la General, misma que puede ser real o
                  personal, deberá consistir en: prendas, hipotecas, avales,
                  fianzas, cartas de crédito stand by, pólizas de seguro,
                  certificados de depósito de mercaderías de fácil realización,
                  fideicomisos mercantiles de garantía.
                </p>
              </div>
            </div>
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
            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">0 - 30 días</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Entrega de información.</p>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>
                  Elaboración y aprobación de estructuración financiera y legal.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">30 - 60 días</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Calificación de Riesgo.</p>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Ingreso a los entes reguladores.</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">60 - 90 días</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Procedimientos para la inscripción de la emisión</p>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Gestión comercial para la venta de los títulos valores</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">90 días en adelante</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Colocación a través de la Bolsa de Valores</p>
              </div>
            </div>
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
            <div className="overflow-x-auto min-w-full max-w-[20rem]">
              <table className=" w-full text-nowrap border-collapse border-spacing-0 border border-slate-300">
                <thead>
                  <tr>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Emisor / Originador
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Proceso
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Monto
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Calificación
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Año
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Cop
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* First row */}
                  <tr className="text-center">
                    <td className="border border-slate-300 lg:px-5 ">
                      <div className="flex justify-evenly items-center md:text-center text-start pr-2 py-2">
                        <h3 className="text-slate-700 font-bold">
                          Galarmobil S.A.{" "}
                        </h3>
                        <img className="w-16" src={galarmobilLogo} />
                      </div>
                    </td>
                    <td className="border border-slate-300 px-5">
                      1ra emisión de Papel Comercial{" "}
                    </td>
                    <td className="border border-slate-300 px-5">
                      1.500.000,00
                    </td>

                    <td className="border border-slate-300 px-5">AA</td>

                    <td className="border border-slate-300 px-5">2022</td>

                    <td className="border border-slate-300 px-5">
                      <Link
                        target="_blank"
                        to={
                          "https://www.bolsadevaloresguayaquil.com/sigcv/Opciones%20de%20Inversion/Renta%20Fija/Prospectos/GALARMOBIL%20S.A/Papel%20Comercial/Circular%20I.pdf"
                        }
                        className="text-primary-color"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>

                  {/* Second row */}
                  <tr className="text-center">
                    <td className="border border-slate-300 pr-2 py-2">
                      <div className="flex justify-evenly items-center md:text-center text-start">
                        <h3 className="text-slate-700 text-sm font-bold">
                          Surpapelcorp S.A.{" "}
                        </h3>
                        <img className="w-16" src={surPapelLogo} />
                      </div>
                    </td>
                    <td className="border border-slate-300 px-5 ...">
                      2da emisión de Papel Comercial{" "}
                    </td>
                    <td className="border border-slate-300 px-5 ...">
                      10.000.000,00
                    </td>
                    <td className="border border-slate-300 px-5 ...">AA+</td>
                    <td className="border border-slate-300 px-5 ...">2023</td>
                    <td className="border border-slate-300 px-5 ...">
                      <Link
                        target="_blank"
                        to={
                          "https://www.bolsadevaloresguayaquil.com/sigcv/Opciones%20de%20Inversion/Renta%20Fija/Prospectos/SURPAPELCORP%20S.A/Papel%20Comercial/Circular%20%20II.pdf"
                        }
                        className="text-primary-color"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              Una emisión de obligaciones, consiste en la venta de valores a
              plazo fijo de largo plazo; la tasa de interés, el plazo y el
              sistema de amortización de capital e intereses, son determinados
              previamente en un Prospecto de Oferta Pública, en donde se
              estructuran los Títulos Valor que emitirá el Cliente; se puede
              dividir a la emisión en la cantidad de clases y series (es decir,
              se puede emitir diferentes montos, a diferentes plazos) de acuerdo
              a sus necesidades y características específicas dependiendo del
              giro del negocio.
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
            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <MdOutlineSsidChart className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Obligaciones Convertibles en Acciones (OCAS)
                  </h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  Son obligaciones con amortización de capital al vencimiento,
                  en donde el inversionista decidirá si quiere que le paguen el
                  capital o si prefiere ser socio/accionista de la empresa.
                </p>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <MdOutlineSsidChart className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Obligaciones regulares</h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  Las obligaciones regulares son títulos valor que representan
                  un compromiso de pago al inversionista.
                </p>
              </div>
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
            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <MdOutlineSsidChart className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Garantía General (Obligatoria)
                  </h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  El emisor podrá emitir hasta el 80% de activos libre de
                  gravamen, respecto a la normativa.
                </p>
              </div>
            </div>

            <div>
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <MdOutlineSsidChart className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    {" "}
                    Garantía Específica (Opcional)
                  </h3>
                </div>
              </div>

              <div>
                <p className="mt-2">
                  Garantía adicional a la General, misma que puede ser real o
                  personal, deberá consistir en: prendas, hipotecas, avales,
                  fianzas, cartas de crédito stand by, pólizas de seguro,
                  certificados de depósito de mercaderías de fácil realización,
                  fideicomisos mercantiles de garantía.
                </p>
              </div>
            </div>
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
            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">0 - 30 días</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Entrega de información.</p>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>
                  Elaboración y aprobación de estructuración financiera y legal.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">30 - 60 días</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Calificación de Riesgo.</p>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Ingreso a los entes reguladores.</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">60 - 90 días</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Procedimientos para la inscripción de la emisión</p>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Gestión comercial para la venta de los títulos valores</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center text-primary-color">
                <div>
                  <FaRegCalendarAlt className="size-6" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">90 días en adelante</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <FaCheck className="size-4" />
                <p>Colocación a través de la Bolsa de Valores</p>
              </div>
            </div>
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
            <div className="overflow-x-auto min-w-full max-w-[20rem]">
              <table className=" w-full text-nowrap border-collapse border-spacing-0 border border-slate-300">
                <thead>
                  <tr>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Emisor / Originador
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Proceso
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Monto
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Calificación
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Año
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Cop
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* First row */}
                  <tr className="text-center">
                    <td className="border border-slate-300 lg:px-5 ">
                      <div className="flex justify-evenly items-center md:text-center text-start pr-2 py-2">
                        <h3 className="text-slate-700 font-bold">
                          Galarmobil S.A.{" "}
                        </h3>
                        <img className="w-16" src={galarmobilLogo} />
                      </div>
                    </td>
                    <td className="border border-slate-300 px-5">
                      3RA EMISION DE OBLIGACIONES
                    </td>
                    <td className="border border-slate-300 px-5">
                      5.000.000,00
                    </td>

                    <td className="border border-slate-300 px-5">AA</td>

                    <td className="border border-slate-300 px-5">2023</td>

                    <td className="border border-slate-300 px-5">
                      <Link
                        target="_blank"
                        to={
                          "https://www.bolsadevaloresguayaquil.com/sigcv/Opciones%20de%20Inversion/Renta%20Fija/Prospectos/GALARMOBIL%20S.A/Obligaciones/Prospecto%20III.pdf"
                        }
                        className="text-primary-color"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>

                  {/* Second row */}
                  <tr className="text-center">
                    <td className="border border-slate-300 pr-2 py-2">
                      <div className="flex justify-evenly items-center md:text-center text-start">
                        <h3 className="text-slate-700 text-sm font-bold">
                          RIPCONCIV CIA. LTDA.
                        </h3>
                        <img className="w-16" src={ripconcivLogo} />
                      </div>
                    </td>
                    <td className="border border-slate-300 px-5 ...">
                      4TA EMISION DE OBLIGACIONES
                    </td>
                    <td className="border border-slate-300 px-5 ...">
                      10.000.000,00
                    </td>
                    <td className="border border-slate-300 px-5 ...">AAA-</td>
                    <td className="border border-slate-300 px-5 ...">2023</td>
                    <td className="border border-slate-300 px-5 ...">
                      <Link
                        target="_blank"
                        to={
                          "https://www.bolsadevaloresguayaquil.com/sigcv/Opciones%20de%20Inversion/Renta%20Fija/Prospectos/RIPCONCIV%20CONSTRUCCIONES%20CIVILES%20CIA.%20LTDA/Obligaciones/Prospecto%20IV.pdf"
                        }
                        className="text-primary-color"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>

                  {/* Third row */}
                  <tr className="text-center">
                    <td className="border border-slate-300 pr-2 py-2">
                      <div className="flex justify-evenly items-center md:text-center text-start">
                        <h3 className="text-slate-700 text-sm font-bold">
                          SUPERDEPORTE S.A.{" "}
                        </h3>
                        <img className="w-16" src={superdeporteLogo} />
                      </div>
                    </td>
                    <td className="border border-slate-300 px-5 ...">
                      9NA EMISION DE OBLIGACIONES{" "}
                    </td>
                    <td className="border border-slate-300 px-5 ...">
                      4.000.000,00
                    </td>
                    <td className="border border-slate-300 px-5 ...">AAA-</td>
                    <td className="border border-slate-300 px-5 ...">2023</td>
                    <td className="border border-slate-300 px-5 ...">
                      <Link
                        target="_blank"
                        to={
                          "https://www.bolsadevaloresguayaquil.com/sigcv/Opciones%20de%20Inversion/Renta%20Fija/Prospectos/SUPERDEPORTE%20S.A/Obligaciones/Prospecto%209.pdf"
                        }
                        className="text-primary-color"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
              Al emitir acciones se podrá efectuar una oferta publica primaria
              de acciones únicamente a compañías que se funden a través de la
              constitución sucesiva de compañías anónimas, de la suscripción
              pública de acciones o a los que realicen un incremento de capital
              a través de una suscripción publica.
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
              <MdOutlineSsidChart className="inline" />
              Acciones Comunes Las acciones comunes son emitidas sin ningún
              privilegio especial que conceden igual derecho a los tenedores de
              acciones de una compañía. Se otorgará dividendos después que se
              hayan cubierto las acciones preferentes.{" "}
              <MdOutlineSsidChart className="inline" /> Acciones Preferentes Las
              acciones preferentes son aquellas que conceden a su titular
              preferencias en la distribución, pago de utilidades y el reembolso
              de capital, pero no se les concederá derecho a voto.{" "}
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
              La titularización es un mecanismo de financiamiento por medio de
              los activos de la compañía, en el cual se constituye un
              fideicomiso por tanto es el encargado de cumplir que fin para el
              cual se necesita el financiamiento, actuales o derechos sobre
              flujos futuros en valores negociables dentro del Mercado de
              Valores Ecuatoriano. Con estos títulos se obtienen recursos y
              liquidez en circunstancias competitivas.
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
              <MdOutlineSsidChart className="inline" />
              Flujos Futuros Trata de un activo aun no existente y su
              realización es materializada a medida que transcurra el tiempo. El
              derecho a recibir este tipo de flujo se aporta un medio de
              titularización que será el emisor de los títulos y la cobranza
              será para pagar a los inversionistas.{" "}
              <MdOutlineSsidChart className="inline" /> Titularización de
              Cartera Este tipo de Titularización trata de la venta de cartera
              de una compañía a inversionistas para hacer liquida la misma. Se
              podrá realizar este proceso con carteras de la misma clase, no se
              acepta ninguna combinación. Se podrá establecer proceso de emisión
              y colocación por tramos que estén dentro del plazo de la oferta
              publica y no excederse 18 meses. El monto máximo de la emisión, no
              podrá exceder del cien por ciento del capital insoluto de la
              cartera transferida al patrimonio autónomo.{" "}
              <MdOutlineSsidChart className="inline" /> Titularización de
              Inmuebles La Titularización de Inmuebles se perfecciona mediante
              un contrato de fiducia mercantil irrevocable de garantía o de
              administración, el originador transfiere a un patrimonio autónomo
              uno o varios bienes inmuebles de baja rotación, con cargo al cual
              la sociedad fiduciaria emite los títulos. El valor de la emisión
              excederá el noventa por ciento del valor presente de los flujos
              futuros.
              <MdOutlineSsidChart className="inline" /> Titularización de
              Proyectos Inmobiliarios Consiste en la emisión de títulos mixtos o
              de participación que incorporen derechos alícuotas o porcentuales
              sobre un patrimonio de propósito exclusivo constituido con un bien
              inmueble, los diseños, estudios técnicos y de perfectibilidad
              económica, programación de obra y presupuestos necesarios para
              desarrollar un proyecto inmobiliario objeto de titularización. El
              monto de la emisión, en ningún caso podrá exceder el cien por
              ciento del presupuesto total del proyecto inmobiliario.
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
            <div className="overflow-x-auto min-w-full max-w-[20rem]">
              <table className=" w-full text-nowrap border-collapse border-spacing-0 border border-slate-300">
                <thead>
                  <tr>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Emisor / Originador
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Proceso
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Monto
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Calificación
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Año
                    </th>
                    <th className="border border-slate-300 uppercase py-2 px-3">
                      Cop
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* First row */}
                  <tr className="text-center">
                    <td className="border border-slate-300 lg:px-5 ">
                      <div className="flex justify-evenly items-center md:text-center text-start pr-2 py-2">
                        <h3 className="text-slate-700 text-xs font-bold">
                          BOTANIQUO{" "}
                        </h3>
                        <img className="w-16" src={botanicoLogo} />
                      </div>
                    </td>
                    <td className="border border-slate-300 px-5 py-2">
                      Titularización de{" "}
                      <span className="block">derechos existentes</span>{" "}
                      generadores de{" "}
                      <span className="block">flujos futuros</span>
                    </td>
                    <td className="border border-slate-300 px-5">
                      18.000.000,00
                    </td>

                    <td className="border border-slate-300 px-5">AAA-</td>

                    <td className="border border-slate-300 px-5">2023</td>

                    <td className="border border-slate-300 px-5">
                      <Link
                        target="_blank"
                        to={
                          "https://www.bolsadevaloresguayaquil.com/sigcv/Opciones%20de%20Inversion/Renta%20Fija/TITULARIZACIONES/FIDEICOMISO%20TITULARIZACI%C3%93N%20BOTANIQO/Prospecto%20I.pdf"
                        }
                        className="text-primary-color"
                      >
                        Link
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TECollapse>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresFinanciamientoTarjetas;
