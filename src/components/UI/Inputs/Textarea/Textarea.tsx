import React from "react";
import style from "./style.module.scss";
import { v4 } from "uuid";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
  label: string;
  value: string;
  setValue: (name: string, value: string) => void;
  required?: boolean;
  name: string;
};

const Textarea: React.FC<Props> = React.memo(
  ({ label, setValue, value, required = true, name }) => {
    const id: string = v4();
    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <TextareaAutosize
          className={style.ta}
          id={id}
          onFocus={() => setIsFocused(true)}
          onBlur={() => !value && setIsFocused(false)}
          cols={30}
          rows={10}
          name={name}
          required={required}
          minLength={10}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  },
);

export { Textarea };
