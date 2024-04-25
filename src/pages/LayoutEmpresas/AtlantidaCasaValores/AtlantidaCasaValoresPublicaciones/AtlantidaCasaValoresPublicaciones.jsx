import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaCasaValoresHeader from "./components/AtlantidaCasaValoresHeader";
import AtlantidaCasaValoresPosts from "./components/AtlantidaCasaValoresPosts";

const AtlantidaCasaValoresPublicaciones = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Header Casa de Valores */}
      <AtlantidaCasaValoresHeader />

      {/* Posts o publicaciones de Casa de Valores */}
      <AtlantidaCasaValoresPosts />

      {/* Subfooter 27 */}
      <SubFooter
        img={`https://dummyimage.com/600x400/000/fff`}
        title={`Juntos hacia el éxito`}
        addClassName={`bg-center`}
      />

      {/* Footer Casa de Valores */}
      <FooterCasaValores />
    </>
  );
};

export default AtlantidaCasaValoresPublicaciones;
