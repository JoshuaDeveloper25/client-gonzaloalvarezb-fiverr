import FiduciariaAtlantidaInicioFeatures from "./components/FiduciariaAtlantidaInicioFeatures";
import FiduciariaAtlantidaInicioHeader from "./components/FiduciariaAtlantidaInicioHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import FiduciariaAtlantidaInicioWorth from "./components/FiduciariaAtlantidaInicioWorth";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

import subfooter from "../../../../images/subfooter34.jpg"

const FiduciariaAtlantidaInicio = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarFiduciariaAtlantida />
      </div>

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
        img={subfooter}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaInicio;
