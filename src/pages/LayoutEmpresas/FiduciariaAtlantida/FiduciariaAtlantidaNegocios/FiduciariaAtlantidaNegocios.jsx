import FiduciariaAtlantidaNegociosVentajas from "./components/FiduciariaAtlantidaNegociosVentajas";
import FiduciariaAtlantidaNegociosHeader from "./components/FiduciariaAtlantidaNegociosHeader";
import FooterFiduciariaAtlantida from "../../../../components/FooterFiduciariaAtlantida";
import NavbarFiduciariaAtlantida from "../../../../components/NavbarFiduciariaAtlantida";
import RedBanner from "../../../../components/RedBanner";
import SubFooter from "../../../../components/SubFooter";
import BoxImageText from "../../../../components/BoxImageText";

import fideicomisoAdmin from "../../../../images/fideicomiso-admin.png";
import fideicomisoInmobiliario from "../../../../images/fideicomiso-inmobiliario.png";
import fideicomisoEncargo from "../../../../images/fideicomiso-encargo.png";
import fideicomisoGarantia from "../../../../images/fideicomiso-garantia.png";
import fideicomisoInversion from "../../../../images/fideicomiso-inversion.png";
import fideicomisoTitularizacion from "../../../../images/fideicomiso-titularizacion.png";
import FiduciariaAtlantidaNegociosDiferencias from "./components/FiduciariaAtlantidaNegociosDiferencias";

import subfooter from "../../../../images/subfooter35.jpg";

const FiduciariaAtlantidaNegocios = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 w-full z-[99999] bg-white">
        <NavbarFiduciariaAtlantida />
      </div>

      {/* Fiduciaria Header */}
      <FiduciariaAtlantidaNegociosHeader />

      {/* Banner Rojo */}
      <RedBanner />

      {/* Fiduciaria Ventajas */}
      <FiduciariaAtlantidaNegociosVentajas />

      {/* Fideicomiso de Administración */}
      <BoxImageText
        idSection={"fideicomisoAdmin"}
        textSec={`Es el tipo de contrato que maneja y gestiona el
        patrimonio de un tercero conforme sus
        instrucciones. Por ejemplo: arrendamiento, venta de
        inmuebles; administración de flujos para pago
        acreedores; administración de bienes y valores
        (acciones, participaciones); ejecución de obras,
        administración de proyectos y servicios en general.`}
        bgSec={`bg-tertiary-color`}
        bgImg={fideicomisoAdmin}
        boxImg={"flex-1 max-w-xl"}
        boxText={"flex-1 max-w-md text-lg"}
        titleSec={`Fideicomiso de Administración`}
      />

      {/* Fideicomiso de Inmobiliario */}
      <BoxImageText
        idSection={"fideicomisoInmobiliario"}
        textSec={`Es el tipo de contrato que tiene
        como objetivo el desarrollo de un
        proyecto de construcción,
        manejando las relaciones con
        terceros, promoviendo de esta
        forma seguridad, confianza y
        transparencia entre las partes
        involucradas en el proyecto.`}
        bgImg={fideicomisoInmobiliario}
        boxImg={"flex-1"}
        boxText={"flex-1 max-w-sm text-lg"}
        titleSec={`Fideicomiso Inmobiliario`}
      />

      {/* Fideicomiso de Inversión */}
      <BoxImageText
        idSection={"fideicomisoInversion"}
        textSec={`Es el tipo de contrato que tiene como objetivo
        realizar inversiones a nombre del cliente según sus
        instrucciones.`}
        bgImg={fideicomisoInversion}
        boxImg={"flex-1"}
        boxText={"flex-1 text-lg"}
        titleSec={`Fideicomiso de Inversión`}
        bgSec={"bg-tertiary-color"}
      />

      {/* Fideicomiso de Garantía */}
      <BoxImageText
        idSection={"fideicomisoGarantia"}
        textSec={`Es el tipo de contrato que tiene
        como objetivo que bienes del
        cliente sirvan como garantía para
        sus obligaciones frente a
        terceros.`}
        bgImg={fideicomisoGarantia}
        boxImg={"flex-1"}
        boxText={"flex-1 max-w-sm text-lg"}
        titleSec={`Fideicomiso de Garantía`}
      />

      {/* Agente de Manejo en Procesos de Titularización */}
      <BoxImageText
        idSection={"agenteManejo"}
        textSec={`Es el tipo de contrato que tiene
        como objetivo que bienes del
        cliente sirvan para obtener el
        financiamiento bursátil por el
        lado del activo.`}
        bgImg={fideicomisoTitularizacion}
        boxImg={"flex-1"}
        boxText={"flex-1 max-w-xs text-lg"}
        titleSec={`Agente de Manejo en Procesos de Titularización`}
        bgSec={"bg-tertiary-color"}
      />

      {/* Fideicomiso Encargo */}
      <BoxImageText
        idSection={"encargoFiduciario"}
        textSec={`Es un mandato irrevocable, es
        decir, un poder para cumplir
        instrucciones de dar o hacer a
        nombre de un tercero. En este
        contrato es posible la entrega de
        bienes a la sociedad fiduciaria
        para que esta cumpla el mandato
        o encargo, sin que se transfiera la
        propiedad de los mismos.
        `}
        bgImg={fideicomisoEncargo}
        boxImg={"flex-1"}
        boxText={"flex-1 max-w-xs text-lg"}
        titleSec={`Encargo Fiduciario
        `}
      />

      {/* Diferencias */}
      <FiduciariaAtlantidaNegociosDiferencias />

      {/* Subfooter 35 */}
      <SubFooter
        bgColor={`black`}
        title={`Desbloquea el potencial de tus activos`}
        img={subfooter}
      />

      {/* Footer */}
      <FooterFiduciariaAtlantida />
    </>
  );
};

export default FiduciariaAtlantidaNegocios;
