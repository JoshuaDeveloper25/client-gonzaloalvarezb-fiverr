import CapitalPrimeEmpresarial from "./components/CapitalPrimeEmpresarial";
import CapitalPrimeFeatures from "./components/CapitalPrimeFeatures";
import CapitalPrimeInicio from "./components/CapitalPrimeInicio";

import subfooter12 from "../../../../images/subfooter12.jpg";
import SubFooter from "../../../../components/SubFooter";
import CapitalPrimeExperiencia from "./components/CapitalPrimeExperiencia";

const CapitalPrime = () => {
  return (
    <>
      {/* Capital Prime Inicio */}
      <CapitalPrimeInicio />

      {/* Capital Prime Empresarial */}
      <CapitalPrimeEmpresarial />

      {/* Capital Prime Inbound y Gestión de Cartera */}
      <CapitalPrimeFeatures />

      {/* Capital Prime Nuestra Experiencia Da: */}
      <CapitalPrimeExperiencia />

      {/* Subfooter 12 */}
      <SubFooter
        img={subfooter12}
        addClassName={`bg-center`}
        title={`Recuperamos tu tranquilidad`}
      />
    </>
  );
};

export default CapitalPrime;
