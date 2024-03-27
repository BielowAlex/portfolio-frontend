import React from "react";
import { MainLayout } from "../layouts";
import { Public } from "../utils";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "../pages/ErrorPage";

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <MainLayout>
        <Public />
      </MainLayout>
    </ErrorBoundary>
  );
};

export { App };
