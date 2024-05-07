const RedBanner = ({ bannerTitle }) => {
  return (
    <section className="bg-primary-color py-8 px-2">
      <h2
        className="text-center text-2xl text-white family-nunito-black"
      >
        {bannerTitle}
      </h2>
    </section>
  );
};

export default RedBanner;
