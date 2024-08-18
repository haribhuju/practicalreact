import React from "react";

const Header = ({ title, description }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-[#022959]">{title}</h1>
      <p className="text-[#9699AA]">{description}</p>
    </>
  );
};

export default Header;
