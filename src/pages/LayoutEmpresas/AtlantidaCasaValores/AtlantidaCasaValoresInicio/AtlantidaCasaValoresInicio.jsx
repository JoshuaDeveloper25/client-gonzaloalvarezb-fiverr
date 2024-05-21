import AtlantidaCasaValoresInicioSubheader from "./components/AtlantidaCasaValoresInicioSubheader";
import AtlantidaCasaValoresInicioFeatures from "./components/AtlantidaCasaValoresInicioFeatures";
import AtlantidaCasaValoresInicioHeader from "./components/AtlantidaCasaValoresInicioHeader";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";
import Footer from "../../../../components/Footer";

import subfooter from "../../../../images/subfooter22.jpg";

const AtlantidaCasaValoresInicio = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarCasaValores />
      </div>

      {/* Casa de Valores - Subheader */}
      <AtlantidaCasaValoresInicioSubheader />

      {/* Casa de Valores - Banner Rojo */}
      <RedBanner />

      {/* Casa de Valores - Header */}
      <AtlantidaCasaValoresInicioHeader />

      {/* Casa de Valores - Features */}
      <AtlantidaCasaValoresInicioFeatures />

      {/* Subfooter 22 */}
      <SubFooter
        bgColor={`black`}
        img={subfooter}
        addClassName={`bg-center`}
        title={`Inversiones seguras, oportunidades infinitas`}
      />

      {/* Footer Casa de Valores */}
      <Footer />
      {/* <FooterCasaValores /> */}
    </>
  );
};

export default AtlantidaCasaValoresInicio;
