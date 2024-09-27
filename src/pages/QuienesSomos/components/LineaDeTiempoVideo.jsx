import lineaDeTiempo from "../../../videos/linea-de-tiempo-gsa.mp4";

const LineaDeTiempoVideo = () => {
  const handleVideoEnded = (event) => {
    event.target.play(); // Reinicia la reproducción del video cuando llega al final
  };

  return (
    <section>
      <video
        width="100%"
        className="md:h-[40rem] h-[20rem]"
        autoPlay
        muted // Agrega el atributo muted
        onEnded={handleVideoEnded} // Maneja el evento onEnded
        onCanPlay={() => {
          // Este evento se dispara cuando el navegador ha cargado suficiente video para comenzar a reproducirlo
          const video = document.querySelector("video");
          if (video) {
            video.play();
          }
        }}
      >
        <source src={lineaDeTiempo} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </section>
  );
};

export default LineaDeTiempoVideo;
