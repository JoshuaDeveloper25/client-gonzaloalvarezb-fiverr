import IndicadoresFinancieros from "./components/IndicadoresFinancieros";
import CarouselEmprearial from "../../components/CarouselEmpresarial";
import ValoresCorporativos from "./components/ValoresCorporativos";
import QuienesSomosInicio from "./components/QuienesSomosInicio";
import LineaDeTiempoVideo from "./components/LineaDeTiempoVideo";
import HistoriaAdicional from "./components/HistoriaAdicional";
import NuestraHistoria from "./components/NuestraHistoria";
import EmisorOficial from "./components/EmisorOficial";
import SubFooter from "../../components/SubFooter";

import subfooter from "../../images/subfooter2.jpg";
import Historia from "./components/Historia";
import NuestroGrupo from "./components/NuestroGrupo";

const QuienesSomos = () => {
  return (
    <>
      {/* Header Quienes Somos */}
      <QuienesSomosInicio />

      {/* Historia */}
      <Historia />

      {/* Carousel Empresarial */}
      <CarouselEmprearial />

      {/* Historia Adicional */}
      <HistoriaAdicional />

      {/* Nuestro Grupo */}
      <NuestroGrupo />

      {/* Valores Corporativos */}
      <ValoresCorporativos />

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
