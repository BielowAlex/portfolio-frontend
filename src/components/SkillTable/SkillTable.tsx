import React from "react";
import style from "../SkillsTableList/style.module.scss";
import { Skill } from "../../constant/skills.contsant.ts";

export type Props = {
  title: string;
  skills: Skill[];
};
const SkillTable: React.FC<Props> = ({ skills, title }) => {
  return (
    <div className={style.skillInfoTable}>
      <h3>{title}</h3>
      <ul className={style.skillInfoList}>
        {skills.map((el, index) => (
          <li key={el.id}>
            {el.name}
            {skills.length === ++index ? "." : ","}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SkillTable };
