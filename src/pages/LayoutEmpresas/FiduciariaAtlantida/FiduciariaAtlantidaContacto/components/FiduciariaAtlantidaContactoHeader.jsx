const FiduciariaAtlantidaContactoHeader = () => {
  return (
    <section className="container-page my-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center items-start md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
        <article className="flex-[45%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
          <h1 className="text-secondary-color text-[1.8rem] md:mb-16 mb-3 leading-[1.3] font-bold family-nunito-semibold">
            Déjanos tus datos y un asesor se
            <span className="md:block inline">
              contactará contigo pronto
            </span>{" "}
          </h1>

          <form className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Nombre"
                  type="text"
                />
              </div>

              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Apellido"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Teléfono"
                  type="text"
                />
              </div>

              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Email"
                  type="email"
                />
              </div>
            </div>

            <textarea
              placeholder="Mensaje"
              className="h-36 outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
            ></textarea>
          </form>

          <div className="text-end mt-4">
            <button type="submit" className="button-red-primary">
              Enviar
            </button>
          </div>
        </article>

        <article className="flex-1  mt-5">
          <h3 className="text-secondary-color text-xl family-nunito-black">
            Nuestras oficinas
          </h3>

          <div>
            <h5 className="text-secondary-color font-bold mt-5 mb-2 family-nunito-regular">
              Quito
            </h5>
            <ul className="text-secondary-color">
              <li>La Floresta</li>
              <li> Andalucía 324 y Francisco Galavis</li>
              <li> Edificio Atlántida</li>
              <li> P.O.Box 170525</li>
              <li> +59326004674</li>
            </ul>
          </div>

          <div>
            <h5 className="text-secondary-color font-bold mt-5 mb-2 family-nunito-regular">
              Guayaquil
            </h5>
            <ul className="text-secondary-color">
              <li>Kennedy Norte, Av. Francisco de</li>
              <li>Orellana, Mz. 111 - Solar 1</li>
              <li> Edificio World Trade Center, Torre A,is</li>
              <li> Piso 10, Oficina 1002</li>
              <li> P.O.Box 090112</li>
              <li>+59346004674</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaContactoHeader;
