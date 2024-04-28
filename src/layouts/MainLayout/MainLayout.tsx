import React, { ReactNode } from "react";
import { Header } from "../../components";
import { Footer } from "../../components/Footer";
import { OpacityAnimation } from "../../components/UI";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="container">{children}</div>
      <OpacityAnimation width={"100%"}>
        <Footer />
      </OpacityAnimation>
    </div>
  );
};

export { MainLayout };
