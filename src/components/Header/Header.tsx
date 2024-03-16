import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";
import { BurgerButton, BurgerMenu, ResumeButton, SlideAnimation } from "../UI";
import { createPortal } from "react-dom";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <SlideAnimation width={"100%"} isHorizontal={false} isBottomStart={false}>
        <div className={`container ${style.headerContainer}`}>
          <Logo />
          <nav className={style.nav}>
            <a href="#">
              <span className="red">#</span>home
            </a>
            <a href={"#works"}>
              <span className="red">#</span>works
            </a>
            <a href={"#about"}>
              <span className="red">#</span>about-me
            </a>
            <a href={"#contact"}>
              <span className="red">#</span>contacts
            </a>
            <ResumeButton />
          </nav>
          <BurgerButton />
        </div>
      </SlideAnimation>
      {createPortal(<BurgerMenu />, document.body)}
    </header>
  );
};

export { Header };
