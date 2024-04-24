import React from "react";
import { AboutMe, Facts, Hero, Projects, Skills } from "../../components";
import { Contact } from "../../components/Contact";

const HomePage: React.FC = () => {
  return (
    <div>
      {/*<ErrorPage error={new Error("bad face")} />*/}
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Facts />
      <Contact />
    </div>
  );
};

export default HomePage;
