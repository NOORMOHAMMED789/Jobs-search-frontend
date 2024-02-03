import React from "react";
import Card from "./Card";

export default function Jobs() {
  return (
    <div className="bg-[#1D2331] rounded-2xl">
      <div className="mt-[30px] p-10">
        <div className=" bg-gradient-to-r from-gray-500 uppercase p-2 text-[#fff] text-[16px] leading-[20px] font-light pl-[15px] rounded-full">
          Jobs
        </div>
        <div className="p-2 mt-[25px] pl-[15px]">
          <Card />
        </div>
      </div>
    </div>
  );
}
