import React, { useState } from "react";
import Header from "./Header";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/fetaures/step";
import { toggleType, togglePlan } from "../../store/fetaures/form";
import SelectPlanCard from "./SelectPlanCard";
import Button from "../Button";

const TTITLE = "Select your plan";
const DESCRIPTION = "You have the option of monthly or yearly billing.";

const SelectPlan = () => {
  const dispatch = useDispatch();
  const { stepTwo } = useSelector((state) => state.form);

  const [selectedType, setSelectedType] = useState("Monthly");

  function handleClick() {
    dispatch(increment());
  }

  function handleTypeClickRedux(data) {
    setSelectedType(data);
    dispatch(toggleType());
  }

  function handlePlanClickRedux(price) {
    dispatch(togglePlan({ price, selectedType }));
  }
  const selectedPlan = stepTwo.find((item) => item.type === selectedType).plans;

  return (
    <div className=" flex flex-col h-full">
      <div className="space-y-2  mt-10">
        <Header title={TTITLE} description={DESCRIPTION} />
      </div>
      <div className="flex flex-col gap-8 my-9">
        <div className="flex justify-around">
          {selectedPlan.map((item, index) => (
            <SelectPlanCard
              item={item}
              onData={handlePlanClickRedux}
              key={index}
            />
          ))}
        </div>
        <div className="bg-[#F8F9FF] w-full rounded-lg flex gap-4 justify-center py-3">
          {stepTwo.map((item, index) => (
            <button
              onClick={() => handleTypeClickRedux(item.type)}
              key={index}
              className={`text-[#022959] border border-purple-800  px-6 py-2   rounded-lg ${
                item.isSelected ? "  font-bold bg-white" : " border-dashed "
              }`}
            >
              {item.type}
            </button>
          ))}
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
