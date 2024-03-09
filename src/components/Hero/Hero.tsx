import React from "react";
import style from "./style.module.scss";
import { HeroPoster } from "../HeroPoster";
import { HeroInfo } from "../HeroInfo";

const Hero: React.FC = () => {
  return (
    <section className={style.container}>
      <HeroInfo />
      <HeroPoster />
    </section>
  );
};

export { Hero };
