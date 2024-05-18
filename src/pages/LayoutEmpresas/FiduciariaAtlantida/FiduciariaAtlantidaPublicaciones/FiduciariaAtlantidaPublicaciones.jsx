import FiduciariaAtlantidaPublicacionesHeader from "./components/FiduciariaAtlantidaPublicacionesHeader";
import FiduciariaAtlantidaPublicacionesPosts from "./components/FiduciariaAtlantidaPublicacionesPosts";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";

const FiduciariaAtlantidaPublicaciones = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarFiduciariaAtlantida />
      </div>

      {/* Header */}
      <FiduciariaAtlantidaPublicacionesHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Fiduciaria - Posts  */}
      <FiduciariaAtlantidaPublicacionesPosts />

      {/* Subfooter 39 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu socio de confianza en el mundo financiero`}
        addClassName={"bg-center"}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaPublicaciones;
