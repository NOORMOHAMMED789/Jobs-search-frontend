"use client";
import { useData } from "@/context/DataProvider";
import { actions } from "@/context/State";
import Image from "next/image";
import React, { useState } from "react";

export default function SearchField() {
  const [inputVal, setInputVal] = useState("");
  const {
    state: { searchText, search },
    dispatch,
  } = useData();

  function onSearchChange(val) {
    setInputVal(val);
    dispatch({ type: actions.searchText, data: val });
    if (val == "") dispatch({ type: actions.search, data: false });

  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: actions.search, data: !search });
  }
  return (
    <div className="w-[490px] h-[48px] bg-[#242D40] rounded-full flex justify-between items-center p-7">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for job title..."
          value={inputVal}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-[100%] h-[25px] bg-transparent text-[#fff] text-[18px] outline-none"
        />
      </form>
      <div onClick={handleSubmit}>
        <Image
          src="/Images/search-icon.png"
          className=""
          width={18.37}
          height={18.31}
          alt="image"
        />
      </div>
    </div>
  );
}
