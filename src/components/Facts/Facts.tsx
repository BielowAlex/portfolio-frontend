import React from "react";
import { FactsSlider } from "../FactsSlider";
import { SlideAnimation } from "../UI";

const Facts: React.FC = () => {
  return (
    <section>
      <SlideAnimation isHorizontal={false} width={"100%"}>
        <FactsSlider />
      </SlideAnimation>
    </section>
  );
};

export { Facts };
