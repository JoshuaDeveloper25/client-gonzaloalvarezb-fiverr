import logoAtlantida from "../images/logo-atlantida.png";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { createPortal } from "react-dom";
import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="container-page px-2 py-2">
      <div className="flex lg:justify-start justify-between items-center gap-8">
        <div>
          <Link to={`/`}>
            <img
              decoding="async"
              loading="lazy"
              className="w-44"
              src={logoAtlantida}
              alt={`Logo Banco Atlantida`}
            />
          </Link>
        </div>

        <div className="hidden lg:flex gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary-color font-extrabold hover:text-primary-color"
                : "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300"
            }
            to={`/`}
          >
            Inicio
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary-color font-extrabold hover:text-primary-color"
                : "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300"
            }
            to={`/quienes-somos`}
          >
            ¿Quiénes somos?
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary-color font-extrabold hover:text-primary-color"
                : "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300"
            }
            to={`/gobierno-corporativo`}
          >
            Gobierno Corporativo
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary-color font-extrabold hover:text-primary-color"
                : "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300"
            }
            to={`/presencia-regional`}
          >
            Presencia Regional
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary-color font-extrabold hover:text-primary-color"
                : "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300"
            }
            to={`/empresas`}
          >
            Empresas
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-primary-color font-extrabold hover:text-primary-color"
                : "text-secondary-color font-extrabold hover:text-primary-color transition-all duration-300"
            }
            to={`/reconocimientos`}
          >
            Reconocimientos
          </NavLink>
        </div>

        {/* <!-- drawer init and toggle --> */}
        <div className="lg:hidden flex text-center">
          <button
            className="font-medium  text-2xl px-5"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
            onClick={() => setNavbarOpen(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* <!-- drawer component --> */}
        {navbarOpen && (
          <>
            {createPortal(
              <div
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`lg:hidden bg-black/50 h-[100vh] fixed top-0 w-full`}
              ></div>,
              document.body
            )}
          </>
        )}

        <div
          id="drawer-example"
          className={`lg:hidden w-full fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-500 bg-white sm:w-80 ${
            !navbarOpen ? "-translate-x-full" : null
          }`}
          tabIndex="-1"
          aria-labelledby="drawer-label"
        >
          <div>
            <Link className="inline" to={`/`}>
              <img
                decoding="async"
                loading="lazy"
                className="inline w-28"
                src={logoAtlantida}
                alt={`Logo Banco Atlantida`}
              />
            </Link>
          </div>

          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-black bg-transparent hover:bg-primary-color hover:text-white rounded-lg text-sm w-8 h-8 absolute top-5 end-2.5 flex items-center justify-center"
            onClick={() => setNavbarOpen(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="flex flex-col mt-10 gap-6">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color font-extrabold border-b-primary-color border-b pb-1"
                  : "text-secondary-color border-b-secondary-color/15 hover:text-primary-color pb-1 hover:border-b-primary-color transition-all duration-200 border-b font-extrabold"
              }
              to={`/`}
            >
              Inicio
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color font-extrabold"
                  : "text-secondary-color border-b-secondary-color/15 hover:text-primary-color pb-1 hover:border-b-primary-color transition-all duration-200 border-b font-extrabold"
              }
              to={`/quienes-somos`}
            >
              ¿Quiénes somos?
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color font-extrabold"
                  : "text-secondary-color border-b-secondary-color/15 hover:text-primary-color pb-1 hover:border-b-primary-color transition-all duration-200 border-b font-extrabold"
              }
              to={`/gobierno-corporativo`}
            >
              Gobierno Corporativo
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color font-extrabold"
                  : "text-secondary-color border-b-secondary-color/15 hover:text-primary-color pb-1 hover:border-b-primary-color transition-all duration-200 border-b font-extrabold"
              }
              to={`/presencia-regional`}
            >
              Presencia Regional
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color font-extrabold"
                  : "text-secondary-color border-b-secondary-color/15 hover:text-primary-color pb-1 hover:border-b-primary-color transition-all duration-200 border-b font-extrabold"
              }
              to={`/empresas`}
            >
              Empresas
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color font-extrabold"
                  : "text-secondary-color border-b-secondary-color/15 hover:text-primary-color pb-1 hover:border-b-primary-color transition-all duration-200 border-b font-extrabold"
              }
              to={`/reconocimientos`}
            >
              Reconocimientos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
