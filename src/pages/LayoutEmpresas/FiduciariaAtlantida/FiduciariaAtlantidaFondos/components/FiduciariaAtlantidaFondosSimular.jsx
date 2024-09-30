import cursorPointer from "../../../../../images/cursor-pointer.png";
import { Link } from "react-router-dom";

const FiduciariaAtlantidaFondosSimular = () => {
  return (
    <section className="bg-tertiary-color container-page py-16 ">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-16 gap-8">
        <div>
          <h3 className="text-center text-lg font-semibold">
            Autorizados por la{" "}
            <span className="block">Superintendencia de Compañías,</span>{" "}
            Valores y Seguros.
          </h3>
        </div>

        <div className="relative">
          <Link
            to={
              "https://app.fondosatlantida.com:8444/apps/r/fondosatlantida/fondosweb/login?session=2432544443303"
            }
          >
            <button
              className="btn-normal button-red-primary font-semibold rounded-md text-lg"
              type="button"
            >
              Simular ahora
            </button>
          </Link>

          <img
            className="absolute -right-14 top-2 h-14"
            src={cursorPointer}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondosSimular;
