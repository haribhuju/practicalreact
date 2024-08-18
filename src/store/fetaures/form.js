import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepOne: {},
  stepTwo: {},
  stepThree: {},
  StepFour: {},
};

const formSlicer = createSlice({
  name: "Form Slicer",
  initialState,
  reducers: {},
});

export default formSlicer.reducer;
