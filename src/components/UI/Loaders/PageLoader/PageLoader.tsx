import React from "react";
import style from "./style.module.scss";
import { Logo } from "../../../Logo";

const PageLoader: React.FC = () => {
  return (
    <div className={style.container}>
      <Logo />
      <div className={style.head}>
        <span className={style.loader}></span>
      </div>
    </div>
  );
};

export { PageLoader };
