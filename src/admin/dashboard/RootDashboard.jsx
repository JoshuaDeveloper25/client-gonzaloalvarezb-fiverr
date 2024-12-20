import {
  Link,
  Outlet,
  useNavigate,
  NavLink,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { subMenuDashboardPage } from "../../DB/data";
import AppContext from "../../context/AppProvider";
import logo from "../../images/logo-atlantida.png";
import { MdManageAccounts } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { BsPinAngleFill } from "react-icons/bs";
import { GrDocumentWord } from "react-icons/gr";
import { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import { TiDocument } from "react-icons/ti";

const RootDashboard = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 650px)" });
  const { userInfo, setUserInfo } = useContext(AppContext);
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
      <div className="sticky z-[9999] inset-0 flex h-full">
        <Sidebar
          onBackdropClick={() => setToggled(false)}
          backgroundColor="#E5E5E5"
          toggled={toggled}
          breakPoint="md"
          width={!isLargeScreen ? "280px" : undefined}
          collapsed={isLargeScreen}
          collapsedWidth={isLargeScreen ? "280px" : undefined}
        >
          <Menu className="text-white max-h-svh overflow-y-auto">
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
              {userInfo?.role === "admin" && (
                <div className="border-b border-secondary-color/30 pb-4 mb-4">
                  <MenuItem
                    className={`${
                      location?.pathname ===
                      "/admin/dashboard/gestionar-usuarios"
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
              )}

              <h2 className="flex items-center ps-7 gap-1 uppercase tracking-wide text-black p font-bold mb-2 mt-2">
                <TiDocument size={20} /> Páginas: <FaArrowDownLong size={10} />
              </h2>

              {subMenuDashboardPage?.map((subMenuPage, index) => (
                <SubMenu
                  className="bg-primary-color/5 text-primary-color animation-fade"
                  label={subMenuPage?.labelPage}
                  icon={<GrDocumentWord />}
                  key={index}
                >
                  <h2 className="flex items-center gap-1 uppercase tracking-wide text-black px-2 font-bold mb-2 mt-2">
                    Secciones: <FaArrowDownLong size={10} />
                  </h2>

                  {subMenuPage?.labelSection?.map((item, index) => (
                    <SubMenu
                      icon={<BsPinAngleFill className="margin-end-0" />}
                      className="bg-primary-color/25 "
                      label={item?.sectionTitle}
                      key={index}
                    >
                      <h2 className="flex items-center gap-1 uppercase tracking-wide text-black px-2 font-bold mb-2 mt-2">
                        Acordeones: <FaArrowDownLong size={10} />
                      </h2>

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

              <div className="mt-auto">
                <div className="ps-8 py-6 bg-white shadow-lg">
                  <h2 className="flex items-center gap-1 uppercase tracking-wide text-black font-bold mb-2 mt-2">
                    <CgProfile size={20} /> Perfil:{" "}
                    <FaArrowDownLong size={10} />
                  </h2>

                  <div className="text-black">
                    <p className="leading-4">
                      <span className="font-bold text-primary-color">
                        Correo:
                      </span>{" "}
                      {userInfo?.email}
                    </p>
                    <p className="leading-4 my-2">
                      <span className="font-bold text-primary-color">
                        Nombre:
                      </span>{" "}
                      <span className="capitalize">{userInfo?.name}</span>
                    </p>
                    <p className="leading-4 capitalize">
                      <span className="font-bold text-primary-color">Rol:</span>{" "}
                      <span className="capitalize">{userInfo?.role}</span>
                    </p>
                  </div>
                </div>

                <Link
                  className="text-center block px-3 font-bold py-3 bg-red-500 hover:bg-red-400 animation-fade hover:text-white"
                  onClick={signOut}
                >
                  Cerrar Sesión
                </Link>
              </div>
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
      <main className="px-5 md:w-fit w-full">
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
};

export default RootDashboard;
