import { AnimationControls, motion, useAnimation } from "framer-motion";
import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import useOnClickOutside from "use-onclickoutside";
import { ToastValue } from "../../../../types/toast.types.ts";

type Props = {
  toastValue: ToastValue;
  setToastValue: React.Dispatch<React.SetStateAction<ToastValue>>;
};

const ToastModal: React.FC<Props> = React.memo(
  ({ toastValue: { isError, isShow, message }, setToastValue }) => {
    const controller: AnimationControls = useAnimation();
    const ref = React.useRef(null);
    const variants = {
      open: { top: 50, opacity: 1 },
      hidden: { top: -200, opacity: 0 },
    };
    const handleCloseToast = React.useCallback(() => {
      setToastValue((prev) => {
        return {
          ...prev,
          isShow: false,
        };
      });
    }, [setToastValue]);
    useOnClickOutside(ref, handleCloseToast);

    React.useEffect(() => {
      if (isShow) {
        controller.start(variants.open);
      } else {
        controller.start(variants.hidden);
      }
    }, [controller, isShow, variants.hidden, variants.open]);

    React.useEffect(() => {
      if (isShow) {
        const timeoutClose = setTimeout(() => {
          handleCloseToast();
        }, 5000);

        return () => clearTimeout(timeoutClose);
      }
    }, [handleCloseToast, isShow]);
    return (
      <motion.dialog
        ref={ref}
        className={style.container}
        variants={variants}
        animate={controller}
      >
        <div className={style.title}>
          <h2>
            <span className="red">#</span>notify
          </h2>
          <div className={style.titleLine} />
        </div>
        <div className={style.content}>
          {isError ? (
            <span className="red">
              <FontAwesomeIcon icon={faCircleExclamation} />
            </span>
          ) : (
            <span style={{ color: "green" }}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
          )}
          <p>{message}</p>
        </div>
      </motion.dialog>
    );
  },
);

export { ToastModal };
