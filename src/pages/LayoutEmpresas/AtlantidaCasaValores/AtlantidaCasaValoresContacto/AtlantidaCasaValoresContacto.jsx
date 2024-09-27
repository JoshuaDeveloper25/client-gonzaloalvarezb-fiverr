import AtlantidaCasaValoresContactoHeader from "./components/AtlantidaCasaValoresContactoHeader";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import Footer from "../../../../components/Footer";
import AtlantidaCasaValoresContactoSubheader from "./components/AtlantidaCasaValoresContactoSubheader";

import subfooter from "../../../../images/subfooter26.jpg";

const AtlantidaCasaValoresContacto = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarCasaValores />
      </div>

      {/* Casa de Valores Subheader */}
      <AtlantidaCasaValoresContactoSubheader />

      {/* Casa de Valores Banner Rojo */}
      <RedBanner />

      {/* Casa de Valores Contacto Inicio */}
      <AtlantidaCasaValoresContactoHeader />

      {/* Subfooter 28 */}
      <SubFooter
        bgColor={`black`}
        img={subfooter}
        addClassName={`bg-center`}
        title={`Potencia tu inversión, maximiza tu retorno`}
      />

      {/* Footer Casa de Valores */}
      {/* <FooterCasaValores /> */}
      <Footer />
    </>
  );
};

export default AtlantidaCasaValoresContacto;
