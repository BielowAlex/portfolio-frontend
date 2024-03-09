import React from "react";
import style from "./style.module.scss";

type Props = {
  slideWidth: number;
  url?: string;
  alt?: string;
};

const SkillCarrouselSlide: React.FC<Props> = ({ slideWidth, url }) => {
  return (
    <div className={style.container} style={{ width: `${slideWidth}px` }}>
      <img src={url} alt="slide" className={style.slide} />
    </div>
  );
};

export { SkillCarrouselSlide };
