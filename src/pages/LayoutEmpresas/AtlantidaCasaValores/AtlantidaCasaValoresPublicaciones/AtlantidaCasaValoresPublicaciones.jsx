import AtlantidaCasaValoresHeader from "./components/AtlantidaCasaValoresHeader";
import AtlantidaCasaValoresPosts from "./components/AtlantidaCasaValoresPosts";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import Footer from "../../../../components/Footer";
import RedBanner from "../../../../components/RedBanner";

import subfooter from "../../../../images/subfooter27.jpg";

const AtlantidaCasaValoresPublicaciones = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarCasaValores />
      </div>

      {/* Header Casa de Valores */}
      <AtlantidaCasaValoresHeader />

      {/* Banner Rojo Casa de Valores */}
      <RedBanner />

      {/* Posts o publicaciones de Casa de Valores */}
      <AtlantidaCasaValoresPosts />

      {/* Subfooter 27 */}
      <SubFooter
        bgColor={`black`}
        img={subfooter}
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
