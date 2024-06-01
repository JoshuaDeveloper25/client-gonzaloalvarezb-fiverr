import { TECollapse } from "tw-elements-react";
import { useState } from "react";

import carlosArturo from "../../../images/carlos-arturo.jpg";
import nicolasSantos from "../../../images/nicolas-santos.jpg";
import mauricioDavila from "../../../images/mauricio-davila.jpg";
import juanDiegoPaz from "../../../images/juan-diego-paz.jpg";
import edwinCoellar from "../../../images/edwin-coellar.jpg";
import andresPerez from "../../../images/andres-perez.jpg";
import juanFranciscoAndrade from "../../../images/juan-francisco-andrade.jpg";
import manfredHohenleitner from "../../../images/manfred-hohenleitner.jpg";
import estebanGuerrero from "../../../images/esteban-guerrero.jpg";
import joseCardenas from "../../../images/jose-cardenas.jpg";

import administradores from "../../../images/administradores.jpg";

const GobiernoCorporativoAdministradores = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <section className="container-page my-20 space-y-8">
      <div className="grid items-start sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
        {/* Tarjeta 1 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Inversiones Financieras Atlántida
            </h3>
            <h2 className="text-xl text-primary-color">Administradores</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorInversiones1"
          >
            <button
              className={`${
                activeElement === "administradorInversiones1" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorInversiones1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Carlos Arturo</h2>{" "}
                <p className="text-sm">Gerente General</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorInversiones1"
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
            show={activeElement === "administradorInversiones1"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-view-box2 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                src={carlosArturo}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 2 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorInversiones2"
          >
            <button
              className={`${
                activeElement === "administradorInversiones2" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorInversiones2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Milton Pasaca</h2>{" "}
                <p className="text-sm">Director Administrativo - Financiero</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorInversiones2"
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
            show={activeElement === "administradorInversiones2"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-view-box2 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                src={carlosArturo}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 3 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorInversiones3"
          >
            <button
              className={`${
                activeElement === "administradorInversiones3" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorInversiones3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Jessica Estrella</h2>{" "}
                <p className="text-sm">Director de Talento Humano</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorInversiones3"
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
            show={activeElement === "administradorInversiones3"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-view-box2 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                src={carlosArturo}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 4 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorInversiones4"
          >
            <button
              className={`${
                activeElement === "administradorInversiones4" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorInversiones4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Danny Hurtado</h2>{" "}
                <p className="text-sm">Director de Negocios Institucionales</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorInversiones4"
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
            show={activeElement === "administradorInversiones4"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-view-box2 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                src={carlosArturo}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 5 */}
          <h2 className="mb-0 " id="administradorInversiones5">
            <button
              className={`${
                activeElement === "administradorInversiones5" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorInversiones5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Mayra Reyes</h2>{" "}
                <p className="text-sm">Director Legal</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorInversiones5"
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
            show={activeElement === "administradorInversiones5"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-view-box2 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                src={carlosArturo}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>
        </article>

        {/* Tarjeta 2 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Banco D-Miro
            </h3>
            <h2 className="text-xl text-primary-color">Administradores</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorBanco2"
          >
            <button
              className={`${
                activeElement === "administradorBanco2" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorBanco2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Manfred Hohenleitner</h2>{" "}
                <p className="text-sm leading-4">Presidente Ejecutivo</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorBanco2"
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
            show={activeElement === "administradorBanco2"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{ height: "auto" }}
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-contain rounded-full"
                loading="lazy"
                decoding="async"
                src={manfredHohenleitner}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 2 */}
          <h2 className="mb-0" id="administradorBanco3">
            <button
              className={`${
                activeElement === "administradorBanco3" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none border-b-2 border-primary-color`}
              type="button"
              // onClick={() => handleClick("administradorBanco3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Esteban Guerrero</h2>{" "}
                <p className="text-sm">Gerente General</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorBanco3"
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
            show={activeElement === "administradorBanco3"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5 border-b-2 border-primary-color"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box3 rounded-full"
                loading="lazy"
                decoding="async"
                src={estebanGuerrero}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 3 */}
          <h2 className="mb-0" id="administradorBanco4">
            <button
              className={`${
                activeElement === "administradorBanco4" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none border-b-2 border-primary-color`}
              type="button"
              // onClick={() => handleClick("administradorBanco4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">José Arturo Uclés</h2>{" "}
                <p className="text-sm">Gerente Financiero</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorBanco4"
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
            show={activeElement === "administradorBanco4"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box3 rounded-full"
                loading="lazy"
                decoding="async"
                src={"#"}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 4 */}
          <h2 className="mb-0" id="administradorBanco5">
            <button
              className={`${
                activeElement === "administradorBanco5" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorBanco5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Jorge Sotomayor - Grey</h2>{" "}
                <p className="text-sm">Gray Gerente Legal</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorBanco5"
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
            show={activeElement === "administradorBanco5"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box3 rounded-full"
                loading="lazy"
                decoding="async"
                src={"#"}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>
        </article>

        {/* Tarjeta 3 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Fiduciaria Atlántida
            </h3>
            <h2 className="text-xl text-primary-color">Administradores</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorFiduciaria1"
          >
            <button
              className={`${
                activeElement === "administradorFiduciaria1" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorFiduciaria1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Juan Francisco Andrade</h2>{" "}
                <p className="text-sm leading-4">Gerente General</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorFiduciaria1"
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
            show={activeElement === "administradorFiduciaria1"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{ height: "auto" }}
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box4 rounded-full"
                loading="lazy"
                decoding="async"
                src={juanFranciscoAndrade}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 2 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorFiduciaria2"
          >
            <button
              className={`${
                activeElement === "administradorFiduciaria2" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorFiduciaria2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Andrés Pérez Salvador</h2>{" "}
                <p className="text-sm">Director Corporativo</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorFiduciaria2"
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
            show={activeElement === "administradorFiduciaria2"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box5 rounded-full"
                loading="lazy"
                decoding="async"
                src={andresPerez}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 3 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorFiduciaria3"
          >
            <button
              className={`${
                activeElement === "administradorFiduciaria3" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorFiduciaria3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Paola Rocha</h2>{" "}
                <p className="text-sm">Director de Negocios Fiduciarios</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorFiduciaria3"
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
            show={activeElement === "administradorFiduciaria3"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box5 rounded-full"
                loading="lazy"
                decoding="async"
                src={andresPerez}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 3 */}
          <h2 className="mb-0" id="administradorFiduciaria4">
            <button
              className={`${
                activeElement === "administradorFiduciaria4" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorFiduciaria4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Andrés Saavedra</h2>{" "}
                <p className="text-sm">Director de Negocios Masivos</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorFiduciaria4"
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
            show={activeElement === "administradorFiduciaria4"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box5 rounded-full"
                loading="lazy"
                decoding="async"
                src={andresPerez}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>
        </article>

        {/* Tarjeta 5 */}
        <article className="border border-primary-color rounded-2xl  text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Atlántida Casa de Valores
            </h3>
            <h2 className="text-xl text-primary-color">Administradores</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorValores1"
          >
            <button
              className={`${
                activeElement === "administradorValores1" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorValores1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Edwin Coellar</h2>{" "}
                <p className="text-sm leading-4">Presidente Ejecutivo</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorValores1"
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
            show={activeElement === "administradorValores1"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{ height: "auto" }}
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box7 rounded-full"
                loading="lazy"
                decoding="async"
                src={edwinCoellar}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 2 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorValores2"
          >
            <button
              className={`${
                activeElement === "administradorValores2" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorValores2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Juan Diego Paz y Miño no Pazmiño</h2>{" "}
                <p className="text-sm">Gerente General</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorValores2"
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
            show={activeElement === "administradorValores2"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 object-cover object-view-box9 mx-auto rounded-full mb-5"
                loading="lazy"
                decoding="async"
                src={juanDiegoPaz}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 3 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorValores3"
          >
            <button
              className={`${
                activeElement === "administradorValores3" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorValores3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Fernando Arguello</h2>{" "}
                <p className="text-sm">Operadores de Valores</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorValores3"
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
            show={activeElement === "administradorValores3"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 object-cover object-view-box9 mx-auto rounded-full mb-5"
                loading="lazy"
                decoding="async"
                src={juanDiegoPaz}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 4 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorValores4"
          >
            <button
              className={`${
                activeElement === "administradorValores4" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorValores4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Marisol Pasiche</h2>{" "}
                <p className="text-sm">Operadores de Valores</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorValores4"
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
            show={activeElement === "administradorValores4"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 object-cover object-view-box9 mx-auto rounded-full mb-5"
                loading="lazy"
                decoding="async"
                src={juanDiegoPaz}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 5 */}
          <h2 className="mb-0 " id="administradorValores5">
            <button
              className={`${
                activeElement === "administradorValores5" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorValores5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Anabel Landazuri</h2>{" "}
                <p className="text-sm">Operadores de Valores</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorValores5"
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
            show={activeElement === "administradorValores5"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 object-cover object-view-box9 mx-auto rounded-full mb-5"
                loading="lazy"
                decoding="async"
                src={juanDiegoPaz}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>
        </article>

        {/* Tarjeta 7 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Atlántida Insurance
            </h3>
            <h2 className="text-xl text-primary-color">Administradores</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0" id="administradorInsurance1">
            <button
              className={`${
                activeElement === "administradorInsurance1" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorInsurance1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Mauricio Dávila</h2>{" "}
                <p className="text-sm leading-4">Gerente General</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorInsurance1"
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
            show={activeElement === "administradorInsurance1"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 object-cover object-view-box10 mx-auto mb-5 rounded-full"
                loading="lazy"
                decoding="async"
                src={mauricioDavila}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>
        </article>

        {/* Tarjeta 6 */}
        <article className="border border-primary-color rounded-2xl  text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Reditum
            </h3>
            <h2 className="text-xl text-primary-color">Administradores</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0" id="administradorReditum1">
            <button
              className={`${
                activeElement === "administradorReditum1" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorReditum1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Jose Antonio Cárdenas</h2>{" "}
                <p className="text-sm leading-4">Gerente General</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorReditum1"
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
            show={activeElement === "administradorReditum1"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box8 rounded-full"
                loading="lazy"
                decoding="async"
                src={joseCardenas}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>
        </article>

        {/* Tarjeta 4 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              CrediPrime/CapitalPrime
            </h3>
            <h2 className="text-xl text-primary-color">Administradores</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administradorCrediCapitalPrime1"
          >
            <button
              className={`${
                activeElement === "administradorCrediCapitalPrime1" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorCrediCapitalPrime1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Nicolás Santos</h2>{" "}
                <p className="text-sm leading-4">Gerente General</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorCrediCapitalPrime1"
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
            show={activeElement === "administradorCrediCapitalPrime1"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 object-cover object-view-box6 mx-auto mb-5  rounded-full"
                loading="lazy"
                decoding="async"
                src={nicolasSantos}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>

          {/* Tarjeta Accordion 2 */}
          <h2 className="mb-0" id="administradorCrediCapitalPrime2">
            <button
              className={`${
                activeElement === "administradorCrediCapitalPrime2" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administradorCrediCapitalPrime2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Paulina Zabala</h2>{" "}
                <p className="text-sm leading-4">Auditor Interno</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administradorCrediCapitalPrime2"
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
            show={activeElement === "administradorCrediCapitalPrime2"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 object-cover object-view-box6 mx-auto mb-5  rounded-full"
                loading="lazy"
                decoding="async"
                src={nicolasSantos}
              />
            </div>

            <p className="text-secondary-color text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
              facilisis metus, eget vestibulum est. Aenean et egestas purus.
              Curabitur vel pellentesque ex, nec rhoncus erat. Nullam dapibus
              enim vel nunc rhoncus, eu consequat sem scelerisque.
            </p>
          </TECollapse>
        </article>

        {/* Tarjeta 9 - Imagen */}
        <article
          className={`md:hidden order-last flex max-h-[30rem] h-full col-span-1`}
        >
          <img
            className={`h-full rounded-2xl object-cover w-full`}
            src={administradores}
            loading="lazy"
            decoding="async"
          />
        </article>

        {/* Tarjeta 8 */}
        <article className="col-span-1"></article>

        {/* Tarjeta 9 - Imagen */}
        <article className={`md:flex hidden max-h-[30rem] h-full col-span-1`}>
          <img
            className={`h-full rounded-2xl object-cover w-full`}
            src={administradores}
            loading="lazy"
            decoding="async"
          />
        </article>
      </div>
    </section>
  );
};

export default GobiernoCorporativoAdministradores;
