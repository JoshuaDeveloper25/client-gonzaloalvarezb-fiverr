import AtlantidaCasaValoresServiciosSubheader from "./components/AtlantidaCasaValoresServiciosSubheader";
import AtlantidaCasaValoresServiciosBanner from "./components/AtlantidaCasaValoresServiciosBanner";
import AtlantidaCasaValoresServiciosHeader from "./components/AtlantidaCasaValoresServiciosHeader";
import AtlantidaCasaValoresServiciosOtros from "./components/AtlantidaCasaValoresServiciosOtros";
// import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import Footer from "../../../../components/Footer";

import subfooter from "../../../../images/subfooter23.jpg"

const AtlantidaCasaValoresServicios = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarCasaValores />
      </div>

      {/* Atlantida Casa Valores Servicios - Subheader */}
      <AtlantidaCasaValoresServiciosSubheader />

      {/* Casa de Valores - Header */}
      <AtlantidaCasaValoresServiciosHeader />

      {/* Casa de Valores - Otros servicios */}
      <AtlantidaCasaValoresServiciosOtros />

      {/* Casa de Valores - Banner */}
      <AtlantidaCasaValoresServiciosBanner />

      {/* Subfooter 23 */}
      <SubFooter
        bgColor={`black`}
        img={subfooter}
        addClassName={`bg-center`}
        title={`Maximiza tus inversiones con nuestra gestión experta`}
      />

      {/* Footer Casa de Valores */}
      {/* <FooterCasaValores /> */}
      <Footer />
    </>
  );
};

export default AtlantidaCasaValoresServicios;
