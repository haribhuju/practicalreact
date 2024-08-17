import React from "react";

const DataRender = ({ children, isloading, error }) => {
  if (isloading) {
    return <div className="mt-4">Loading.....</div>;
  }

  if (error) {
    return <div className="text-center mt-4">{error}</div>;
  }
  return children;
};

export default DataRender;
