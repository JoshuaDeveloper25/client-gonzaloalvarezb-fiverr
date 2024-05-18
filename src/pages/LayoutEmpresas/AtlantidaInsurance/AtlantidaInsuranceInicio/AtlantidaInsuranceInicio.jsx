import AtlantidaInsuranceInicioPersonales from "./components/AtlantidaInsuranceInicioPersonales";
import AtlantidaInsuranceInicioCorporativo from "./components/AtlantidaInsuranceInicioCorporativo";
import AtlantidaInsuranceInicioSeguros1 from "./components/AtlantidaInsuranceInicioSeguros1";
import AtlantidaInsuranceInicioSeguros2 from "./components/AtlantidaInsuranceInicioSeguros2";
import AtlantidaInsuranceInicioClientes from "./components/AtlantidaInsuranceInicioClientes";
import AtlantidaInsuranceInicioHeader from "./components/AtlantidaInsuranceInicioHeader";
import FooterAtlantidaInsurance from "../../../../components/FooterAtlantidaInsurance";
import NavbarAtlantidaInsurance from "../../../../components/NavbarAtlantidaInsurance";
import MasInformacion from "../../../../components/MasInformacion";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";

const AtlantidaInsuranceInicio = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaInsurance />
      </div>

      {/* Inicio */}
      <AtlantidaInsuranceInicioHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Con más de 15 años de experiencia`} />

      {/* Personales */}
      <AtlantidaInsuranceInicioPersonales />

      {/* Seguros 1 */}
      <AtlantidaInsuranceInicioSeguros1 />

      {/* Corporativo */}
      <AtlantidaInsuranceInicioCorporativo />

      {/* Seguros 2 */}
      <AtlantidaInsuranceInicioSeguros2 />

      {/* Clientes */}
      <AtlantidaInsuranceInicioClientes />

      {/* Más información */}
      <MasInformacion />

      {/* Subfooter 29 */}
      <SubFooter
        bgColor={`black`}
        title={`Juntos lo hacemos posible`}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterAtlantidaInsurance />
    </>
  );
};

export default AtlantidaInsuranceInicio;
