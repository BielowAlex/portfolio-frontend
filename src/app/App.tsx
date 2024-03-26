import React from "react";
import { MainLayout } from "../layouts";
import { Public } from "../utils";

const App: React.FC = () => {
  return (
    <MainLayout>
      <Public />
    </MainLayout>
  );
};

export { App };
