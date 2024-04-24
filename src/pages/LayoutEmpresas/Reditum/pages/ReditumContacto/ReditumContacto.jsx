import SubFooter from "../../../../../components/SubFooter";
import ReditumContactoHeader from "./components/ReditumContactoHeader";

const ReditumContacto = () => {
  return (
    <>
      {/* Reditum Contacto Inicio */}
      <ReditumContactoHeader />

      {/* Subfooter 16 */}
      <SubFooter
        addClassName={`bg-center`}
        img={"https://dummyimage.com/600x400/000/fff"}
        title={`Reditum, tu socio en inteligencia bursátil`}
      />
    </>
  );
};

export default ReditumContacto;
