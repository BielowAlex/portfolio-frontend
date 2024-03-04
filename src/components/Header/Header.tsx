import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        <Logo />

        <nav className={style.nav}>
          <a href="#">
            <span className="red">#</span>home
          </a>
          <a href="#">
            <span className="red">#</span>works
          </a>
          <a href="#">
            <span className="red">#</span>about-me
          </a>
          <a href="#">
            <span className="red">#</span>contacts
          </a>
        </nav>
      </div>
    </header>
  );
};

export { Header };
