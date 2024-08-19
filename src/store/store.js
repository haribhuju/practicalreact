import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./fetaures/step";
import formReducer from "./fetaures/form";

const formStore = configureStore({
  reducer: {
    step: stepReducer,
    form: formReducer,
  },
});

export default formStore;
