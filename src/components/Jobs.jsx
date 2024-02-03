"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useData } from "@/context/DataProvider";

export default function Jobs() {
  const [jobPosts, setJobPosts] = useState([]);
  const {
    state: { search, searchText },
  } = useData();
  async function fetchJobPosts() {
    try {
      let response = await fetch(
        "https://demo6163739.mockable.io/filteredData",
        {
          method: "GET",
          headers: {
            "Application-Type": "application/json",
            "Content-Type": "text/xml",
          },
        }
      );
      console.log("response post", response);
      if (response.status == 200) {
        let data = await response.json();
        console.log("filtered data is", data);
        setJobPosts(data.filteredData);
      }
    } catch (error) {
      console.log(error);
      setJobPosts([]);
    }
  }

  useEffect(() => {
    fetchJobPosts();
  }, [searchText == ""]);

  async function appliedFilteredJobPosts() {
    try {
      let response = await fetch(
        "https://demo6163739.mockable.io/appliedFilter",
        {
          method: "POST",
          headers: {
            "Application-Type": "application/json",
            "Content-Type": "text/xml",
          },
        }
      );
      console.log("response post", response);
      if (response.status == 200) {
        let data = await response.json();
        console.log("filtered data is", data);
        setJobPosts(data.filteredData);
      }
    } catch (error) {
      console.log(error);
      setJobPosts([]);
    }
  }

  useEffect(() => {
    appliedFilteredJobPosts();
  }, [search]);
  return (
    <div className="bg-[#1D2331] rounded-2xl">
      <div className="mt-[30px] p-10">
        <div className="ml-[15px] bg-gradient-to-r from-gray-500 uppercase p-2 text-[#fff] text-[16px] leading-[20px] font-light pl-[15px] rounded-full">
          Jobs
        </div>
        <div className="p-2 mt-[25px] pl-[15px]">
          <Card jobPosts={jobPosts} />
        </div>
      </div>
    </div>
  );
}
