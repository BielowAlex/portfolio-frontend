import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input.tsx";
import { expect } from "vitest";

describe("Custom Input component", () => {
  it("Test label and value", () => {
    const label: string = "testLabel";
    const value: string = "testValue";
    const setValue = (name: string, value: string) => {
      console.log(name, value);
    };

    render(
      <Input label={label} value={value} name={label} setValue={setValue} />,
    );

    const currentInputByLabel = screen.getByLabelText(label);
    const currentInputByValue = screen.getByDisplayValue(value);
    expect(currentInputByLabel).toBeInTheDocument();
    expect(currentInputByValue).toBeInTheDocument();
  });

  it("Test change setValue", () => {
    const mockSetValue = vi.fn();

    const { getByLabelText } = render(
      <Input label="Test Label" value="" name="test" setValue={mockSetValue} />,
    );
    const input = getByLabelText("Test Label") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test value" } });
    expect(mockSetValue).toHaveBeenCalledWith("test", "test value");
  });
});
