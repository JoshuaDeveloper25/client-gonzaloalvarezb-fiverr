import ReditumContactoHeader from "./components/ReditumContactoHeader";
import NavbarReditum from "../../../../../components/NavbarReditum";
import SubFooter from "../../../../../components/SubFooter";
import Footer from "../../../../../components/Footer";
import RedBanner from "../../../../../components/RedBanner";
import ReditumContactoHeading from "./components/ReditumContactoHeading";

import subfooter16 from "../../../../../images/subfooter16.jpeg";

const ReditumContacto = () => {
  return (
    <>
      {/* Navbar Reditum */}
      <NavbarReditum />

      {/* Header */}
      <ReditumContactoHeading />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Inteligencia de mercado y bursátil`} />

      {/* Reditum Contacto Inicio */}
      <ReditumContactoHeader />

      {/* Subfooter 16 */}
      <SubFooter
        bgColor={`black`}
        addClassName={`bg-center`}
        img={subfooter16}
        title={`Tu socio en inteligencia bursátil`}
      />

      {/* Footer Reditum */}
      <Footer />
    </>
  );
};

export default ReditumContacto;
