import cursorPointer from "../../../../../images/cursor-pointer.png";

const FiduciariaAtlantidaFondosSimular = () => {
  return (
    <section className="bg-tertiary-color container-page py-16 ">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-16 gap-8">
        <div>
          <h3 className="text-center text-lg font-semibold">
            Autorizados por la{" "}
            <span className="block">Superintendencia de Compañías,</span>{" "}
            Valores y Seguros.
          </h3>
        </div>

        <div className="relative">
          <button
            className="button-red-primary font-semibold rounded-md text-lg"
            type="button"
          >
            Simular ahora
          </button>

          <img
            className="absolute -right-14 top-2 h-14"
            src={cursorPointer}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaFondosSimular;
