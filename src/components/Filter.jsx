"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Filter() {
  const [showSubFilters, setSShowSubFilters] = useState(false);
  const [id, setId] = useState(0);
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

  function openSubFilters(company, id) {
    setId(company);
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
              key={id}
              className="text-[#fff] text-[16px] pl-[26px] pb-[10px] relative mt-[15px] border-b w-[100%]"
            >
              <label>{item.name}</label>
              <div
                className={`${showSubFilters && id == id ? "block" : "hidden"}`}
              >
                {item.companies.map((comp, id) => {
                  return <div key={id}>{comp.name}</div>;
                })}
              </div>
              <Image
                src="/Images/arrow.png"
                alt="arrow-mark"
                width={11}
                height={6}
                onClick={() => openSubFilters(item)}
                className="absolute right-[25px] bottom-[50%] cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
