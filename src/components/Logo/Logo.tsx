import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { modalActions } from "../../store";

const Logo: React.FC = () => {
  const { isBurgerOpen } = useAppSelector((state) => state.modalReducer);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (isBurgerOpen) {
      dispatch(modalActions.burgerToggle());
    }
  };

  return (
    <div className={style.logo} onClick={handleClick}>
      <FontAwesomeIcon icon={faCode} className={style.logoIcon} />
      <h3>
        <span className="red">Alex</span> Bielow
      </h3>
    </div>
  );
};

export { Logo };
