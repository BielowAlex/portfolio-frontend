import React, { ReactNode } from "react";
import {
  AnimationControls,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

type Props = {
  children: ReactNode;
  width?: string;
  duration?: number;
  delay?: number;
};

const OpacityAnimation: React.FC<Props> = ({
  children,
  width = "fit-content",
  delay = 0.3,
  duration = 0.5,
}) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const ref = React.useRef(null);
  const isInView: boolean = useInView(ref);
  const controller: AnimationControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controller.start("visible");
    } else {
      controller.start("hidden");
    }
  }, [controller, isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controller}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { OpacityAnimation };
