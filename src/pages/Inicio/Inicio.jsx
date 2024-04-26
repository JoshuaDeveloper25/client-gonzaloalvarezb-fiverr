import CarouselEmprearial from "../../components/CarouselEmpresarial";
import SubFooter from "../../components/SubFooter";
import ExperienciaYears from "./components/ExperienciaYears";
import HeaderInicio from "./components/HeaderInicio";
import NuestrasEmpresas from "./components/NuestrasEmpresas";

import subfooter from "../../images/subfooter1.jpg";

const Inicio = () => {
  return (
    <>
      {/* Header Inicio */}
      <HeaderInicio />

      {/* Nuestras Empresas */}
      <NuestrasEmpresas />

      {/* 111 Años de Trayectoria y Experiencia */}
      <ExperienciaYears />

      {/* Carousel Empresarial */}
      <CarouselEmprearial />

      {/* Subfooter 1 */}
      <SubFooter bgColor={'black'} img={subfooter} title={`Juntos lo hacemos posible`} addClassName={`bg-center`} />
    </>
  );
};

export default Inicio;
