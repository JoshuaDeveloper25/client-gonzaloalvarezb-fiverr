import FiduciariaAtlantidaFondosVentajas from "./components/FiduciariaAtlantidaFondosVentajas";
import FiduciariaAtlantidaFondosFeatures from "./components/FiduciariaAtlantidaFondosFeatures";
import FiduciariaAtlantidaFondosSimular from "./components/FiduciariaAtlantidaFondosSimular";
import FiduciariaAtlantidaFondosHeader from "./components/FiduciariaAtlantidaFondosHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import subfooter from "../../../../images/subfooter36.jpg";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

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

      {/* Simar Ahora */}
      <FiduciariaAtlantidaFondosSimular />

      {/* Ventajas */}
      <FiduciariaAtlantidaFondosVentajas />

      {/* Subfooter 36 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu camino hacia un futuro financiero próspero`}
        img={subfooter}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaFondos;
