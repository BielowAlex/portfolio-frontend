import React from "react";
import style from "./style.module.scss";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";

const facts = [
  {
    id: v4(),
    content: "My first language was C++",
  },
  {
    id: v4(),
    content: "I have been studying programing for 3 years",
  },
];

const slideVariants = {
  enter: { opacity: 0, transform: "translateX(-100%)" },
  center: { opacity: 1, transform: "translateX(0)" },
  exit: { opacity: 0, transform: "translateX(100%)" },
};

const FactsSlider: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 5000); // Змінює слайд кожні 3 секунди

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={style.slider}>
      <div className={style.sliderWrapper}>
        <AnimatePresence mode={"wait"}>
          <motion.div
            key={index}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
          >
            <FactsSlide
              index={index}
              content={facts[index].content}
              key={facts[index].id}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

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

export { FactsSlider, FactsSlide };
