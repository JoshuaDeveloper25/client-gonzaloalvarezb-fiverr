import FiduciariaAtlantidaFondosFeatures from "./components/FiduciariaAtlantidaFondosFeatures";
import FiduciariaAtlantidaFondosHeader from "./components/FiduciariaAtlantidaFondosHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

import subfooter from "../../../../images/subfooter36.jpg";

const FiduciariaAtlantidaFondos = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarFiduciariaAtlantida />
      </div>

      {/* Fiduciaria Header */}
      <FiduciariaAtlantidaFondosHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Features */}
      <FiduciariaAtlantidaFondosFeatures />

      {/* Subfooter 36 */}
      <SubFooter
        bgColor={`black`}
        title={`Descubre el poder de hacer crecer tu dinero`}
        img={subfooter}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaFondos;
