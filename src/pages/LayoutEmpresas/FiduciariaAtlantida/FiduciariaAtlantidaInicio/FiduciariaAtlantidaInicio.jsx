import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

const FiduciariaAtlantidaInicio = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarFiduciariaAtlantida />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Subfooter 34 */}
      <SubFooter
        bgColor={`black`}
        title={`Juntos lo hacemos posible`}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida/>
    </>
  );
};

export default FiduciariaAtlantidaInicio;
