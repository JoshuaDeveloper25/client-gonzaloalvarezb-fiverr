import { TECollapse } from "tw-elements-react";
import { useState } from "react";

import manfredHohenleitner from "../../../images/manfred-hohenleitner.jpg";
import lourdesArevalo from "../../../images/lourdes-arevalo.jpg";
import mariaElina from "../../../images/maria-elina.jpg";
import carlosArturo from "../../../images/carlos-arturo.jpg";

import directorios from "../../../images/directorios.jpg";

const GobiernoCorporativoDirectorios = () => {
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
          <div className="border-b-2 border-primary-color py-8">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-5">
              Grupo Sur Atlántida
            </h3>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0 border-b-2 border-primary-color" id="directorio1">
            <button
              className={`${
                activeElement === "directorio1" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Gabriel Delgado Suazo</h2>{" "}
                <p className="text-sm">Presidente de la Junta Directiva</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio1"
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
            show={activeElement === "directorio1"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="border-b-2 border-primary-color mb-0" id="directorio2">
            <button
              className={`${
                activeElement === "directorio2" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">David Bueso</h2>{" "}
                <p className="text-sm">Miembro de la Junta Directiva</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio2"
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
            show={activeElement === "directorio2"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="border-b-2 border-primary-color mb-0" id="directorio3">
            <button
              className={`${
                activeElement === "directorio3" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Arturo Medrano</h2>{" "}
                <p className="text-sm">Miembro de la Junta Directiva</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio3"
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
            show={activeElement === "directorio3"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{height: 'auto'}}
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="mb-0" id="directorio4">
            <button
              className={`${
                activeElement === "directorio4" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("directorio4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Manfred Hohenleitner</h2>{" "}
                <p className="text-sm">Miembro de la Junta Directiva</p>
              </div>

              <div className="pt-3">
                <span
                  className={`${
                    activeElement === "directorio4"
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
            show={activeElement === "directorio4"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
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
        </article>

        {/* Tarjeta 2 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Inversiones Financieras <span className="block">Atlántida</span>
            </h3>
            <h2 className="text-xl text-primary-color">
              Directores Principales
            </h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0 border-b-2 border-primary-color" id="directorio5">
            <button
              className={`${
                activeElement === "directorio5" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Gabriel Delgado</h2>{" "}
                <p className="text-sm leading-4">
                  Presidente del Consejo Directivo
                  <span className="block">del Grupo Sur Atlántida</span>
                </p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio5"
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
            show={activeElement === "directorio5"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="border-b-2 border-primary-color mb-0" id="directorio6">
            <button
              className={`${
                activeElement === "directorio6" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio6")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Guillermo Bueso</h2>{" "}
                <p className="text-sm">
                  Presidente del Consejo de{" "}
                  <span className="block">Administración de Inversiones</span>
                  Atlántida y Presidente Ejecutivo{" "}
                  <span className="block">del Banco Atlántida en Honduras</span>
                </p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio6"
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
            show={activeElement === "directorio6"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="border-b-2 border-primary-color mb-0" id="directorio7">
            <button
              className={`${
                activeElement === "directorio7" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio7")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Fernando de Mergelina</h2>{" "}
                <p className="text-sm">Presidente del Pacific Bank Panamá</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio7"
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
            show={activeElement === "directorio7"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="border-b-2 border-primary-color mb-0" id="directorio8">
            <button
              className={`${
                activeElement === "directorio8" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio8")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Rafael Núñez</h2>{" "}
                <p className="text-sm">
                  Vicepresidente Corporativo de{" "}
                  <div className="block">Finanzas Banco Atlántida</div>
                  Honduras y CFO de Invatlan
                </p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio8"
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
            show={activeElement === "directorio8"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{height: 'auto'}}
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="mb-0 " id="directorio9">
            <button
              className={`${
                activeElement === "directorio9" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("directorio9")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Lourdes Arevalo</h2>{" "}
                <p className="text-sm">Presidente AFP Confía en El Salvador</p>
              </div>

              <div className="pt-3">
                <span
                  className={`${
                    activeElement === "directorio9"
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
            show={activeElement === "directorio9"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5 "
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={lourdesArevalo}
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
              Inversiones Financieras <span className="block">Atlántida</span>
            </h3>
            <h2 className="text-xl text-primary-color">Directores Suplentes</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="directorio10"
          >
            <button
              className={`${
                activeElement === "directorio10" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio10")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Javier Mayorga</h2>{" "}
                <p className="text-sm leading-4">
                  Gerente Atlántida Capital en El
                  <span className="block">Salvador</span>
                </p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio10"
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
            show={activeElement === "directorio10"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio11"
          >
            <button
              className={`${
                activeElement === "directorio11" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio11")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Iván Juárez</h2>{" "}
                <p className="text-sm">
                  Gerente General Atlántida{" "}
                  <span className="block">Securities en El Salvador</span>
                </p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio11"
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
            show={activeElement === "directorio11"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio12"
          >
            <button
              className={`${
                activeElement === "directorio12" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("directorio12")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">María Elina Carías</h2>{" "}
                <p className="text-sm">
                  Vicepresidente Banca
                  <span className="block">Transaccional del Banco</span>
                  Atlántida en Honduras
                </p>
              </div>

              <div className="pt-3">
                <span
                  className={`${
                    activeElement === "directorio12"
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
            show={activeElement === "directorio12"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box1 rounded-full"
                loading="lazy"
                decoding="async"
                src={mariaElina}
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio13"
          >
            <button
              className={`${
                activeElement === "directorio13" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio13")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Sebastián Saá</h2>{" "}
                <p className="text-sm">
                  Director Independiente, Socio{" "}
                  <span className="block">de la firma de abogados</span>{" "}
                  Spingarn & Marks
                </p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio13"
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
            show={activeElement === "directorio13"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{height: 'auto'}}
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="mb-0 " id="directorio14">
            <button
              className={`${
                activeElement === "directorio14" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("directorio14")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Manfred Hohenleitner</h2>{" "}
                <p className="text-sm">
                  Presidente Banco Atlántida{" "}
                  <span className="block">Ecuador</span>
                </p>
              </div>

              <div className="pt-3">
                <span
                  className={`${
                    activeElement === "directorio14"
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
            show={activeElement === "directorio14"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5 "
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
        </article>

        {/* Tarjeta 4 - Imagen */}
        <article className={`max-h-[30rem] h-full col-span-1`}>
          <img
            className={`h-full rounded-2xl object-cover`}
            src={directorios}
            loading="lazy"
            decoding="async"
          />
        </article>

        {/* Tarjeta 5 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Banco D-Miro
            </h3>
            <h2 className="text-xl text-primary-color">
              Directores Principales
            </h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="directorio15"
          >
            <button
              className={`${
                activeElement === "directorio15" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio15")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Gabriel Delgado</h2>{" "}
                <p className="text-sm leading-4">Presidente del Directorio</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio15"
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
            show={activeElement === "directorio15"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio16"
          >
            <button
              className={`${
                activeElement === "directorio16" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio16")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Guillermo Bueso</h2>{" "}
                <p className="text-sm">Vicepresidente del Directorio</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio16"
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
            show={activeElement === "directorio16"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio17"
          >
            <button
              className={`${
                activeElement === "directorio17" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio17")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Arturo Medrano</h2>{" "}
                <p className="text-sm">Director Principal</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio17"
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
            show={activeElement === "directorio17"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio18"
          >
            <button
              className={`${
                activeElement === "directorio18" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio18")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Ilduara Guerra de Bonilla</h2>{" "}
                <p className="text-sm">Director Principal</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio18"
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
            show={activeElement === "directorio18"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{height: 'auto'}}
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="mb-0 " id="directorio19">
            <button
              className={`${
                activeElement === "directorio19" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio19")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Carlos Turcios</h2>{" "}
                <p className="text-sm">Director Principal</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio19"
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
            show={activeElement === "directorio19"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5 "
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Banco D-Miro
            </h3>
            <h2 className="text-xl text-primary-color">
              Directores Secundarios
            </h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="directorio20"
          >
            <button
              className={`${
                activeElement === "directorio20" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio20")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Enrique García</h2>{" "}
                <p className="text-sm leading-4">Director Secundario</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio20"
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
            show={activeElement === "directorio20"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio21"
          >
            <button
              className={`${
                activeElement === "directorio21" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio21")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Manuel Dávila</h2>{" "}
                <p className="text-sm">Director Secundario</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio21"
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
            show={activeElement === "directorio21"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio22"
          >
            <button
              className={`${
                activeElement === "directorio22" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("directorio22")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Carlos Arturo</h2>{" "}
                <p className="text-sm">Director Secundario</p>
              </div>

              <div className="pt-3">
                <span
                  className={`${
                    activeElement === "directorio22"
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
            show={activeElement === "directorio22"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover object-view-box2 rounded-full"
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
            className="border-b-2 border-primary-color mb-0"
            id="directorio23"
          >
            <button
              className={`${
                activeElement === "directorio23" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio23")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Carol Kattán</h2>{" "}
                <p className="text-sm">Director Secundario</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio23"
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
            show={activeElement === "directorio23"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{height: 'auto'}}
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
          <h2 className="mb-0 " id="directorio24">
            <button
              className={`${
                activeElement === "directorio24" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("directorio24")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Carlos Coto</h2>{" "}
                <p className="text-sm">Director Secundario</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "directorio24"
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
            show={activeElement === "directorio24"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5 "
          >
            <div>
              <img
                className="w-28 h-28 mx-auto mb-5 object-cover rounded-full"
                loading="lazy"
                decoding="async"
                src={`https://dummyimage.com/600x400/000/fff`}
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
      </div>
    </section>
  );
};

export default GobiernoCorporativoDirectorios;
