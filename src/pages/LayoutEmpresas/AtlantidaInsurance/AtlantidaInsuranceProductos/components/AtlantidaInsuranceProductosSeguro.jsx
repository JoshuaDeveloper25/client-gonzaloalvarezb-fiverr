import corazonIcono from "../../../../../images/corazon-icono.png";

const AtlantidaInsuranceProductosSeguro = () => {
  return (
    <section className="container-page my-10">
      <div className="grid grid-cols-2 md:grid-cols-8 place-items-center gap-4">
        <article className="md:col-span-1 col-span-full">
          <img className="w-24" src={corazonIcono} />
        </article>

        <article className="md:col-span-2 col-span-full">
          <h2 className="family-nunito-black text-gray-600 text-5xl">
            Seguro <span className="block">de Vida</span>
          </h2>
        </article>

        <article className="md:col-span-5 col-span-full">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a magna ante. Donec porta feugiat est non faucibus. Sed ullamcorper
            scelerisque arcu. Fusce urna arcu, fringilla ut ante sit amet,
            condimentum venenatis massa. Morbi aliquet est at porttitor posuere.
            Donec in ligula quis metus consequat tempus luctus vitae urna.
            Vestibulum semper volutpat dolor et fringilla. Donec in consectetur
            ex, ut eleifend nisi. Sed mattis nibh nec tellus ornare, ac
            tristique turpis tempor.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceProductosSeguro;
