import React from "react";
import SearchField from "./SearchField";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-[80px] bg-[#303B54] flex items-center mb-[56px]">
      <div className="flex justify-between items-center w-[80%] mr-[25px] pl-[67px]">
        <div className="text-[#fff] text-[24px]">Jobs</div>
        <SearchField />
        <div className="h-[45px] w-[45px] flex justify-center flex-col items-center rounded-full bg-[#242D40] ">
          <Image
            src="/Images/head.png"
            alt="image"
            className=""
            width={12}
            height={12}
          />
          <Image
            src="/Images/body.png"
            alt="body-image"
            width={18}
            height={10}
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
