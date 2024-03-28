import { describe, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button.tsx";

describe("Custom Button Component", () => {
  it("Check children props", () => {
    const btnText = "test";

    render(<Button>{btnText}</Button>);

    const currentButton = screen.getByText(btnText);
    expect(currentButton).toBeInTheDocument();
  });
  it("Check handleClick", () => {
    const btnText = "test";
    const handleClick = vi.fn();
    render(<Button handleClick={handleClick}>{btnText}</Button>);

    fireEvent.click(screen.getByText(btnText));
    expect(handleClick).toHaveBeenCalled();
  });
});
