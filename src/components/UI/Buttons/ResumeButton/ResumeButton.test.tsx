import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ResumeButton } from "./ResumeButton";

// Мокуємо FontAwesomeIcon, оскільки нам не потрібно тестувати його функціональність у цьому тесті.
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: vi.fn(() => <div>DownloadIcon</div>),
}));

describe("ResumeButton", () => {
  it("renders ResumeButton with correct attributes and text", () => {
    render(<ResumeButton />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href");
    expect(linkElement.getAttribute("href")).toBeTruthy();
    expect(linkElement.getAttribute("download")).toBe(
      "Oleksandr_Drohomyretskyi_Resume",
    );
    expect(linkElement).toHaveAttribute("target", "_blank");

    expect(screen.getByText("Resume")).toBeInTheDocument();
    expect(screen.getByText("DownloadIcon")).toBeInTheDocument(); // Перевіряємо мок іконки
  });
});
