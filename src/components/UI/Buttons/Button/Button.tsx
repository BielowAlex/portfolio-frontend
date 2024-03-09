import React, { ReactNode } from "react";
import style from "./style.module.scss";

type Props = {
  children: ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  return <button className={style.btn}>{children}</button>;
};

export { Button };
