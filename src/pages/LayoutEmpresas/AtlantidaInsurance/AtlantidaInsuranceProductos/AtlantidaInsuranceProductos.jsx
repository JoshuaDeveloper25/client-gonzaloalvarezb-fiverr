import AtlantidaInsuranceProductosHeader from "./components/AtlantidaInsuranceProductosHeader";
import FooterAtlantidaInsurance from "../../../../components/FooterAtlantidaInsurance";
import NavbarAtlantidaInsurance from "../../../../components/NavbarAtlantidaInsurance";
import MasInformacion from "../../../../components/MasInformacion";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaInsuranceProductosSocios from "./components/AtlantidaInsuranceProductosSocios";
import AtlantidaInsuranceProductosSeguro from "./components/AtlantidaInsuranceProductosSeguro";
import AsistenciaInsurance from "../../../../components/AsistenciaInsurance";
import AtlantidaInsuranceProductosFeatures from "./components/AtlantidaInsuranceProductosFeatures";

import subfooter from "../../../../images/subfooter30.jpg";

const AtlantidaInsuranceProductos = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaInsurance />
      </div>

      {/* Inicio */}
      <AtlantidaInsuranceProductosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros individuales y familiares`} />

      {/* Seguro de Vida */}
      <AtlantidaInsuranceProductosSeguro />

      {/* Features Tabs */}
      <AtlantidaInsuranceProductosFeatures />

      {/* Asistencia */}
      <AsistenciaInsurance title={"Solicita Asistencia Personalizada"} />

      {/* Socios */}
      <AtlantidaInsuranceProductosSocios />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu mejor elección en seguros`}
        img={subfooter}
      />

      {/* Footer */}
      <FooterAtlantidaInsurance />
    </>
  );
};

export default AtlantidaInsuranceProductos;
