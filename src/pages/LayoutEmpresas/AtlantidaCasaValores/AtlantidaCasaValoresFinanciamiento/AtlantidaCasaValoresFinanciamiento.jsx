import AtlantidaCasaValoresFinanciamientoTarjetas from "./components/AtlantidaCasaValoresFinanciamientoTarjetas";
import AtlantidaCasaValoresFinanciamientoHeader from "./components/AtlantidaCasaValoresFinanciamientoHeader";
import AtlantidaCasaValoresFinanciamientoVentajas from "./components/AtlantidaCasaValoresFinanciamientoVentajas";
import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";

const AtlantidaCasaValoresFinanciamiento = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Casa de Valores - Header */}
      <AtlantidaCasaValoresFinanciamientoHeader />

      {/* Casa de Valores - Ventajas */}
      <AtlantidaCasaValoresFinanciamientoVentajas />

      {/* Casa de Valores - Tarjetas */}
      <AtlantidaCasaValoresFinanciamientoTarjetas />

      {/* Subfooter 24 */}
      <SubFooter
        img={`https://dummyimage.com/600x400/000/fff`}
        title={`Tu financiamiento, nuestra gestión`}
        addClassName={`bg-center`}
      />

      {/* Footer Casa de Valores  */}
      <FooterCasaValores />
    </>
  );
};

export default AtlantidaCasaValoresFinanciamiento;
