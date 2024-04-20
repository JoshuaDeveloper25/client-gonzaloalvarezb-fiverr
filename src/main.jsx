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
import EmpresasRoot from "./pages/Empresas/Empresas";
import InversionesFinancierasAtlantida from "./pages/Empresas/pages/InversionesFinancierasAtlantida/InversionesFinancierasAtlantida";

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
        element: <EmpresasRoot />,
      },

      // --> Pages from Empresas
      {
        element: <InversionesFinancierasAtlantida />,
        path: "/empresas/inversiones-financieras-atlantida",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
