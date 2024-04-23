import { TECollapse } from "tw-elements-react";
import { useState } from "react";

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
    <section className="container-page my-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
        <article className="border border-primary-color rounded-2xl text-secondary-color text-center col-span-1">
          <div className="border-b border-primary-color py-5">
            <h3
              className="text-center text-primary-color leading-5"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Grupo Sur Atlántida
            </h3>
          </div>

          <h2 className="mb-0" id="gabrielDelgadoSuazo">
            <button
              className={`${
                activeElement === "gabrielDelgadoSuazo" &&
                ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
              } group relative flex w-full justify-between items-start rounded-none border-0 px-5 py-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick("gabrielDelgadoSuazo")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div>
                <h2 className="font-bold">Gabriel Delgado Suazo</h2>{" "}
                <p className="text-sm">Presidente de la Junta Directiva</p>
              </div>

              <div>
                <span
                  className={`${
                    activeElement === "gabrielDelgadoSuazo"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
            </button>
          </h2>

          <TECollapse
            show={activeElement === "gabrielDelgadoSuazo"}
            className="!mt-0 !rounded-b-none !shadow-none px-5 py-5 my-5"
          >
            <div>
              <p></p>
              <p className="text-sm font-[100]">
                La Floresta. Andalucía 324 y Francisco Galavis. Edificio
                Atlántida. P.O. Box 170525
              </p>
              <p className="text-sm font-[100]">+593 2 600 46 74</p>
            </div>

            <div className="mt-5">
              <p></p>
              <p className="text-sm font-[100]">
                Kennedy Norte, Av. Francisco de Orellana, Mz. 111 - Solar 1.
                Edificio World Trade Center, Torre A.
              </p>
              <p className="text-sm font-[100]">+593 4 600 46 74</p>
            </div>
          </TECollapse>
        </article>

        <article className="rounded-2xl text-secondary-color text-center col-span-1"></article>

        <article className="rounded-2xl text-secondary-color text-center col-span-1"></article>
      </div>
    </section>
  );
};

export default GobiernoCorporativoDirectorios;
