import React, { ReactNode } from "react";
import style from "./style.module.scss";

type Props = {
  link: string;
  children: ReactNode;
};

const LinkButton: React.FC<Props> = ({ link, children }) => {
  return (
    <a href={link} className={style.btn}>
      {children}
    </a>
  );
};

export { LinkButton };
