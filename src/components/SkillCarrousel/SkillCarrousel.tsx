import React from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import { SkillCarrouselSlide } from "../SkillCarrouselSlide";
import { v4 } from "uuid";
import { skillCarrousel } from "../../constant";

type Props = {
  icons: string[];
};

const ContinuousSlider: React.FC<Props> = ({ icons }) => {
  const ref: React.Ref<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
  const FAST_DURATION: string = "14000ms";
  const [slideWidth] = React.useState<number>(200);

  return (
    <div className={style.carrouselWrapper}>
      <motion.div
        className={style.carrousel}
        ref={ref}
        style={{ "--speed": FAST_DURATION } as React.CSSProperties}
        draggable={false}
      >
        {icons.map((el) => (
          <SkillCarrouselSlide slideWidth={slideWidth} url={el} key={v4()} />
        ))}
      </motion.div>
      <motion.div
        className={style.carrousel}
        ref={ref}
        style={{ "--speed": FAST_DURATION } as React.CSSProperties}
        draggable={false}
      >
        {icons.map((el) => (
          <SkillCarrouselSlide slideWidth={slideWidth} url={el} key={v4()} />
        ))}
      </motion.div>
    </div>
  );
};

const SkillCarrouselSection: React.FC = () => {
  return <ContinuousSlider icons={skillCarrousel} />;
};

export { SkillCarrouselSection };
