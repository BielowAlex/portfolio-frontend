import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices";

export const rootReducer = combineReducers({
  modalReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
