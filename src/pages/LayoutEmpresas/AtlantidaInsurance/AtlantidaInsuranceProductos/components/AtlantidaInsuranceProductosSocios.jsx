import Slider from "react-slick";
import { Link } from "react-router-dom";
import socio1 from "../../../../../images/socio1.png";
import socio2 from "../../../../../images/socio2.png";
import socio3 from "../../../../../images/socio3.png";
import socio4 from "../../../../../images/socio4.png";

const AtlantidaInsuranceProductosSocios = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          dots: false,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="container-page my-7 py-10">
      <div className="grid md:grid-cols-4 grid-cols-1">
        <article className="md:text-start text-center md:mb-0 mb-5">
          <h2 className="font-extrabold text-2xl leading-6 text-secondary-color family-nunito-black">
            Socios <span className="md:block inline">Estratégicos</span>
          </h2>
        </article>

        <article className="nuestrasEmpresas md:col-span-3 col-span-3">
          <Slider {...settings}>
            <div className="text-center items-center h-full">
              <Link to={``}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={socio1}
                  className="w-40 h-12 object-contain m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={``}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={socio2}
                  className="w-32 m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={``}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={socio3}
                  className="w-32 m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={``}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={socio4}
                  className="w-40 h-12 object-contain m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={``}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={socio1}
                  className="w-40 h-12 object-contain m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={``}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={socio2}
                  className="w-32 m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={``}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={socio3}
                  className="w-32 m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={``}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={socio4}
                  className="w-40 h-12 object-contain m-auto flex justify-center items-center"
                />
              </Link>
            </div>
          </Slider>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceProductosSocios;
