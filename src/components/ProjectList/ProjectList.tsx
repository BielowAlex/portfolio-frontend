import React from "react";
import style from "./style.module.scss";
import { ProjectListItem } from "../ProjectListItem";
import { SlideAnimation } from "../UI";
import { projectList } from "../../constant";

const ProjectList: React.FC = () => {
  return (
    <div className={style.container}>
      {projectList.map((el, index) => (
        <SlideAnimation isHorizontal={false} delay={index * 0.3} key={el.id}>
          <ProjectListItem
            title={el.title}
            desc={el.desc}
            // poster={el.poster}
            poster={el.poster}
            languages={el.languages}
            liveUrl={el.liveUrl}
            githubUrl={el.githubUrl}
          />
        </SlideAnimation>
      ))}
    </div>
  );
};

export { ProjectList };
