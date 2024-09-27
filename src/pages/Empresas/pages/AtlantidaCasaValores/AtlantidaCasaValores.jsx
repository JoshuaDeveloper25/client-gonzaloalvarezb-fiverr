import AtlantidaCasaValoresInicio from "./components/AtlantidaCasaValoresInicio";
import RedBanner from "../../../../components/RedBanner";
import AtlantidaCasaValoresInsignia from "./components/AtlantidaCasaValoresInsignia";
import AtlantidaCasaValoresIngresos from "./components/AtlantidaCasaValoresIngresos";
import SubFooter from "../../../../components/SubFooter";
import subfooter9 from "../../../../images/subfooter9.jpg";
import AtlantidaCasaValoresFeatures from "./components/AtlantidaCasaValoresFeatures";

const AtlantidaCasaValores = () => {
  return (
    <>
      {/* Atlantida Casa de Valores Inicio - Header */}
      <AtlantidaCasaValoresInicio />

      {/* Banner Rojo */}
      <RedBanner
        bannerTitle={`Expertos en el mercado de valores Ecuatoriano`}
      />

      {/* Insignias */}
      <AtlantidaCasaValoresInsignia />

      {/* Ingresos */}
      <AtlantidaCasaValoresIngresos />

      {/* Caracteristicas */}
      <AtlantidaCasaValoresFeatures />

      {/* Subfooter 9 */}
      <SubFooter
        bgColor={"black"}
        img={subfooter9}
        addClassName={`bg-center`}
        title={`Tu aliado en transacciones bursátiles`}
      />
    </>
  );
};

export default AtlantidaCasaValores;
