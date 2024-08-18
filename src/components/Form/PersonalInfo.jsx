import React from "react";
import Button from "../Button";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { increment } from "../../store/fetaures/step";

const TTITLE = "Personal Info";
const DESCRIPTION = "Please provide your name, email address, and phone number";

const PersonalInfo = () => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment());
  }
  return (
    <div className=" flex flex-col h-full">
      <div className="space-y-2  mt-10">
        <Header title={TTITLE} description={DESCRIPTION} />
      </div>
      <div className="flex flex-col gap-6 my-9">
        <div className="flex flex-col gap-2 text-[#022959]">
          <label htmlFor="name" className="text-sm ">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="border border-[#D6D9E6] rounded-lg px-4 py-3 max-h-[48px] text-base font-medium"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="email" className="text-sm ">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="e.g. stephenking@gmail.com"
            className="border border-[#D6D9E6] rounded-lg px-4 py-3 max-h-[48px] text-base font-medium "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="text-sm ">
            Phone Number
          </label>
          <input
            type="text"
            name="phonenumber"
            id="phonenumber"
            placeholder="e.g. +1 234 567 890"
            className="border border-[#D6D9E6] rounded-lg px-4 py-3 max-h-[48px] text-base font-medium"
          />
        </div>
      </div>
      <div className="mt-auto mb-4 self-end">
        <Button onData={handleClick}>Next Step </Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
