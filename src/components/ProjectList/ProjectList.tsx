import React from "react";
import style from "./style.module.scss";
import { ProjectCard } from "../ProjectCard";
import { projectList } from "../../constant";

const ProjectList: React.FC = () => {
  return (
    <div className={style.container}>
      {projectList.map((el) => (
        <ProjectCard
          key={el.id}
          title={el.title}
          desc={el.desc}
          poster={el.poster}
          languages={el.languages}
          liveUrl={el.liveUrl}
          githubUrl={el.githubUrl}
        />
      ))}
    </div>
  );
};

export { ProjectList };
