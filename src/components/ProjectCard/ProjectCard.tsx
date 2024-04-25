import React from "react";
import style from "./style.module.scss";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  languages: string[];
  desc: string;
  poster: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
};

const ProjectCard: React.FC<Props> = ({
  title,
  desc,
  languages,
  githubUrl,
  liveUrl,
  poster,
}) => {
  return (
    <div className={style.project}>
      <div className={style.projectHead}>
        <div className={style.poster}>
          <img src={poster} alt="poster" loading="lazy" />
        </div>
        <h3 className={style.title}>{title}</h3>
      </div>
      <ul className={style.languages}>
        {languages.map((el) => (
          <li key={v4()}>{el}</li>
        ))}
      </ul>
      <div className={style.info}>
        <p className={style.infoDesc}>{desc}</p>
      </div>
      <div className={style.buttons}>
        <Link
          className={style.button}
          to={githubUrl!}
          target="_blank"
          style={{ visibility: githubUrl ? "visible" : "hidden" }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          className={style.button}
          to={liveUrl!}
          target="_blank"
          style={{ visibility: liveUrl ? "visible" : "hidden" }}
        >
          View project {"<~>"}
        </Link>
      </div>
    </div>
  );
};

export { ProjectCard };
