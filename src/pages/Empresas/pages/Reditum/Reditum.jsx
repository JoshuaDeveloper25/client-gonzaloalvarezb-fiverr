import SubFooter from "../../../../components/SubFooter";
import ReditumInicio from "./components/ReditumInicio";
import ReditumFeatures from "./components/ReditumFeatures";

import subfooter10 from "../../../../images/subfooter10.jpeg";
import ReditumEspecificaciones from "./components/ReditumEspecificaciones";
import ReditumEmpresarial from "./components/ReditumEmpresarial";

const Reditum = () => {
  return (
    <>
      {/* Reditum Header */}
      <ReditumInicio />

      {/* Reditum Empresarial */}
      <ReditumEmpresarial />

      {/* Reditum Especificaciones */}
      <ReditumEspecificaciones />

      {/* Reditum Features */}
      <ReditumFeatures />

      {/* Subfooter 10 */}
      <SubFooter
        bgColor={"black"}
        img={subfooter10}
        title={`Reditum, tu ventaja inteligente para decisiones ágiles`}
      />
    </>
  );
};

export default Reditum;
