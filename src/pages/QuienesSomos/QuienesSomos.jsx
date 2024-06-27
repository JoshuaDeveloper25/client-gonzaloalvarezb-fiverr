import IndicadoresFinancieros from "./components/IndicadoresFinancieros";
import CarouselEmprearial from "../../components/CarouselEmpresarial";
import QuienesSomosInicio from "./components/QuienesSomosInicio";
import LineaDeTiempoVideo from "./components/LineaDeTiempoVideo";
import NuestraHistoria from "./components/NuestraHistoria";
import EmisorOficial from "./components/EmisorOficial";
import SubFooter from "../../components/SubFooter";

import subfooter from "../../images/subfooter2.jpg";

const QuienesSomos = () => {
  return (
    <>
      {/* Header Quienes Somos */}
      <QuienesSomosInicio />

      {/* Carousel Empresarial */}
      <CarouselEmprearial />

      {/* Subfooter 2 */}
      <SubFooter
        bgColor={"black"}
        img={subfooter}
        title={`Nuestro mayor activo, es la confianza de`}
        titleSpan={`nuestros clientes`}
        addClassName={`bg-center`}
      />
    </>
  );
};

export default QuienesSomos;
