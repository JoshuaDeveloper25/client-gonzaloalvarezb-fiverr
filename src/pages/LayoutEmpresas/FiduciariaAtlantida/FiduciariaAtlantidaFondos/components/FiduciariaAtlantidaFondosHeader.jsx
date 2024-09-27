import headerInversionFiduciaria from "../../../../../images/fiduciaria-fondos-header.png";
import tripleA from "../../../../../images/triple-a.png";

const FiduciariaAtlantidaFondosHeader = () => {
  return (
    <section className="bg-tertiary-color md:pt-16">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-3">
          <article className="flex-1">
            <div className="max-w-xl mx-auto">
              <img
                decoding="async"
                loading="lazy"
                className="w-full"
                src={headerInversionFiduciaria}
                alt={"Imagen del Header"}
              />
            </div>
          </article>

          <article className="flex-1 lg:py-0 py-4 self-center">
            <img
              decoding="async"
              loading="lazy"
              className="w-64 mx-auto"
              src={tripleA}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondosHeader;
