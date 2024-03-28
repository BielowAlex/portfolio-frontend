import { describe, expect, test } from "vitest";
import { modalActions, modalReducer, ModalSliceSchema } from "./modal.slice.ts";

describe("Modal slice", () => {
  test("Burger modal toggle", () => {
    const state: ModalSliceSchema = {
      isBurgerOpen: false,
    };

    expect(modalReducer(state, modalActions.burgerToggle())).toEqual({
      isBurgerOpen: !state.isBurgerOpen,
    });
  });
});
