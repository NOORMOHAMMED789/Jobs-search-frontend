import React from "react";
import SearchField from "./SearchField";

export default function Header() {
  return (
    <div className="h-[80px] bg-[#303B54] flex justify-around items-center">
      <div className="flex justify-between items-center w-[80%]">
        <div className="text-[#fff] text-[24px]">Jobs</div>
        <SearchField />
        <div>Icon</div>
      </div>
      <div>Notification icon</div>
    </div>
  );
}
