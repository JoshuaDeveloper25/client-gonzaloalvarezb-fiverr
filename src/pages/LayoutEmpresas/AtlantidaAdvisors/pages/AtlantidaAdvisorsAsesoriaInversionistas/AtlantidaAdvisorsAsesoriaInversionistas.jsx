import FooterAtlantidaAdvisors from "../../../../../components/FooterAtlantidaAdvisors";
import NavbarAtlantidaAdvisors from "../../../../../components/NavbarAtlantidaAdvisors";
import AtlantidaAdvisorsAsesoriaInversionistasFeatures from "./components/AtlantidaAdvisorsAsesoriaInversionistasFeatures";
import AtlantidaAdvisorsAsesoriaInversionistasHeader from "./components/AtlantidaAdvisorsAsesoriaInversionistasHeader";
import SubFooter from "../../../../../components/SubFooter";

const AtlantidaAdvisorsAsesoriaInversionistas = () => {
  return (
    <>
      {/* Navbar Atlantida Advisors */}
      <NavbarAtlantidaAdvisors />

      {/* Atlantida Advisors - Asesoria Inversionistas */}
      <AtlantidaAdvisorsAsesoriaInversionistasHeader />

      {/* Atlantida Advisors - Features  */}
      <AtlantidaAdvisorsAsesoriaInversionistasFeatures />

      {/* Subfooter 19 */}
      <SubFooter
        title={`Potenciando tus inversiones, garantizando tu éxito`}
        addClassName={"bg-center"}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer Atlantida Advisors */}
      <FooterAtlantidaAdvisors />
    </>
  );
};

export default AtlantidaAdvisorsAsesoriaInversionistas;
