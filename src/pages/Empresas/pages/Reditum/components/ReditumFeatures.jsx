import computadoraListoIcono from "../../../../../images/indicador17.png";
import tiempoIcono from "../../../../../images/indicador18.png";
import tiempoMetricasIcono from "../../../../../images/indicador19.png";
import lupaIcono from "../../../../../images/indicador20.png";

const ReditumFeatures = () => {
  return (
    <section className="container-page my-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8">
        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={computadoraListoIcono}
            alt="Computadora Listo Icono"
          />
          <h3  className="family-nunito-black text-lg">
            Acceso a <span className="block">Mercados</span>
          </h3>
          <div className="h-2 w-10 mx-auto bg-primary-color my-6"></div>
          <p>Acceso dinámico a información del mercado.</p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={tiempoIcono}
            alt="Tiempo Icono"
          />
          <h3  className="family-nunito-black text-lg">
            Información <span className="block">Actualizada</span>
            en Vivo
          </h3>
          <div className="h-2 w-10 mx-auto bg-primary-color my-6"></div>
          <p>
            La plataforma se actualiza automáticamente con la publicación de
            nueva información.
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={tiempoMetricasIcono}
            alt="Tiempo Metricas Icono"
          />
          <h3 className="family-nunito-black text-lg">
            Herramientas <span className="block">Dinámicas</span> para Análisis
          </h3>
          <div className="h-2 w-10 mx-auto bg-primary-color my-6"></div>
          <p>
            Rankings <span className="block">Gráficos Evolutivos</span> Curvas
            de rendimiento.
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={lupaIcono}
            alt="Lupa Icono"
          />
          <h3
            className="text-lg mt-7 family-nunito-black"
          >
            Servicio de
            <span className="block">Investigación</span>
          </h3>
          <div className="h-2 w-10 mx-auto bg-primary-color my-6"></div>
          <p>Cualquier información del mercado en formato de base de datos.</p>
        </article>
      </div>
    </section>
  );
};

export default ReditumFeatures;
