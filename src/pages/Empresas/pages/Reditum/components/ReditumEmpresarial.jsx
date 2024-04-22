import carouselEmpresarialReditum1 from "../../../../../images/carouselempresarialReditum1.png";
import carouselEmpresarialReditum2 from "../../../../../images/carouselempresarial1.png";
import carouselEmpresarialReditum3 from "../../../../../images/carouselempresarialReditum3.png";
import carouselEmpresarialReditum4 from "../../../../../images/carouselempresarial3.png";

const ReditumEmpresarial = () => {
  return (
    <section className="bg-primary-color">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6 container-page py-10">
        <div className="border border-white w-full rounded-3xl px-3 py-4 col-span-1">
          <div className="flex sm:justify-start justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              src={carouselEmpresarialReditum1}
              className="w-20 h-12 object-contain"
            />

            <h3 className="text-white leading-4">
              Sistema <span className="block">Financiero</span>
            </h3>
          </div>
        </div>

        <div className="border border-white w-full rounded-3xl px-3 py-4 col-span-1">
          <div className="flex sm:justify-start justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              src={carouselEmpresarialReditum2}
              className="w-20 h-12 object-contain"
            />

            <h3 className="text-white leading-4">
              Mercado de <span className="block">Valores</span>
            </h3>
          </div>
        </div>

        <div className="border border-white w-full rounded-3xl px-3 py-4 col-span-1">
          <div className="flex sm:justify-start justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              src={carouselEmpresarialReditum3}
              className="w-20 h-12 object-contain"
            />

            <h3 className="text-white leading-4">{`Seguros`}</h3>
          </div>
        </div>

        <div className="border border-white w-full rounded-3xl px-3 py-4 col-span-1">
          <div className="flex sm:justify-start justify-center items-center">
            <img
              loading="lazy"
              decoding="async"
              src={carouselEmpresarialReditum4}
              className="w-20 h-12 object-contain"
            />

            <h3 className="text-white leading-4">
              Economía <span className="block">Local</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReditumEmpresarial;
