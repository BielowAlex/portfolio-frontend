import React from "react";
import style from "./style.module.scss";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { modalActions } from "../../../../store";

const BurgerButton: React.FC = () => {
  const { isBurgerOpen } = useAppSelector((state) => state.modalReducer);
  const dispatch = useAppDispatch();
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
    dispatch(modalActions.burgerToggle());
  };

  React.useEffect(() => {
    if (isBurgerOpen) {
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
  }, [
    firstLineController,
    firstLineVariants.disabled,
    firstLineVariants.enabled,
    firstLineVariants.inProgress,
    isBurgerOpen,
    secondLineController,
    secondLineVariants.disabled,
    secondLineVariants.enabled,
    secondLineVariants.inProgress,
  ]);

  return (
    <div
      data-testid="burger-btn"
      onClick={handleAnimateOnClick}
      className={style.container}
    >
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
