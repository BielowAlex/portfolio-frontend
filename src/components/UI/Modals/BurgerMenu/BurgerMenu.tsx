import React from "react";
import style from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  AnimationControls,
  cubicBezier,
  motion,
  useAnimation,
} from "framer-motion";
import { modalActions } from "../../../../store/slices/modal.slice.ts";
import { ContactInfo } from "../../../ContactInfo";
import { ResumeButton } from "../../Buttons";

const BurgerMenu: React.FC = () => {
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
      controller.start(variants.hidden, {
        ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
        duration: 0.5,
      });
    }
  }, [isBurgerOpen]);

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
      <ContactInfo />
    </motion.dialog>
  );
};

export { BurgerMenu };
