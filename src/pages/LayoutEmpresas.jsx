import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";

const LayoutEmpresas = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>

      <ScrollRestoration />
    </div>
  );
};

export default LayoutEmpresas;
