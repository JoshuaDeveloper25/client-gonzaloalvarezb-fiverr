import { Link } from "react-router-dom";
import carouselEmpresarial1 from "../images/carouselempresarial1.png";
import carouselEmpresarial2 from "../images/carouselempresarial2.png";
import carouselEmpresarial3 from "../images/carouselempresarial3.png";
import carouselEmpresarial4 from "../images/carouselempresarial4.png";
import carouselEmpresarial5 from "../images/carouselempresarial5.png";
import carouselEmpresarial6 from "../images/carouselempresarial6.png";
import carouselEmpresarial7 from "../images/carouselempresarial7.png";
import carouselEmpresarial8 from "../images/carouselempresarial8.png";


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
      <div className="carouselEmpresarial container-page py-10">
        <h2 className="text-center text-white text-2xl font-bold mb-7">
          Nuestros Servicios
        </h2>

        <Slider {...settings}>

        <Link to={"/empresas/banco-d-miro"}>
            <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  decoding="async"
                  src={carouselEmpresarial5}
                  className="w-20 h-12 object-contain"
                />

                <h3 className="text-white leading-4">Banca</h3>
              </div>
            </div>
          </Link>

          <Link to={"/fiduciaria-fondos"}>
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
          </Link>

          <Link
            to={"/fiduciaria-negocios"}
          >
            <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  decoding="async"
                  src={carouselEmpresarial3}
                  className="w-20 h-12 object-contain"
                />

                <h3 className="text-white leading-4">{`Fideicomisos`}</h3>
              </div>
            </div>
          </Link>
          
          <Link to={"/casa-valores-inicio"}>
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
          </Link>

          <Link to={`/insurance-inicio`}>
            <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  decoding="async"
                  src={carouselEmpresarial2}
                  className="w-20 h-12 object-contain"
                />

                <h3 className="text-white leading-4">
                  Broker de <span className="block">seguros</span>
                </h3>
              </div>
            </div>
          </Link>

          <Link to={"/empresas/reditum"}>
            <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  decoding="async"
                  src={carouselEmpresarial6}
                  className="w-20 h-12 object-contain"
                />

                <h3 className="text-white leading-4">Fintech</h3>
              </div>
            </div>
          </Link>

          <Link to={"/empresas/crediprime"}>
            <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  decoding="async"
                  src={carouselEmpresarial7}
                  className="w-20 h-12 object-contain"
                />

                <h3 className="text-white leading-4">
                  Originación de{" "}
                  <span className="block">Cartera Automotriz</span>
                </h3>
              </div>
            </div>
          </Link>

          <Link to={"/empresas/capitalprime"}>
            <div className="border border-white sm:max-w-none max-w-56 mx-auto rounded-3xl px-3 py-4">
              <div className="flex items-center">
                <img
                  loading="lazy"
                  decoding="async"
                  src={carouselEmpresarial8}
                  className="w-20 h-12 object-contain"
                />

                <h3 className="text-white leading-4">Cobranzas</h3>
              </div>
            </div>
          </Link>
        </Slider>
      </div>
    </section>
  );
};

export default CarouselEmprearial;
