import React from "react";
import style from "./style.module.scss";
import { Title } from "../Title";
import poster from "../../assets/me2.png";
import { SlideAnimation } from "../UI";

const AboutMe: React.FC = () => {
  return (
    <section className={style.container} id="about">
      <Title title={"about-me"} />
      <div className={style.content}>
        <SlideAnimation>
          <p className={style.description}>
            Hello, i’m Alex!
            <br />
            <br />
            I am a Junior JavaScript Developer with 3 years of commercial
            experience, during which I actively worked on various projects,
            including startups and web services, using ReactJS, NextJS, and
            NestJS. I have practical experience with PostgreSQL and AWS, as well
            as integrating payment systems and authorization services. I am
            distinguished by my ability to learn quickly, my skill in solving
            complex problems, and my effectiveness in communicating with both
            the team and clients.
            <br />
            <br />I am noted for my leadership skills, having successfully
            managed a project by developing a growth strategy, allocating tasks
            and responsibilities among team members, and ensuring high-quality
            communication with clients. I am seeking an opportunity to join an
            innovative team where I can contribute to project development and
            further develop my technical skills and leadership qualities.
          </p>
        </SlideAnimation>
        <SlideAnimation isLeftStart={false}>
          <div className={style.poster}>
            <img src={poster} alt="" />
          </div>
        </SlideAnimation>
      </div>
    </section>
  );
};

export { AboutMe };
