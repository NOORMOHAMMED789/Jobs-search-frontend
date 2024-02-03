import React from "react";

export default function Card() {
  let data = [
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
    },
  ];
  return (
    <div>
      {data.map((card, id) => {
        return (
          <div
            key={id}
            className="w-full mb-[20px] h-[204px] bg-[#323C52] rounded-[12.94px] p-11"
          >
            <div className=""></div>
            <div className="bg-[#454e63]"></div>
          </div>
        );
      })}
    </div>
  );
}
