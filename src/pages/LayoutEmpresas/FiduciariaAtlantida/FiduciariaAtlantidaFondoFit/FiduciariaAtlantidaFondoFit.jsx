import FiduciariaAtlantidaFondoFitHeader from "./components/FiduciariaAtlantidaFondoFitHeader";
import FiduciariaAtlantidaFondoFitArte from "./components/FiduciariaAtlantidaFondoFitArte";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import FiduciariaAtlantidaFondoFitFeatures from "./components/FiduciariaAtlantidaFondoFitFeatures";
import FiduciariaAtlantidaFondoFitVentajas from "./components/FiduciariaAtlantidaFondoFitVentajas";

const FiduciariaAtlantidaFondoFit = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarFiduciariaAtlantida />

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
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaFondoFit;
