import React from "react";
import Header from "./Header";
import Button from "../Button";

import PickAddonsCard from "./PickAddonsCard";

const TTITLE = "Pick add-ons";
const DESCRIPTION = "Add-ons help enhance your gaming experience.";

const PickAddons = () => {
  return (
    <div className=" flex flex-col h-full">
      <div className="space-y-2  mt-10">
        <Header title={TTITLE} description={DESCRIPTION} />
      </div>
      <div className="my-9">
        <div className="flex flex-col gap-4 ">
          <PickAddonsCard />
          <PickAddonsCard />
          <PickAddonsCard />
        </div>
      </div>
      <div className="mt-auto mb-4 ">
        <div className="flex justify-between">
          <button className="text-base font-medium text-[#9699AA]">
            Go Back
          </button>
          <Button>Next Step </Button>
        </div>
      </div>
    </div>
  );
};

export default PickAddons;
