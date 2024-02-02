"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Filter() {
  const [showSubFilters, setSShowSubFilters] = useState(false);
  const [idVal, setIdVal] = useState(0);
  let array = [
    {
      name: "Company",
      companies: [
        { name: "Amazon", code: "AZ" },
        { name: "CVS Health", code: "Ch" },
        { name: "Toyoto", code: "Ty" },
        { name: "Apple", code: "Ap" },
      ],
    },
    {
      name: "Location",
      companies: [
        { name: "Amazon", code: "AZ" },
        { name: "CVS Health", code: "Ch" },
        { name: "Toyoto", code: "Ty" },
        { name: "Apple", code: "Ap" },
      ],
    },
    {
      name: "Date Posted",
      companies: [
        { name: "Amazon", code: "AZ" },
        { name: "CVS Health", code: "Ch" },
        { name: "Toyoto", code: "Ty" },
        { name: "Apple", code: "Ap" },
      ],
    },
    {
      name: "Salary Range",
      companies: [
        { name: "Amazon", code: "AZ" },
        { name: "CVS Health", code: "Ch" },
        { name: "Toyoto", code: "Ty" },
        { name: "Apple", code: "Ap" },
      ],
    },
    {
      name: "Skills",
      companies: [
        { name: "Amazon", code: "AZ" },
        { name: "CVS Health", code: "Ch" },
        { name: "Toyoto", code: "Ty" },
        { name: "Apple", code: "Ap" },
      ],
    },
    {
      name: "Experience",
      companies: [
        { name: "Amazon", code: "AZ" },
        { name: "CVS Health", code: "Ch" },
        { name: "Toyoto", code: "Ty" },
        { name: "Apple", code: "Ap" },
      ],
    },
    {
      name: "Education",
      companies: [
        { name: "Amazon", code: "AZ" },
        { name: "CVS Health", code: "Ch" },
        { name: "Toyoto", code: "Ty" },
        { name: "Apple", code: "Ap" },
      ],
    },
  ];

  function openSubFilters(id) {
    console.log("id", id);
    setIdVal(id);
    setSShowSubFilters(true);
    if (showSubFilters) setSShowSubFilters(false);
  }
  return (
    <div className="w-[100%] dark-shadow-2xl">
      <div className="text-white gap-10 border-b-[0.5px] h-[65px] relative">
        <div className="text-[20px] leading-[25px] pl-[15px] absolute bottom-[10px]">
          Filter by
        </div>
        <div className="absolute right-[75px] text-[12px] bottom-[10px] leading-[19px]">
          3 filter applied
        </div>
        <div className="underline absolute right-[25px] bottom-[12px]">
          Clear all
        </div>
      </div>
      <div className="w-[100%]">
        {array.map((item, id) => {
          return (
            <div
              onClick={() => openSubFilters(id)}
              key={id}
              className={`text-[#fff] hover:cursor-pointer hover:${
                showSubFilters ? "" : "bg-gray-900"
              } text-[16px] pl-[26px] pb-[10px] relative pt-[15px] border-b w-[100%]`}
            >
              <label>{item.name}</label>
              <div
                className={`${
                  showSubFilters && idVal == id
                    ? "block transition duration-400"
                    : "hidden transition duration-400"
                } pt-3`}
              >
                {item.companies.map((comp, id) => {
                  return (
                    <div key={id} className="flex gap-3 pb-2">
                      <input type="checkbox" value={comp.code} />
                      <label key={id}>{comp.name}</label>
                    </div>
                  );
                })}
              </div>
              <Image
                src="/Images/arrow.png"
                alt="arrow-mark"
                width={11}
                height={6}
                onClick={() => openSubFilters(id)}
                className={`${
                  showSubFilters && idVal == id
                    ? "rotate-180 transition duration-500"
                    : "rotate-0 transition duration-500"
                } absolute right-[25px] top-[25px] cursor-pointer`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
