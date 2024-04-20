// Default imports from react and more
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styles
import "./index.css";

// Pages
import Root from "./pages/Root";
import Inicio from "./pages/Inicio/Inicio";
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import PresenciaRegional from "./pages/PresenciaRegional/PresenciaRegional";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
