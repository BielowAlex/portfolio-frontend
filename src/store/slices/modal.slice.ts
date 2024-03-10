import { createSlice } from "@reduxjs/toolkit";

type State = {
  isBurgerOpen: boolean;
};

const initialState: State = {
  isBurgerOpen: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    burgerToggle: (state: State) => {
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
