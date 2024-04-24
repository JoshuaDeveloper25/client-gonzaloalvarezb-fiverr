import SubFooter from "../../../components/SubFooter";
import ReditumAplicacionMovil from "./components/ReditumAplicacionMovil";
import ReditumFeatures from "./components/ReditumFeatures";
import ReditumInicio from "./components/ReditumInicio";
import ReditumMercados from "./components/ReditumMercados";
import ReditumServicios from "./components/ReditumServicios";

// import subfooter14 from "../../../images/sub";

const ReditumPage = () => {
  return (
    <>
      {/* Reditum Inicio - Header */}
      <ReditumInicio />

      {/* Reditum Especificaciones o Features */}
      <ReditumFeatures />

      {/* Reditum Aplicacion Movil */}
      <ReditumAplicacionMovil />

      {/* Reditum Mercados Disponibles */}
      <ReditumMercados />

      {/* Reditum Servicios */}
      <ReditumServicios />

      {/* Subfooter 14 */}
      <SubFooter
        img={`https://dummyimage.com/600x400/000/fff`}
        addClassName={`bg-center`}
        title={`Reditum, tu ventaja inteligente en la bolsa`}
      />
    </>
  );
};

export default ReditumPage;
