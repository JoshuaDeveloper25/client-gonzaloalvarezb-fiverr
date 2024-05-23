import AtlantidaInsuranceRecursosHeader from "./components/AtlantidaInsuranceRecursosHeader";
import FooterAtlantidaInsurance from "../../../../components/FooterAtlantidaInsurance";
import NavbarAtlantidaInsurance from "../../../../components/NavbarAtlantidaInsurance";
import AsistenciaInsurance from "../../../../components/AsistenciaInsurance";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaInsuranceRecursosFAQ from "./components/AtlantidaInsuranceRecursosFAQ";

import subfooter from "../../../../images/subfooter33.jpg"

const AtlantidaInsuranceRecursos = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaInsurance />
      </div>

      {/* Inicio */}
      <AtlantidaInsuranceRecursosHeader />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Encuentra respuestas rápidas y precisas`} />

      {/* FAQ */}
      <AtlantidaInsuranceRecursosFAQ />

      {/* Asistencia */}
      <AsistenciaInsurance
        title={"¿Aún tienes preguntas?"}
        titleSpan={"Contacta un asesor"}
        addClassName={"border-y-0 bg-tertiary-color"}
      />

      {/* Subfooter 33 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu respaldo en todo momento`}
        img={subfooter}
      />

      {/* Footer */}
      <FooterAtlantidaInsurance />
    </>
  );
};

export default AtlantidaInsuranceRecursos;
