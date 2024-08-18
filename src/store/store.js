import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./fetaures/step";

const formStore = configureStore({
  reducer: {
    step: stepReducer,
  },
});

export default formStore;
