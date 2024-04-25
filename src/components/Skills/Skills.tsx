import React from "react";
import { Title } from "../Title";
import style from "./style.module.scss";
import { SkillTableList } from "../SkillsTableList";
import { SkillCarrouselSection } from "../SkillCarrousel";
import { OpacityAnimation, SlideAnimation } from "../UI";

const Skills: React.FC = () => {
  return (
    <section className={style.skills} id={"skills"}>
      <Title title="skills" />
      <div className={style.skillsContent} style={{ position: "relative" }}>
        <SkillTableList />
        <OpacityAnimation>
          <h4>Technologies I had experience working with:</h4>
        </OpacityAnimation>
        <SlideAnimation width={"100%"} isHorizontal={false}>
          <SkillCarrouselSection />
        </SlideAnimation>
      </div>
    </section>
  );
};

export { Skills };
