import React from "react";
import { Title } from "../Title";
import style from "./style.module.scss";
import { SkillTableList } from "../SkillsTableList";
import { SkillCarrouselSection } from "../SkillCarrousel";

const Skills: React.FC = () => {
  return (
    <section className={style.skills}>
      <Title title="skills" />
      <div className={style.skillsContent} style={{ position: "relative" }}>
        <SkillTableList />
        <h4>Technologies I had experience working with:</h4>
        <SkillCarrouselSection />
      </div>
    </section>
  );
};

export { Skills };
