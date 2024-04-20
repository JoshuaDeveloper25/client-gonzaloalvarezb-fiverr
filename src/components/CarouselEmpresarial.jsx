import carouselEmpresarial1 from "../images/carouselempresarial1.png";
import carouselEmpresarial2 from "../images/carouselempresarial2.png";
import carouselEmpresarial3 from "../images/carouselempresarial3.png";
import carouselEmpresarial4 from "../images/carouselempresarial4.png";

import Slider from "react-slick";

const CarouselEmprearial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <section className="bg-primary-color">
      <div className="carouselEmpresarial container-page px-2 py-10">
        <Slider {...settings}>
          <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
            <div className="flex items-center">
              <img
                loading="lazy"
                decoding="async"
                src={carouselEmpresarial1}
                className="w-20 h-12 object-contain"
              />

              <h3 className="text-white leading-4">
                Mercado <span className="block">de Valores</span>
              </h3>
            </div>
          </div>

          <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
            <div className="flex items-center">
              <img
                loading="lazy"
                decoding="async"
                src={carouselEmpresarial2}
                className="w-20 h-12 object-contain"
              />

              <h3 className="text-white leading-4">
                Asesoría <span className="block">Producción de</span> seguros
              </h3>
            </div>
          </div>

          <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
            <div className="flex items-center">
              <img
                loading="lazy"
                decoding="async"
                src={carouselEmpresarial3}
                className="w-20 h-12 object-contain"
              />

              <h3 className="text-white leading-4">
                Fideicomisos
              </h3>
            </div>
          </div>

          <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
            <div className="flex items-center">
              <img
                loading="lazy"
                decoding="async"
                src={carouselEmpresarial4}
                className="w-20 h-12 object-contain"
              />

              <h3 className="text-white leading-4">
                Fondos de <span className="block">inversión</span>
              </h3>
            </div>
          </div>

          <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
            <div className="flex items-center">
              <img
                loading="lazy"
                decoding="async"
                src={carouselEmpresarial1}
                className="w-20 h-12 object-contain"
              />

              <h3 className="text-white leading-4">
                Mercado <span className="block">de Valores</span>
              </h3>
            </div>
          </div>

          <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
            <div className="flex items-center">
              <img
                loading="lazy"
                decoding="async"
                src={carouselEmpresarial2}
                className="w-20 h-12 object-contain"
              />

              <h3 className="text-white leading-4">
                Asesoría <span className="block">Producción de</span> seguros
              </h3>
            </div>
          </div>

          <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
            <div className="flex items-center">
              <img
                loading="lazy"
                decoding="async"
                src={carouselEmpresarial3}
                className="w-20 h-12 object-contain"
              />

              <h3 className="text-white leading-4">
                Fideicomisos
              </h3>
            </div>
          </div>

          <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
            <div className="flex items-center">
              <img
                loading="lazy"
                decoding="async"
                src={carouselEmpresarial4}
                className="w-20 h-12 object-contain"
              />

              <h3 className="text-white leading-4">
                Fondos de <span className="block">inversión</span>
              </h3>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CarouselEmprearial;
