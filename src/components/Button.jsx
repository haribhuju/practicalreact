import React from "react";

const Button = ({ children, onData }) => {
  function handleClick() {
    onData();
  }
  return (
    <button
      className="bg-[#022959] text-white rounded-lg text-sm font-medium px-6 py-3"
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

export default Button;
