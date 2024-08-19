import React from "react";
import Header from "./Header";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../store/fetaures/step";

const TTITLE = "Finishing up";
const DESCRIPTION = "Double-check everything looks OK before confirming.";

const Summary = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment());
  }
  return (
    <div className=" flex flex-col h-full">
      <div className="space-y-2  mt-10">
        <Header title={TTITLE} description={DESCRIPTION} />
      </div>
      <div className="my-9 flex flex-col gap-6">
        <div className="bg-[#F8F9FF] rounded-lg px-6 py-4">
          <div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#022959] text-base font-medium">
                  Arcade (Monthly)
                </p>
                <p className="text-[#9699AA] text-sm">Change</p>
              </div>
              <div>
                <p className="text-[#022959] text-base font-bold">$9/mo</p>
              </div>
            </div>
            <hr className="mt-6 mb-4" />
            <div className="flex flex-col gap-3">
              <div className="flex justify-between  ">
                <p className="text-[#9699AA] text-sm">Online Service</p>
                <p className="text-[#022959] text-sm ">+$1/mo</p>
              </div>
              <div className="flex justify-between  ">
                <p className="text-[#9699AA] text-sm">Larger Storage</p>
                <p className="text-[#022959] text-sm ">+$2/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-6 ">
          <p className="text-[#9699AA] text-sm">Total (per month)</p>
          <p className="text-[#483EFF] text-xl font-bold">+$12/mo</p>
        </div>
      </div>
      <div className="mt-auto mb-4 ">
        <div className="flex justify-between">
          <button
            className="text-base font-medium text-[#9699AA]"
            onClick={() => dispatch(decrement())}
          >
            Go Back
          </button>
          <Button onData={handleClick} step={4}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
