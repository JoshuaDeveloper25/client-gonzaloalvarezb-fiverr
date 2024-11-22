// Import from external packages
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./auth/PrivateRoutes";
import { AppProvider } from "./context/AppProvider";
import { PublicRoutes } from "./auth/PublicRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy } from "react";

// Components
import Spinner from "./components/Spinner";

// Admin Panel
import HomeDashboard from "./admin/dashboard/HomeDashboard/HomeDashboard";
import RootDashboard from "./admin/dashboard/RootDashboard";
import ManageFiles from "./admin/dashboard/ManageFiles/ManageFiles";
import ManageUsers from "./admin/dashboard/ManageUsers/ManageUsers";

// --> Empresas Pages
const CorreoEnviadoExitosamenteLazy = lazy(() =>
  import("./pages/CorreoEnviadoExitosamente/CorreoEnviadoExitosamente")
);
const RootLazy = lazy(() => import("./pages/Root"));
const InicioLazy = lazy(() => import("./pages/Inicio/Inicio"));
const QuienesSomosLazy = lazy(() =>
  import("./pages/QuienesSomos/QuienesSomos")
);
const PresenciaRegionalLazy = lazy(() =>
  import("./pages/PresenciaRegional/PresenciaRegional")
);
const EmpresasLazy = lazy(() => import("./pages/Empresas/Empresas"));
const AdminLazy = lazy(() => import("../src/admin/Admin"));
const InversionesFinancierasAtlantidaLazy = lazy(() =>
  import(
    "./pages/Empresas/pages/InversionesFinancierasAtlantida/InversionesFinancierasAtlantida"
  )
);
const BancoDMiroLazy = lazy(() =>
  import("./pages/Empresas/pages/BancoDMiro/BancoDMiro")
);
const FiduciariaAtlantidaLazy = lazy(() =>
  import("./pages/Empresas/pages/FiduciariaAtlantida/FiduciariaAtlantida")
);
const CrediPrimeLazy = lazy(() =>
  import("./pages/Empresas/pages/CrediPrime/CrediPrime")
);
const AtlantidaCasaValoresLazy = lazy(() =>
  import("./pages/Empresas/pages/AtlantidaCasaValores/AtlantidaCasaValores")
);
const ReditumLazy = lazy(() =>
  import("./pages/Empresas/pages/Reditum/Reditum")
);
const AtlantidaInsuranceLazy = lazy(() =>
  import("./pages/Empresas/pages/AtlantidaInsurance/AtlantidaInsurance")
);
const CapitalPrimeLazy = lazy(() =>
  import("./pages/Empresas/pages/CapitalPrime/CapitalPrime")
);
const ReconocimientosLazy = lazy(() =>
  import("./pages/Reconocimientos/Reconocimientos")
);
const ContactanosLazy = lazy(() => import("./pages/Contactanos/Contactanos"));
const GobiernoCorporativoLazy = lazy(() =>
  import("./pages/GobiernoCorporativo/GobiernoCorporativo")
);
const LayoutEmpresasLazy = lazy(() => import("./pages/LayoutEmpresas"));
const ReditumInicioLazy = lazy(() =>
  import("./pages/LayoutEmpresas/Reditum/pages/ReditumInicio/ReditumInicio")
);
const ReditumContactoLazy = lazy(() =>
  import("./pages/LayoutEmpresas/Reditum/pages/ReditumContacto/ReditumContacto")
);
const AtlantidaAdvisorsAsesoriaEmpresasLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsAsesoriaEmpresas/AtlantidaAdvisorsAsesoriaEmpresas"
  )
);
const AtlantidaAdvisorsInicioLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsInicio/AtlantidaAdvisorsInicio"
  )
);
const AtlantidaAdvisorsAsesoriaInversionistasLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsAsesoriaInversionistas/AtlantidaAdvisorsAsesoriaInversionistas"
  )
);
const AtlantidaAdvisorsAsesoriaPublicacionesLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsPublicaciones/AtlantidaAdvisorsPublicaciones"
  )
);
const AtlantidaAdvisorsContactoLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaAdvisors/pages/AtlantidaAdvisorsContancto/AtlantidaAdvisorsContancto"
  )
);
const AtlantidaCasaValoresInicioLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresInicio/AtlantidaCasaValoresInicio"
  )
);
const AtlantidaCasaValoresServiciosLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresServicios/AtlantidaCasaValoresServicios"
  )
);
const AtlantidaCasaValoresFinanciamientoLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresFinanciamiento/AtlantidaCasaValoresFinanciamiento"
  )
);
const AtlantidaCasaValoresBursatilesLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresBursatiles/AtlantidaCasaValoresBursatiles"
  )
);
const AtlantidaCasaValoresIntermediacionLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresIntermediacion/AtlantidaCasaValoresIntermediacion"
  )
);
const AtlantidaCasaValoresContactoLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresContacto/AtlantidaCasaValoresContacto"
  )
);
const AtlantidaCasaValoresPublicacionesLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresPublicaciones/AtlantidaCasaValoresPublicaciones"
  )
);
const FiduciariaAtlantidaInicioLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaInicio/FiduciariaAtlantidaInicio"
  )
);
const FiduciariaAtlantidaNegociosLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaNegocios/FiduciariaAtlantidaNegocios"
  )
);
const FiduciariaAtlantidaFondosLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaFondos/FiduciariaAtlantidaFondos"
  )
);
const FiduciariaAtlantidaPublicacionesLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaPublicaciones/FiduciariaAtlantidaPublicaciones"
  )
);
const FiduciariaAtlantidaMarcoLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaMarco/FiduciariaAtlantidaMarco"
  )
);
const FiduciariaAtlantidaContactoLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/FiduciariaAtlantida/FiduciariaAtlantidaContacto/FiduciariaAtlantidaContacto"
  )
);

