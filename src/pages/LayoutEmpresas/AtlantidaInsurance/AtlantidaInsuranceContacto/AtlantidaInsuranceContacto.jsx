import AtlantidaInsuranceContactoHeading from "./components/AtlantidaInsuranceContactoHeading";
import AtlantidaInsuranceContactoHeader from "./components/AtlantidaInsuranceContactoHeader";
import FooterAtlantidaInsurance from "../../../../components/FooterAtlantidaInsurance";
import NavbarAtlantidaInsurance from "../../../../components/NavbarAtlantidaInsurance";
import AsistenciaInsurance from "../../../../components/AsistenciaInsurance";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";

const AtlantidaInsuranceContacto = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarAtlantidaInsurance />

      {/* Header */}
      <AtlantidaInsuranceContactoHeading />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Seguros para empresas y PYMES`} />

      {/* Formulario */}
      <AtlantidaInsuranceContactoHeader />

      {/* Asistencia */}
      <AsistenciaInsurance
        title={"Solicita Asistencia Personalizada"}
        addClassName={"border-y-0 bg-tertiary-color"}
      />

      {/* Subfooter 28 */}
      <SubFooter
        bgColor={`black`}
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Asegura tu futuro con nosotros`}
      />

      {/* Footer */}
      <FooterAtlantidaInsurance />
    </>
  );
};

export default AtlantidaInsuranceContacto;
