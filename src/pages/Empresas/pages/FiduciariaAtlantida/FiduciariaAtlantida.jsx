import RedBanner from "../../../../components/RedBanner";
import FiduciariaAtlantidaInicio from "./components/FiduciariaAtlantidaInicio";
import subfooter7 from "../../../../images/subfooter7.jpg";
import SubFooter from "../../../../components/SubFooter";
import FiduciariaAtlantidaNegocios from "./components/FiduciariaAtlantidaNegocios";
import FiduciariaAtlantidaPratimonio from "./components/FiduciariaAtlantidaPratimonio";
import FiduciariaAtlantidaInversion from "./components/FiduciariaAtlantidaInversion";

const FiduciariaAtlantida = () => {
  return (
    <>
      {/* Fiduciaria Atlantida Inicio */}
      <FiduciariaAtlantidaInicio />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Gestionando confianza y asegurando tu futuro`} />

      {/* Negocios Fiduciarios */}
      <FiduciariaAtlantidaNegocios />

      {/* Potencia tu patrimonio */}
      <FiduciariaAtlantidaPratimonio />

      {/* Fondos de inversión */}
      <FiduciariaAtlantidaInversion />

      {/* Subfooter 7 */}
      <SubFooter
        bgColor={"black"}
        title={`Seguridad y crecimiento en cada paso`}
        img={subfooter7}
        addClassName={`bg-center`}
      />
    </>
  );
};

export default FiduciariaAtlantida;
