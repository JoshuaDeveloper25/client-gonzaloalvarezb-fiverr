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

const AtlantidaInsuranceProductos = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarAtlantidaInsurance />

      {/* Inicio */}
      <AtlantidaInsuranceProductosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros individuales y familiares`} />

      {/* Seguro de Vida */}
      <AtlantidaInsuranceProductosSeguro />

      {/* Features Tabs */}
      <AtlantidaInsuranceProductosFeatures />

      {/* Asistencia */}
      <AsistenciaInsurance />

      {/* Socios */}
      <AtlantidaInsuranceProductosSocios />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu mejor elección en seguros`}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterAtlantidaInsurance />
    </>
  );
};

export default AtlantidaInsuranceProductos;
