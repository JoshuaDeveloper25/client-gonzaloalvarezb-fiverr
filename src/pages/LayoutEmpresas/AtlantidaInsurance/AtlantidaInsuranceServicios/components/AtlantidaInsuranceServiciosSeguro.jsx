import manosIcono from "../../../../../images/manos-icono.png";

const AtlantidaInsuranceProductosSeguro = () => {
  return (
    <section className="container-page my-4 py-6">
      <div className="flex flex-col md:flex-row sm:text-start text-center items-center gap-8">
        <img
          decoding="async"
          loading="lazy"
          className="w-24 h-24 object-cover rounded-full"
          src={manosIcono}
        />

        <div className="flex-1">
          <h4 className="md:text-5xl text-4xl family-nunito-black text-gray-600">
            Seguro <span className="md:block inline">Corporativo</span>
          </h4>
        </div>

        <div className="flex-[20%]">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a magna ante. Donec porta feugiat est non faucibus. Sed ullamcorper
            scelerisque arcu. Fusce urna arcu, fringilla ut ante sit amet,
            condimentum venenatis massa. Morbi aliquet est at porttitor posuere.
            Donec in ligula quis metus consequat tempus luctus vitae urna.
            Vestibulum semper volutpat dolor et fringilla. Donec in consectetur
            ex, ut eleifend nisi. Sed mattis nibh nec tellus ornare, ac
            tristique turpis tempor
          </p>
        </div>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceProductosSeguro;
