import InversionesFinancierasInicio from "./components/InversionesFinancierasInicio";
import subfooter5 from "../../../../images/subfooter5.jpg";
import RedBanner from "../../../../components/RedBanner";

import SubFooter from "../../../../components/SubFooter";
import CrecimientoSostenible from "./components/CrecimientoSostenible";
import EmpresasLogos from "./components/EmpresasLogos";

const InversionesFinancierasAtlantida = () => {
  return (
    <>
      {/* Inversiones Fincieras Atlantida Inicio - Header */}
      <InversionesFinancierasInicio />

      {/* Banner Rojo */}
      <RedBanner
        bannerTitle={`Construyendo un futuro financiero próspero para Ecuador`}
      />

      {/* Crecimiento Sostenible */}
      <CrecimientoSostenible />

      {/* Empresas Logos */}
      <EmpresasLogos />

      {/* Subfooter 5 */}
      <SubFooter
        bgColor={"black"}
        img={subfooter5}
        title={`Alcanzamos sueños y metas compartidas`}
        addClassName={`bg-center`}
      />
    </>
  );
};

export default InversionesFinancierasAtlantida;
