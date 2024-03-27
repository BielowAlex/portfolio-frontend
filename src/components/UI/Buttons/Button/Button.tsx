import React, { ReactNode } from "react";
import style from "./style.module.scss";

type Props = {
  children: ReactNode;
  handleClick?: () => void;
};

const Button: React.FC<Props> = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} className={style.btn}>
      {children}
    </button>
  );
};

export { Button };
