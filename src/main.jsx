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

const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
