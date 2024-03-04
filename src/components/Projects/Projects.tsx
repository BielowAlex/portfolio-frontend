import React from "react";
import style from "./style.module.scss";
import { Title } from "../Title";
import { ProjectList } from "../ProjectList";

const Projects: React.FC = () => {
  return (
    <section className={style.container}>
      <Title title={"projects"} />
      <ProjectList />
    </section>
  );
};

export { Projects };
