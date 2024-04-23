import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";

import FooterEmpresas from "../components/FooterEmpresas";
import NavbarEmpresas from "../components/NavbarEmpresas";

const LayoutEmpresas = () => {
  return (
    <div>
      <NavbarEmpresas />

      <main>
        <Outlet />
      </main>

      <FooterEmpresas />
      <ScrollRestoration />
    </div>
  );
};

export default LayoutEmpresas;
