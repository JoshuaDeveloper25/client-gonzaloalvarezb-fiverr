import AtlantidaInsuranceRecursosHeader from "./components/AtlantidaInsuranceRecursosHeader";
import FooterAtlantidaInsurance from "../../../../components/FooterAtlantidaInsurance";
import NavbarAtlantidaInsurance from "../../../../components/NavbarAtlantidaInsurance";
import AsistenciaInsurance from "../../../../components/AsistenciaInsurance";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import AtlantidaInsuranceRecursosFAQ from "./components/AtlantidaInsuranceRecursosFAQ";

const AtlantidaInsuranceRecursos = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarAtlantidaInsurance />

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

      {/* Subfooter 30 */}
      <SubFooter
        bgColor={`black`}
        title={`Tu respaldo en todo momento`}
        img={`https://dummyimage.com/600x400/000/fff`}
      />

      {/* Footer */}
      <FooterAtlantidaInsurance />
    </>
  );
};

export default AtlantidaInsuranceRecursos;
