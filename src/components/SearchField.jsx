"use client";
import { useData } from "@/context/DataProvider";
import { actions } from "@/context/State";
import Image from "next/image";
import React, { useState } from "react";

export default function SearchField() {
  const [inputVal, setInputVal] = useState("Analyst");
  const {
    state: { searchText },
    dispatch,
  } = useData();

  function onSearchChange(val) {
    setInputVal(val);
    dispatch({ type: actions.searchText, data: val });
  }
  return (
    <div className="w-[490px] h-[48px] bg-[#242D40] rounded-full flex justify-between items-center p-7">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => onSearchChange(e.target.value)}
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
