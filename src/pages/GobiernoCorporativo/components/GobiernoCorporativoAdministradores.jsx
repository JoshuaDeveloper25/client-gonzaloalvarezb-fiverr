import { TECollapse } from "tw-elements-react";
import { useState } from "react";

import carlosArturo from "../../../images/carlos-arturo.jpg";
import nicolasSantos from "../../../images/nicolas-santos.jpg";
import mauricioDavila from "../../../images/mauricio-davila.jpg";
import juanDiegoPaz from "../../../images/juan-diego-paz.jpg";
import edwinCoellar from "../../../images/edwin-coellar.jpg";
import andresPerez from "../../../images/andres-perez.jpg";
import juanFranciscoAndrade from "../../../images/juan-francisco-andrade.jpg";
import manfredHohenleitner  from "../../../images/manfred-hohenleitner.jpg"
import estebanGuerrero  from "../../../images/esteban-guerrero.jpg"
import joseCardenas  from "../../../images/jose-cardenas.jpg"

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
              Inversiones Financieras <span className="block">Atlántida</span>
            </h3>
            <h2 className="text-xl text-primary-color">Administradores</h2>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0" id="administrador1">
            <button
              className={`${
                activeElement === "administrador1" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Carlos Arturo</h2>{" "}
                <p className="text-sm">
                  Gerente General Inversiones{" "}
                  <span className="block">Financieras Atlántida Ecuador</span>
                  IFAEC S.A.
                </p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administrador1"
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
            show={activeElement === "administrador1"}
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
            id="administrador2"
          >
            <button
              className={`${
                activeElement === "administrador2" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador2")}
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
                    activeElement === "administrador2"
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
            show={activeElement === "administrador2"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{height: 'auto'}}
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
          <h2 className="mb-0" id="administrador3">
            <button
              className={`${
                activeElement === "administrador3" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador3")}
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
                    activeElement === "administrador3"
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
            show={activeElement === "administrador3"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
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
        </article>

        {/* Tarjeta 3 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Fiduciaria Atlántida
            </h3>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administrador4"
          >
            <button
              className={`${
                activeElement === "administrador4" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador4")}
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
                    activeElement === "administrador4"
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
            show={activeElement === "administrador4"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{height: 'auto'}}
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
          <h2 className="mb-0" id="administrador5">
            <button
              className={`${
                activeElement === "administrador5" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador5")}
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
                    activeElement === "administrador5"
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
            show={activeElement === "administrador5"}
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

        {/* Tarjeta 4 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Crediprime /<span className="block">Capital Prime</span>
            </h3>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0" id="administrador6">
            <button
              className={`${
                activeElement === "administrador6" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador6")}
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
                    activeElement === "administrador6"
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
            show={activeElement === "administrador6"}
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

        {/* Tarjeta 5 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Atlántida Casa de <span className="block">Valores</span>
            </h3>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2
            className="mb-0 border-b-2 border-primary-color"
            id="administrador7"
          >
            <button
              className={`${
                activeElement === "administrador7" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador7")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Edwin Coellar</h2>{" "}
                <p className="text-sm leading-4">Presidente</p>
              </div>

              <div className="pt-3 hidden">
                <span
                  className={`${
                    activeElement === "administrador7"
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
            show={activeElement === "administrador7"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 border-b-2 border-primary-color"
            style={{height: 'auto'}}
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
          <h2 className="mb-0" id="administrador8">
            <button
              className={`${
                activeElement === "administrador8" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador8")}
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
                    activeElement === "administrador8"
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
            show={activeElement === "administrador8"}
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

        {/* Tarjeta 6 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Reditum
            </h3>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0" id="administrador9">
            <button
              className={`${
                activeElement === "administrador9" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador9")}
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
                    activeElement === "administrador9"
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
            show={activeElement === "administrador9"}
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

        {/* Tarjeta 7 */}
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          {/* Titulo Tarjeta */}
          <div className="border-b-2 border-primary-color py-5">
            <h3 className="family-nunito-black text-center text-xl text-primary-color leading-6">
              Atlántida Insurance
            </h3>
          </div>

          {/* Tarjeta Accordion 1 */}
          <h2 className="mb-0" id="administrador10">
            <button
              className={`${
                activeElement === "administrador10" &&
                ` font-bold [box-shadow:inset_0_-3px_0_rgba(255,0,0)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              // onClick={() => handleClick("administrador10")}
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
                    activeElement === "administrador10"
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
            show={activeElement === "administrador10"}
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

        {/* Tarjeta 9 - Imagen */}
        <article className={`md:hidden flex max-h-[30rem] h-full col-span-1`}>
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
