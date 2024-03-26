import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePageAsync } from "../../pages";
import { PageLoader } from "../../components/UI";

const Public: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route index element={<HomePageAsync />} />
      </Routes>
    </Suspense>
  );
};

export { Public };
