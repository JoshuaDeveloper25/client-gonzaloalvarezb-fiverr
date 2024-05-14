import FiduciariaAtlantidaMarcoHeader from "./components/FiduciariaAtlantidaMarcoHeader";
import FiduciariaAtlantidaMarcoPost from "./components/FiduciariaAtlantidaMarcoPost";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";

const FiduciariaAtlantidaMarco = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarFiduciariaAtlantida />

      {/* Header */}
      <FiduciariaAtlantidaMarcoHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Fiduciaria - Posts  */}
      <FiduciariaAtlantidaMarcoPost />

      {/* Subfooter 40 */}
      <SubFooter
        bgColor={`black`}
        title={`Seguridad y crecimiento con nuestra empresa`}
        addClassName={"bg-center"}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaMarco;
