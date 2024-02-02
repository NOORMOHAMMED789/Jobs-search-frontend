import React from "react";
import SearchField from "./SearchField";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-[80px] bg-[#303B54] flex justify-around items-center">
      <div className="flex justify-between items-center w-[80%]">
        <div className="text-[#fff] text-[24px]">Jobs</div>
        <SearchField />
        <div className="h-[45px] w-[45px] rounded-full bg-[#242D40] ">
          <Image
            src="/Images/Person-icon.png"
            alt="image"
            className="w-full h-full"
            width={45}
            height={45}
          />
        </div>
      </div>
      <div className="h-[45px] relative flex justify-center items-center w-[45px] rounded-full bg-[#242D40]">
        <Image
          src="/Images/notification-icon.png"
          alt="notification-icon"
          width={28.75}
          height={31.05}
        />
        <div className="absolute inline-flex items-center justify-center w-[22px] h-[22px] text-xs font-bold text-[#fff] bg-red-600 border-1 border-[#fff] rounded-full -top-2 -end-2 dark:border-gray-900">
          12
        </div>
      </div>
    </div>
  );
}
