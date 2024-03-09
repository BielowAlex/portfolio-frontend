import React from "react";
import style from "./style.module.scss";
import { v4 } from "uuid";

type Props = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
};

const Input: React.FC<Props> = ({
  label,
  value,
  setValue,
  required = true,
}) => {
  const id: string = v4();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    setValue(() => {
      return value;
    });
  };

  return (
    <div className={style.container}>
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        className={style.in}
        value={value}
        required={required}
        onChange={handleChange}
      />
    </div>
  );
};

export { Input };