const router = createBrowserRouter([
  // --> User Pages
  {
    element: <RootLazy />,
    children: [
      {
        index: true,
        element: <InicioLazy />,
      },

      {
        element: <CorreoEnviadoExitosamenteLazy />,
        path: `/correo-enviado-exitosamente`,
      },

      {
        element: <QuienesSomosLazy />,
        path: `/quienes-somos`,
      },

      {
        element: <GobiernoCorporativoLazy />,
        path: "/gobierno-corporativo",
      },

      {
        element: <PresenciaRegionalLazy />,
        path: `/presencia-regional`,
      },

      {
        path: `/empresas`,
        element: <EmpresasLazy />,
      },

      // --> Pages from Empresas
      {
        element: <InversionesFinancierasAtlantidaLazy />,
        path: "/empresas/inversiones-financieras-atlantida",
      },

      {
        element: <BancoDMiroLazy />,
        path: "/empresas/banco-d-miro",
      },

      {
        element: <FiduciariaAtlantidaLazy />,
        path: "/empresas/fiduciaria-atlantida",
      },

      {
        element: <AtlantidaCasaValoresLazy />,
        path: "/empresas/atlantida-casa-valores",
      },

      {
        element: <CrediPrimeLazy />,
        path: "/empresas/crediprime",
      },

      {
        element: <ReditumLazy />,
        path: "/empresas/reditum",
      },

      {
        element: <AtlantidaInsuranceLazy />,
        path: "/empresas/atlantida-insurance",
      },

      {
        element: <CapitalPrimeLazy />,
        path: "/empresas/capitalprime",
      },

      // --> Global Pages
      {
        element: <ReconocimientosLazy />,
        path: "/reconocimientos",
      },

      {
        element: <ContactanosLazy />,
        path: "/contactanos",
      },
    ],
  },

  {
    element: <LayoutEmpresasLazy />,
    children: [
      // --> Reditum Pages
      {
        path: "/reditum-inicio",
        element: <ReditumInicioLazy />,
        index: true,
      },

      {
        path: "/reditum-contacto",
        element: <ReditumContactoLazy />,
      },

      // --> Atlantida Advisors Pages
      {
        path: "/advisors-inicio",
        element: <AtlantidaAdvisorsInicioLazy />,
      },

      {
        path: "/advisors-asesoria-empresas",
        element: <AtlantidaAdvisorsAsesoriaEmpresasLazy />,
      },

      {
        path: "/advisors-asesoria-inversionistas",
        element: <AtlantidaAdvisorsAsesoriaInversionistasLazy />,
      },

      {
        path: "/advisors-publicaciones",
        element: <AtlantidaAdvisorsAsesoriaPublicacionesLazy />,
      },

      {
        path: "/advisors-contacto",
        element: <AtlantidaAdvisorsContactoLazy />,
      },

      // --> Atlantida Casa de Valores
      {
        path: "/casa-valores-inicio",
        element: <AtlantidaCasaValoresInicioLazy />,
      },

      {
        path: "/casa-valores-administracion-portafolios",
        element: <AtlantidaCasaValoresServiciosLazy />,
      },

      {
        path: "/casa-valores-financiamiento",
        element: <AtlantidaCasaValoresFinanciamientoLazy />,
      },

      {
        path: "/casa-valores-bursatiles",
        element: <AtlantidaCasaValoresBursatilesLazy />,
      },

      {
        path: "/casa-valores-transparencia",
        element: <AtlantidaCasaValoresIntermediacionLazy />,
      },

      {
        path: "/casa-valores-publicaciones",
        element: <AtlantidaCasaValoresPublicacionesLazy />,
      },

      {
        path: "/casa-valores-contacto",
        element: <AtlantidaCasaValoresContactoLazy />,
      },

      // --> Fiduciaria Atlantida
      {
        path: "/fiduciaria-inicio",
        element: <FiduciariaAtlantidaInicioLazy />,
      },

      {
        path: "/fiduciaria-negocios",
        element: <FiduciariaAtlantidaNegociosLazy />,
      },

      {
        path: "/fiduciaria-fondos",
        element: <FiduciariaAtlantidaFondosLazy />,
      },

      // {
      //   path: "/fiduciaria-fondos/fondofit",
      //   element: <FiduciariaAtlantidaFondoFitLazy />,
      // },

      // {
      //   path: "/fiduciaria-fondos/fondoelite",
      //   element: <FiduciariaAtlantidaFondoEliteLazy />,
      // },

      {
        path: "/fiduciaria-transparencia",
        element: <FiduciariaAtlantidaPublicacionesLazy />,
      },

      {
        path: "/fiduciaria-marco",
        element: <FiduciariaAtlantidaMarcoLazy />,
      },

      {
        path: "/fiduciaria-contacto",
        element: <FiduciariaAtlantidaContactoLazy />,
      },
    ],
  },

  // --> Login to enter admin panel
  {
    element: <PublicRoutes />,
    children: [
      {
        element: <AdminLazy />,
        path: "/admin",
      },
    ],
  },

  {
    // --> Dashboard Panel
    path: "/admin/dashboard/",
    element: <RootDashboard />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            element: <HomeDashboard />,
            index: true,
          },

          {
            element: <ManageFiles />,
            path: "gestionar-archivos",
          },

          {
            element: <ManageUsers />,
            path: "gestionar-usuarios",
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Suspense fallback={<Spinner />}>
          <ToastContainer
            className={"z-[999999999]"}
            pauseOnFocusLoss={false}
            position="bottom-center"
            hideProgressBar={true}
            autoClose={2000}
            theme="colored"
            draggable
            stacked
          />
          <RouterProvider router={router} />
        </Suspense>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
