import React, { ReactNode } from "react";
import { Header } from "../../components";
import { Footer } from "../../components/Footer";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ width: "100%", minHeight: "100%" }}>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export { MainLayout };
