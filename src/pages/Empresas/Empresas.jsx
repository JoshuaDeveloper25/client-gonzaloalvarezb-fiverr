import EmpresasColaboradores from "./components/EmpresasColaboradores";
import EmpresasInicio from "./components/EmpresasInicio";
import EmpresasLogos from "./components/EmpresasLogos";
import RedBanner from "../../components/RedBanner";
import SubFooter from "../../components/SubFooter";

import subfooter from "../../images/subfooter4.jpg";

const Empresas = () => {
  return (
    <section>
      {/* Empresas Header */}
      <EmpresasInicio />

      {/* Banner Rojo */}
      <RedBanner
        bannerTitle={`Pioneros en servicios, innovación y soluciones financieras`}
      />

      {/* Contamos con más de 500 colaboradores */}
      <EmpresasColaboradores />

      {/* Empresas Logos */}
      <EmpresasLogos />

      {/* Subfooter 4 */}
      <SubFooter img={subfooter} title={`Juntos lo hacemos posible`} />
    </section>
  );
};

export default Empresas;
