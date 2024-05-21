import FiduciariaAtlantidaMarcoHeader from "./components/FiduciariaAtlantidaMarcoHeader";
import FiduciariaAtlantidaMarcoPost from "./components/FiduciariaAtlantidaMarcoPost";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";

import subfooter from "../../../../images/subfooter40.jpg";

const FiduciariaAtlantidaMarco = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarFiduciariaAtlantida />
      </div>

      {/* Header */}
      <FiduciariaAtlantidaMarcoHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Fiduciaria - Posts  */}
      <FiduciariaAtlantidaMarcoPost />

      {/* Subfooter 40 */}
      <SubFooter
        bgColor={`black`}
        title={`Seguridad y crecimiento con nuestra empresa`}
        addClassName={"bg-center"}
        img={subfooter}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaMarco;
