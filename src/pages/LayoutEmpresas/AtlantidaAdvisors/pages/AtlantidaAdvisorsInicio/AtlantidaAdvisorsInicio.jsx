import AtlantidaAdvisorsHeader from "./components/AtlantidaAdvisorsHeader";
import SubFooter from "../../../../../components/SubFooter";
import AtlantidaAdvisorsFeatures from "./components/AtlantidaAdvisorsFeatures";
import NavbarAtlantidaAdvisors from "../../../../../components/NavbarAtlantidaAdvisors";
import FooterAtlantidaAdvisors from "../../../../../components/FooterAtlantidaAdvisors";

const AtlantidaAdvisorsInicio = () => {
  return (
    <>
      {/* Navbar Atlantida Advisors */}
      <NavbarAtlantidaAdvisors />

      {/* Atlantida Advisors Header */}
      <AtlantidaAdvisorsHeader />

      {/* Atlantida Advisors Features */}
      <AtlantidaAdvisorsFeatures />

      {/* Subfooter 17 */}
      <SubFooter
        bgColor={`red`}
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Tu socio en asesoría financiera confiable`}
      />

      {/* Footer Atlantida Advisors */}
      <FooterAtlantidaAdvisors />
    </>
  );
};

export default AtlantidaAdvisorsInicio;
