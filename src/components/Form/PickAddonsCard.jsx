import React from "react";

const PickAddonsCard = () => {
  return (
    <div className="flex justify-between items-center border border-[#D6D9E6] rounded-lg px-6 py-4">
      <div className="flex gap-4 items-center">
        <div>
          <input type="checkbox" name="addons" id="addons" />
        </div>
        <div>
          <h3 className="text-base font-medium text-[#022959]">
            Online Service
          </h3>
          <p className="text-sm text-[#9699AA]">Access to mulitplayer games</p>
        </div>
      </div>
      <div>
        <p className="text-[#483EFF] text-sm">+$1/mo</p>
      </div>
    </div>
  );
};

export default PickAddonsCard;
