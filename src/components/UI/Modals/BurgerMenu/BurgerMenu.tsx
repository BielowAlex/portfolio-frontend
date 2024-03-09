import React from "react";
import style from "./style.module.scss";
import doc from "../../../../assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const BurgerMenu: React.FC = () => {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <a href="#">
          <span className="red">#</span>home
        </a>
        <a href="#works">
          <span className="red">#</span>works
        </a>
        <a href="#about">
          <span className="red">#</span>about-me
        </a>
        <a href="#contact">
          <span className="red">#</span>contacts
        </a>
        <a href={doc} download={"Oleksandr_Drohomyretskyi_CV"}>
          <span className="red">
            <b>Resume </b>
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </a>
      </nav>
    </div>
  );
};

export { BurgerMenu };
