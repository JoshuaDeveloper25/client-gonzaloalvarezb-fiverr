import FiduciariaAtlantidaFondosFeatures from "./components/FiduciariaAtlantidaFondosFeatures";
import FiduciariaAtlantidaFondosHeader from "./components/FiduciariaAtlantidaFondosHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

const FiduciariaAtlantidaFondos = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarFiduciariaAtlantida />

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
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaFondos;
