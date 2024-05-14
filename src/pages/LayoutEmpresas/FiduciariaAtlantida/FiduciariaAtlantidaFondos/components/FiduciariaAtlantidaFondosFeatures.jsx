import fondoFit from "../../../../../images/fondoFit.png";
import fondoElite from "../../../../../images/fondoElite.png";
import { Link } from "react-router-dom";

const FiduciariaAtlantidaFondosFeatures = () => {
  return (
    <section className="container-page py-16">
      <div className="grid sm:grid-cols-2 gap-3 sm:space-y-0 space-y-10">
        <article className="col-span-1">
          <div>
            <img
              decoding="async"
              loading="lazy"
              className="sm:flex hidden w-92 mx-auto h-80 object-cover"
              src={fondoFit}
            />
            <img
              decoding="async"
              loading="lazy"
              className="flex sm:hidden w-60 mx-auto"
              src={fondoFit}
            />
          </div>
          <div className="text-center mt-3">
            <Link to={"/fiduciaria-fondos/fondofit"}>
              <button className="button-red-primary">Conocer más</button>
            </Link>
          </div>
        </article>

        <article className="col-span-1">
          <div>
            <img
              decoding="async"
              loading="lazy"
              className="sm:flex hidden w-92 mx-auto h-80 object-cover"
              src={fondoElite}
            />
            <img
              decoding="async"
              loading="lazy"
              className="flex sm:hidden w-60 mx-auto"
              src={fondoElite}
            />
          </div>
          <div className="text-center mt-3">
            <Link to={"/fiduciaria-fondos/fondoelite"}>
              <button className="button-red-primary">Conocer más</button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondosFeatures;
