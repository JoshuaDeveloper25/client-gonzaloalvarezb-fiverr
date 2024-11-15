import downloadIcon2 from "../images/descargar-1.png";
import downloadIcon from "../images/descargar-2.png";
import { useQuery } from "@tanstack/react-query";
import pdfIcono from "../images/pdf-icono.png";
import { TECollapse } from "tw-elements-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

const PDFBox = ({
  pageName,
  sectionName,
  accordionName,
  sectionIcon = "pdf",
}) => {
  const [activeElement, setActiveElement] = useState("");

  // Get all pdfFiles
  const { data, isLoading } = useQuery({
    queryKey: ["pdfFiles", pageName, sectionName, accordionName],
    queryFn: async () =>
      await axios?.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/pdf-managements/upload?pageName=${pageName}&sectionName=${sectionName}`
      ),
  });

  const accordionGrouped = Object?.groupBy(
    data?.data ?? [],
    ({ accordionName }) => accordionName
  );

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <article
      className={`bg-[#F3F3F3] md:px-10 px-2 py-8 rounded-2xl text-secondary-color/95`}
    >
      <div className="flex items-end gap-3 border-b-2 py-1 border-primary-color">
        <img
          loading="lazy"
          decoding="async"
          className="w-12 h-12 object-cover"
          src={sectionIcon === "pdf" ? pdfIcono : downloadIcon2}
        />
        <h3 className="family-nunito-black text-xl">{sectionName}</h3>
      </div>

      {/* Accordion */}
      {Object.keys(accordionGrouped)?.map((accordion) => {
        return (
          <>
            <h2 className="mb-0" id={accordion}>
              <button
                className={`${
                  activeElement === accordion &&
                  ` font-bold [box-shadow:inset_0_-1px_0_rgba(229,231,235)]`
                } group relative flex w-full justify-between items-start pt-5 rounded-none border-0 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
                type="button"
                onClick={() => handleClick(accordion)}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div>
                  <p className="text-sm">{accordion}</p>
                </div>

                <div>
                  <span
                    className={`${
                      activeElement === accordion
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0`
                    }  ml-auto h-3 w-3 shrink-0 fill-[#D9D9D9] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                    </svg>
                  </span>
                </div>
              </button>
            </h2>

            {isLoading ? (
              <Spinner />
            ) : (
              accordionGrouped[accordion].map((file) => (
                <TECollapse
                  key={file?._id}
                  show={activeElement === accordion}
                  className="!mt-0 !rounded-b-none !shadow-none py-5 my-5"
                >
                  <div className="flex items-center pb-2 border-b">
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        className="w-8"
                        src={downloadIcon}
                      />
                    </div>
                    <div>
                      <Link
                        target="_blank"
                        className="text-primary-color hover:underline hover:opacity-55"
                        to={`https://suratlantida.com:3500/upload/${file?.fileName}`}
                      >
                        {file?.fileName}
                      </Link>
                    </div>
                  </div>
                </TECollapse>
              ))
            )}
          </>
        );
      })}
    </article>
  );
};

export default PDFBox;
