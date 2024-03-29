import React from "react";

type Props = {
  className?: string;
  color?: string;
};

const Figure: React.FC<Props> = ({ className, color = "#AC1228" }) => {
  return (
    <svg
      className={className}
      width="157"
      height="157"
      viewBox="0 0 157 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 39.25H0.5V39.75V156V156.5H1H78.5H79V156V117.75H156H156.5V117.25V1V0.5H156H78.5H78V1V39.25H1ZM78 116.75H40.25V79H78V116.75ZM79 78V40.25H116.75V78H79Z"
        stroke={color}
      ></path>
    </svg>
  );
};

export { Figure };
