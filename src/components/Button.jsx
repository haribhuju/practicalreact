import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#022959] text-white rounded-lg text-sm font-medium px-6 py-3">
      {children}
    </button>
  );
};

export default Button;
