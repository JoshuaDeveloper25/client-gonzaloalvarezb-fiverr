import { Link } from "react-router-dom";
import nuestraEmpresa1 from "../../../images/nuestraempresa1.png";
import nuestraEmpresa2 from "../../../images/nuestraempresa2.png";
import nuestraEmpresa3 from "../../../images/nuestraempresa3.png";
import nuestraEmpresa4 from "../../../images/nuestraempresa4.png";

import nuestraEmpresa5 from "../../../images/nuestraempresa5.png";
import nuestraEmpresa6 from "../../../images/nuestraempresa6.png";
import nuestraEmpresa7 from "../../../images/nuestraempresa7.png";
import nuestraEmpresa8 from "../../../images/nuestraempresa8.png";

import Slider from "react-slick";

const NuestrasEmpresas = () => {
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
    <section className="container-page py-10">
      <div className="grid md:grid-cols-4 grid-cols-1">
        <article className="md:text-start text-center md:mb-0 mb-5">
          <h2 className="font-extrabold text-2xl leading-6 text-secondary-color family-nunito-black">
            Nuestras <span className="md:block inline">Empresas</span>
          </h2>
        </article>

        <article className="nuestrasEmpresas md:col-span-3 col-span-3">
          <Slider {...settings}>
            <div className="text-center items-center h-full">
              <Link to={`/empresas/inversiones-financieras-atlantida`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={nuestraEmpresa1}
                  className="w-40 h-12 object-contain m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={`/empresas/banco-d-miro`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={nuestraEmpresa2}
                  className="w-32 m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={`/empresas/fiduciaria-atlantida`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={nuestraEmpresa3}
                  className="w-32 m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={`/empresas/atlantida-casa-valores`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={nuestraEmpresa4}
                  className="w-40 h-12 object-contain m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={`/empresas/capitalprime`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={nuestraEmpresa5}
                  className="w-40 h-12 object-contain m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={`/empresas/reditum`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={nuestraEmpresa6}
                  className="w-32 m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={`/empresas/atlantida-insurance`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={nuestraEmpresa7}
                  className="w-32 m-auto flex justify-center items-center"
                />
              </Link>
            </div>

            <div className="text-center items-center h-full">
              <Link to={`empresas/crediprime`}>
                <img
                  loading="lazy"
                  decoding="async"
                  src={nuestraEmpresa8}
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

export default NuestrasEmpresas;
