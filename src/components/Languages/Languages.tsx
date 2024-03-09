import React from "react";
import { languagesConstant } from "../../constant/languages.constant.ts";
import style from "./style.module.scss";

const Languages: React.FC = () => {
  return (
    <div className={style.languages}>
      <h3 className={style.languagesTitle}>Languages</h3>
      <ul className={style.languagesList}>
        {languagesConstant.map((el) => (
          <li className={style.languagesItem} key={el.id}>
            {el.language}:{el.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Languages };
