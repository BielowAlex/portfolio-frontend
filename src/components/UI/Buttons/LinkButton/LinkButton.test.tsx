import { render, screen } from "@testing-library/react";
import { LinkButton } from "./LinkButton.tsx";

describe("LinkButton", () => {
  it("renders LinkButton with correct attributes and text", () => {
    const linkText: string = "test";
    const url: string = "test";
    const target: string = "_blank";
    render(
      <LinkButton link={url} target={target}>
        {linkText}
      </LinkButton>,
    );

    const linkElement: HTMLElement = screen.getByRole("link");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href");
    expect(linkElement.getAttribute("href")).toBe(url);
    expect(linkElement).toHaveAttribute("target", target);
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });
});
