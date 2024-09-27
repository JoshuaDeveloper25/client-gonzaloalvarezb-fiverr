import Footer from "../../../../../components/Footer";
import NavbarReditum from "../../../../../components/NavbarReditum";
import RedBanner from "../../../../../components/RedBanner";
import SubFooter from "../../../../../components/SubFooter";
import ReditumAplicacionMovil from "./components/ReditumAplicacionMovil";
import ReditumFeatures from "./components/ReditumFeatures";
import ReditumInicio from "./components/ReditumInicio";
import ReditumMercados from "./components/ReditumMercados";
import ReditumServicios from "./components/ReditumServicios";

import subfooter14 from "../../../../../images/subfooter14.jpeg";

const ReditumPage = () => {
  return (
    <>
      {/* Navbar Reditum */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarReditum />
      </div>

      {/* Reditum Inicio - Header */}
      <ReditumInicio />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={"Inteligencia de mercado y bursátil"} />

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
        bgColor={"black"}
        img={subfooter14}
        addClassName={`bg-center`}
        title={`Tu ventaja inteligente en la bolsa`}
      />

      {/* Footer Reditum */}
      <Footer />
    </>
  );
};

export default ReditumPage;
