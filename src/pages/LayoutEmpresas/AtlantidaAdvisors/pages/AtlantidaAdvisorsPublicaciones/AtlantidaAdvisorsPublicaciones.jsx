import FooterAtlantidaAdvisors from "../../../../../components/FooterAtlantidaAdvisors";
import NavbarAtlantidaAdvisors from "../../../../../components/NavbarAtlantidaAdvisors";
import AtlantidaAdvisorsPublicacionesPosts from "./components/AtlantidaAdvisorsPublicacionesPosts";
import AtlantidaAdvisorsPublicacionesHeader from "./components/AtlantidaAdvisorsPublicacionesHeader";
import SubFooter from "../../../../../components/SubFooter";

const AtlantidaAdvisorsAsesoriaPublicaciones = () => {
  return (
    <>
      {/* Navbar Atlantida Advisors */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaAdvisors />
      </div>

      {/* Atlantida Advisors - Publicaciones Header */}
      <AtlantidaAdvisorsPublicacionesHeader />

      {/* Atlantida Advisors - Posts  */}
      <AtlantidaAdvisorsPublicacionesPosts />

      {/* Subfooter 20 */}
      <SubFooter
        bgColor={`red`}
        title={`Tu guía financiera para el éxito.`}
        addClassName={"bg-center"}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer Atlantida Advisors */}
      <FooterAtlantidaAdvisors />
    </>
  );
};

export default AtlantidaAdvisorsAsesoriaPublicaciones;
