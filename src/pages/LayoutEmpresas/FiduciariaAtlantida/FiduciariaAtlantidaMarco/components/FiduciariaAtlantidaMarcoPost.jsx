import { fiduciariaMarcoSections } from "../../../../../DB/data";
import PDFBox from "../../../../../components/PDFBox";

const FiduciariaAtlantidaMarcoPost = () => {
  return (
    <section className="container-page my-8">
      <h2 className="text-2xl text-secondary-color mb-8">
        A continuación, encontrará información y{" "}
        <span className="sm:block inline">documentación relevante:</span>
      </h2>

      {fiduciariaMarcoSections?.map((section) => (
        <PDFBox pageName={"Marco Legal"} sectionName={section} />
      ))}
    </section>
  );
};

export default FiduciariaAtlantidaMarcoPost;
