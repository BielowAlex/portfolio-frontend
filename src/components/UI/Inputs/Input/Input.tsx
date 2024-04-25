import React from "react";
import style from "./style.module.scss";
import { v4 } from "uuid";

type Props = {
  label: string;
  value: string;
  name: string;
  setValue: (name: string, value: string) => void;
  required?: boolean;
  type?: string;
};

const Input: React.FC<Props> = React.memo(
  ({ label, value, setValue, required = true, type = "text", name }) => {
    const id: string = v4();
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = e.currentTarget.value;
      setValue(name, value);
    };

    return (
      <div className={style.container}>
        <label
          htmlFor={id}
          className={style.label}
          style={{ top: isFocused ? "-15px" : "30%" }}
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !value && setIsFocused(false)}
          name={name}
          className={style.in}
          value={value}
          required={required}
          onChange={handleChange}
        />
      </div>
    );
  },
);

export { Input };
