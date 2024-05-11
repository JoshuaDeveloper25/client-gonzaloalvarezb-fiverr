import AtlantidaCasaValoresServiciosHeader from "./components/AtlantidaCasaValoresServiciosHeader";
import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaCasaValoresServiciosOtros from "./components/AtlantidaCasaValoresServiciosOtros";
import AtlantidaCasaValoresServiciosBanner from "./components/AtlantidaCasaValoresServiciosBanner";
import AtlantidaCasaValoresServiciosSubheader from "./components/AtlantidaCasaValoresServiciosSubheader";

const AtlantidaCasaValoresServicios = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

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
        bgColor={`red`}
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Maximiza tus inversiones con nuestra gestión experta`}
      />

      {/* Footer Casa de Valores */}
      <FooterCasaValores />
    </>
  );
};

export default AtlantidaCasaValoresServicios;
