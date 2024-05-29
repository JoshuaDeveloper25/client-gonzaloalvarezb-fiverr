const BoxImageText = ({
  bgSec,
  titleSec,
  bgImg,
  textSec,
  boxImg,
  boxText,
  idSection,
}) => {
  return (
    <section id={idSection} className={bgSec}>
      <div className="container-page py-10">
        <h3 className="family-nunito-black text-secondary-color text-xl text-center mb-8">
          {titleSec}
        </h3>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <article className={boxImg}>
            <img decoding="async" loading="lazy" src={bgImg} />
          </article>

          <article className={boxText}>
            <p className="text-secondary-color">{textSec}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BoxImageText;
