import React from "react";
import Card from "./Card";

export default function Jobs() {
  return (
    <div className="bg-[#1D2331] rounded-2xl">
      <div className="mt-[30px] p-10">
        <div className="uppercase p-2 border-[0.5px] text-[#fff] text-[16px] leading-[20px] font-light pl-[15px] rounded-full">
          Jobs
        </div>
        <Card />
      </div>
    </div>
  );
}
