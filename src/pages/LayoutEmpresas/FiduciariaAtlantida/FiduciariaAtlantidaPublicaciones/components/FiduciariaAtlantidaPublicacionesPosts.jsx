import { fiduciariaTransparenciaSections } from "../../../../../DB/data";
import PDFBox from "../../../../../components/PDFBox";

const FiduciariaAtlantidaPublicacionesPosts = () => {
  return (
    <section className="container-page my-8">
      <div className="space-y-6">
        {fiduciariaTransparenciaSections?.map((section) => (
          <PDFBox pageName={"Fiduciaria Transparencia"} sectionName={section} />
        ))}
      </div>
    </section>
  );
};

export default FiduciariaAtlantidaPublicacionesPosts;
