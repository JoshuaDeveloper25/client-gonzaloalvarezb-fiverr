import FiduciariaAtlantidaFondoEliteFeatures from "./components/FiduciariaAtlantidaFondoEliteFeatures";
import FiduciariaAtlantidaFondoEliteInvertir from "./components/FiduciariaAtlantidaFondoEliteInvertir";
import FiduciariaAtlantidaFondoEliteVentajas from "./components/FiduciariaAtlantidaFondoEliteVentajas";
import FiduciariaAtlantidaFondoEliteHeader from "./components/FiduciariaAtlantidaFondoEliteHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

import subfooter from "../../../../images/subfooter38.jpg";

const FiduciariaAtlantidaFondoElite = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarFiduciariaAtlantida />
      </div>

      {/* Fiduciaria Header */}
      <FiduciariaAtlantidaFondoEliteHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Invertir */}
      <FiduciariaAtlantidaFondoEliteInvertir />

      {/* Features */}
      <FiduciariaAtlantidaFondoEliteFeatures />

      {/* Ventajas */}
      <FiduciariaAtlantidaFondoEliteVentajas />

      {/* Subfooter 38 */}
      <SubFooter
        bgColor={`black`}
        title={`Construyendo un mañana próspero y seguro`}
        img={subfooter}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaFondoElite;
