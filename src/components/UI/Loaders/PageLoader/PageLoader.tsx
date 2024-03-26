import React from "react";
import { InProgress } from "../../Icons";
import style from "./style.module.scss";

const PageLoader: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <InProgress />
      </div>
      <span className={style.loading}>
        Loading
        <span className={style.dot}>.</span>
        <span className={style.dot}>.</span>
        <span className={style.dot}>.</span>
      </span>
    </div>
  );
};

export { PageLoader };
