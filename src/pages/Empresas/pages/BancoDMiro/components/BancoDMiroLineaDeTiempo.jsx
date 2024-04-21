import lineaDeTiempo1 from "../../../../../images/lineadetiempo1.jpg";
import lineaDeTiempo2 from "../../../../../images/lineadetiempo2.png";

const BancoDMiroLineaDeTiempo = () => {
  return (
    <section className="container-page py-3 my-10">
      {/* Linea de Tiempo 1 */}
      <article className="max-w-full">
        <img
          decoding="async"
          loading="lazy"
          className="w-full rounded-3xl h-80 object-cover"
          src={lineaDeTiempo1}
          alt="Imagen De Paisaje"
        />
      </article>

      <article className="flex flex-col md:flex-row gap-8 mt-9">
        <div className="flex-1">
          <h3
            className="text-secondary-color md:text-start text-center  text-4xl"
            style={{ fontFamily: "Nunito Sans SemiBold" }}
          >
            1997
          </h3>
          <div className="bg-primary-color/90 h-2 w-10 my-2 md:mx-0 mx-auto"></div>
          <p className="text-secondary-color md:text-justify text-center">
            El programa de Microfinanzas de Misión Alianza de Noruega en Ecuador
            se inició en la Isla Trinitaria, Guayaquil, en 1997.
          </p>
        </div>

        <div className="flex-1">
          <h3
            className="text-secondary-color md:text-start text-center  text-4xl"
            style={{ fontFamily: "Nunito Sans SemiBold" }}
          >
            2006
          </h3>
          <div className="bg-primary-color/90 h-2 w-10 my-2 md:mx-0 mx-auto"></div>
          <p className="text-secondary-color md:text-justify text-center">
            A finales del año 2006 el Programa de Micro finanzas D-MIRO se
            convierte en Fundación para el Desarrollo Micro empresarial D-MIRO
            Misión Alianza Ecuador.
          </p>
        </div>

        <div className="flex-1">
          <h3
            className="text-secondary-color md:text-start text-center  text-4xl"
            style={{ fontFamily: "Nunito Sans SemiBold" }}
          >
            2010 - 2011
          </h3>
          <div className="bg-primary-color/90 h-2 w-10 my-2 md:mx-0 mx-auto"></div>
          <p className="text-secondary-color md:text-justify text-center">
            En 2010-2011 Fundación D-MIRO decidió ampliar sus servicios y llegar
            a más familias, por lo que se transformó en una institución
            financiera regulada y controlada por la Superintendencia de Bancos.
          </p>
        </div>
      </article>

      {/* Linea de Tiempo 2 */}
      <article className="max-w-full mt-12">
        <img
          decoding="async"
          loading="lazy"
          className="w-full rounded-3xl h-80 object-cover"
          src={lineaDeTiempo2}
          alt="Imagen De Paisaje"
        />
      </article>

      <article className="md:grid grid-cols-3 gap-10 mt-9">
        <div className="md:mb-0 mb-8">
          <h3
            className="text-secondary-color md:text-start text-center  text-4xl"
            style={{ fontFamily: "Nunito Sans SemiBold" }}
          >
            2011
          </h3>
          <div className="bg-primary-color/90 h-2 w-10 my-2 md:mx-0 mx-auto"></div>
          <p className="text-secondary-color md:text-justify text-center">
            Banco D-MIRO inició operaciones el 18 de julio del 2011, con 14
            oficinas ubicadas en varias zonas de Guayaquil (Isla Trinitaria,
            Paraíso, Suburbio, Orquídeas, Fortín, Guasmo), Durán, Libertad,
            Machala, Quevedo, Portoviejo, Manta, Milagro y Playas.
          </p>
        </div>

        <div>
          <h3
            className="text-secondary-color md:text-start text-center  text-4xl"
            style={{ fontFamily: "Nunito Sans SemiBold" }}
          >
            2024
          </h3>
          <div className="bg-primary-color/90 h-2 w-10 my-2 md:mx-0 mx-auto"></div>
          <p className="text-secondary-color md:text-justify text-center">
            El 18 de Marzo de 2024 Banco D-MIRO se convierte en una empresa del
            Grupo Financiero Atlántida.
          </p>
        </div>
      </article>
    </section>
  );
};

export default BancoDMiroLineaDeTiempo;
