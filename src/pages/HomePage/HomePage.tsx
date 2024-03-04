import React from "react";
import { AboutMe, Facts, Hero, Projects, Skills } from "../../components";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Facts />
      <Projects />
      <AboutMe />
      <Skills />
    </div>
  );
};

export { HomePage };
