import FooterAtlantidaAdvisors from "../../../../../components/FooterAtlantidaAdvisors";
import NavbarAtlantidaAdvisors from "../../../../../components/NavbarAtlantidaAdvisors";
import AtlantidaAdvisorsContactoHeader from "./components/AtlantidaAdvisorsContactoHeader";
import SubFooter from "../../../../../components/SubFooter";

const AtlantidaAdvisorsContacto = () => {
  return (
    <>
      {/* Navbar Atlantida Advisors */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarAtlantidaAdvisors />
      </div>

      {/* Atlantida Advisors Contacto Inicio */}
      <AtlantidaAdvisorsContactoHeader />

      {/* Subfooter 21 */}
      <SubFooter
        bgColor={`red`}
        addClassName={`bg-center`}
        img={"https://dummyimage.com/600x400/000/fff"}
        title={`Potencia tu inversión, maximiza tu retorno`}
      />

      {/* Footer Atlantida Advisors */}
      <FooterAtlantidaAdvisors />
    </>
  );
};

export default AtlantidaAdvisorsContacto;
