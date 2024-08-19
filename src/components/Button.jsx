import React from "react";

const Button = ({ children, onData, step }) => {
  function handleClick() {
    onData();
  }
  return (
    <button
      className={
        step === 4
          ? "text-white rounded-lg text-sm font-medium px-6 py-3 bg-[#483EFF]"
          : "bg-[#022959] text-white rounded-lg text-sm font-medium px-6 py-3"
      }
      onClick={() => handleClick()}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
