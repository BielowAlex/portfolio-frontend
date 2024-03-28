import { createSlice } from "@reduxjs/toolkit";

export type ModalSliceSchema = {
  isBurgerOpen: boolean;
};

const initialState: ModalSliceSchema = {
  isBurgerOpen: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    burgerToggle: (state: ModalSliceSchema) => {
      state.isBurgerOpen = !state.isBurgerOpen;
      document.body.style.overflowY = state.isBurgerOpen ? "hidden" : "unset";
    },
  },
});

const {
  reducer: modalReducer,
  actions: { burgerToggle },
} = modalSlice;

const modalActions = {
  burgerToggle,
};

export { modalActions, modalReducer };
