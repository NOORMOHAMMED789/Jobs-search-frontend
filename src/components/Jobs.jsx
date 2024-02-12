"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useData } from "@/context/DataProvider";
import { actions } from "@/context/State";

export default function Jobs() {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [checkedPostsData, setCheckedPostData] = useState([])
  const {
    state: { search, searchText, checkedPost }, dispatch
  } = useData();
  async function fetchJobPosts() {
    setLoading(true)
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
        setLoading(false)
        let data = await response.json();
        console.log("filtered data is", data);
        setJobPosts(data.filteredData);
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
      setJobPosts([]);
    }
  }

  useEffect(() => {
    fetchJobPosts();
  }, [searchText==""]);
 
  function filterJobPostsByCheckedTexts(posts, searchTexts) {
    if (searchTexts.length === 0) {
      return posts; // Return all jobPosts if no texts are selected
    }
    
    return posts.filter(post => {
      for (const text of searchTexts) {
        let found = false;
        for (const key in post) {
          if (post.hasOwnProperty(key) && typeof post[key] === 'string' && post[key].toLowerCase().includes(text.toLowerCase())) {
            found = true;
            break;
          }
        }
        if (found) {
          return true; // If any of the search texts are found in the post, return true
        }
      }
      return false; // If none of the search texts are found in the post, return false
    });
  }
  

  

useEffect(() => {
  let filteredData = [...jobPosts];


  // if (searchText !== "") {
  //   filteredData = filteredData.filter(post =>
  //     post.title.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   dispatch({ type: actions.resultsCount, data: filteredData.length });
  // } else {
  //   dispatch({ type: actions.resultsCount, data: 0 });
  // }

  // // Apply additional filtering based on checkedPost
  // if (checkedPost.length > 0) {
  //   filteredData = filterJobPostsByCheckedTexts(filteredData, checkedPost);
  // }

  // // Set the jobPosts state with the filtered data
  // setJobPosts(filteredData);
}, [search, searchText, checkedPost]);

useEffect(() => {
  let filteredData = [...jobPosts];

  // Apply additional filtering based on checkedPost
  const filteredPosts = filterJobPostsByCheckedTexts(jobPosts, checkedPost);

  // Set jobPosts state based on filtered data
  if (searchText !== "") {
    filteredData = filteredData.filter(post =>
      post.title.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch({ type: actions.resultsCount, data: filteredData.length });
  } else if (checkedPost.length > 0) {
    setJobPosts(filteredPosts);
    dispatch({ type: actions.resultsCount, data: filteredPosts.length });
  } else {
    setJobPosts(jobPosts); // Set jobPosts to all jobPosts
    dispatch({ type: actions.resultsCount, data: jobPosts.length });
  }
}, [search, searchText, checkedPost, jobPosts]);



  console.log("checked posts are",jobPosts)
 
  


  return (
    <div className="bg-[#1D2331] rounded-2xl">
      <div className="mt-[30px] p-10">
        <div className="ml-[15px] bg-gradient-to-r from-gray-500 uppercase p-2 text-[#fff] text-[16px] leading-[20px] font-light pl-[15px] rounded-full">
          Jobs
        </div>
        <div className="p-2 mt-[25px] pl-[15px]">
          <Card jobPosts={jobPosts} loading={loading}/>
        </div>
      </div>
    </div>
  );
}
