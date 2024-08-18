import React from "react";

const SelectPlanCard = () => {
  return (
    <div className="flex flex-col gap-9 border border-[#D6D9E6] rounded-lg px-4 py-5 w-[138px]">
      <div className="w-10 h-10 bg-purple-700 rounded-full flex justify-center items-center text-white">
        A
      </div>
      <div>
        <h3 className="text-[#022959] font-medium">Advanced</h3>
        <p className="text-sm text-[#9699AA] font-normal">$12/mo</p>
      </div>
    </div>
  );
};

export default SelectPlanCard;
