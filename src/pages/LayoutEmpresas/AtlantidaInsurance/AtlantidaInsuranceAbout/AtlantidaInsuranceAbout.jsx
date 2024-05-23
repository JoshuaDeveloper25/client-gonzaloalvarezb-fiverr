import FooterAtlantidaInsurance from "../../../../components/FooterAtlantidaInsurance";
import NavbarAtlantidaInsurance from "../../../../components/NavbarAtlantidaInsurance";
import AtlantidaInsuranceAboutHeader from "./components/AtlantidaInsuranceAboutHeader";
import MasInformacion from "../../../../components/MasInformacion";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";
import AtlantidaInsuranceAboutValores from "./components/AtlantidaInsuranceAboutValores";
import AtlantidaInsuranceAboutBroker from "./components/AtlantidaInsuranceAboutBroker";
import AtlantidaInsuranceAboutMision from "./components/AtlantidaInsuranceAboutMision";

import subfooter from "../../../../images/subfooter31.jpeg";

const AtlantidaInsuranceAbout = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaInsurance />
      </div>

      {/* Header */}
      <AtlantidaInsuranceAboutHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Asesoramiento con 15 años de experiencia`} />

      {/* Broker */}
      <AtlantidaInsuranceAboutBroker />

      {/* Misión */}
      <AtlantidaInsuranceAboutMision />

      {/* Valores */}
      <AtlantidaInsuranceAboutValores />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 31 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu seguro en manos expertas`}
        img={subfooter}
      />

      {/* Footer */}
      <FooterAtlantidaInsurance />
    </>
  );
};

export default AtlantidaInsuranceAbout;
