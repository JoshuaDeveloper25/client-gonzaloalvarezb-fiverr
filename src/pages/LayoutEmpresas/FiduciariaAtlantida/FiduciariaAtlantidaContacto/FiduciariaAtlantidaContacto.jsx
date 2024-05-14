import FiduciariaAtlantidaContactoHeading from "./components/FiduciariaAtlantidaContactoHeading";
import FiduciariaAtlantidaContactoHeader from "./components/FiduciariaAtlantidaContactoHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";

const FiduciariaAtlantidaContacto = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarFiduciariaAtlantida />

      {/* Header */}
      <FiduciariaAtlantidaContactoHeading />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={``} />

      {/* Formulario */}
      <FiduciariaAtlantidaContactoHeader />

      {/* Subfooter 41 */}
      <SubFooter
        bgColor={`black`}
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Descubre el poder de invertir con nosotros`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaContacto;
