import React from "react";
import style from "./style.module.scss";
import { AnimationControls, motion, useAnimation } from "framer-motion";

type Props = {
  // handleClick: () => void;
};

const BurgerButton: React.FC<Props> = () => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  const firstLineController: AnimationControls = useAnimation();
  const secondLineController: AnimationControls = useAnimation();

  // const lineAnimation = useAnimation();

  const firstLineVariants = {
    disabled: { y: 0, rotate: 0 },
    inProgress: { y: 8, rotate: 0 },
    enabled: { y: 8, rotate: 45 },
  };

  const secondLineVariants = {
    disabled: { width: "70%", rotate: 0 },
    inProgress: { width: "100%", rotate: 0 },
    enabled: { width: "100%", rotate: -45 },
  };
  const handleAnimateOnClick = () => {
    setIsClicked((prev) => !prev);
  };

  React.useEffect(() => {
    if (isClicked) {
      firstLineController.start(firstLineVariants.inProgress);
      secondLineController.start(secondLineVariants.inProgress);
      firstLineController.start(firstLineVariants.enabled);
      secondLineController.start(secondLineVariants.enabled);
    } else {
      firstLineController.start(firstLineVariants.inProgress);
      secondLineController.start(secondLineVariants.inProgress);
      firstLineController.start(firstLineVariants.disabled);
      secondLineController.start(secondLineVariants.disabled);
    }
  }, [isClicked]);

  return (
    <div onClick={handleAnimateOnClick} className={style.container}>
      <motion.div
        variants={firstLineVariants}
        animate={firstLineController}
        className={style.firstLine}
      />
      <motion.div
        variants={secondLineVariants}
        animate={secondLineController}
        className={style.secondLine}
      />
    </div>
  );
};

export { BurgerButton };
