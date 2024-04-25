import React from "react";
import style from "./style.module.scss";
import poster from "../../assets/me-hero.webp";
import slice from "../../assets/slice.png";
import { OpacityAnimation, SlideAnimation } from "../UI";
import { motion, useAnimation } from "framer-motion";

const Hero: React.FC = () => {
  const headAnimation = useAnimation();
  const middleAnimation = useAnimation();
  const bottomAnimation = useAnimation();

  const offsetFactors = {
    img: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    head: Math.floor(Math.random() * (100 - 5 + 1)) + 5,
    middle: Math.floor(Math.random() * (100 - 20 + 1)) + 20,
    bottom: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;

    // Start animations for each element with different transition settings

    headAnimation.start({
      x: moveX / offsetFactors.head,
      y: moveY / offsetFactors.head,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    });

    middleAnimation.start({
      x: moveX / offsetFactors.middle,
      y: moveY / offsetFactors.middle,
      transition: { type: "spring", stiffness: 80, damping: 8 },
    });

    bottomAnimation.start({
      x: moveX / offsetFactors.bottom,
      y: moveY / offsetFactors.bottom,
      transition: { type: "spring", stiffness: 60, damping: 6 },
    });
  };

  return (
    <motion.section className={style.container} onMouseMove={handleMouseMove}>
      <motion.div
        animate={headAnimation}
        className={style.head}
        onMouseMove={handleMouseMove}
      >
        <SlideAnimation
          isBottomStart
          isHorizontal={false}
          className={style.animBox}
          delay={0}
        >
          <span>Hey</span>
          <h3>My name is</h3>
        </SlideAnimation>

        <SlideAnimation
          isBottomStart
          isHorizontal={false}
          className={style.animBox}
          delay={0.1}
        >
          <h3>Alex Bielow</h3>
        </SlideAnimation>
      </motion.div>
      <div className={style.poster}>
        <OpacityAnimation>
          <img src={slice} alt="" className={style.posterSlice} />
          <img
            src={poster}
            alt="me"
            className={style.posterContent}
            loading="lazy"
          />
        </OpacityAnimation>
      </div>

      <motion.div animate={middleAnimation} className={style.middle}>
        <SlideAnimation
          isBottomStart
          isHorizontal={false}
          className={style.animBox}
          delay={0.2}
        >
          <h3>- I'm a web </h3>
        </SlideAnimation>
        <SlideAnimation
          isBottomStart
          isHorizontal={false}
          className={style.animBox}
          delay={0.3}
        >
          <h3>enthusiast</h3>
        </SlideAnimation>
      </motion.div>
      <motion.div animate={bottomAnimation} className={style.bottom}>
        <SlideAnimation
          isBottomStart
          isHorizontal={false}
          className={style.animBox}
          delay={0.4}
        >
          <h3>I enjoy using new technologies in </h3>
        </SlideAnimation>
        <SlideAnimation
          isBottomStart
          isHorizontal={false}
          className={style.animBox}
          delay={0.5}
        >
          <h3>combination with creativity to solve</h3>
        </SlideAnimation>
        <SlideAnimation
          isBottomStart
          isHorizontal={false}
          className={style.animBox}
          delay={0.6}
        >
          <h3>various problems and contribute</h3>
        </SlideAnimation>
        <SlideAnimation
          isBottomStart
          isHorizontal={false}
          className={style.animBox}
          delay={0.7}
        >
          <h3>to business development. </h3>
        </SlideAnimation>
      </motion.div>

      {/*<HeroInfo />*/}
      {/*<HeroPoster />*/}
    </motion.section>
  );
};

export { Hero };
