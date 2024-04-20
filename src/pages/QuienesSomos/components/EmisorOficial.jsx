import Slider from "react-slick";

const EmisorOficial = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
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
          infinite: true,
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
          infinite: true,
          centerPadding: "100px",
          speed: 500,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="container-page px-2 my-8">
      <div
        className="carousel-emisor sm:grid gap-10"
        style={{ gridTemplateColumns: "50% 40%" }}
      >
        <article className="min-h-0 min-w-0 p-1">
          <Slider {...settings}>
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg m-2"
                src={`https://dummyimage.com/500x200/000/fff`}
                alt="Dinero"
              />
            </div>
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg m-2"
                src={`https://dummyimage.com/500x200/000/fff`}
                alt="Dinero"
              />
            </div>
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg m-2"
                src={`https://dummyimage.com/500x200/000/fff`}
                alt="Dinero"
              />
            </div>
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg m-2"
                src={`https://dummyimage.com/500x200/000/fff`}
                alt="Dinero"
              />
            </div>
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg m-2"
                src={`https://dummyimage.com/500x200/000/fff`}
                alt="Dinero"
              />
            </div>
            <div>
              <img
                decoding="async"
                loading="lazy"
                className="emisorOficialImg m-2"
                src={`https://dummyimage.com/500x200/000/fff`}
                alt="Dinero"
              />
            </div>
          </Slider>
        </article>

        <article className="md:text-start text-center flex md:justify-start justify-center items-center">
          <h2
            className="text-secondary-color text-3xl"
            style={{ fontFamily: "Nunito Sans SemiBold" }}
          >
            Emisor oficial de la{" "}
            <span className="block">moneda de Honduras</span> durante 37 años
          </h2>
        </article>
      </div>
    </section>
  );
};

export default EmisorOficial;
