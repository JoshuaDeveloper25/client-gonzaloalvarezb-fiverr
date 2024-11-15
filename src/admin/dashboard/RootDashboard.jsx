import {
  Link,
  Outlet,
  useNavigate,
  NavLink,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { subMenuDashboardPage } from "../../DB/data";
import AppContext from "../../context/AppProvider";
import logo from "../../images/logo-atlantida.png";
import { MdManageAccounts } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";
import { BsPinAngleFill } from "react-icons/bs";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { GrDocumentWord } from "react-icons/gr";

const RootDashboard = () => {
  const { setUserInfo } = useContext(AppContext);
  const [toggled, setToggled] = useState(false);
  const location = useLocation();
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
          onBackdropClick={() => setToggled(false)}
          backgroundColor="#E5E5E5"
          toggled={toggled}
          breakPoint="md"
          width="280px"
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

              {/* Back to main home */}
              <NavLink
                to={`/`}
                className="flex gap-2.5 items-center text-primary-color hover:text-white font-bold animation-fade bg-gray-200 hover:bg-primary-color border-b mb-6 px-3 py-3"
              >
                <FaArrowLeft /> Volver a Sur Atlántida
              </NavLink>

              {/* Manage users */}
              <div className="border-b border-secondary-color/30 pb-4 mb-4">
                <MenuItem
                  className={`${
                    location?.pathname === "/admin/dashboard/gestionar-usuarios"
                      ? "bg-white text-primary-color"
                      : "bg-primary-color/5 text-primary-color"
                  } `}
                  onClick={() =>
                    navigate(`/admin/dashboard/gestionar-usuarios`)
                  }
                  icon={<MdManageAccounts size={24} />}
                >
                  Gestionar Usuarios
                </MenuItem>
              </div>

              {subMenuDashboardPage?.map((subMenuPage, index) => (
                <SubMenu
                  className="bg-primary-color/5 text-primary-color animation-fade"
                  label={subMenuPage?.labelPage}
                  icon={<GrDocumentWord />}
                  key={index}
                >
                  {subMenuPage?.labelSection?.map((item, index) => (
                    <SubMenu
                      className="bg-primary-color/25"
                      label={item?.sectionTitle}
                      icon={<BsPinAngleFill className="margin-end-0" />}
                      key={index}
                    >
                      {item?.labelAccordions?.map((labelAccordion, index) => (
                        <MenuItem
                          onClick={() =>
                            navigate(
                              `/admin/dashboard/gestionar-archivos?pageName=${subMenuPage?.labelPage}&sectionName=${item?.sectionTitle}&accordionName=${labelAccordion?.labelNameAccordion}`
                            )
                          }
                          className="bg-primary-color/45"
                          icon={<TfiLayoutAccordionList />}
                          key={index}
                        >
                          {labelAccordion?.labelNameAccordion}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              ))}

              <Link
                className="text-center mt-auto px-3 font-bold py-3 bg-red-500 hover:bg-red-400 animation-fade hover:text-white"
                onClick={signOut}
              >
                Cerrar Sesión
              </Link>
            </div>
          </Menu>
        </Sidebar>

        {/* Hamburguer Icon On Responsive */}
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

      {/* --> This is the admin panel (Right Content) */}
      <main className="px-5">
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
};

export default RootDashboard;
