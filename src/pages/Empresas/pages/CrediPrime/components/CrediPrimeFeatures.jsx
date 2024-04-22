import manoDolarIcono from "../../../../../images/indicador10.png";
import carroIcono from "../../../../../images/indicador11.png";
import carroHombreIcono from "../../../../../images/indicador12.png";

const CrediPrimeFeatures = () => {
  return (
    <section className="container-page my-16">
      <div className="flex flex-wrap md:gap-36 gap-10 justify-center row-gap-5">
        <div className="text-center">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-20 object-contain mx-auto"
            src={manoDolarIcono}
            alt="Icono Mano Dolar"
          />
          <h4
            className="text-primary-color"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            + 5000 Autos
          </h4>
          <p className="text-secondary-color">Financiados</p>
        </div>

        <div className="text-center">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-20 object-contain mx-auto"
            src={carroIcono}
            alt="Icono de Carro"
          />
          <h4
            className="text-primary-color"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            +$ 80 Millones
          </h4>
          <p className="text-secondary-color">
            Otorgados en compra <span className="block">de cartera</span>
          </p>
        </div>

        <div className="text-center">
          <img
            loading="lazy"
            decoding="async"
            className="w-16 h-20 object-contain mx-auto"
            src={carroHombreIcono}
            alt="Icono de Hombre con Carro"
          />
          <h4
            className="text-primary-color"
            style={{ fontFamily: "Nunito Sans Black" }}
          >
            +$ 250 Consesionarios
          </h4>
          <p className="text-secondary-color">Trabajan con nosotros</p>
        </div>
      </div>
    </section>
  );
};

export default CrediPrimeFeatures;
