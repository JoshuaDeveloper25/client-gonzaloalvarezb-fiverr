import { Link } from "react-router-dom";

const CorreoEnviadoExitosamente = () => {
  return (
    <section className="text-center">
      <div className="container-page px-3 py-16">
        <h2 className="text-primary-color text-4xl font-medium">
          ¡Correo Enviado Exitosamente!
        </h2>
        <p className="text-secondary-color text-xl font-medium mt-3">
          Si deseas cierra esta página o vuelve a{" "}
          <Link to={"/"} className="underline text-primary-color">
            Inicio
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CorreoEnviadoExitosamente;
