import React from "react";
import style from "./style.module.scss";

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  return (
    <div className={style.title}>
      <h2 className={style.titleContent}>
        <span className="red">#</span>
        {title}
      </h2>
      <div className={style.titleLine} />
    </div>
  );
};

export { Title };
