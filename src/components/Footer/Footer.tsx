import React from "react";
import style from "./sctyle.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../Logo";
import { Languages } from "../Languages";
import { Media } from "../Media";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.footerContainer}`}>
        <div className={style.footerContent}>
          <div className={style.footerContentInfo}>
            <div className={style.footerContentInfo}>
              <div className={style.footerContentInfoContact}>
                <Logo /> |
                <a
                  href="mailto:drohomyretskyi.oleksandr@gmail.com"
                  className={style.footerContentInfoEmail}
                >
                  drohomyretskyi.oleksandr@gmail.com
                </a>
              </div>
            </div>
            <p className={style.footerContentInfoPosition}>
              Javascript Fullstack developer
            </p>
          </div>
          <Languages />
          <Media />
        </div>
        <div className={style.copyright}>
          <span className={style.copyrightContent}>
            <FontAwesomeIcon icon={faCopyright} /> Made with love by AlexBielow
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
