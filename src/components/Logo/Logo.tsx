import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Logo: React.FC = () => {
  return (
    <div className={style.logo}>
      <FontAwesomeIcon icon={faCode} className={style.logoIcon} />
      <h3>
        <span className="red">Alex</span> Bielow
      </h3>
    </div>
  );
};

export { Logo };
