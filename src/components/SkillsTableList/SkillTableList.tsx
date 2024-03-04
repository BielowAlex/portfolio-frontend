import React from "react";
import style from "./style.module.scss";
import { skillsConstant } from "../../constant/skills.contsant.ts";
import { SkillTable } from "../SkillTable";

const SkillTableList: React.FC = () => {
  return (
    <div className={style.skillInfo}>
      {skillsConstant.map((el) => (
        <SkillTable title={el.title} skills={el.skills} key={el.id} />
      ))}
      <div className="decoration"></div>
      <div className="decoration"></div>
      <div className="decoration"></div>
      <div className="decoration"></div>
    </div>
  );
};

export { SkillTableList };
