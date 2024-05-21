import FiduciariaAtlantidaContactoHeading from "./components/FiduciariaAtlantidaContactoHeading";
import FiduciariaAtlantidaContactoHeader from "./components/FiduciariaAtlantidaContactoHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";

import subfooter from "../../../../images/subfooter41.jpg";

const FiduciariaAtlantidaContacto = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarFiduciariaAtlantida />
      </div>

      {/* Header */}
      <FiduciariaAtlantidaContactoHeading />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={``} />

      {/* Formulario */}
      <FiduciariaAtlantidaContactoHeader />

      {/* Subfooter 41 */}
      <SubFooter
        bgColor={`black`}
        img={subfooter}
        addClassName={`bg-center`}
        title={`Descubre el poder de invertir con nosotros`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaContacto;
