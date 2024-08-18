import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import PersonalInfo from "../components/Form/PersonalInfo";
import SelectPlan from "../components/Form/SelectPlan";
import PickAddons from "../components/Form/PickAddons";
import Summary from "../components/Form/Summary";
import Thankyou from "../components/Form/Thankyou";

const HomePage = () => {
  return (
    <div className="bg-white w-[940px] h-[600px] flex-shrink-0 rounded-lg p-4">
      <div className="flex gap-24 h-full items-center">
        <div className="w-[274px] h-full flex-shrink-0 bg-[#483EFF] rounded-xl p-10">
          <LeftSidebar />
        </div>
        <div className="flex-grow h-full pr-[94px] ">
          <div className="h-full   ">
            <PersonalInfo />
            <SelectPlan />
            <PickAddons />
            <Summary />
            <div className="flex justify-center items-center h-full">
              <Thankyou />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
