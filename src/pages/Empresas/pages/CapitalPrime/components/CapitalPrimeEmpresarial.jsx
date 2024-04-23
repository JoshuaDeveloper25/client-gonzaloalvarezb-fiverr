import carouselEmpresarialCapitalPrime1 from "../../../../../images/carouselEmpresarialCapitalPrime1.png";
import carouselEmpresarialCapitalPrime2 from "../../../../../images/carouselEmpresarialCapitalPrime2.png";
import carouselEmpresarialCapitalPrime3 from "../../../../../images/carouselEmpresarialCapitalPrime3.png";
import carouselEmpresarialCapitalPrime4 from "../../../../../images/carouselEmpresarialCapitalPrime3.png";

const CapitalPrimeEmpresarial = () => {
  return (
    <section className="bg-primary-color">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6 container-page py-10">
        <div className="border border-white w-full rounded-3xl px-3 py-4 col-span-1">
          <div className="flex sm:justify-start justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              src={carouselEmpresarialCapitalPrime1}
              className="w-20 h-12 object-contain"
            />

            <h3 className=" text-white leading-4">Cobranzas</h3>
          </div>
        </div>

        <div className="border border-white w-full rounded-3xl px-3 py-4 col-span-1">
          <div className="flex sm:justify-start justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              src={carouselEmpresarialCapitalPrime2}
              className="w-20 h-12 object-contain"
            />

            <h3 className="text-white leading-4">
              Inbound Call <span className="block">Center</span>
            </h3>
          </div>
        </div>

        <div className="border border-white w-full rounded-3xl px-3 py-4 col-span-1">
          <div className="flex sm:justify-start justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              src={carouselEmpresarialCapitalPrime3}
              className="w-20 h-12 object-contain"
            />

            <h3 className="text-white leading-4">
              Ventas <span className="block">Omnicanal</span>
            </h3>
          </div>
        </div>

        <div className="border border-white w-full rounded-3xl px-3 py-4 col-span-1">
          <div className="flex sm:justify-start justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              src={carouselEmpresarialCapitalPrime4}
              className="w-20 h-12 object-contain"
            />

            <h3 className="text-white leading-4">
              FactorPrime - <span className="block">Factoring</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapitalPrimeEmpresarial;
