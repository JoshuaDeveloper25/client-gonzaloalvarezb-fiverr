import { fiduciariaAdvisorsSections } from "../../../../../../DB/data";
import PDFBox from "../../../../../../components/PDFBox";

const AtlantidaAdvisorsPublicacionesPosts = () => {
  return (
    <section className="container-page my-8">
      <div className="grid items-start sm:grid-cols-2 grid-cols-1 md:gap-16 gap-8">
        {fiduciariaAdvisorsSections?.map((section) => (
          <PDFBox
            pageName={"Fiduciaria Transparencia"}
            sectionName={section}
          />
        ))}
      </div>
    </section>
  );
};

export default AtlantidaAdvisorsPublicacionesPosts;
