import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import style from "./style.module.scss";

const Media: React.FC = () => {
  return (
    <div className={style.media}>
      <h3 className={style.mediaTitle}>Media</h3>
      <ul className={style.mediaList}>
        <li className={style.mediaItem}>
          <a href="https://github.com/BielowAlex" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className={style.mediaItem}>
          <a
            href="https://www.linkedin.com/in/oleksandr-drohomoretskyi-275600242/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className={style.mediaItem}>
          <a href="https://www.instagram.com/alex_bielow/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className={style.mediaItem}>
          <a href="https://www.facebook.com/sasha.below.336" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { Media };
