import {
  Link,
  Outlet,
  useNavigate,
  NavLink,
  ScrollRestoration,
} from "react-router-dom";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import AppContext from "../../context/AppProvider";
import logo from "../../images/logo-atlantida.png";
import { FaArrowLeft } from "react-icons/fa";
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
          backgroundColor="#E5E5E5"
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
        >
          <Menu className="text-white">
            <div className="flex flex-col min-h-svh">
              <div className="block mx-3 mt-4">
                <Link to={"/admin/dashboard"}>
                  <img
                    loading="lazy"
                    decoding="async"
                    className="w-36 mb-10 mx-auto"
                    src={logo}
                    alt={`Logo de Empresa`}
                  />
                </Link>
              </div>

              <NavLink
                to={`/`}
                className="flex gap-2.5 items-center text-primary-color hover:text-white font-bold animation-fade bg-gray-200 hover:bg-primary-color border-b mb-6 px-3 py-3"
              >
                <FaArrowLeft /> Volver a Sur Atlántida
              </NavLink>

              <SubMenu
                label="Fiduciaria Transparencia"
                className="bg-gray-200 text-primary-color animation-fade"
              >
                <SubMenu label="Fiduciaria Atlántida">
                  <MenuItem>Documentos</MenuItem>
                </SubMenu>
              </SubMenu>

              <Link
                className="text-center mt-auto px-3 font-bold py-3 bg-red-500 hover:bg-red-400 animation-fade hover:text-white"
                onClick={signOut}
              >
                Cerrar Sesión
              </Link>
            </div>
          </Menu>
        </Sidebar>

        <main className="flex p-2.5">
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
