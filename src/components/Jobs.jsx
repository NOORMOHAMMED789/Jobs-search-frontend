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

  // useEffect(() => {
  //   let filteredData = cloneDeep(jobPosts)
  
  //   if (searchText !== "") {
  //     filteredData = filteredData.filter(post =>
  //       post.title.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //   } else if (checkedPost.length > 0) {
  //     const filteredPosts = filterJobPostsByCheckedTexts(jobPosts, checkedPost);
  //     setJobPosts(filteredPosts);
  //     dispatch({ type: actions.resultsCount, data: filteredPosts.length });
  //   } else {
  //     dispatch({ type: actions.resultsCount, data: jobPosts.length });
  //     setJobPosts(jobPosts); // Set jobPosts state to all jobPosts
  //   }
  // }, [search, searchText, checkedPost, jobPosts]);
  
  

  

  useEffect(() => {
    let filterdData = [...jobPosts]
    console.log("checkedPost",checkedPost)
    let value = filterdData.filter(d=>{
        if(d.address1.toLowerCase().includes(searchText.toLowerCase()) || 
          d.address2.toLowerCase().includes(searchText.toLowerCase()) ||
          d.date.toLowerCase().includes(searchText.toLowerCase()) || 
          d.title.toLowerCase().includes(searchText.toLowerCase()) 
        ){
          return d  
        }
    })
    
    if(searchText!="" || checkedPost.length>0){ 
      dispatch({type:actions.resultsCount, data:value.length})
      setJobPosts(value)
    }
    else{
      dispatch({type:actions.resultsCount, data:0})
      setJobPosts(jobPosts)
    }
  }, [search,checkedPost]);
  

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
