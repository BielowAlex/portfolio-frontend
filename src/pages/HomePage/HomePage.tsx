import React from "react";
import { AboutMe, Hero, Projects, Skills } from "../../components";
import { Contact } from "../../components/Contact";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      {/*<Facts />*/}
      <Contact />
    </div>
  );
};

export default HomePage;
