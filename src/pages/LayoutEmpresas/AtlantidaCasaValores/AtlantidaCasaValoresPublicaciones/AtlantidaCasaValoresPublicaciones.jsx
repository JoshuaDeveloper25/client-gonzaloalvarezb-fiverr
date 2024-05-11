import AtlantidaCasaValoresHeader from "./components/AtlantidaCasaValoresHeader";
import AtlantidaCasaValoresPosts from "./components/AtlantidaCasaValoresPosts";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import Footer from "../../../../components/Footer";
import RedBanner from "../../../../components/RedBanner";

const AtlantidaCasaValoresPublicaciones = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Header Casa de Valores */}
      <AtlantidaCasaValoresHeader />

      {/* Banner Rojo Casa de Valores */}
      <RedBanner />

      {/* Posts o publicaciones de Casa de Valores */}
      <AtlantidaCasaValoresPosts />

      {/* Subfooter 27 */}
      <SubFooter
        bgColor={`black`}
        img={`https://dummyimage.com/600x400/000/fff`}
        title={`Juntos hacia el éxito`}
        addClassName={`bg-center`}
      />

      {/* Footer Casa de Valores */}
      {/* <FooterCasaValores /> */}
      <Footer />
    </>
  );
};

export default AtlantidaCasaValoresPublicaciones;
