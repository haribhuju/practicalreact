import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
  name: "step",
  initialState: { stepCount: 1 },
  reducers: {
    increment: (state) => {
      state.stepCount += 1;
    },
    decrement: (state) => {
      state.stepCount -= 1;
    },
    reset: (state) => {
      state.stepCount = 1;
    },
  },
});

export const { increment, decrement, reset } = stepSlice.actions;

export default stepSlice.reducer;
