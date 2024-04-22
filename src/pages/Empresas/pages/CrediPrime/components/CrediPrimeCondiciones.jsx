const CrediPrimeCondiciones = () => {
  return (
    <section className="container-page md:my-14 my-5">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <article className="flex-1 md:mb-0 mb-4">
          <h2 className="md:text-4xl text-3xl max-w-sm md:text-start text-center text-secondary-color">
            <span
              className="lg:block inline"
              style={{ fontFamily: "Nunito Sans Black" }}
            >
              Las mejores condiciones
            </span>{" "}
            en un solo lugar
          </h2>
        </article>

        <article className="flex-1 space-y-5 md:px-6 px-0">
          <p className="text-secondary-color text-justify">
            CrediPrime es una empresa especializada en la prestación de
            servicios de asesoría, administración y generación y venta de
            cartera automotriz.
          </p>
        </article>
      </div>
    </section>
  );
};

export default CrediPrimeCondiciones;
