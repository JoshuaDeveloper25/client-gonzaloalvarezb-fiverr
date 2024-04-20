const RedBanner = ({ bannerTitle }) => {
  return (
    <section className="bg-primary-color py-8">
      <h2
        className="text-center text-2xl text-white"
        style={{ fontFamily: "Nunito Sans Black" }}
      >
        {bannerTitle}
      </h2>
    </section>
  );
};

export default RedBanner;
