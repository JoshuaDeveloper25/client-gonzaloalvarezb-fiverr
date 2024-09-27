import reconocimiento1 from "../../../images/reconocimiento1.png";
import reconocimiento2 from "../../../images/reconocimiento2.png";
import reconocimiento3 from "../../../images/reconocimiento3.png";
import reconocimiento4 from "../../../images/reconocimiento4.png";
import reconocimiento5 from "../../../images/reconocimiento5.png";
import reconocimiento6 from "../../../images/reconocimiento6.png";
import reconocimiento7 from "../../../images/reconocimiento7.png";
import reconocimiento8 from "../../../images/reconocimiento8.png";
import reconocimiento9 from "../../../images/reconocimiento9.png";
import reconocimiento10 from "../../../images/reconocimiento10.png";
import reconocimiento11 from "../../../images/reconocimiento11.png";

const ReconocimientosInsignias = () => {
  return (
    <section className="container-page my-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-8">
        

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento10}
          />

          <p>
            Premio por valor anualizado{" "}
            <span className="block">negociado por la Bolsa de</span> Valores
            Quito 2022
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento11}
          />

          <p>
            Premio a la Casa de Valores
            <span className="block">del año en el 2018 y 2019</span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default ReconocimientosInsignias;
