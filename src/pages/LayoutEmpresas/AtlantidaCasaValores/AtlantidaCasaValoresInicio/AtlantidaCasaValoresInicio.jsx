import AtlantidaCasaValoresInicioSubheader from "./components/AtlantidaCasaValoresInicioSubheader";
import AtlantidaCasaValoresInicioFeatures from "./components/AtlantidaCasaValoresInicioFeatures";
import AtlantidaCasaValoresInicioHeader from "./components/AtlantidaCasaValoresInicioHeader";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import RedBanner from "../../../../components/RedBanner";
import Footer from "../../../../components/Footer";

const AtlantidaCasaValoresInicio = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

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
        img={`https://dummyimage.com/600x400/000/fff`}
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
