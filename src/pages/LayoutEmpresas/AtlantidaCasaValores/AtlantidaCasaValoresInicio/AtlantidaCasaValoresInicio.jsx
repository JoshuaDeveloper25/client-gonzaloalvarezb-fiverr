import AtlantidaCasaValoresInicioHeader from "./components/AtlantidaCasaValoresInicioHeader";
import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaCasaValoresInicioFeatures from "./components/AtlantidaCasaValoresInicioFeatures";

const AtlantidaCasaValoresInicio = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Casa de Valores - Header */}
      <AtlantidaCasaValoresInicioHeader />

      {/* Casa de Valores - Features */}
      <AtlantidaCasaValoresInicioFeatures />

      {/* Subfooter 22 */}
      <SubFooter
        bgColor={`red`}
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Inversiones seguras, oportunidades infinitas`}
      />

      {/* Footer Casa de Valores */}
      <FooterCasaValores />
    </>
  );
};

export default AtlantidaCasaValoresInicio;
