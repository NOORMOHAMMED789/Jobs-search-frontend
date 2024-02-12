"use client";
import { useData } from "@/context/DataProvider";
import { actions } from "@/context/State";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Filter() {
  const [showSubFilters, setSShowSubFilters] = useState(false);
  const [filters, setFilters] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [checkVal, setCheckVal] = useState("");
  const [idVal, setIdVal] = useState(0);
  const [loading, setLoading] = useState(false);
  const {
    state: { searchText, search, getAllPosts },
    dispatch,
  } = useData();


  async function fetchData() {
    setLoading(true);
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
        setLoading(false);
        setFilters(data.filters);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
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
    setCheckVal(name);
    if (e.target.checked) dispatch({ type: actions.search, data: !search });
    else dispatch({ type: actions.searchText, data: "" });
  }

  return (
    <div className="w-[100%] dark-shadow-2xl">
      <div className="text-white gap-10 border-b-[0.5px] h-[65px] relative">
        <div className="text-[20px] leading-[25px] pl-[15px] absolute bottom-[10px]">
          Filter by
        </div>
        <div className="absolute right-[75px] text-[12px] bottom-[10px] leading-[19px]">
          {`${appliedFilters.length} filters applied`}
        </div>
        <div
          onClick={() => dispatch({ type: actions.searchText, data: "" })}
          className="underline absolute right-[25px] bottom-[12px] cursor-pointer"
        >
          Clear all
        </div>
      </div>
      <div className="w-[100%]">
        {loading && <div>Please wait...</div>}
        {!loading &&
          filters.map((item, id) => {
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
                  {item.companies.map((comp, itemId) => {
                    return (
                      <div key={itemId} className="flex gap-3 pb-2">
                        <input
                          onChange={(e) => onInputChange(e, comp.name, itemId)}
                          type="checkbox"
                          value={comp.code}
                        />
                        <label id={id} key={id}>
                          {comp.name}
                        </label>
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
