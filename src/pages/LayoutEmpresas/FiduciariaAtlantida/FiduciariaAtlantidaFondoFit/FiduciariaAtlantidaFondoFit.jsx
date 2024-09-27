import FiduciariaAtlantidaFondoFitHeader from "./components/FiduciariaAtlantidaFondoFitHeader";
import FiduciariaAtlantidaFondoFitArte from "./components/FiduciariaAtlantidaFondoFitArte";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import FiduciariaAtlantidaFondoFitFeatures from "./components/FiduciariaAtlantidaFondoFitFeatures";
import FiduciariaAtlantidaFondoFitVentajas from "./components/FiduciariaAtlantidaFondoFitVentajas";

import subfooter from "../../../../images/subfooter37.jpg";

const FiduciariaAtlantidaFondoFit = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarFiduciariaAtlantida />
      </div>

      {/* Fiduciaria Header */}
      <FiduciariaAtlantidaFondoFitHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Arte */}
      <FiduciariaAtlantidaFondoFitArte />

      {/* Features */}
      <FiduciariaAtlantidaFondoFitFeatures />

      {/* Ventajas */}
      <FiduciariaAtlantidaFondoFitVentajas />

      {/* Subfooter 37 */}
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

export default FiduciariaAtlantidaFondoFit;
