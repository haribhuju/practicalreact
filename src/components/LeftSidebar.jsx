import React from "react";
const steps = [
  { id: 1, name: "Your Info" },
  { id: 2, name: "Select Plan" },
  { id: 3, name: "Add-ons" },
  { id: 4, name: "Summary" },
];

const LeftSidebar = ({ stepCount }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {steps.map((item) => (
          <div className=" flex gap-4 items-center " key={item.id}>
            <button
              className={
                stepCount === item.id
                  ? "rounded-full w-[33px] h-[33px] bg-[#bfe2fd] "
                  : "text-white rounded-full w-[33px] h-[33px] border border-white bg-transparent flex-shrink-0"
              }
            >
              {item.id}
            </button>
            <div>
              <span className="text-[#ABBCFF] text-xs uppercase">
                Step {item.id}
              </span>
              <h3 className="text-white text-sm font-bold uppercase">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftSidebar;
