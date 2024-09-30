import mujerAsistencia from "../images/asistencia-mujer.jpg";

const AsistenciaInsurance = ({ addClassName, title, titleSpan }) => {
  return (
    <section className={`${addClassName}  py-8 border-y border-y-black`}>
      <div className="container-page flex flex-col sm:flex-row sm:text-start text-center items-center gap-8">
        <img
          decoding="async"
          loading="lazy"
          className="w-32 h-32 object-cover rounded-full object-view-box11"
          src={mujerAsistencia}
        />

        <div className="flex-[30%]">
          <h2 className="family-nunito-regular text-gray-500 text-2xl">
            {title} <span className="block">{titleSpan}</span>
          </h2>
          <p className="text-gray-500">
            Atención 24 horas y 7 días de la semana
          </p>
        </div>

        <button className="btn-normal button-red-primary" type="button">
          Escríbenos
        </button>
      </div>
    </section>
  );
};

export default AsistenciaInsurance;
