import AtlantidaAdvisorsHeader from "./components/AtlantidaAdvisorsHeader";
import SubFooter from "../../../components/SubFooter";
import AtlantidaAdvisorsFeatures from "./components/AtlantidaAdvisorsFeatures";

const AtlantidaAdvisors = () => {
  return (
    <>
      {/* Atlantida Advisors Header */}
      <AtlantidaAdvisorsHeader />

      {/* Atlantida Advisors Features */}
      <AtlantidaAdvisorsFeatures />

      {/* Subfooter 17 */}
      <SubFooter
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Tu socio en asesoría financiera confiable`}
      />
    </>
  );
};

export default AtlantidaAdvisors;
