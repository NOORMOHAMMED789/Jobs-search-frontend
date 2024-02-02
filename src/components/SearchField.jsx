import Image from "next/image";
import React from "react";

export default function SearchField() {
  return (
    <div className="w-[490px] h-[48px] bg-[#242D40] rounded-full flex justify-between items-center p-7">
      <input
        type="text"
        className="w-[100%] h-[25px] bg-transparent text-[#fff] text-[18px] outline-none"
      />
      <Image
        src="/Images/search-icon.png"
        className=""
        width={18.37}
        height={18.31}
        alt="image"
      />
    </div>
  );
}
