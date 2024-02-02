import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[340px] ml-[67px] h-[100%] rounded-md flex justify-center items-center bg-[#171c28]">
        left header
      </div>
      <div className="w-[906px]  ml-[127px]">Filter section</div>
    </div>
  );
}
