import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import PersonalInfo from "../components/Form/PersonalInfo";
import SelectPlan from "../components/Form/SelectPlan";
import PickAddons from "../components/Form/PickAddons";
import Summary from "../components/Form/Summary";
import Thankyou from "../components/Form/Thankyou";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { stepCount } = useSelector((data) => data.step);
  const stepHandler = () => {
    switch (stepCount) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <PickAddons />;
      case 4:
        return <Summary />;
      case 5:
        return (
          <div className="flex justify-center items-center h-full">
            <Thankyou />
          </div>
        );
    }
  };
  return (
    <div className="bg-white w-[940px] h-[600px] flex-shrink-0 rounded-lg p-4">
      <div className="flex gap-24 h-full items-center">
        <div className="w-[274px] h-full flex-shrink-0 bg-[#483EFF] rounded-xl p-10">
          <LeftSidebar stepCount={stepCount} />
        </div>
        <div className="flex-grow h-full pr-[94px] ">
          <div className="h-full">{stepHandler()}</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
