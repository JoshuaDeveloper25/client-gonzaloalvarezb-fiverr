import PresenciaRegionalHeader from "./components/PresenciaRegionalHeader";
import CentroAmericaVideo from "./components/CentroAmericaVideo";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

import subfooter3 from '../../images/subfooter3.jpg';

const PresenciaRegional = () => {
  return (
    <>
      {/* Presencia Regional Header */}
      <PresenciaRegionalHeader />

      {/* Banner Rojo */}
      <RedBanner
        bannerTitle={`Operaciones en 8 países junto al mejor equipo`}
      />

      {/* CentroAmerica Video */}
      <CentroAmericaVideo />

      {/* Subfooter 3 */}
      <SubFooter img={subfooter3} title={`Cruzamos fronteras para brindar soluciones`} />
    </>
  );
};

export default PresenciaRegional;
