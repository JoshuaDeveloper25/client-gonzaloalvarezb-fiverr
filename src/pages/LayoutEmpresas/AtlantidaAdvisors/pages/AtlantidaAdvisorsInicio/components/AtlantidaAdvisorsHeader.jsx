import { Link } from "react-router-dom";

const AtlantidaAdvisorsHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="pt-3">
        <Link className="text-primary-color font-bold" to={"/empresas"}>
          {"< Regresar al sitio Suratlántida"}
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between  items-center md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
        <article className="flex-[30%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color text-[2.6rem] leading-[1.3] font-bold family-nunito-semibold">
            Atlántida Advisors es una{" "}
            <span className="md:block inline">compañía especializada en</span>{" "}
            <span className="md:block inline">
              asesoría financiera y gestión{" "}
            </span>
            patrimonial
          </h1>
          <div className="h-1 w-full bg-primary-color my-5"></div>

          <p className="text-secondary-color mt-5">
            Atlántida Advisors es un aliado estratégico para las empresas y
            familias mediante la prestación de diversas alternativas de
            servicios de asesoría financiera, enfocada en potencializar la
            eficiencia, seguridad y rentabilidad del patrimonio de sus clientes.
            Atlántida Advisors suministra soluciones administrativas y
            financieras para todas las industrias con el objetivo de satisfacer
            los requerimientos y necesidades específicas de cada cliente.
          </p>
        </article>

        <article className="flex-1 text-center my-8">
          <h2 className="text-primary-color font-bold text-5xl mb-2 family-nunito-regular">
            + 700 <span className="block">Millones</span>
          </h2>
          <h3 className="text-secondary-color text-3xl">
            Asesorados en <span className="block">Financiamiento</span> Privado
          </h3>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaAdvisorsHeader;
