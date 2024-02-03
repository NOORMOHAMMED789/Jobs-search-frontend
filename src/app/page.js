import Filter from "@/components/Filter";
import Jobs from "@/components/Jobs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[340px] ml-[67px] h-[100%] rounded-lg drop-shadow-2xl flex justify-center items-center bg-[#0a0d13]">
        <Filter />
      </div>
      <div className="w-[850px]  ml-[30px]">
        <div className="flex justify-between items-center">
          <div className="text-[#fff] text-[20px] leading-[20px]">
            SEARCH RESULTS/JOBS - 2049 results
          </div>
          <div>
            <div className="flex justify-center items-center text-[#fff] gap-10">
              <div className="text-[16px] leading-[22.4px] font-normal text-[#BDBDBD]">
                Sort by
              </div>
              <div className="text-[#333] bg-[#fff] px-10 text-[16px] py-2 rounded-[5px] flex justify-center items-center gap-4">
                <div>Latest</div>
                <div>
                  <Image
                    src="/Images/vector 125.png"
                    width={10}
                    height={10}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Jobs />
      </div>
    </div>
  );
}
