import React from "react";
import { AboutMe, Facts, Hero, Projects, Skills } from "../../components";
import { Contact } from "../../components/Contact";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Facts />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
