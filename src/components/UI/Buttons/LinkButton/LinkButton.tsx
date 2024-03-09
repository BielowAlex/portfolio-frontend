import React, { ReactNode } from "react";
import style from "./style.module.scss";

type Props = {
  link: string;
  children: ReactNode;
  target?: string;
};

const LinkButton: React.FC<Props> = ({ link, children, target }) => {
  return (
    <a href={link} className={style.btn} target={target}>
      {children}
    </a>
  );
};

export { LinkButton };
