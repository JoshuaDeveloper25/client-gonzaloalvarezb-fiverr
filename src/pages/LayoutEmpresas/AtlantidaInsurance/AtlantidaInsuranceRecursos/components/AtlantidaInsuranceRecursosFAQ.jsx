import { TECollapse } from "tw-elements-react";
import { useState } from "react";

const AtlantidaInsuranceRecursosFAQ = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <section className="container-page my-10">
        <h2 className="text-4xl text-center family-nunito-black text-secondary-color mb-14">
          Preguntas Frecuentes
        </h2>

        {/* Tarjeta */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0 border-b-2 border-primary-color" id="pregunta1">
            <button
              className={`${
                activeElement === "pregunta1" &&
                ` font-bold [box-shadow:inset_0_-2px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("pregunta1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">
                  ¿Cuáles son las clínicas en convenio y número para agendar
                  cita médica?
                </h2>{" "}
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "pregunta1"
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
            show={activeElement === "pregunta1"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5  border-b-2 border-primary-color"
            style={{ height: "auto" }}
          >
            <div className="text-start">
              <p className="pb-2">
                1. Contactarse al 099999999 / info@insuratlan.com o acérquese a
                nuestras oficinas de servicio más cercanas.
              </p>

              <p>
                2. Solicite la cancelación de sus seguros presentando su cedula
                de identidad.
              </p>
            </div>
          </TECollapse>

          {/* Tarjeta Accordion 2 */}
          <h2 className="mb-0 border-b-2 border-primary-color" id="pregunta2">
            <button
              className={`${
                activeElement === "pregunta2" &&
                ` font-bold [box-shadow:inset_0_-2px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("pregunta2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">
                  ¿Cuáles son las clínicas en convenio y número para agendar
                  cita médica?
                </h2>{" "}
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "pregunta2"
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
            show={activeElement === "pregunta2"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5 border-b-2 border-primary-color"
            style={{ height: "auto" }}
          >
            <div className="text-start">
              <p className="pb-2">
                1. Contactarse al 099999999 / info@insuratlan.com o acérquese a
                nuestras oficinas de servicio más cercanas.
              </p>

              <p>
                2. Solicite la cancelación de sus seguros presentando su cedula
                de identidad.
              </p>
            </div>
          </TECollapse>

          {/* Tarjeta Accordion 3 */}
          <h2 className="mb-0 border-b-2 border-primary-color" id="pregunta3">
            <button
              className={`${
                activeElement === "pregunta3" &&
                ` font-bold [box-shadow:inset_0_-2px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("pregunta3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">
                  ¿Por qué debo informar mi estado de salud?
                </h2>{" "}
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "pregunta3"
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
            show={activeElement === "pregunta3"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5 border-b-2 border-primary-color"
            style={{ height: "auto" }}
          >
            <div className="text-start">
              <p className="pb-2">
                1. Contactarse al 099999999 / info@insuratlan.com o acérquese a
                nuestras oficinas de servicio más cercanas.
              </p>

              <p>
                2. Solicite la cancelación de sus seguros presentando su cedula
                de identidad.
              </p>
            </div>
          </TECollapse>

          {/* Tarjeta Accordion 4 */}
          <h2 className="mb-0 border-b-2 border-primary-color" id="pregunta4">
            <button
              className={`${
                activeElement === "pregunta4" &&
                ` font-bold [box-shadow:inset_0_-2px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("pregunta4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">
                  ¿Qué debo hacer para cancelar mi seguro?
                </h2>{" "}
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "pregunta4"
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
            show={activeElement === "pregunta4"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5 border-b-2 border-primary-color"
            style={{ height: "auto" }}
          >
            <div className="text-start">
              <p className="pb-2">
                1. Contactarse al 099999999 / info@insuratlan.com o acérquese a
                nuestras oficinas de servicio más cercanas.
              </p>

              <p>
                2. Solicite la cancelación de sus seguros presentando su cedula
                de identidad.
              </p>
            </div>
          </TECollapse>

          {/* Tarjeta Accordion 5 */}
          <h2 className="mb-0" id="pregunta5">
            <button
              className={`${
                activeElement === "pregunta5" &&
                ` font-bold [box-shadow:inset_0_-2px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-center rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("pregunta5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">
                  ¿Por qué debo informar mi estado de salud?
                </h2>{" "}
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "pregunta5"
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
            show={activeElement === "pregunta5"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div className="text-start">
              <p className="pb-2">
                1. Contactarse al 099999999 / info@insuratlan.com o acérquese a
                nuestras oficinas de servicio más cercanas.
              </p>

              <p>
                2. Solicite la cancelación de sus seguros presentando su cedula
                de identidad.
              </p>
            </div>
          </TECollapse>
        </article>
      </section>
    </>
  );
};

export default AtlantidaInsuranceRecursosFAQ;
