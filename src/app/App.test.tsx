import { render, screen } from "@testing-library/react";
import { App } from "./App.tsx";
import { describe } from "vitest";
import { Provider } from "react-redux";
import { setupStore } from "../store/store.ts";
import { BrowserRouter } from "react-router-dom";
import { ReactNode } from "react";

const store = setupStore();
vi.mock("../layouts", () => ({
  MainLayout: ({ children }: { children: ReactNode }) => (
    <div data-testid="main-layout">{children}</div>
  ),
}));
vi.mock("../utils", () => ({
  Public: () => <div data-testid="public-component"></div>,
}));
describe("App component", () => {
  test("should load a App component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    const mainLayoutElement = screen.getByTestId("main-layout");
    expect(mainLayoutElement).toBeInTheDocument();

    const publicComponentElement = screen.getByTestId("public-component");
    expect(publicComponentElement).toBeInTheDocument();
  });
});
