import React from "react";
import style from "./style.module.scss";
import {
  AnimationControls,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

type Props = {
  title: string;
};

const Title: React.FC<Props> = ({ title }) => {
  const scopeRef = React.useRef(null);
  const isInView: boolean = useInView(scopeRef);
  const titleController: AnimationControls = useAnimation();
  const lineController: AnimationControls = useAnimation();

  const titleVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 1 },
    visible: { width: "100%", opacity: 1 },
  };

  const handleAnimateShow = async () => {
    await titleController.start(titleVariants.visible);
    await lineController.start(lineVariants.visible);
  };

  const handleAnimateHide = async () => {
    await lineController.start(lineVariants.hidden);
    await titleController.start(titleVariants.hidden);
  };

  React.useEffect(() => {
    if (isInView) {
      handleAnimateShow().then();
    } else {
      handleAnimateHide().then();
    }
  }, [isInView]);

  return (
    <div ref={scopeRef} className={style.title}>
      <motion.div animate={titleController} variants={titleVariants}>
        <h2 id="#title" className={style.titleContent}>
          <span className="red">#</span>
          {title}
        </h2>
      </motion.div>
      <motion.div
        animate={lineController}
        variants={lineVariants}
        transition={{ duration: 1 }}
      >
        <div className={style.titleLine} />
      </motion.div>
    </div>
  );
};

export { Title };
