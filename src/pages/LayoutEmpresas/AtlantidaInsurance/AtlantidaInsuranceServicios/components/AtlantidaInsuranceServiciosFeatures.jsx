import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

const AtlantidaInsuranceProductosFeatures = () => {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    <section className="container-page border-t border-black py-9 tabs">
      <div className="flex items-start">
        <TETabs vertical>
          <TETabsItem
            onClick={() => handleVerticalClick("tab1")}
            active={verticalActive === "tab1"}
            className={`${
              verticalActive === "tab1" ? "text-primary-color" : null
            } family-nunito-semibold font-bold tag-link pb-2 pe-8`}
          >
            Cobertura
          </TETabsItem>

          <TETabsItem
            onClick={() => handleVerticalClick("tab2")}
            active={verticalActive === "tab2"}
            className={`${
              verticalActive === "tab2" ? "text-primary-color" : null
            } family-nunito-semibold font-bold tag-link pb-2 pe-8`}
          >
            Deducibles
          </TETabsItem>

          <TETabsItem
            onClick={() => handleVerticalClick("tab3")}
            active={verticalActive === "tab3"}
            className={`${
              verticalActive === "tab3" ? "text-primary-color" : null
            } family-nunito-semibold font-bold tag-link pb-2 pe-8`}
          >
            Asistencia
          </TETabsItem>

          <TETabsItem
            onClick={() => handleVerticalClick("tab4")}
            active={verticalActive === "tab4"}
            className={`${
              verticalActive === "tab4" ? "text-primary-color" : null
            } family-nunito-semibold font-bold tag-link pb-2 pe-8`}
          >
            Exclusiones
          </TETabsItem>
        </TETabs>

        <TETabsContent>
          <TETabsPane className="ms-8" show={verticalActive === "tab1"}>
            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Protección total</h3>
              <p className="text-gray-700">
                Tu auto está totalmente cubierto ante cualquier daño parcial o
                total, ya sea por accidente o robo. Además, también cuentas con
                esta protección en toda la Comunidad Andina, es decir en
                Bolivia, Colombia y Perú.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Protección civil</h3>
              <p className="text-gray-700">
                Estás cubierto por los daños y perjuicios resultantes de un
                siniestro que afecten a terceras personas o a sus bienes hasta
                por $75,000.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Amparo Patrimonial</h3>
              <p className="text-gray-700">
                Estás cubierto si causas un accidente tipificado como culpa
                grave, esto quiere decir por desatender las señales o normas de
                tránsito, carecer de licencia, tener la licencia caducada o
                estar bajo efectos de bebidas embriagantes o estupefacientes.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Accidentes personales a ocupantes del vehículo
              </h3>
              <p className="text-gray-700">
                Si a causa de un accidente, tú y/o tus acompañantes quedan
                incapacitados o fallecen, la aseguradora pagará hasta $10,000
                por cada afectado. Aplica según el número de ocupantes que se
                indica en la matrícula de tu vehículo asegurado.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Muerte accidental del titular
              </h3>
              <p className="text-gray-700">
                Si un accidente ocasiona el fallecimiento del titular del
                seguro, los herederos legales reciben $10,000.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Gastos de grúa y transporte del vehículo
              </h3>
              <p className="text-gray-700">
                Si sufres un accidente o cualquier avería, cuentas con un monto
                de hasta $250 para movilizar tu vehículo. Este monto es
                adicional al valor que cubre la Asistencia vehicular 24/7.
                Consulta este valor en la sección de "Asistencias".
              </p>
            </div>
          </TETabsPane>
          
          <TETabsPane className="ms-8" show={verticalActive === "tab2"}>
            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Protección total 2</h3>
              <p className="text-gray-700">
                Tu auto está totalmente cubierto ante cualquier daño parcial o
                total, ya sea por accidente o robo. Además, también cuentas con
                esta protección en toda la Comunidad Andina, es decir en
                Bolivia, Colombia y Perú.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Protección civil</h3>
              <p className="text-gray-700">
                Estás cubierto por los daños y perjuicios resultantes de un
                siniestro que afecten a terceras personas o a sus bienes hasta
                por $75,000.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Amparo Patrimonial</h3>
              <p className="text-gray-700">
                Estás cubierto si causas un accidente tipificado como culpa
                grave, esto quiere decir por desatender las señales o normas de
                tránsito, carecer de licencia, tener la licencia caducada o
                estar bajo efectos de bebidas embriagantes o estupefacientes.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Accidentes personales a ocupantes del vehículo
              </h3>
              <p className="text-gray-700">
                Si a causa de un accidente, tú y/o tus acompañantes quedan
                incapacitados o fallecen, la aseguradora pagará hasta $10,000
                por cada afectado. Aplica según el número de ocupantes que se
                indica en la matrícula de tu vehículo asegurado.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Muerte accidental del titular
              </h3>
              <p className="text-gray-700">
                Si un accidente ocasiona el fallecimiento del titular del
                seguro, los herederos legales reciben $10,000.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Gastos de grúa y transporte del vehículo
              </h3>
              <p className="text-gray-700">
                Si sufres un accidente o cualquier avería, cuentas con un monto
                de hasta $250 para movilizar tu vehículo. Este monto es
                adicional al valor que cubre la Asistencia vehicular 24/7.
                Consulta este valor en la sección de "Asistencias".
              </p>
            </div>
          </TETabsPane>

          <TETabsPane className="ms-8" show={verticalActive === "tab3"}>
            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Protección total 3</h3>
              <p className="text-gray-700">
                Tu auto está totalmente cubierto ante cualquier daño parcial o
                total, ya sea por accidente o robo. Además, también cuentas con
                esta protección en toda la Comunidad Andina, es decir en
                Bolivia, Colombia y Perú.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Protección civil</h3>
              <p className="text-gray-700">
                Estás cubierto por los daños y perjuicios resultantes de un
                siniestro que afecten a terceras personas o a sus bienes hasta
                por $75,000.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Amparo Patrimonial</h3>
              <p className="text-gray-700">
                Estás cubierto si causas un accidente tipificado como culpa
                grave, esto quiere decir por desatender las señales o normas de
                tránsito, carecer de licencia, tener la licencia caducada o
                estar bajo efectos de bebidas embriagantes o estupefacientes.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Accidentes personales a ocupantes del vehículo
              </h3>
              <p className="text-gray-700">
                Si a causa de un accidente, tú y/o tus acompañantes quedan
                incapacitados o fallecen, la aseguradora pagará hasta $10,000
                por cada afectado. Aplica según el número de ocupantes que se
                indica en la matrícula de tu vehículo asegurado.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Muerte accidental del titular
              </h3>
              <p className="text-gray-700">
                Si un accidente ocasiona el fallecimiento del titular del
                seguro, los herederos legales reciben $10,000.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Gastos de grúa y transporte del vehículo
              </h3>
              <p className="text-gray-700">
                Si sufres un accidente o cualquier avería, cuentas con un monto
                de hasta $250 para movilizar tu vehículo. Este monto es
                adicional al valor que cubre la Asistencia vehicular 24/7.
                Consulta este valor en la sección de "Asistencias".
              </p>
            </div>
          </TETabsPane>

          <TETabsPane className="ms-8" show={verticalActive === "tab4"}>
            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Protección total 4</h3>
              <p className="text-gray-700">
                Tu auto está totalmente cubierto ante cualquier daño parcial o
                total, ya sea por accidente o robo. Además, también cuentas con
                esta protección en toda la Comunidad Andina, es decir en
                Bolivia, Colombia y Perú.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Protección civil</h3>
              <p className="text-gray-700">
                Estás cubierto por los daños y perjuicios resultantes de un
                siniestro que afecten a terceras personas o a sus bienes hasta
                por $75,000.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">Amparo Patrimonial</h3>
              <p className="text-gray-700">
                Estás cubierto si causas un accidente tipificado como culpa
                grave, esto quiere decir por desatender las señales o normas de
                tránsito, carecer de licencia, tener la licencia caducada o
                estar bajo efectos de bebidas embriagantes o estupefacientes.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Accidentes personales a ocupantes del vehículo
              </h3>
              <p className="text-gray-700">
                Si a causa de un accidente, tú y/o tus acompañantes quedan
                incapacitados o fallecen, la aseguradora pagará hasta $10,000
                por cada afectado. Aplica según el número de ocupantes que se
                indica en la matrícula de tu vehículo asegurado.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Muerte accidental del titular
              </h3>
              <p className="text-gray-700">
                Si un accidente ocasiona el fallecimiento del titular del
                seguro, los herederos legales reciben $10,000.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-600">
                Gastos de grúa y transporte del vehículo
              </h3>
              <p className="text-gray-700">
                Si sufres un accidente o cualquier avería, cuentas con un monto
                de hasta $250 para movilizar tu vehículo. Este monto es
                adicional al valor que cubre la Asistencia vehicular 24/7.
                Consulta este valor en la sección de "Asistencias".
              </p>
            </div>
          </TETabsPane>
        </TETabsContent>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceProductosFeatures;
