import Image from "next/image";
import React from "react";

export default function Card(props) {
  let data = [
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
    {
      src: "/Images/apple.png",
      title: "Junior Art Assistant",
      address1: "Apple Incorporations",
      address2: "Mumbai, Maharashtra, India",
      percent: 78,
      date: "Posted 1 day ago",
      applicants: 10,
    },
  ];
  return (
    <div>
      {props.jobPosts.map((card, id) => {
        return (
          <div
            key={id}
            className="w-full mb-[20px] h-[204px] bg-[#323C52] rounded-[12.94px]"
          >
            <div className="flex justify-between items-center p-11">
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
              <div className="flex justify-center items-center gap-10">
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
            <div className="bg-[#454e63] w-full flex justify-between items-center mt-[16px] rounded-b-[12.94px] py-4 px-10">
              <div className="flex justify-center items-center gap-1">
                <div className="text-[16px] leading-[33px] font-light text-[#E3F1FD]">
                  {card.date}
                </div>
                <div className="text-[16px] leading-[33px] font-light text-[#E3F1FD]">
                  . {card.applicants} applicants
                </div>
              </div>
              <div className="flex gap-10">
                <div className="w-[170px] h-[36px] bg-[#5CA4A9] rounded-[47px] flex justify-center items-center text-[14px] leading-[25px] text-[#fff]">
                  Apply now
                </div>
                <div>
                  <Image
                    src="/Images/bookmark.png"
                    alt="bookmark-image"
                    width={20}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
