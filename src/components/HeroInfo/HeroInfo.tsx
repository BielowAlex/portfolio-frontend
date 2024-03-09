import React from "react";
import { LinkButton, SlideAnimation } from "../UI";
import style from "./style.module.scss";

const HeroInfo: React.FC = () => {
  return (
    <SlideAnimation>
      <div className={style.info}>
        <h1 className={style.infoTitle}>
          Alex Bielow is a <br />
          <span className="red">front-end dev</span>
        </h1>
        <p className={style.infoDescription}>
          He crafts responsive websites where technologies meet creativity
        </p>
        <LinkButton link={"#contact"}>Contact me !!</LinkButton>
      </div>
    </SlideAnimation>
  );
};

export { HeroInfo };
