import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import BancoDMiroInicio from "./components/BancoDMiroInicio";
import BancoDMiroLineaDeTiempo from "./components/BancoDMiroLineaDeTiempo";

import subfooter6 from "../../../../images/subfooter6.jpg";
import BancoDMiroAdquisicion from "./components/BancoDMiroAdquisicion";

const BancoDMiro = () => {
  return (
    <>
      {/* Banco D Miro Inicio */}
      <BancoDMiroInicio />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Una historia de crecimiento`} />

      {/* Linea de Tiempo */}
      <BancoDMiroLineaDeTiempo />

      {/* Banco D Miro Adquisición */}
      <BancoDMiroAdquisicion />

      {/* Subfooter 6 */}
      <SubFooter
        bgColor={"black"}
        title={`Cambiando Vidas`}
        img={subfooter6}
        addClassName={`bg-center`}
      />
    </>
  );
};

export default BancoDMiro;
