const SubFooter = ({ img, title, titleSpan }) => {
  return (
    <section
      className="bg-cover bg-center py-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)), url(${img})`,
      }}
    >
      <div className="container-page px-2">
        <div className="grid grid-cols-1 grid-rows-[30vh] items-center">
          <div>
            <h2
              className="text-center text-4xl text-white"
              style={{ fontFamily: "Nunito Sans SemiBold" }}
            >
              {title}
              <span className="block">{titleSpan}</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
