import React from "react";
import style from "./style.module.scss";
import { v4 } from "uuid";

const InProgress: React.FC = () => {
  const waves: React.JSX.Element[] = Array.from({ length: 10 }, () => (
    <div key={v4()} className={style.wave} />
  ));

  return <div className={style.container}>{waves}</div>;
};

export { InProgress };
