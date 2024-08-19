import React from "react";
import Button from "../Button";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/fetaures/step";
import { useForm } from "react-hook-form";
import { personalInfoSchema } from "../../libs/validate";
import { yupResolver } from "@hookform/resolvers/yup";

const TTITLE = "Personal Info";
const DESCRIPTION = "Please provide your name, email address, and phone number";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { stepOne } = useSelector((state) => state.form);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
  });

  function handleClick(data) {
    console.log(data);
    dispatch(increment());
  }

  console.log(stepOne);
  return (
    <div className=" flex flex-col h-full">
      <div className="space-y-2  mt-10">
        <Header title={TTITLE} description={DESCRIPTION} />
      </div>
      <form
        className="flex flex-col h-full"
        onSubmit={handleSubmit(handleClick)}
      >
        <div className="flex flex-col gap-6 my-9">
          <div className="flex flex-col gap-2 text-[#022959]">
            <div className="flex  justify-between">
              <label htmlFor="name" className="text-sm ">
                Name
              </label>
              {errors.name && (
                <span className="text-sm font-bold text-[#EE374A]">
                  {errors.name.message}
                </span>
              )}
            </div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Stephen King"
              value={stepOne.name}
              className={`border border-[#D6D9E6] rounded-lg px-4 py-3 max-h-[48px] text-base font-medium ${
                errors.name
                  ? "border-[#EE374A] focus:outline-none ative:outline-none"
                  : "border-[#D6D9E6]"
              }`}
              {...register("name")}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex  justify-between">
              <label htmlFor="email" className="text-sm ">
                Email Address
              </label>
              {errors.email && (
                <span className="text-sm font-bold text-[#EE374A]">
                  {errors.email.message}
                </span>
              )}
            </div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="e.g. stephenking@gmail.com"
              value={stepOne.email}
              className={`border border-[#D6D9E6] rounded-lg px-4 py-3 max-h-[48px] text-base font-medium ${
                errors.email
                  ? "border-[#EE374A] focus:outline-none ative:outline-none"
                  : "border-[#D6D9E6]"
              }`}
              {...register("email", { required: "This field is required" })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex  justify-between">
              <label htmlFor="phonenumber" className="text-sm ">
                Phone Number
              </label>
              {errors.phonenumber && (
                <span className="text-sm font-bold text-[#EE374A]">
                  {errors.phonenumber.message}
                </span>
              )}
            </div>
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="e.g. +1 234 567 890"
              value={stepOne.phoneNumber}
              className={`border rounded-lg px-4 py-3 max-h-[48px] text-base font-medium ${
                errors.phonenumber
                  ? "border-[#EE374A] focus:outline-none ative:outline-none"
                  : "border-[#D6D9E6]"
              }`}
              {...register("phonenumber", {
                required: "This field is required",
              })}
            />
          </div>
        </div>
        <div className="mt-auto mb-4 self-end">
          <Button onData={handleClick}>Next Step </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
