import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";
import { SlideAnimation } from "../UI";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doc from "../../assets/resume.pdf";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <SlideAnimation width={"100%"} isHorizontal={false} isBottomStart={false}>
        <div className={`container ${style.headerContainer}`}>
          <Logo />
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
      </SlideAnimation>
    </header>
  );
};

export { Header };
