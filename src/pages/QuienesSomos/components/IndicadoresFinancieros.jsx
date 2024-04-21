import indicador1 from "../../../images/indicador1.png";
import indicador2 from "../../../images/indicador2.png";
import indicador3 from "../../../images/indicador3.png";
import indicador4 from "../../../images/indicador4.png";
import indicador5 from "../../../images/indicador5.png";
import indicador6 from "../../../images/indicador6.png";
import indicador7 from "../../../images/indicador7.png";

const IndicadoresFinancieros = () => {
  return (
    <section className="container-page mb-8">
      <div className="text-center">
        <h2
          className="text-primary-color text-2xl"
          style={{ fontFamily: "Nunito Sans Black" }}
        >
          Principales Indicadores Financieros
        </h2>
        <h3 className="text-secondary-color text-xl">
          Datos Consolidados al 30 de Septiembre de 2023
        </h3>
      </div>

      <article className="grid sm:grid-cols-4 grid-cols-2 gap-10 mt-10">
        <div className="text-center">
          <img
            decoding="async"
            loading="lazy"
            className="mx-auto w-20 h-14 object-contain"
            src={indicador1}
            alt="Indicador 1"
          />
          <h3 className="text-secondary-color my-2">Activos</h3>
          <h3
            className="text-secondary-color leading-5"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            US $ 8.1 <span className="block">Billones</span>
          </h3>
        </div>

        <div className="text-center">
          <img
            decoding="async"
            loading="lazy"
            className="mx-auto w-20 h-14 object-contain"
            src={indicador2}
            alt="Indicador 2"
          />
          <h3 className="text-secondary-color my-2">Capital</h3>
          <h3
            className="text-secondary-color leading-5"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            US $ 664.7 <span className="block">Millones</span>
          </h3>
        </div>

        <div className="text-center">
          <img
            decoding="async"
            loading="lazy"
            className="mx-auto w-20 h-14 object-contain"
            src={indicador3}
            alt="Indicador 3"
          />
          <h3 className="text-secondary-color my-2">Utilidades</h3>
          <h3
            className="text-secondary-color leading-5"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            US $ 40.8 <span className="block">Millones</span>
          </h3>
        </div>

        <div className="text-center">
          <img
            decoding="async"
            loading="lazy"
            className="mx-auto w-20 h-14 object-contain"
            src={indicador4}
            alt="Indicador 4"
          />
          <h3 className="text-secondary-color my-2">Activos</h3>
          <h3
            className="text-secondary-color leading-5"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            US $ 19.5 <span className="block">Billones</span>
          </h3>
        </div>

        <div className="text-center">
          <img
            decoding="async"
            loading="lazy"
            className="mx-auto w-20 h-14 object-contain"
            src={indicador5}
            alt="Indicador 5"
          />
          <h3 className="text-secondary-color my-2">Agencias</h3>
          <h3
            className="text-secondary-color leading-5"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            +268
          </h3>
        </div>

        <div className="text-center">
          <img
            decoding="async"
            loading="lazy"
            className="mx-auto w-20 h-14 object-contain"
            src={indicador6}
            alt="Indicador 6"
          />
          <h3 className="text-secondary-color my-2">Clientes</h3>
          <h3
            className="text-secondary-color leading-5"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            +4.2 <span className="block">Millones</span>
          </h3>
        </div>

        <div className="text-center">
          <img
            decoding="async"
            loading="lazy"
            className="mx-auto w-20 h-14 object-contain"
            src={indicador7}
            alt="Indicador 7"
          />
          <h3 className="text-secondary-color my-2">Empleados</h3>
          <h3
            className="text-secondary-color leading-5"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            5.974
          </h3>
        </div>
      </article>
    </section>
  );
};

export default IndicadoresFinancieros;
