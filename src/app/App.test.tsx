import { render, screen } from "@testing-library/react";
import { App } from "./App.tsx";
import { expect } from "vitest";
import { Provider } from "react-redux";
import { setupStore } from "../store/store.ts";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();

it("should load a App component", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
  const message = screen.queryByText(/Alex Bielow/);
  console.log(message?.innerHTML);
  expect(message).toBeDefined();
});
