const LineaDeTiempoVideo = () => {
  return (
    <section className="my-10">
      <iframe
        width="100%"
        className="md:h-[40rem] h-[20rem]"
        src="https://www.youtube.com/embed/2zaeSeCm3EQ?si=NNd1BoiOWIJILYjJ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default LineaDeTiempoVideo;
