import RedBanner from "../../components/RedBanner";
import ContactanosHeader from "./components/ContactanosHeader";
import ContactanosFormulario from "./components/ContactanosFormulario";

const Contactanos = () => {
  return (
    <>
      {/* Contactanos Header */}
      <ContactanosHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Contactanos */}
      <ContactanosFormulario />
    </>
  );
};

export default Contactanos;
