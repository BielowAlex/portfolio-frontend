import React from "react";
import style from "./style.module.scss";
import doc from "../../../../assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  AnimationControls,
  cubicBezier,
  motion,
  useAnimation,
} from "framer-motion";
import { modalActions } from "../../../../store/slices/modal.slice.ts";

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
    <motion.div
      variants={variants}
      animate={controller}
      className={style.container}
    >
      <nav className={style.nav} onClick={handleMenuClick}>
        <a href="#">
          <span className="red">#</span>home
        </a>
        <a href="#works">
          <span className="red">#</span>works
        </a>
        <a href="#about">
          <span className="red">#</span>about-me
        </a>
        <a href="#contact">
          <span className="red">#</span>contacts
        </a>
        <a href={doc} download={"Oleksandr_Drohomyretskyi_CV"}>
          <span className="red">
            <b>Resume </b>
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </a>
      </nav>
    </motion.div>
  );
};

export { BurgerMenu };
