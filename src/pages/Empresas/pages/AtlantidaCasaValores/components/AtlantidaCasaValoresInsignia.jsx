import insignia1 from "../../../../../images/insignia1.png";
import insignia2 from "../../../../../images/insignia2.png";

const AtlantidaCasaValoresInsignia = () => {
  return (
    <section className="container-page py-14">
      <div className="flex items-center justify-evenly gap-5 flex-col md:flex-row">
        <div>
          <img
            decoding="async"
            loading="lazy"
            className="w-72"
            src={insignia1}
            alt="Insignia"
          />
        </div>

        <div>
          <img
            decoding="async"
            loading="lazy"
            className="w-72"
            src={insignia2}
            alt="Insignia"
          />
        </div>
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresInsignia;
