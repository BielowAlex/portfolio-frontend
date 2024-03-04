import React from "react";
import style from "./style.module.scss";
import { LinkButton } from "../Buttons";
import poster from "../../assets/me-hero.webp";

const Hero: React.FC = () => {
  return (
    <section className={style.container}>
      <div className={style.info}>
        <h1 className={style.infoTitle}>
          Alex Bielow is a <br />
          <span className="red">front-end dev</span>
        </h1>
        <p className={style.infoDescription}>
          He crafts responsive websites where technologies meet creativity
        </p>
        <LinkButton link={"#"}>Contact me !!</LinkButton>
      </div>
      <div className={style.content}>
        <div className={style.contentPoster}>
          <img src={poster} alt="me" />
        </div>
        <div className={style.contentStatus}>
          <span className={style.squer} />
          <h4>Currently work on portfolio</h4>
        </div>
      </div>
    </section>
  );
};

export { Hero };
