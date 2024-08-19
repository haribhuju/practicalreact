import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepOne: {
    name: "Hari",
    email: "haro@gmail.com",
    phoneNumber: "1234567890",
  },
  stepTwo: [
    {
      type: "Monthly",
      isSelected: true,
      plans: [
        { name: "Arcade", price: 9, isSelected: true },
        { name: "Advanced", price: 12, isSelected: false },
        { name: "Pro", price: 15, isSelected: false },
      ],
    },
    {
      type: "Annually",
      isSelected: false,
      plans: [
        { name: "Arcade", price: 90, isSelected: true },
        { name: "Advanced", price: 120, isSelected: false },
        { name: "Pro", price: 150, isSelected: false },
      ],
    },
  ],

  stepThree: {},
  StepFour: {},
};

const formSlicer = createSlice({
  name: "Form Slicer",
  initialState,
  reducers: {
    addStepOneInfo: (state, action) => {},
    togglePlan: (state, action) => {
      const { price, selectedType } = action.payload;

      state.stepTwo = state.stepTwo.map((item) => {
        if (item.type === selectedType) {
          return {
            ...item,
            plans: item.plans.map((plan) => ({
              ...plan,
              isSelected: plan.price === price,
            })),
          };
        }
        return item;
      });
    },
    toggleType: (state) => {
      state.stepTwo = state.stepTwo.map((item) => ({
        ...item,
        isSelected: !item.isSelected,
      }));
    },
  },
});

export const { toggleType, togglePlan } = formSlicer.actions;

export default formSlicer.reducer;
