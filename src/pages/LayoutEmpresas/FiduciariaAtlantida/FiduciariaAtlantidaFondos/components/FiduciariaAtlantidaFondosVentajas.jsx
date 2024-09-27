import ventaja1 from "../../../../../images/ventajaFiduciaria1.png";
import ventaja2 from "../../../../../images/ventajaFiduciaria2.png";
import ventaja3 from "../../../../../images/ventajaFiduciaria3.png";
import ventaja4 from "../../../../../images/ventajaFiduciaria4.png";
import ventaja5 from "../../../../../images/ventajaFiduciaria5.png";
import ventaja6 from "../../../../../images/ventajaFiduciaria6.png";

const FiduciariaAtlantidaFondosVentajas = () => {
  return (
    <section className="container-page my-12">
      <h2 className="text-center font-bold text-3xl mb-16">
        <span className="text-primary-color">Nuestras</span>{" "}
        <span className="text-secondary-color">Ventajas</span>
      </h2>

      <div className="flex flex-wrap gap-9 justify-center">
        <article className="max-w-sm text-center mx-2">
          <div className="p-8 min-[1318px]:border-r border-r-0 border-secondary-color">
            <img
              decoding="async"
              loading="lazy"
              className="w-44 mx-auto"
              src={ventaja1}
              alt={"Icono"}
            />
            <h3 className="text-secondary-color my-2 font-bold text-lg">
              Flexibilidad
            </h3>
            <p>
              El fondo de inversión ofrece liquidez en el momento requerido para
              asegurar que cuentes con tu dinero cuando lo necesites.
            </p>
          </div>
          <div className="bg-secondary-color h-[1px] w-56 mx-auto mt-8"></div>
        </article>

        <article className="max-w-sm text-center mx-2">
          <div className="p-8 min-[1318px]:border-r border-r-0 border-secondary-color">
            <img
              decoding="async"
              loading="lazy"
              className="w-44 mx-auto"
              src={ventaja2}
              alt={"Icono"}
            />
            <h3 className="text-secondary-color my-2 font-bold text-lg">
              Reinversión
            </h3>
            <p>
              Diariamente se capitalizan tus rendimientos para tener un
              crecimiento constante durante tu permanencia en el fondo.
            </p>
          </div>
          <div className="bg-secondary-color h-[1px] w-56 mx-auto mt-8"></div>
        </article>

        <article className="max-w-sm text-center mx-2">
          <div className="p-8">
            <img
              decoding="async"
              loading="lazy"
              className="w-44 mx-auto"
              src={ventaja3}
              alt={"Icono"}
            />
            <h3 className="text-secondary-color my-2 font-bold text-lg">
              Diversificación
            </h3>
            <p>
              Reducción de riesgo al invertir el portafolio en diferentes
              sectores económicos para asegurar tu retorno de capital.
            </p>
          </div>

          <div className="bg-secondary-color h-[1px] w-56 mx-auto mt-8"></div>
        </article>

        <article className="max-w-sm text-center mx-2 ">
          <div className="p-8 min-[1318px]:border-r border-r-0 border-secondary-color">
            <img
              decoding="async"
              loading="lazy"
              className="w-44 mx-auto"
              src={ventaja4}
              alt={"Icono"}
            />
            <h3 className="text-secondary-color my-2 font-bold text-lg">
              Regulación y <span className="block">supervisión</span>
            </h3>
            <p>
              Regulado y controloda por la Superintendencia de Compañías,
              Seguros y Valores, para garantizar tu seguridad y confianza.
            </p>
          </div>
          <div className="min-[1318px]:hidden block bg-secondary-color h-[1px] w-56 mx-auto mt-8"></div>
        </article>

        <article className="max-w-sm text-center mx-2 ">
          <div className="p-8 min-[1318px]:border-r border-r-0 border-secondary-color">
            <img
              decoding="async"
              loading="lazy"
              className="w-44 mx-auto"
              src={ventaja5}
              alt={"Icono"}
            />
            <h3 className="text-secondary-color my-2 font-bold text-lg">
              Administración <span className="block">profesional</span>
            </h3>
            <p>
              Un comité optimiza el manejo del portafolio de inversiones, para
              aprovechar las oportunidades del mercado y optimizar tu tiempo.
            </p>
          </div>
          <div className="min-[1318px]:hidden block bg-secondary-color h-[1px] w-56 mx-auto mt-8"></div>
        </article>

        <article className="max-w-sm text-center mx-2">
          <div className="p-8">
            <img
              decoding="async"
              loading="lazy"
              className="w-44 mx-auto"
              src={ventaja6}
              alt={"Icono"}
            />
            <h3 className="text-secondary-color my-2 font-bold text-lg">
              Rendimiento
            </h3>
            <p>
              Una de las mejores tasas del mercado, para maximizar el
              crecimiento de tu dinero.
            </p>
          </div>
          <div className="min-[1318px]:hidden block bg-secondary-color h-[1px] w-56 mx-auto mt-8"></div>
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondosVentajas;
