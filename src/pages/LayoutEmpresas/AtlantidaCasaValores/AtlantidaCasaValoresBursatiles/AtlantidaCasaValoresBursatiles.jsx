import AtlantidaCasaValoresBursatilesTitulos from "./components/AtlantidaCasaValoresBursatilesTitulos";
import AtlantidaCasaValoresBursatilesVentajas from "./components/AtlantidaCasaValoresBursatilesVentajas";
import AtlantidaCasaValoresBursatilesHeader from "./components/AtlantidaCasaValoresBursatilesHeader";
import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";

const AtlantidaCasaValoresBursatiles = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Casa de Valores - Header */}
      <AtlantidaCasaValoresBursatilesHeader />

      {/* Casa de Valores - Negociación de Títulos */}
      <AtlantidaCasaValoresBursatilesTitulos />

      {/* Casa de Valores - Ventajas */}
      <AtlantidaCasaValoresBursatilesVentajas />

      {/* Subfooter 25 */}
      <SubFooter
        bgColor={`red`}
        img={`https://dummyimage.com/600x400/000/fff`}
        title={`Invierte con confianza y experiencia`}
        addClassName={`bg-center`}
      />

      {/* Footer Casa de Valores  */}
      <FooterCasaValores />
    </>
  );
};

export default AtlantidaCasaValoresBursatiles;
