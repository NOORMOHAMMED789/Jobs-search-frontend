"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Filter() {
  const [showSubFilters, setSShowSubFilters] = useState(false);
  const [filters, setFilters] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [checkVal, setCheckVal] = useState("");
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
        { name: "Bengaluru", code: "AZ" },
        { name: "Vizag", code: "Ch" },
        { name: "Pune", code: "Ty" },
        { name: "Hyderabad", code: "Ap" },
      ],
    },
    {
      name: "Date Posted",
      companies: [
        { name: "Last 24 hours", code: "AZ" },
        { name: "Last 48 hours", code: "Ch" },
        { name: "Last week", code: "Ty" },
        { name: "Last month", code: "Ap" },
      ],
    },
    {
      name: "Salary Range",
      companies: [
        { name: "3+ lakhs", code: "AZ" },
        { name: "5+ lakhs", code: "Ch" },
        { name: "7+ lakhs", code: "Ty" },
        { name: "10+ lakhs", code: "Ap" },
      ],
    },
    {
      name: "Skills",
      companies: [
        { name: "React Js", code: "AZ" },
        { name: "Next Js", code: "Ch" },
        { name: "Javascript", code: "Ty" },
        { name: "Node js", code: "Ap" },
      ],
    },
    {
      name: "Experience",
      companies: [
        { name: "1 year", code: "AZ" },
        { name: "2 years", code: "Ch" },
        { name: "3 years", code: "Ty" },
        { name: "4 years", code: "Ap" },
      ],
    },
    {
      name: "Education",
      companies: [
        { name: "B.tech", code: "AZ" },
        { name: "Degree", code: "Ch" },
        { name: "M.tech", code: "Ty" },
        { name: "B.com", code: "Ap" },
      ],
    },
  ];

  async function fetchData() {
    try {
      let response = await fetch("http://demo6163739.mockable.io/data", {
        method: "GET",
        header: {
          "Application-Type": "application/json",
          "Content-Type": "text/json",
        },
      });
      if (response.status == 200) {
        let data = await response.json();
        console.log("data is", data);
        setFilters(data.filters);
      }
    } catch (error) {
      console.log(error);
      setFilters(array);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  function openSubFilters(id) {
    console.log("id", id);
    setIdVal(id);
    setSShowSubFilters(true);
    if (showSubFilters) setSShowSubFilters(false);
  }
  function onInputChange(e, name, id) {
    console.log("checked", e.target.checked, name);
    setCheckVal(name);
    if (!e.target.checked) setCheckVal("");
    setAppliedFilters([]);
  }

  useEffect(() => {
    if (checkVal) setAppliedFilters(checkVal);
  }, [checkVal]);
  return (
    <div className="w-[100%] dark-shadow-2xl">
      <div className="text-white gap-10 border-b-[0.5px] h-[65px] relative">
        <div className="text-[20px] leading-[25px] pl-[15px] absolute bottom-[10px]">
          Filter by
        </div>
        <div className="absolute right-[75px] text-[12px] bottom-[10px] leading-[19px]">
          {`${appliedFilters.length} filters applied`}
        </div>
        <div className="underline absolute right-[25px] bottom-[12px] cursor-pointer">
          Clear all
        </div>
      </div>
      <div className="w-[100%]">
        {filters.map((item, id) => {
          return (
            <div
              key={id}
              className={`text-[#fff] hover:cursor-pointer hover:${
                showSubFilters ? "" : "bg-gray-900"
              } text-[16px] pl-[26px] pb-[10px] relative pt-[15px] border-b w-[100%]`}
            >
              <label
                onClick={() => openSubFilters(id)}
                className="cursor-pointer"
              >
                {item.name}
              </label>
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
                      <input
                        onChange={(e) => onInputChange(e, comp.name, id)}
                        type="checkbox"
                        value={comp.code}
                      />
                      <label key={id}>{comp.name}</label>
                    </div>
                  );
                })}
              </div>
              <Image
                src="/Images/arrow.png"
                alt="arrow-mark"
                width={16}
                height={10}
                onClick={() => openSubFilters(id)}
                className={`${
                  showSubFilters && idVal == id
                    ? "rotate-180 transition duration-500"
                    : "rotate-0 transition duration-500"
                } absolute right-[25px] top-[25px] cursor-pointer p-1`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
