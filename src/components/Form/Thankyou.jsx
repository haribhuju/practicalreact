import React from "react";
import check from "../../assets/check.svg";

const Thankyou = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <img src={check} alt="svg" />
      <div className="text-center space-y-4">
        <p className="text-3xl text-[#022959] font-bold">Thank you!</p>
        <p className="text-base text-[#9699AA]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
