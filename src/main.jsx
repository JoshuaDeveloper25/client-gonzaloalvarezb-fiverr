// --> Default imports from react and more
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// --> Styles
import "./index.css";

// --> Pages
import Root from "./pages/Root";
import Inicio from "./pages/Inicio/Inicio";
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import PresenciaRegional from "./pages/PresenciaRegional/PresenciaRegional";

// --> Empresas Pages
import Empresas from "./pages/Empresas/Empresas";
import InversionesFinancierasAtlantida from "./pages/Empresas/pages/InversionesFinancierasAtlantida/InversionesFinancierasAtlantida";
import BancoDMiro from "./pages/Empresas/pages/BancoDMiro/BancoDMiro";
import FiduciariaAtlantida from "./pages/Empresas/pages/FiduciariaAtlantida/FiduciariaAtlantida";
import CrediPrime from "./pages/Empresas/pages/CrediPrime/CrediPrime";
import AtlantidaCasaValores from "./pages/Empresas/pages/AtlantidaCasaValores/AtlantidaCasaValores";
import Reditum from "./pages/Empresas/pages/Reditum/Reditum";
import AtlantidaInsurance from "./pages/Empresas/pages/AtlantidaInsurance/AtlantidaInsurance";
import CapitalPrime from "./pages/Empresas/pages/CapitalPrime/CapitalPrime";
import Reconocimientos from "./pages/Reconocimientos/Reconocimientos";
import GobiernoCorporativo from "./pages/GobiernoCorporativo/GobiernoCorporativo";
import LayoutEmpresas from "./pages/LayoutEmpresas";
import ReditumInicio from "./pages/LayoutEmpresas/Reditum/pages/ReditumInicio/ReditumInicio";
import ReditumContacto from "./pages/LayoutEmpresas/Reditum/pages/ReditumContacto/ReditumContacto";
import AtlantidaAdvisorsAsesoriaEmpresas from "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsAsesoriaEmpresas/AtlantidaAdvisorsAsesoriaEmpresas";
import AtlantidaAdvisorsInicio from "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsInicio/AtlantidaAdvisorsInicio";
import AtlantidaAdvisorsAsesoriaInversionistas from "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsAsesoriaInversionistas/AtlantidaAdvisorsAsesoriaInversionistas";
import AtlantidaAdvisorsAsesoriaPublicaciones from "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsPublicaciones/AtlantidaAdvisorsPublicaciones";
import AtlantidaAdvisorsContacto from "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsContancto/AtlantidaAdvisorsContancto";
import AtlantidaCasaValoresInicio from "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresInicio/AtlantidaCasaValoresInicio";
import AtlantidaCasaValoresServicios from "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresServicios/AtlantidaCasaValoresServicios";
import AtlantidaCasaValoresFinanciamiento from "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresFinanciamiento/AtlantidaCasaValoresFinanciamiento";
import AtlantidaCasaValoresBursatiles from "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresBursatiles/AtlantidaCasaValoresBursatiles";
import AtlantidaCasaValoresIntermediacion from "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresIntermediacion/AtlantidaCasaValoresIntermediacion";
import AtlantidaCasaValoresContacto from "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresContacto/AtlantidaCasaValoresContacto";
import AtlantidaCasaValoresPublicaciones from "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresPublicaciones/AtlantidaCasaValoresPublicaciones";
import AtlantidaInsuranceInicio from "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceInicio/AtlantidaInsuranceInicio";
import AtlantidaInsuranceProductos from "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceProductos/AtlantidaInsuranceProductos";
import AtlantidaInsuranceAbout from "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceAbout/AtlantidaInsuranceAbout";
import AtlantidaInsuranceServicios from "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceServicios/AtlantidaInsuranceServicios";
import AtlantidaInsuranceRecursos from "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceRecursos/AtlantidaInsuranceRecursos";
import AtlantidaInsuranceContacto from "./pages/LayoutEmpresas/AtlantidaInsurance/AtlantidaInsuranceContacto/AtlantidaInsuranceContacto";
import FiduciariaAtlantidaInicio from "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaInicio/FiduciariaAtlantidaInicio";
import FiduciariaAtlantidaNegocios from "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaNegocios/FiduciariaAtlantidaNegocios";
import FiduciariaAtlantidaFondos from "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaFondos/FiduciariaAtlantidaFondos";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },

      {
        element: <QuienesSomos />,
        path: `/quienes-somos`,
      },

      {
        element: <GobiernoCorporativo />,
        path: "/gobierno-corporativo",
      },

      {
        element: <PresenciaRegional />,
        path: `/presencia-regional`,
      },

      {
        path: `/empresas`,
        element: <Empresas />,
      },

      // --> Pages from Empresas
      {
        element: <InversionesFinancierasAtlantida />,
        path: "/empresas/inversiones-financieras-atlantida",
      },

      {
        element: <BancoDMiro />,
        path: "/empresas/banco-d-miro",
      },

      {
        element: <FiduciariaAtlantida />,
        path: "/empresas/fiduciaria-atlantida",
      },

      {
        element: <AtlantidaCasaValores />,
        path: "/empresas/atlantida-casa-valores",
      },

      {
        element: <CrediPrime />,
        path: "/empresas/crediprime",
      },

      {
        element: <Reditum />,
        path: "/empresas/reditum",
      },

      {
        element: <AtlantidaInsurance />,
        path: "/empresas/atlantida-insurance",
      },

      {
        element: <CapitalPrime />,
        path: "/empresas/capitalprime",
      },

      // --> Global Pages
      {
        element: <Reconocimientos />,
        path: "/reconocimientos",
      },
    ],
  },

  {
    element: <LayoutEmpresas />,
    children: [
      // --> Reditum Pages
      {
        path: "/reditum-inicio",
        element: <ReditumInicio />,
        index: true,
      },

      {
        path: "/reditum-contacto",
        element: <ReditumContacto />,
      },

      // --> Atlantida Advisors Pages
      {
        path: "/advisors-inicio",
        element: <AtlantidaAdvisorsInicio />,
      },

      {
        path: "/advisors-asesoria-empresas",
        element: <AtlantidaAdvisorsAsesoriaEmpresas />,
      },

      {
        path: "/advisors-asesoria-inversionistas",
        element: <AtlantidaAdvisorsAsesoriaInversionistas />,
      },

      {
        path: "/advisors-publicaciones",
        element: <AtlantidaAdvisorsAsesoriaPublicaciones />,
      },

      {
        path: "/advisors-contacto",
        element: <AtlantidaAdvisorsContacto />,
      },

      // --> Atlantida Casa de Valores
      {
        path: "/casa-valores-inicio",
        element: <AtlantidaCasaValoresInicio />,
      },

      {
        path: "/casa-valores-servicios",
        element: <AtlantidaCasaValoresServicios />,
      },

      {
        path: "/casa-valores-financiamiento",
        element: <AtlantidaCasaValoresFinanciamiento />,
      },

      {
        path: "/casa-valores-bursatiles",
        element: <AtlantidaCasaValoresBursatiles />,
      },

      {
        path: "/casa-valores-intermediacion",
        element: <AtlantidaCasaValoresIntermediacion />,
      },

      {
        path: "/casa-valores-publicaciones",
        element: <AtlantidaCasaValoresPublicaciones />,
      },

      {
        path: "/casa-valores-contacto",
        element: <AtlantidaCasaValoresContacto />,
      },

      // --> Atlantida Insurance
      {
        path: "/insurance-inicio",
        element: <AtlantidaInsuranceInicio />,
      },

      {
        path: "/insurance-productos",
        element: <AtlantidaInsuranceProductos />,
      },

      {
        path: "/insurance-quienes-somos",
        element: <AtlantidaInsuranceAbout />,
      },

      {
        path: "/insurance-servicios",
        element: <AtlantidaInsuranceServicios />,
      },

      {
        path: "/insurance-recursos",
        element: <AtlantidaInsuranceRecursos />,
      },

      {
        path: "/insurance-contacto",
        element: <AtlantidaInsuranceContacto />,
      },

      // --> Fiduciaria Atlantida
      {
        path: "/fiduciaria-inicio",
        element: <FiduciariaAtlantidaInicio />,
      },

      {
        path: "/fiduciaria-negocios",
        element: <FiduciariaAtlantidaNegocios />,
      },

      {
        path: "/fiduciaria-fondos",
        element: <FiduciariaAtlantidaFondos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

// --> Answers from table 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);

//   for (let o = 1; o <= 10; o++) {
//     console.log(i * o);
//   }
// }
