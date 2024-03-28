import React from "react";
import style from "./style.module.scss";
import poster from "../../assets/me-hero.webp";
import {
  AnimationControls,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { Dots } from "../UI";

const HeroPoster: React.FC = () => {
  const scopeRef = React.useRef(null);
  const isInView: boolean = useInView(scopeRef);
  const statusController: AnimationControls = useAnimation();
  const posterController: AnimationControls = useAnimation();

  const imgAnimation = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = Math.floor(Math.random() * (35 - 10 + 1)) + 10;
    imgAnimation.start(
      {
        x: moveX / offsetFactor,
        y: moveY / offsetFactor,
      },
      {
        duration: 0.5,
        ease: "linear",
      },
    );
  };

  const statusVariants = {
    hidden: { opacity: 0, x: 10000, height: "1px", padding: 0 },
    visible: { opacity: 1, x: 0, height: "44px", padding: "11px 8px" },
  };

  const posterVariants = {
    hidden: { opacity: 1, y: 1000 },
    visible: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    if (isInView) {
      statusController.start(statusVariants.visible);
      posterController.start(posterVariants.visible);
    } else {
      posterController.start(posterVariants.hidden);
      statusController.start(statusVariants.hidden);
    }
  }, [
    isInView,
    posterController,
    posterVariants.hidden,
    posterVariants.visible,
    statusController,
    statusVariants.hidden,
    statusVariants.visible,
  ]);
  return (
    <div ref={scopeRef} className={style.content} onMouseMove={handleMouseMove}>
      <motion.div
        className={style.contentPoster}
        animate={posterController}
        variants={posterVariants}
        transition={{ delay: 0.7, duration: 0.5, ease: "linear" }}
      >
        {/*<Figure className={style.figure} />*/}
        <motion.svg
          className={style.figure}
          animate={imgAnimation}
          width="157"
          height="157"
          viewBox="0 0 157 157"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 39.25H0.5V39.75V156V156.5H1H78.5H79V156V117.75H156H156.5V117.25V1V0.5H156H78.5H78V1V39.25H1ZM78 116.75H40.25V79H78V116.75ZM79 78V40.25H116.75V78H79Z"
            stroke="#AC1228"
          ></path>
        </motion.svg>
        <img src={poster} alt="me" loading="lazy" />
        <motion.div className={style.dots} animate={imgAnimation}>
          <Dots />
        </motion.div>
      </motion.div>
      <motion.div
        className={style.contentStatus}
        variants={statusVariants}
        animate={statusController}
        transition={{ duration: 0.5 }}
      >
        <span className={style.squer} />
        <h4>Currently work on portfolio</h4>
      </motion.div>
    </div>
  );
};

export { HeroPoster };
