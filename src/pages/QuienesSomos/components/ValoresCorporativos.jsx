import valor1 from "../../../images/valor1.png";
import valor2 from "../../../images/valor2.png";
import valor3 from "../../../images/valor3.png";
import valor4 from "../../../images/valor4.png";
import valor5 from "../../../images/valor5.png";

const ValoresCorporativos = () => {
  return (
    <section className="container-page my-16">
      <h3 className="text-xl text-center mb-12">
        <span className="text-primary-color font-bold">
          Valores Corporativos
        </span>{" "}
        <span className="text-secondary-color font-semibold">|</span>{" "}
        <span className="text-secondary-color font-semibold">
          Grupo Sur Atlántida
        </span>
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-cols-1 place-items-center gap-6">
        {/* Integridad */}
        <div
          className="flip-card h-[14rem] w-full cursor-pointer text-center"
          style={{ perspective: "1000px" }}
        >
          <div
            class="flip-card-inner relative w-full h-full"
            style={{
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              class="flip-card-front w-full h-full absolute"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img
                loading="lazy"
                decoding="async"
                src={valor1}
                className="w-24 mx-auto"
              />
              <h3 className="text-primary-color text-xl font-semibold">
                Integridad
              </h3>
            </div>

            <div
              class="flip-card-back w-full h-full absolute bg-tertiary-color rounded-md py-2 px-3"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="flex justify-center items-center h-full">
                {" "}
                <p className="text-sm">
                  Reflejar de forma congruente y transparente los valores
                  personales y los del banco, promoviendo normas sociales que
                  generen un ambiente laboral sano y confortable
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compromiso */}
        <div
          className="flip-card h-[14rem] w-full cursor-pointer text-center"
          style={{ perspective: "1000px" }}
        >
          <div
            class="flip-card-inner relative w-full h-full"
            style={{
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              class="flip-card-front w-full h-full absolute"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img
                loading="lazy"
                decoding="async"
                src={valor2}
                className="w-24 mx-auto"
              />
              <h3 className="text-primary-color text-xl font-semibold">
                Compromiso
              </h3>
            </div>

            <div
              class="flip-card-back w-full h-full absolute bg-tertiary-color rounded-md py-2 px-3"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="flex justify-center items-center h-full">
                {" "}
                <p className="text-sm">
                  Hacer propia la misión, visión y filosofía del Banco. Creer e
                  involucrarse en el alcance de sus objetivos y metas, mostrando
                  orgullo y sentido de pertenencia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Excelencia */}
        <div
          className="flip-card h-[14rem] w-full cursor-pointer text-center"
          style={{ perspective: "1000px" }}
        >
          <div
            class="flip-card-inner relative w-full h-full"
            style={{
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              class="flip-card-front w-full h-full absolute"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img
                loading="lazy"
                decoding="async"
                src={valor3}
                className="w-24 mx-auto"
              />
              <h3 className="text-primary-color text-xl font-semibold">
                Excelencia
              </h3>
            </div>

            <div
              class="flip-card-back w-full h-full absolute bg-tertiary-color rounded-md py-2 px-3"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="flex justify-center items-center h-full">
                {" "}
                <p className="text-sm">
                  Hacer las cosas bien sin ninguna excusa, con el espíritu de
                  ser mejor cada día, aceptando los retos como oportunidades de
                  demostrar y desarrollar el potencial
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profesionalismo */}
        <div
          className="flip-card h-[14rem] w-full cursor-pointer text-center"
          style={{ perspective: "1000px" }}
        >
          <div
            class="flip-card-inner relative w-full h-full"
            style={{
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              class="flip-card-front w-full h-full absolute"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img
                loading="lazy"
                decoding="async"
                src={valor4}
                className="w-24 mx-auto"
              />
              <h3 className="text-primary-color text-xl font-semibold">
                Profesionalismo
              </h3>
            </div>

            <div
              class="flip-card-back w-full h-full absolute bg-tertiary-color rounded-md py-2 px-3"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="flex justify-center items-center h-full">
                {" "}
                <p className="text-sm">
                  Evidenciar con el comportamiento diario el apego a las normas
                  de cortesía, discreción, decoro, prudencia, respeto y
                  urbanidad que se espera en todo colaborador del banco
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solidaridad */}
        <div
          className="flip-card h-[14rem] w-full cursor-pointer text-center"
          style={{ perspective: "1000px" }}
        >
          <div
            class="flip-card-inner relative w-full h-full"
            style={{
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              class="flip-card-front w-full h-full absolute"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <img
                loading="lazy"
                decoding="async"
                src={valor5}
                className="w-24 mx-auto"
              />
              <h3 className="text-primary-color text-xl font-semibold">
                Solidaridad
              </h3>
            </div>

            <div
              class="flip-card-back w-full h-full absolute bg-tertiary-color rounded-md py-2 px-3"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="flex justify-center items-center h-full">
                {" "}
                <p className="text-sm">
                  Reconocer la importancia del respeto a la dignidad humana de
                  toda persona en relación directa o indirecta con el banco,
                  demostrando empatía y apoyo a las practicas individuales y
                  colectivas de responsabilidad social y las orientadas a la
                  búsqueda del bien común
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValoresCorporativos;
