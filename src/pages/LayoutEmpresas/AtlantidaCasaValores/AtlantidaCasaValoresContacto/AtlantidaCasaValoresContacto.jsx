import AtlantidaCasaValoresContactoHeader from "./components/AtlantidaCasaValoresContactoHeader";
import FooterCasaValores from "../../../../components/FooterCasaValores";
import NavbarCasaValores from "../../../../components/NavbarCasaValores";
import SubFooter from "../../../../components/SubFooter";

const AtlantidaCasaValoresContacto = () => {
  return (
    <>
      {/* Navbar Casa de Valores */}
      <NavbarCasaValores />

      {/* Atlantida Advisors Contacto Inicio */}
      <AtlantidaCasaValoresContactoHeader />

      {/* Subfooter 22 */}
      <SubFooter
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Potencia tu inversión, maximiza tu retorno`}
      />

      {/* Footer Casa de Valores */}
      <FooterCasaValores />
    </>
  );
};

export default AtlantidaCasaValoresContacto;
