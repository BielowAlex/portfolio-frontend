import { describe, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ErrorPage } from "./ErrorPage.tsx";

describe("ErrorPage", () => {
  it("Message exist in Error", () => {
    const errorMessage: string = "Test Message";
    const error: Error = new Error(errorMessage);

    vi.mock("react-router-dom");
    vi.mock("react-error-boundary", () => {
      return {
        useErrorBoundary: () => {
          return { resetBoundary: vi.fn() };
        },
      };
    });

    render(<ErrorPage error={error} />);

    const detailsComponent = screen.queryByTestId("detail");
    const messageComponent = screen.queryByTestId("message");
    expect(messageComponent).toBeInTheDocument();
    expect(detailsComponent).toBeInTheDocument();
  });

  it("Message does not exist in Error", async () => {
    const error: Error = new Error();

    vi.mock("react-router-dom");
    vi.mock("react-error-boundary", () => {
      return {
        useErrorBoundary: () => {
          return { resetBoundary: vi.fn() };
        },
      };
    });

    render(<ErrorPage error={error} />);

    const detailsComponent = screen.queryByTestId("detail");
    const messageComponent = screen.queryByTestId("message");
    expect(messageComponent).toBeInTheDocument();
    expect(detailsComponent).not.toBeInTheDocument();
  });

  it("Click Back button", async () => {
    const error: Error = new Error();
    const { useNavigate } = await import("react-router-dom");
    const navigateMock = vi.fn();

    vi.mocked(useNavigate).mockImplementation(() => navigateMock);
    render(<ErrorPage error={error} />);

    fireEvent.click(screen.getByRole("button", { name: /Back/i }));
    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
