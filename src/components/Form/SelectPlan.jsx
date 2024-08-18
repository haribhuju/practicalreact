import React from "react";
import Header from "./Header";
import Button from "../Button";
import SelectPlanCard from "./SelectPlanCard";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../store/fetaures/step";

const TTITLE = "Select your plan";
const DESCRIPTION = "You have the option of monthly or yearly billing.";

const SelectPlan = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment());
  }
  return (
    <div className=" flex flex-col h-full">
      <div className="space-y-2  mt-10">
        <Header title={TTITLE} description={DESCRIPTION} />
      </div>
      <div className="flex flex-col gap-8 my-9">
        <div className="flex justify-around">
          <SelectPlanCard />
          <SelectPlanCard />
          <SelectPlanCard />
        </div>
        <div className="bg-[#F8F9FF] w-full rounded-lg text-center py-3">
          <p className="text-[#022959] font-bold">Monthly OR Yearly</p>
        </div>
      </div>
      <div className="mt-auto mb-4 ">
        <div className="flex justify-between">
          <button
            className="text-base font-medium text-[#9699AA]"
            onClick={() => dispatch(decrement())}
          >
            Go Back
          </button>
          <Button onData={handleClick}>Next Step </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
