import Image from "next/image";
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
            <div className="flex justify-between items-center">
              <div className="flex gap-10">
                <div>
                  <Image
                    src={card.src}
                    alt="apple-icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div>
                  <div className="text-[20px] text-[#fff] leading-[24.36px] pb-3">
                    {card.title}
                  </div>
                  <div className="text-[16px] text-[#fff] leading-[24px]">
                    {card.address1}
                  </div>
                  <div className="text-[16px] text-[#fff] font-normal leading-[24px]">
                    {card.address2}
                  </div>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="text-[#fff] text-[16px] leading-[26px] font-bold">
                  skill match
                </div>
                <div className="h-[72px] w-[72px] rounded-full ring-4 flex justify-center items-center pt-[25px] ring-[#5CA4A9]">
                  <div className="h-[47px] w-[39px] text-[#fff] text-[20px] leading-[20px] font-bold">
                    {card.percent}%
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#454e63]"></div>
          </div>
        );
      })}
    </div>
  );
}
