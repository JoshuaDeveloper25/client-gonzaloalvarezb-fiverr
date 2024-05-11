import AtlantidaCasaValoresFinanciamientoSubheader from "./components/AtlantidaCasaValoresFinanciamientoSubheader";
import AtlantidaCasaValoresFinanciamientoVentajas from "./components/AtlantidaCasaValoresFinanciamientoVentajas";
import AtlantidaCasaValoresFinanciamientoTarjetas from "./components/AtlantidaCasaValoresFinanciamientoTarjetas";
import AtlantidaCasaValoresFinanciamientoHeader from "./components/AtlantidaCasaValoresFinanciamientoHeader";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";
import Footer from "../../../../components/Footer";

const AtlantidaCasaValoresFinanciamiento = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Casa de Valores - Subheader */}
      <AtlantidaCasaValoresFinanciamientoSubheader />

      {/* Casa de Valores - Banner rojo */}
      <RedBanner />

      {/* Casa de Valores - Header */}
      <AtlantidaCasaValoresFinanciamientoHeader />

      {/* Casa de Valores - Tarjetas */}
      <AtlantidaCasaValoresFinanciamientoTarjetas />

      {/* Subfooter 24 */}
      <SubFooter
        bgColor={`black`}
        img={`https://dummyimage.com/600x400/000/fff`}
        title={`Tu financiamiento, nuestra gestión`}
        addClassName={`bg-center`}
      />

      {/* Footer Casa de Valores  */}
      {/* <FooterCasaValores /> */}
      <Footer/>
    </>
  );
};

export default AtlantidaCasaValoresFinanciamiento;
