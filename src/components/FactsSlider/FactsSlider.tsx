import React from "react";
import style from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { FactsSlide } from "../FactsSlide";
import { factList } from "../../constant";

const slideVariants = {
  enter: { opacity: 0, transform: "translateX(-100%)" },
  center: { opacity: 1, transform: "translateX(0)" },
  exit: { opacity: 0, transform: "translateX(100%)" },
};

const FactsSlider: React.FC = () => {
  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % factList.length);
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
              content={factList[index].content}
              key={factList[index].id}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export { FactsSlider };
