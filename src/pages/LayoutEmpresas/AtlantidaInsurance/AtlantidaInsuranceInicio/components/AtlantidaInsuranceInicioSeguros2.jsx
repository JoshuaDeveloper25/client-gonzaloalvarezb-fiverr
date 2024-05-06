import { Link } from "react-router-dom";

const AtlantidaInsuranceInicioSeguros2 = () => {
  return (
    <section className="container-page">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-2">
        <article className="py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl py-1">
            Seguro <span className="block">Pymes</span>
          </h3>
          <div className="bg-primary-color h-1 w-12"></div>
          <p className="text-secondary-color py-3">
            Protege tu inversión y asegura tus sueños. Evita que un evento
            inesperado los ponga en peligro. Cubre los riesgos que podrían
            afectar el funcionamiento de tu negocio en cualquier momento.
          </p>
          <Link className="text-primary-color">{`Conoce más >`}</Link>
        </article>

        <article className="py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl py-1">
            Seguro <span className="block">Corporativo</span>
          </h3>
          <div className="bg-primary-color h-1 w-12"></div>

          <p className="text-secondary-color py-3">
            Estudiamos los riesgos y te brindamos las mejores opciones de
            seguros para tu empresa. Protegemos tu negocio y a tus empleados.
          </p>
          <Link className="text-primary-color">{`Conoce más >`}</Link>
        </article>

        <article className="py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl py-1 leading-6 ">
            Seguro <span className="block">de Fianzas</span>
          </h3>
          <div className="bg-primary-color h-1 w-12"></div>

          <p className="text-secondary-color py-3">
            Asegura tu proyecto y protege tu inversión, garantizando la
            ejecución óptima del contrato y certificando la confiabilidad de tu
            proyecto.
          </p>
          <Link className="text-primary-color">{`Conoce más >`}</Link>
        </article>

        <article className="py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl py-1">
            Seguro de Salud <span className="block">  Corporativo</span>
          </h3>
          <div className="bg-primary-color h-1 w-12"></div>

          <p className="text-secondary-color py-3">
            Atención médica prepagada para empresas, priorizando la salud y
            bienestar de tus colaboradores con beneficios de primer nivel.
          </p>
          <Link className="text-primary-color">{`Conoce más >`}</Link>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioSeguros2;
