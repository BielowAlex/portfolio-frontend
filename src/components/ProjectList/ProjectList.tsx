import React from "react";
import style from "./style.module.scss";
import { ProjectListItem } from "../ProjectListItem";
import { projectList } from "../../constant";

const ProjectList: React.FC = () => {
  return (
    <div className={style.container}>
      {projectList.map((el) => (
        <ProjectListItem
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
