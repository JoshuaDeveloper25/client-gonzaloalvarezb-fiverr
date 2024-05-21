import AtlantidaCasaValoresIntermediacionTarjeta from "./components/AtlantidaCasaValoresIntermediacionTarjeta";
import AtlantidaCasaValoresIntermediacionHeader from "./components/AtlantidaCasaValoresIntermediacionHeader";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import Footer from "../../../../components/Footer";
import RedBanner from "../../../../components/RedBanner";

import subfooter from "../../../../images/subfooter26.jpg";

const AtlantidaCasaValoresIntermediacion = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarCasaValores />
      </div>

      {/* Casa de Valores - Intermediación Header */}
      <AtlantidaCasaValoresIntermediacionHeader />

      {/* Casa de Valores - Banner Rojo */}
      <RedBanner />

      {/* Casa de Valores - Intermediación Tarjeta */}
      <AtlantidaCasaValoresIntermediacionTarjeta />

      {/* Subfooter 26 */}
      <SubFooter
        bgColor={`black`}
        img={subfooter}
        title={`Potencia tus inversiones`}
        addClassName={`bg-center`}
      />

      {/* Footer Casa de Valores */}
      {/* <FooterCasaValores /> */}
      <Footer />
    </>
  );
};

export default AtlantidaCasaValoresIntermediacion;
