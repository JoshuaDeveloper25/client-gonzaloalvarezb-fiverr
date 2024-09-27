import AtlantidaCasaValoresBursatilesSubheader from "./components/AtlantidaCasaValoresBursatilesSubheader";
import AtlantidaCasaValoresBursatilesVentajas from "./components/AtlantidaCasaValoresBursatilesVentajas";
import AtlantidaCasaValoresBursatilesTitulos from "./components/AtlantidaCasaValoresBursatilesTitulos";
import AtlantidaCasaValoresBursatilesHeader from "./components/AtlantidaCasaValoresBursatilesHeader";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";
import Footer from "../../../../components/Footer";

import subfooter from "../../../../images/subfooter25.jpg";

const AtlantidaCasaValoresBursatiles = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarCasaValores />
      </div>

      {/* Casa de Valores - Subheader */}
      <AtlantidaCasaValoresBursatilesSubheader />

      {/* Casa de Valores - Banner Rojo */}
      <RedBanner />

      {/* Casa de Valores - Header */}
      <AtlantidaCasaValoresBursatilesHeader />

      {/* Casa de Valores - Negociación de Títulos */}
      <AtlantidaCasaValoresBursatilesTitulos />

      {/* Casa de Valores - Ventajas */}
      <AtlantidaCasaValoresBursatilesVentajas />

      {/* Subfooter 25 */}
      <SubFooter
        bgColor={`black`}
        img={subfooter}
        title={`Invierte con confianza y experiencia`}
        addClassName={`bg-center`}
      />

      {/* Footer Casa de Valores  */}
      {/* <FooterCasaValores /> */}
      <Footer />
    </>
  );
};

export default AtlantidaCasaValoresBursatiles;
