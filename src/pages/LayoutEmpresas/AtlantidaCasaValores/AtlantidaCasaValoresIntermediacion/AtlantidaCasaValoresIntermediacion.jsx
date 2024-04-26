import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaCasaValoresIntermediacionHeader from "./components/AtlantidaCasaValoresIntermediacionHeader";
import AtlantidaCasaValoresIntermediacionTarjeta from "./components/AtlantidaCasaValoresIntermediacionTarjeta";

const AtlantidaCasaValoresIntermediacion = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Casa de Valores - Intermediación Header */}
      <AtlantidaCasaValoresIntermediacionHeader />

      {/* Casa de Valores - Intermediación Tarjeta */}
      <AtlantidaCasaValoresIntermediacionTarjeta />

      {/* Subfooter 26 */}
      <SubFooter
        bgColor={`red`}
        img={`https://dummyimage.com/600x400/000/fff`}
        title={`Potencia tus inversiones`}
        addClassName={`bg-center`}
      />

      {/* Footer Casa de Valores */}
      <FooterCasaValores />
    </>
  );
};

export default AtlantidaCasaValoresIntermediacion;
