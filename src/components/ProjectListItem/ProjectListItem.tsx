import React from "react";
import style from "./style.module.scss";
import { LinkButton } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { v4 } from "uuid";

type Props = {
  title: string;
  languages: string[];
  desc: string;
  poster: string;
  liveUrl: string;
  githubUrl: string;
};

const ProjectListItem: React.FC<Props> = ({
  title,
  desc,
  languages,
  githubUrl,
  liveUrl,
  poster,
}) => {
  return (
    <li className={style.project}>
      <div className={style.poster}>
        <img src={poster} alt="poster" />
      </div>
      <ul className={style.languages}>
        {languages.map((el, index) => (
          <li key={v4()}>
            {el}
            {languages.length === ++index ? "." : ","}
          </li>
        ))}
      </ul>
      <div className={style.info}>
        <h3 className={style.infoTitle}>{title}</h3>
        <p className={style.infoDesc}>{desc}</p>
        <div className={style.infoButtons}>
          <LinkButton link={liveUrl}>
            <span>Live</span> <span>{"<~>"}</span>
          </LinkButton>
          <LinkButton link={githubUrl}>
            <span>Git</span>
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </LinkButton>
        </div>
      </div>
    </li>
  );
};

export { ProjectListItem };
