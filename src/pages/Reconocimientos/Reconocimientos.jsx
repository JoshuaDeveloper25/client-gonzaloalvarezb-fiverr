import RedBanner from "../../components/RedBanner";
import ReconocimientosInicio from "./components/ReconocimientosInicio";
import ReconocimientosInsignias from "./components/ReconocimientosInsignias";

import subfooter13 from "../../images/subfooter13.jpeg";
import SubFooter from "../../components/SubFooter";

const Reconocimientos = () => {
  return (
    <>
      {/* Reconocimientos Inicio */}
      <ReconocimientosInicio />

      {/* Banner Rojo */}
      <RedBanner
        bannerTitle={`Premios y Reconocimientos de Grupo Financiero Atlántida`}
      />

      {/* Reconocimientos Insignias */}
      <ReconocimientosInsignias />

      {/* Subfooter 13 */}
      <SubFooter
        img={subfooter13}
        title={`Cruzamos fronteras para brindar soluciones`}
        addClassName={`bg-center`}
      />
    </>
  );
};

export default Reconocimientos;
