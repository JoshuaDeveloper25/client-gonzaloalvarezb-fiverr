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
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaInsurance />
      </div>

      {/* Inicio */}
      <AtlantidaInsuranceServiciosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros para empresas y PYMES`} />

      {/* Seguro Corporativo */}
      <AtlantidaInsuranceServiciosSeguro />

      {/* Features Tabs */}
      <AtlantidaInsuranceServiciosFeatures />

      {/* Asistencia */}
      <AsistenciaInsurance title={"Solicita Asistencia Personalizada"} />

      {/* Socios */}
      <AtlantidaInsuranceServiciosSocios />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 32 */}
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
