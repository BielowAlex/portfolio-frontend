import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Title } from "./Title.tsx";

describe("Title component", () => {
  it("renders correctly with title prop", () => {
    const testTitle = "Test Title";
    render(<Title title={testTitle} />);

    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });
  // it.skip("starts visible animation when in view", () => {
  //   // Задаємо початковий стан useInView як true, щоб симулювати видимість
  //   vi.mock("framer-motion", async (importOriginal) => {
  //     const actual: unknown = await importOriginal();
  //
  //     return {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-expect-error
  //       ...actual,
  //       motion: {
  //         div: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  //       },
  //       useAnimation: vi.fn(() => ({
  //         start: vi.fn(),
  //       })),
  //       useInView: vi.fn(() => true),
  //     };
  //   });
  //
  //   // Рендеримо компонент і перевіряємо, чи стартує анімація правильно
  //   const titleController = {
  //     start: new Promise(vi.fn()),
  //   };
  //
  //   console.log(titleController);
  //   const lineController = {
  //     start: vi.fn(),
  //   };
  //
  //   render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <Title title="Test Title" />
  //       </Provider>
  //     </BrowserRouter>,
  //   );
  //
  //   expect(titleController?.start).toHaveBeenCalledWith(expect.anything());
  //   expect(lineController?.start).toHaveBeenCalledWith(expect.anything());
  // });
});
