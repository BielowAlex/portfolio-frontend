import React, { useRef } from "react";
import style from "./style.module.scss";
import useMeasure from "react-use-measure";
import {
  animate,
  AnimationPlaybackControls,
  motion,
  useMotionValue,
} from "framer-motion";
import { SkillCarrouselSlide } from "../SkillCarrouselSlide";
import { v4 } from "uuid";

type Props = {
  icons: string[]; // Припускаємо, що icons це масив з шляхами до зображень або SVG
};

const ContinuousSlider: React.FC<Props> = ({ icons }) => {
  const [ref, { width }] = useMeasure();
  const xTransition = useMotionValue(0);
  const windowWidth = useRef(window.innerWidth);
  const FAST_DURATION: number = 35;
  const SLOW_DURATION: number = 85;
  const [slideWidth] = React.useState<number>(windowWidth.current / 6 - 30);
  const [duration, setDuration] = React.useState<number>(FAST_DURATION);
  const [mustFinish, setMustFinish] = React.useState<boolean>(false);
  const [rerender, setRerender] = React.useState<boolean>(false);

  const handleOnMouseHover = () => {
    setDuration(() => SLOW_DURATION);
    setMustFinish(true);
  };

  const handleOnMouseLeave = () => {
    setDuration(() => FAST_DURATION);
    setMustFinish(true);
  };

  React.useEffect(() => {
    let control: AnimationPlaybackControls;
    const finalPosition = -width / 2 - 8;

    if (mustFinish) {
      control = animate(xTransition, [xTransition.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTransition.get() / finalPosition),
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onComplete: () => {
          setMustFinish(false);
          setRerender((prev) => !prev);
        },
      });
    } else {
      control = animate(xTransition, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return control.stop;
  }, [xTransition, width, duration, rerender, mustFinish]);

  return (
    <div className={style.carrouselWrapper}>
      <motion.div
        className={style.carrousel}
        ref={ref}
        style={{ x: xTransition }}
        draggable={false}
        onHoverStart={handleOnMouseHover}
        onHoverEnd={handleOnMouseLeave}
      >
        {/* Дублювання зображень для безперервності */}
        {icons.map(() => (
          <SkillCarrouselSlide slideWidth={slideWidth} url={""} key={v4()} />
        ))}
        {icons.map(() => (
          <SkillCarrouselSlide slideWidth={slideWidth} url={""} key={v4()} />
        ))}
      </motion.div>
    </div>
  );
};

const SkillCarrouselSection: React.FC = () => {
  const icons = [
    "../../assets/react.svg",
    "../../assets/react.svg",
    "../../assets/react.svg",
    "../../assets/react.svg",
    "../../assets/react.svg",
    "../../assets/react.svg",
    "../../assets/react.svg",
    "../../assets/react.svg",
    "../../assets/react.svg",
    "../../assets/react.svg",
  ];
  return <ContinuousSlider icons={icons} />;
};

export { SkillCarrouselSection };
