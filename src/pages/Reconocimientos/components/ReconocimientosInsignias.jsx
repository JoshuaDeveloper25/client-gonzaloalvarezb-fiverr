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
            src={reconocimiento1}
          />

          <p>
            Mejor Banco en América{" "}
            <span className="block">Latina Honduras 2020</span>
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento2}
          />

          <p>
            Reconocimiento por Revista{" "}
            <span className="block">Summa de Mejor</span>{" "}
            <span className="block">Reputación</span> Corporativa y Ética 2021
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento3}
          />

          <p>
            Empresa Más Atractiva para{" "}
            <span className="block">Trabajar - Honduras 2019,</span> 2020, 2021,
            2022 y 2023
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento4}
          />

          <p>
            Reconocimiento como{" "}
            <span className="block">Empresa Socialmente</span>{" "}
            <span className="block">Responsable 2018, 2019,</span> 2020, 2021 y
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento5}
          />

          <p>
            Premio Platino{" "}
            <span className="block">“Innovadores Financieros”</span> – Fintech
            Americas 2023
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento6}
          />

          <p>
            Commerzbank <span className="block">Premio STP Excelente</span>{" "}
            Calidad 2022
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento7}
          />

          <p>
            Acuerdo de Energía
            <span className="block">Renovable del año 2022</span>
          </p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento8}
          />

          <p>Top of Mind 2022</p>
        </article>

        <article className="bg-tertiary-color py-10 px-8 rounded-2xl text-secondary-color text-center col-span-1">
          <img
            loading="lazy"
            decoding="async"
            className="w-20 h-20 object-contain mx-auto"
            src={reconocimiento9}
          />

          <p>
            Financiador Pyme del Año <span className="block">2022 - Plata</span>
          </p>
        </article>

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
