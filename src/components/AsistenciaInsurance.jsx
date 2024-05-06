// import corazonIcono from "../images/corazon-icono.png";

const AsistenciaInsurance = () => {
  return (
    <section className="container-page my-4 py-6 border-y border-y-black">
      <div className="flex flex-col sm:flex-row sm:text-start text-center items-center gap-8">
        <img
          className="w-32 h-32 object-cover rounded-full"
          src={"https://dummyimage.com/600x400/000/fff"}
        />

        <div className="flex-[30%]">
          <h2 className="family-nunito-regular text-gray-600 text-2xl">
            Solicita Asistencia Personalizada
          </h2>
          <p>Atención 24 horas y 7 días de la semana</p>
        </div>

        <button className="button-red-primary" type="button">
          Escríbenos
        </button>
      </div>
    </section>
  );
};

export default AsistenciaInsurance;
