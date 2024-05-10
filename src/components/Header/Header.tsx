import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";
import { BurgerButton, BurgerMenu, ResumeButton } from "../UI";
import { createPortal } from "react-dom";

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.headerContainer}>
        <Logo />
        <nav className={style.nav}>
          <a href={"#works"}>works</a>
          <a href={"#skills"}>skills</a>
          <a href={"#about"}>about-me</a>
          <a href={"#contact"}>contacts</a>
          <ResumeButton />
        </nav>
        <BurgerButton />
      </div>
      {createPortal(<BurgerMenu />, document.body)}
    </div>
  );
};

export { Header };
