import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Textarea } from "./Textarea.tsx";

describe("Custom Textarea component", () => {
  it("Test label and value", () => {
    const label: string = "testLabel";
    const value: string = "testValue";
    const setValue = (name: string, value: string) => {
      console.log(name, value);
    };

    render(
      <Textarea label={label} value={value} name={label} setValue={setValue} />,
    );

    const currentInputByLabel = screen.getByLabelText(label);
    const currentInputByValue = screen.getByDisplayValue(value);
    expect(currentInputByLabel).toBeInTheDocument();
    expect(currentInputByValue).toBeInTheDocument();
  });

  it("Test change setValue", () => {
    const mockSetValue = vi.fn();

    render(
      <Textarea
        label="Test Label"
        value=""
        name="test"
        setValue={mockSetValue}
      />,
    );
    const input = screen.getByLabelText("Test Label") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test value" } });
    expect(mockSetValue).toHaveBeenCalledWith("test", "test value");
  });
});
