import FiduciariaAtlantidaInicioFeatures from "./components/FiduciariaAtlantidaInicioFeatures";
import FiduciariaAtlantidaInicioHeader from "./components/FiduciariaAtlantidaInicioHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import FiduciariaAtlantidaInicioWorth from "./components/FiduciariaAtlantidaInicioWorth";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

const FiduciariaAtlantidaInicio = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarFiduciariaAtlantida />

      {/* Fiduciaria Header */}
      <FiduciariaAtlantidaInicioHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Fiduciaria Patrimonio */}
      <FiduciariaAtlantidaInicioWorth />

      {/* Fiduciaria Features */}
      <FiduciariaAtlantidaInicioFeatures />

      {/* Subfooter 34 */}
      <SubFooter
        bgColor={`black`}
        title={`Juntos lo hacemos posible`}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaInicio;
