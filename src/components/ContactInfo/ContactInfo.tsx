import React from "react";
import style from "../Footer/sctyle.module.scss";
import { Logo } from "../Logo";

const ContactInfo: React.FC = () => {
  return (
    <div className={style.footerContentInfo}>
      <div className={style.footerContentInfo}>
        <div className={style.footerContentInfoContact}>
          <Logo /> |
          <a
            href="mailto:drohomyretskyi.oleksandr@gmail.com"
            className={style.footerContentInfoEmail}
          >
            drohomyretskyi.oleksandr@gmail.com
          </a>
        </div>
      </div>
      <p className={style.footerContentInfoPosition}>
        Javascript Fullstack developer
      </p>
    </div>
  );
};

export { ContactInfo };
