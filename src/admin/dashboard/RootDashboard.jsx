import {
  Link,
  Outlet,
  useNavigate,
  NavLink,
  ScrollRestoration,
} from "react-router-dom";
import { Menu, Sidebar } from "react-pro-sidebar";
import AppContext from "../../context/AppProvider";
import logo from "../../images/logo-atlantida.png";
import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";

const RootDashboard = () => {
  const { setUserInfo } = useContext(AppContext);
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();

  const signOut = () => {
    navigate(`/`);
    setUserInfo({});
    localStorage.removeItem("userInfo");
    toast.success("Sesión cerrada exitosamente!");
  };

  return (
    <div className="md:flex min-h-svh">
      <div className="sticky inset-0 flex h-full">
        <Sidebar
          breakPoint="md"
          backgroundColor="#F1F1F1"
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
        >
          <Menu className="text-white">
            <div className="flex flex-col min-h-svh">
              <div className="block mx-3 mt-4">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-36 mb-3 mx-auto"
                  src={logo}
                  alt={`Logo de Empresa`}
                />
              </div>

              <NavLink
                to={`/inicio`}
                className="font-bold animation-fade hover:bg-primary-color border-b border-gray-500 block px-3 py-3"
              >
                Volver a Inicio
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-color px-3 py-3 font-bold"
                    : " px-3 py-3 font-bold animation-fade hover:bg-primary-color bg-gray-300"
                }
                to={`/admin/dashboard/gestionar-archivos`}
              >
                Gestionar Archivos
              </NavLink>

              <Link
                className="text-center mt-auto px-3 font-bold py-3 bg-red-500 hover:bg-red-400 animation-fade hover:text-white"
                onClick={signOut}
              >
                Cerrar Sesión
              </Link>
            </div>
          </Menu>
        </Sidebar>

        <main style={{ display: "flex", padding: 10 }}>
          <div>
            <button
              className="sb-button text-4xl md:hidden"
              onClick={() => setToggled(!toggled)}
              type="button"
              data-drawer-show={`drawer-example`}
            >
              <IoMenu />
            </button>
          </div>
        </main>
      </div>

      {/* --> This is the admin panel */}
      <main className="px-5">
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
};

export default RootDashboard;
