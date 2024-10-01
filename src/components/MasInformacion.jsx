import { useState } from "react";
import Formulario from "./Formulario";

const MasInformacion = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="bg-tertiary-color">
      <Formulario setIsLoading={setIsLoading}>
        <div className="container-page py-10">
          <div className="flex flex-col sm:flex-row gap-5">
            <article className="flex-1 text-center">
              <h2 className="text-gray-600 text-3xl">
                ¿Necesitas más información?
              </h2>
              <p className="text-gray-400">
                Déjanos tus datos y un asesor se{" "}
                <span className="md:block inline">
                  contactará contigo pronto
                </span>
              </p>
            </article>

            <article className="flex-1">
              <form className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <input
                    className="bg-gray-200 w-full rounded-full py-1 px-3 mb-4"
                    type="text"
                    placeholder="Nombre y Apellido"
                    name="user_name"
                  />
                  <input
                    className="bg-gray-200 w-full rounded-full py-1 px-3"
                    type="text"
                    placeholder="Teléfono"
                    name="phone"
                  />
                </div>

                <div className="flex-1">
                  <input
                    className="bg-gray-200 w-full rounded-full py-1 px-3 mb-4"
                    type="text"
                    placeholder="Cedúla"
                  />
                  <input
                    className="bg-gray-200 w-full rounded-full py-1 px-3"
                    type="text"
                    placeholder="Email"
                    name="email_id"
                  />
                </div>
              </form>

              <div className="text-end mt-3">
                <button
                  disabled={isLoading}
                  type="submit"
                  className={`${
                    isLoading
                      ? "btn-normal btn-disabled sm:w-auto w-full"
                      : "btn-normal button-red-primary sm:w-auto w-full"
                  } `}
                >
                  {isLoading ? "Cotizando..." : "Cotiza"}
                </button>
              </div>
            </article>
          </div>
        </div>
      </Formulario>
    </section>
  );
};

export default MasInformacion;
