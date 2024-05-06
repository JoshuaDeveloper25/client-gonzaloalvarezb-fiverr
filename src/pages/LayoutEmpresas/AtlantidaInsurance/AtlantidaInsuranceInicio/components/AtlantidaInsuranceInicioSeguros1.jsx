import { Link } from "react-router-dom";

const AtlantidaInsuranceInicioSeguros1 = () => {
  return (
    <section className="container-page">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-10 gap-2">
        <article className="py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl py-1">
            Seguro <span className="block">de Vida</span>
          </h3>
          <div className="bg-primary-color h-1 w-12"></div>
          <p className="text-secondary-color py-3">
            Asegurar tu vida es proteger a tu familia y tu patrimonio. Vive la
            tranquilidad de saber que estarán seguros en el futuro.
          </p>
          <Link className="text-primary-color">{`Conoce más >`}</Link>
        </article>

        <article className="py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl py-1">
            Seguro <span className="block">de Salud</span>
          </h3>
          <div className="bg-primary-color h-1 w-12"></div>

          <p className="text-secondary-color py-3">
            Conoce nuestros planes de salud individuales y familiares, hechos a
            la medida con coberturas nacionales e internacionales.
          </p>
          <Link className="text-primary-color">{`Conoce más >`}</Link>
        </article>

        <article className="py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl py-1 leading-6 ">
            Seguro <span className="block">de Viaje</span>
          </h3>
          <div className="bg-primary-color h-1 w-12"></div>

          <p className="text-secondary-color py-3">
            Viaja tranquilo sabiendo que estamos contigo en cada paso, desde
            emergencias médicas hasta pérdida de equipaje. Asistencia
            internacional disponible las 24 horas.
          </p>
          <Link className="text-primary-color">{`Conoce más >`}</Link>
        </article>

        <article className="py-4 rounded-2xl text-secondary-color/95 col-span-1">
          <h3 className="family-nunito-black text-xl py-1">
            Seguro <span className="block"> de Vehículos</span>
          </h3>
          <div className="bg-primary-color h-1 w-12"></div>

          <p className="text-secondary-color py-3">
            Confía en nosotros para asegurar cada kilómetro de tu viaje. Desde
            cobertura todo riesgo hasta auto asistencia, estamos aquí para
            protegerte en cada etapa del camino.
          </p>
          <Link className="text-primary-color">{`Conoce más >`}</Link>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioSeguros1;
