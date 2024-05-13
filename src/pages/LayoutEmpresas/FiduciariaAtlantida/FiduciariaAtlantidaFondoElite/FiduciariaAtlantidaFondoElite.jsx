import FiduciariaAtlantidaFondoEliteFeatures from "./components/FiduciariaAtlantidaFondoEliteFeatures";
import FiduciariaAtlantidaFondoEliteInvertir from "./components/FiduciariaAtlantidaFondoEliteInvertir";
import FiduciariaAtlantidaFondoEliteVentajas from "./components/FiduciariaAtlantidaFondoEliteVentajas";
import FiduciariaAtlantidaFondoEliteHeader from "./components/FiduciariaAtlantidaFondoEliteHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

const FiduciariaAtlantidaFondoElite = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarFiduciariaAtlantida />

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
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaFondoElite;
