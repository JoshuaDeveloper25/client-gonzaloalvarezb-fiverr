import moneda1 from "../../../images/grupo-sur-atlantida-moneda-1.jpg";
import moneda2 from "../../../images/grupo-sur-atlantida-moneda-2.jpg";
import moneda3 from "../../../images/grupo-sur-atlantida-moneda-3.jpg";
import moneda4 from "../../../images/grupo-sur-atlantida-moneda-4.jpg";
import moneda6 from "../../../images/grupo-sur-atlantida-moneda-6.jpg";
import moneda7 from "../../../images/grupo-sur-atlantida-moneda-7.jpg";
import moneda8 from "../../../images/grupo-sur-atlantida-moneda-8.jpg";
import moneda9 from "../../../images/grupo-sur-atlantida-moneda-9.jpg";
import moneda10 from "../../../images/grupo-sur-atlantida-moneda-10.jpg";

import Slider from "react-slick";

const EmisorOficial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "65px",
          speed: 500,
          dots: false,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "60px",
          speed: 500,
          dots: false,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "0px",
          speed: 500,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="container-page my-8">
      <div
        className="carousel-emisor sm:grid gap-10"
        style={{ gridTemplateColumns: "50% 40%" }}
      >
        <article className="min-h-0 min-w-0 p-2">
          <Slider {...settings}>
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda1}
                alt="Dinero"
              />
            </div>

            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda2}
                alt="Dinero"
              />
            </div>

            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda3}
                alt="Dinero"
              />
            </div>

            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda4}
                alt="Dinero"
              />
            </div>
            
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda6}
                alt="Dinero"
              />
            </div>

            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda7}
                alt="Dinero"
              />
            </div>

            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda8}
                alt="Dinero"
              />
            </div>

            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda9}
                alt="Dinero"
              />
            </div>

            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg md:my-2 my-0 mx-0"
                src={moneda10}
                alt="Dinero"
              />
            </div>
          </Slider>
        </article>

        <article className="md:text-start text-center flex md:justify-start justify-center items-center">
          <h2 className="text-secondary-color text-3xl family-nunito-semibold">
            Emisor oficial de la{" "}
            <span className="block">moneda de Honduras</span> durante 37 años
          </h2>
        </article>
      </div>
    </section>
  );
};

export default EmisorOficial;
