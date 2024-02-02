import React from "react";

export default function SearchField() {
  return (
    <div className="w-[490px] relative h-[48px] bg-[#242D40] rounded-full flex justify-between items-center p-8">
      <input
        type="text"
        className="w-[100%] h-[25px] bg-transparent text-[#fff] text-[18px] outline-none"
      />
      <div className="absolute right-[20px]">search</div>
    </div>
  );
}
