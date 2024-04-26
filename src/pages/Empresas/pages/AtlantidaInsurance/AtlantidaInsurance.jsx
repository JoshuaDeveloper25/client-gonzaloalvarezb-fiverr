import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaInsuranceInicio from "./components/AtlantidaInsuranceInicio";

import subfooter11 from "../../../../images/subfooter11.jpg";
import AtlantidaInsuranceLideres from "./components/AtlantidaInsuranceLideres";

const AtlantidaInsurance = () => {
  return (
    <>
      {/* Atlantida Insurance Inicio */}
      <AtlantidaInsuranceInicio />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Asesora y Productora de Seguros`} />

      {/* Atlantida Insurance Lideres */}
      <AtlantidaInsuranceLideres />

      {/* Subfooter */}
      <SubFooter
        bgColor={"black"}
        img={subfooter11}
        addClassName={`bg-center`}
        title={`Seguridad en cada paso de tu vida`}
      />
    </>
  );
};

export default AtlantidaInsurance;
