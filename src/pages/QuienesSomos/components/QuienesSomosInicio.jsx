import hombreHeader from "../../../images/quienes-somos-header.png";
import { Link } from "react-router-dom";

const QuienesSomosInicio = () => {
  return (
    <section className="bg-tertiary-color py-3">
      <div className="container-page flex flex-col lg:flex-row justify-between items-center gap-3">
        <article className="text-secondary-color lg:py-0 py-8">
          <h1 className="max-w-sm text-4xl leading-10 md:mb-8 mb-0">
            Somos parte de un sólido grupo financiero{" "}
            <span className="family-nunito-black">
              que cuenta con el respaldo de más de 111 años de trayectoria.
            </span>
          </h1>

          {/* <Link
              className="button-red-primary px-[32px]"
              to={`https://www.invatlan.hn`} target="_blank"
            >
              Conoce más sobre nuestro Grupo
            </Link> */}
        </article>

        <article className="max-w-2xl">
          <img
            decoding="async"
            loading="lazy"
            className="w-full"
            src={hombreHeader}
            alt={"Imagen del Header"}
          />
        </article>
      </div>
    </section>
  );
};

export default QuienesSomosInicio;
