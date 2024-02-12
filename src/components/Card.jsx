import { data } from "autoprefixer";
import Image from "next/image";
import React from "react";

export default function Card(props) {
  return (
    <div>
      {props.jobPosts.length>0 ? props.jobPosts.map((card, id) => {
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
                <div className="flex relative justify-center items-center z-30">
                  <div className="absolute -z-10 border-[#E83363] border-[3px] h-[69px] w-[69px] rounded-full">
                  </div>
                  <div className="">
                    <Image
                      src="/Images/Ellipse 1498.png"
                      alt="bookmark-image"
                      width={69}
                      height={69}
                      className="z-10"
                    />
                  </div>
                  <span className="absolute text-[20px] leading-[20px] align-middle font-semibold text-[#fff]">{card.percent} %</span>
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
      }):<div className="text-[#fff] text-[16px] flex justify-center">No data found</div>}
    </div>
  );
}
