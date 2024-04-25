import React from "react";
import doc from "../../../../assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ResumeButton: React.FC = () => {
  return (
    <a href={doc} download={"Oleksandr_Drohomyretskyi_Resume"} target="_blank">
      <span>Resume</span>
      <FontAwesomeIcon icon={faDownload} />
    </a>
  );
};

export { ResumeButton };
