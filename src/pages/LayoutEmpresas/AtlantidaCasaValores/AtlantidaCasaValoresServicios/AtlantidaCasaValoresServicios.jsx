import AtlantidaCasaValoresServiciosHeader from "./components/AtlantidaCasaValoresServiciosHeader";
import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaCasaValoresServiciosOtros from "./components/AtlantidaCasaValoresServiciosOtros";
import AtlantidaCasaValoresServiciosBanner from "./components/AtlantidaCasaValoresServiciosBanner";

const AtlantidaCasaValoresServicios = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Casa de Valores - Header */}
      <AtlantidaCasaValoresServiciosHeader />

      {/* Casa de Valores - Otros servicios */}
      <AtlantidaCasaValoresServiciosOtros />

      {/* Casa de Valores - Banner */}
      <AtlantidaCasaValoresServiciosBanner />

      {/* Subfooter 22 */}
      <SubFooter
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
