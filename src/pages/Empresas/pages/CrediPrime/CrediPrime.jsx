import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import CrediPrimeCondiciones from "./components/CrediPrimeCondiciones";
import CrediPrimeDreams from "./components/CrediPrimeDreams";
import CrediPrimeFeatures from "./components/CrediPrimeFeatures";
import CrediPrimeInicio from "./components/CrediPrimeInicio";

import subfooter8 from "../../../../images/subfooter8.jpg";

const CrediPrime = () => {
  return (
    <>
      {/* CrediPrime Header */}
      <CrediPrimeInicio />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Expertos en Crédito Automotríz`} />

      {/* Mejores Condiciones */}
      <CrediPrimeCondiciones />

      {/* CrediPrime Caracteristias o Features */}
      <CrediPrimeFeatures />

      {/* CrediPrime Sueños */}
      <CrediPrimeDreams />

      {/* Subfooter 8 */}
      <SubFooter
        bgColor={"black"}
        title={`Es momento de estrenar el auto de tus sueños`}
        img={subfooter8}
        addClassName={`bg-center`}
      />
    </>
  );
};

export default CrediPrime;
