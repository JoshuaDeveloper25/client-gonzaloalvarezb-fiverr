import AtlantidaInsuranceServiciosHeader from "./components/AtlantidaInsuranceServiciosHeader";
import FooterAtlantidaInsurance from "../../../../components/FooterAtlantidaInsurance";
import NavbarAtlantidaInsurance from "../../../../components/NavbarAtlantidaInsurance";
import MasInformacion from "../../../../components/MasInformacion";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaInsuranceServiciosSocios from "./components/AtlantidaInsuranceServiciosSocios";
import AtlantidaInsuranceServiciosSeguro from "./components/AtlantidaInsuranceServiciosSeguro";
import AsistenciaInsurance from "../../../../components/AsistenciaInsurance";
import AtlantidaInsuranceServiciosFeatures from "./components/AtlantidaInsuranceServiciosFeatures";

const AtlantidaInsuranceServicios0 = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarAtlantidaInsurance />

      {/* Inicio */}
      <AtlantidaInsuranceServiciosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros para empresas y PYMES`} />

      {/* Seguro de Vida */}
      <AtlantidaInsuranceServiciosSeguro />

      {/* Features Tabs */}
      <AtlantidaInsuranceServiciosFeatures />

      {/* Asistencia */}
      <AsistenciaInsurance />

      {/* Socios */}
      <AtlantidaInsuranceServiciosSocios />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Protección sólida para un futuro seguro`}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterAtlantidaInsurance />
    </>
  );
};

export default AtlantidaInsuranceServicios0;
