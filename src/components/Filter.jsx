import React from "react";

export default function Filter() {
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
  ];
  return (
    <div className="w-[100%]">
      <div className="text-white gap-10 border-b h-[65px] relative">
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
              className="text-[#fff] text-[16px] pl-[26px] pb-[10px] mt-[15px] border-b w-[100%]"
            >
              <label>{item.name}</label>
              <input type="checkbox" value={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
