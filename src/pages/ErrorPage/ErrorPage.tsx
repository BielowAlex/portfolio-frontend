import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI";
import style from "./style.module.scss";
import { useErrorBoundary } from "react-error-boundary";

type Props = {
  error: Error;
};

const ErrorPage: React.FC<Props> = ({ error }) => {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  const handleNavigate = () => {
    navigate("/");
    resetBoundary();
  };
  return (
    <div className={style.container}>
      <div className={style.message}>
        <h2>Oopsi something went wrong (0_o)</h2>
        <p>Details: {error.message}</p>
        <Button children={"Back"} handleClick={handleNavigate} />
      </div>
    </div>
  );
};

export { ErrorPage };
