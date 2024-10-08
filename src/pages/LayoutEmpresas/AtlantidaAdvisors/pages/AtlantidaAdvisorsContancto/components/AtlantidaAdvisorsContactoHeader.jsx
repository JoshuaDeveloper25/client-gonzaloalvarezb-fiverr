import { useState } from "react";
import Formulario from "../../../../../../components/Formulario";

const AtlantidaAdvisorsContactoHeader = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="container-page my-6">
      <Formulario setIsLoading={setIsLoading} className="space-y-5">
        <div className="flex flex-col md:flex-row justify-between md:items-center items-start md:gap-6 gap-0 md:max-w-none max-w-lg mx-auto">
          <article className="flex-[45%] lg:w-full w-auto text-secondary-color lg:py-8 py-3">
            <h1 className="text-secondary-color text-[2.6rem] leading-[1.3] font-bold family-nunito-semibold">
              Estamos a un mensaje de{" "}
              <span className="md:block inline">
                distancia para asesorarlo en su
              </span>{" "}
              próximo proyecto
            </h1>
            <div className="h-1 w-full bg-primary-color my-5"></div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 mb-5">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Nombre"
                  type="text"
                  name="user_name"
                />
              </div>

              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Apellido"
                  type="text"
                  name="sur_name"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Teléfono"
                  type="text"
                  name="phone"
                />
              </div>

              <div className="flex-1">
                <input
                  className="outline-none py-1 px-3 rounded-md w-full bg-[#EFEFEF]"
                  placeholder="Email"
                  type="email"
                  name="email_id"
                />
              </div>
            </div>

            <textarea
              placeholder="Mensaje"
              className="h-36 outline-none py-1 mt-5 px-3 rounded-md w-full bg-[#EFEFEF]"
              name="message"
            ></textarea>
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

        <div className="text-center mb-14">
          <button
            disabled={isLoading}
            type="submit"
            className={`${
              isLoading
                ? "btn-normal btn-disabled"
                : "btn-normal button-red-primary-outline"
            }`}
          >
            {isLoading ? "Cargando..." : "Conoce más"}
          </button>
        </div>
      </Formulario>
    </section>
  );
};

export default AtlantidaAdvisorsContactoHeader;
