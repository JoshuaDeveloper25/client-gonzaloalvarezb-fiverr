import FooterReditum from "../../../../../components/FooterReditum";
import NavbarReditum from "../../../../../components/NavbarReditum";
import SubFooter from "../../../../../components/SubFooter";
import ReditumContactoHeader from "./components/ReditumContactoHeader";

const ReditumContacto = () => {
  return (
    <>
      {/* Navbar Reditum */}
      <NavbarReditum />

      {/* Reditum Contacto Inicio */}
      <ReditumContactoHeader />

      {/* Subfooter 16 */}
      <SubFooter
        bgColor={`red`}
        addClassName={`bg-center`}
        img={"https://dummyimage.com/600x400/000/fff"}
        title={`Reditum, tu socio en inteligencia bursátil`}
      />

      {/* Footer Reditum */}
      <FooterReditum />
    </>
  );
};

export default ReditumContacto;
