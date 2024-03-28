import React from "react";
import style from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  AnimationControls,
  cubicBezier,
  motion,
  useAnimation,
} from "framer-motion";
import { modalActions } from "../../../../store";
import { ContactInfo } from "../../../ContactInfo";
import { ResumeButton } from "../../Buttons";
import { Dots, Figure } from "../../Icons";

const BurgerMenu: React.FC = React.memo(() => {
  const { isBurgerOpen } = useAppSelector((state) => state.modalReducer);
  const dispatch = useAppDispatch();
  const controller: AnimationControls = useAnimation();

  const variants = {
    open: { left: 0, opacity: 1 },
    hidden: { left: "100%", opacity: 0 },
  };

  const handleMenuClick = () => {
    dispatch(modalActions.burgerToggle());
  };

  React.useEffect(() => {
    if (isBurgerOpen) {
      controller.start(variants.open, {
        ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
      });
    } else {
      const closeAnimation = async () => {
        await controller.start(variants.hidden, {
          ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
          duration: 0.5,
        });
      };
      closeAnimation();
    }
  }, [controller, isBurgerOpen, variants.hidden, variants.open]);

  return (
    <motion.dialog
      variants={variants}
      animate={controller}
      className={style.container}
    >
      <nav className={style.nav}>
        <a href="#" onClick={handleMenuClick}>
          <span className="red">#</span>home
        </a>
        <a href={"#works"} onClick={handleMenuClick}>
          <span className="red">#</span>works
        </a>
        <a href={"#about"} onClick={handleMenuClick}>
          <span className="red">#</span>about-me
        </a>
        <a href={"#contact"} onClick={handleMenuClick}>
          <span className="red">#</span>contacts
        </a>
        <ResumeButton />
      </nav>
      <Dots className={style.dots} />
      <Figure className={style.figure} />
      <ContactInfo />
    </motion.dialog>
  );
});

export { BurgerMenu };
