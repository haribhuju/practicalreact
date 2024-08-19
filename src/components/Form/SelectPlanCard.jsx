import React from "react";

const SelectPlanCard = ({ item, onData }) => {
  function handleClick(data) {
    onData(data);
  }
  return (
    <div
      onClick={() => handleClick(item.price)}
      className={`flex flex-col gap-9 border  rounded-lg px-4 py-5 w-[138px] cursor-pointer ${
        item.isSelected ? "border-[#483EFF] bg-[#F8F9FF]" : "border-[#D6D9E6]"
      }`}
    >
      <div className="w-10 h-10 bg-purple-700 rounded-full flex justify-center items-center text-white">
        A
      </div>
      <div>
        <h3 className="text-[#022959] font-medium">{item.name}</h3>
        <p className="text-sm text-[#9699AA] font-normal">${item.price}/mo</p>
      </div>
    </div>
  );
};

export default SelectPlanCard;
