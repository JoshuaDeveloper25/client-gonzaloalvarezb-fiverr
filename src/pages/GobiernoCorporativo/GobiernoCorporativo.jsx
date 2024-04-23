import RedBanner from "../../components/RedBanner";
import GobiernoCorporativoInicio from "./components/GobiernoCorporativoInicio";

import subfooter15 from "../../images/subfooter15.jpg";
import SubFooter from "../../components/SubFooter";
import GobiernoCorporativoDirectorios from "./components/GobiernoCorporativoDirectorios";
import GobiernoCorporativoAdministradores from "./components/GobiernoCorporativoAdministradores";

const GobiernoCorporativo = () => {
  return (
    <>
      {/* Gobierno Corporativo */}
      <GobiernoCorporativoInicio />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Directorios`} />

      {/* Directorios */}
      <GobiernoCorporativoDirectorios />

      {/* Banner Rojo */}
      <RedBanner bannerTitle={`Administradores`} />

      {/* Administradores */}
      <GobiernoCorporativoAdministradores />

      {/* Subfooter 15 */}
      <SubFooter
        img={subfooter15}
        title={`Juntos lo hacemos posible`}
        addClassName={`bg-center`}
      />
    </>
  );
};

export default GobiernoCorporativo;
