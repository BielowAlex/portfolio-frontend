import React from "react";
import style from "./style.module.scss";
import { v4 } from "uuid";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
};

const Textarea: React.FC<Props> = ({
  label,
  setValue,
  value,
  required = true,
}) => {
  const id: string = v4();
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "49px"; // Встановлення початкової висоти
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <TextareaAutosize
        className={style.ta}
        id={id}
        cols={30}
        rows={10}
        required={required}
        minLength={10}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export { Textarea };
