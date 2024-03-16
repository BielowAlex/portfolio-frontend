import React from "react";
import style from "../FactsSlider/style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  content: string;
  index: number;
};

const FactsSlide: React.FC<Props> = ({ content, index }) => {
  return (
    <div className={style.slide}>
      <div className={style.slideTitle}>
        <h3> - Fact {index}</h3>
      </div>
      <div className={style.slideContent}>
        <span className={style.quoteTop}>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </span>
        <p>{content}</p>
        <span className={style.quoteBottom}>
          <FontAwesomeIcon icon={faQuoteRight} />
        </span>
      </div>
    </div>
  );
};

export { FactsSlide };
