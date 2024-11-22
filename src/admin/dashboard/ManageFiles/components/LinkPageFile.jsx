import { GrDocumentWord } from "react-icons/gr";
import { Link } from "react-router-dom";
import React from "react";

const LinkPageFile = ({ pageName }) => {
  let directionLink;

  if (pageName === "Fiduciaria Transparencia") {
    directionLink = "/fiduciaria-transparencia";
  } else if (pageName === "Fiduciaria Marco") {
    directionLink = "/fiduciaria-marco";
  } else if (pageName === "Advisors Publicaciones") {
    directionLink = "/advisors-publicaciones";
  } else if (pageName === "Casa Valores Publicaciones") {
    directionLink = "/casa-valores-publicaciones";
  }

  return (
    <Link to={directionLink} target="_blank">
      <h2 className="flex items-center underline gap-3 text-primary-color font-bold text-2xl mb-3 uppercase tracking-wider">
        <GrDocumentWord />
        {pageName}
      </h2>
    </Link>
  );
};

export default LinkPageFile;
