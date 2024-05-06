import { Link } from "react-router-dom";
import Slider from "react-slick";

const AtlantidaInsuranceInicioClientes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="container-page py-10 mt-8 border-t border-t-black">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
        <article className="md:col-span-1 col-span-5 md:text-start text-center md:mb-0 mb-5">
          <h2 className="font-extrabold text-[1.7rem] leading-6 text-secondary-color family-nunito-black">
            Clientes asegurados{" "}
            <span className="block md:inline">nos recomiendan</span>
          </h2>
        </article>

        <article className="clientesAsegurados md:col-span-3 col-span-5">
          <Slider {...settings}>
            <div className="text-center">
              <p className="text-gray-500 max-w-lg mx-auto">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a leo ligula. Vivamus venenatis cursus placerat. Nullam
                egestas dolor felis, a auctor augue consequat quis. Vivamus
                sollicitudin, nisl et eleifend porttitor, velit arcu dapibus
                massa, sed vehicula augue purus ut felis. ”
              </p>
              <h2 className="text-gray-600 text-xl pt-3">John Galarza</h2>
              <p className="text-primary-color">Seguro de Fianza</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 max-w-lg mx-auto">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a leo ligula. Vivamus venenatis cursus placerat. Nullam
                egestas dolor felis, a auctor augue consequat quis. Vivamus
                sollicitudin, nisl et eleifend porttitor, velit arcu dapibus
                massa, sed vehicula augue purus ut felis. ”
              </p>
              <h2 className="text-gray-600 text-xl pt-3">John Galarza</h2>
              <p className="text-primary-color">Seguro de Fianza</p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 max-w-lg mx-auto">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam a leo ligula. Vivamus venenatis cursus placerat. Nullam
                egestas dolor felis, a auctor augue consequat quis. Vivamus
                sollicitudin, nisl et eleifend porttitor, velit arcu dapibus
                massa, sed vehicula augue purus ut felis. ”
              </p>
              <h2 className="text-gray-600 text-xl pt-3">John Galarza</h2>
              <p className="text-primary-color">Seguro de Fianza</p>
            </div>
          </Slider>
        </article>
      </div>
    </section>
  );
};

export default AtlantidaInsuranceInicioClientes;
