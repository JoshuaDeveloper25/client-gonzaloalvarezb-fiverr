import descargar2Icono from "../images/descargar-2.png";
import { TECollapse } from "tw-elements-react";
import { Link } from "react-router-dom";

const PDFAccordion = ({ activeElement, id, LinkText, LinkTo, className }) => {
  return (
    <TECollapse
      show={activeElement === `${id}`}
      className={`!mt-0 !rounded-b-none !shadow-none ${className} my-5`}
    >
      <div className="flex items-center pb-2 border-b">
        <div>
          <img
            loading="lazy"
            decoding="async"
            className="w-8"
            src={descargar2Icono}
          />
        </div>
        <div>
          <Link
            target="_blank"
            className="text-primary-color hover:underline hover:opacity-55"
            to={LinkTo}
          >
            {LinkText}
          </Link>
        </div>
      </div>
    </TECollapse>
  );
};

export default PDFAccordion;
