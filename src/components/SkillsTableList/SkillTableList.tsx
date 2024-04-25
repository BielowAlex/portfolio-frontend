import React from "react";
import style from "./style.module.scss";
import { skillsConstant } from "../../constant";
import { SkillTable } from "../SkillTable";
import { Dots, Figure, OpacityAnimation, SlideAnimation, Square } from "../UI";
import { motion, useAnimation } from "framer-motion";

const SkillTableList: React.FC = () => {
  const imgAnimation = useAnimation();
  const offsetFactor = 25;
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;

    imgAnimation.start(
      {
        x: moveX / offsetFactor,
        y: moveY / offsetFactor,
      },
      { type: "spring", stiffness: 100, damping: 10 },
    );
  };

  return (
    <div className={style.skillInfo} onMouseMove={handleMouseMove}>
      {skillsConstant.map((el, index) => (
        <SlideAnimation isHorizontal={false} delay={index * 0.3} key={el.id}>
          <SkillTable title={el.title} skills={el.skills} />
        </SlideAnimation>
      ))}
      <motion.div className={style.figure} animate={imgAnimation}>
        <OpacityAnimation>
          <Figure />
        </OpacityAnimation>
      </motion.div>
      <motion.div className={style.square} animate={imgAnimation}>
        <OpacityAnimation>
          <Square className={style.square} />
        </OpacityAnimation>
      </motion.div>
      <motion.div className={style.dots} animate={imgAnimation}>
        <OpacityAnimation>
          <Dots className={style.dots} />
        </OpacityAnimation>
      </motion.div>
      <motion.div className={style.dotsTwo} animate={imgAnimation}>
        <OpacityAnimation>
          <Dots className={style.dotsTwo} />
        </OpacityAnimation>
      </motion.div>
    </div>
  );
};

export { SkillTableList };
