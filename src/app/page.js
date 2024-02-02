import Filter from "@/components/Filter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[340px] ml-[67px] h-[100%] rounded-lg  flex justify-center items-center bg-[#0a0d13]">
        <Filter />
      </div>
      <div className="w-[906px]  ml-[127px]">Filter section</div>
    </div>
  );
}
