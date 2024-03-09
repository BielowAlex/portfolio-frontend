import React from "react";
import { Title } from "../Title";
import style from "./style.module.scss";
import { ContactForm, SlideAnimation } from "../UI";

const Contact: React.FC = () => {
  return (
    <section className={style.container} id="contact">
      <Title title={"contact"} />
      <div className={style.desc}>
        <SlideAnimation isHorizontal={false}>
          <p className={style.descContent}>
            It is very important for me to receive feedback, evaluation of my
            project. Also, I’m interested in freelance opportunities –
            especially ambitious or large projects. However, if you have other
            request or question, don’t hesitate to use the form.
          </p>
        </SlideAnimation>
      </div>
      <SlideAnimation isHorizontal={false} width={"100%"} delay={0.3}>
        <ContactForm />
      </SlideAnimation>
    </section>
  );
};

export { Contact };
