import { fiduciariaCasaValoresSections } from "../../../../../DB/data";
import PDFBox from "../../../../../components/PDFBox";

const AtlantidaCasaValoresPosts = () => {
  return (
    <section className="container-page my-12">
      <div className="grid items-start sm:grid-cols-2 grid-cols-1 md:gap-16 gap-8">
        {fiduciariaCasaValoresSections?.map((section) => (
          <PDFBox
            pageName={"Fiduciaria Transparencia"}
            sectionName={section}
            sectionIcon="download"
          />
        ))}
      </div>
    </section>
  );
};

export default AtlantidaCasaValoresPosts;
