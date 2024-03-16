import {
  AnimationControls,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  width?: string;
  isHorizontal?: boolean;
  isLeftStart?: boolean;
  isBottomStart?: boolean;
  delay?: number;
  className?: string;
};

const SlideAnimation: React.FC<Props> = ({
  children,
  width = "fit-content",
  isHorizontal = true,
  isLeftStart = true,
  isBottomStart = true,
  delay = 0.3,
  className,
}) => {
  const variants = isHorizontal
    ? {
        hidden: { opacity: 0, x: isLeftStart ? -75 : 75 },
        visible: { opacity: 1, x: 0 },
      }
    : {
        hidden: { opacity: 0, y: isBottomStart ? 75 : -75 },
        visible: { opacity: 1, y: 0 },
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
    <div
      ref={ref}
      className={className}
      style={{ zIndex: 30, position: "relative", width }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controller}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { SlideAnimation };
