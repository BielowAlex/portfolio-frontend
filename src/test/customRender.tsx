import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../store/store.ts";

const store = setupStore();

export const appRender = (element: React.ReactNode) => {
  return render(
    <BrowserRouter>
      <Provider store={store}>{element}</Provider>
    </BrowserRouter>,
  );
};
