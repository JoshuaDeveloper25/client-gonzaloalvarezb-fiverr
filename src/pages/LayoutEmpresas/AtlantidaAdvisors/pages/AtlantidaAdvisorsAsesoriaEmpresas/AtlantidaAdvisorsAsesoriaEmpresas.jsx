import AtlantidaAdvisorsAsesoriaEmpresasHeader from "./components/AtlantidaAdvisorsAsesoriaEmpresasHeader";
import AtlantidaAdvisorsAsesoriaEmpresasFeatures from "./components/AtlantidaAdvisorsAsesoriaEmpresasFeatures";
import SubFooter from "../../../../../components/SubFooter";
import FooterAtlantidaAdvisors from "../../../../../components/FooterAtlantidaAdvisors";
import NavbarAtlantidaAdvisors from "../../../../../components/NavbarAtlantidaAdvisors";

const AtlantidaAdvisorsAsesoriaEmpresas = () => {
  return (
    <>
      {/* Atlantida Advisors - Navbar  */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaAdvisors />
      </div>

      {/* Atlantida Advisors - Header  */}
      <AtlantidaAdvisorsAsesoriaEmpresasHeader />

      {/* Atlantida Advisors - Asesoria Empresas - Features */}
      <AtlantidaAdvisorsAsesoriaEmpresasFeatures />

      {/* Subfooter 18 */}
      <SubFooter
        bgColor={`red`}
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Inversiones inteligentes, resultados confiables`}
      />

      {/* Atlantida Advisors - Footer */}
      <FooterAtlantidaAdvisors />
    </>
  );
};

export default AtlantidaAdvisorsAsesoriaEmpresas;
