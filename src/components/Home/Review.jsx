import React from "react";
import { ParagraphText, SubtitleText } from "../UI/Typography";

export default function Review() {
  return (
    <div className="bg-white p-4 w-full rounded-lg md:h-[180px]">
      <ParagraphText>Reviews</ParagraphText>

      <div className="flex justify-around gap-3">
        <div className="bg-[#FFC200] text-white flex p-2 items-center flex-col justify-between mt-4 w-36 md:w-[25%] lg:w-36 xl:w-[25%] 2xl:w-[25%] rounded-lg h-[100px]">
          <SubtitleText className="mt-2 text-white">
            Pading Request
          </SubtitleText>
          <div className="flex font-semibold gap-5 md:gap-[90px]  lg:gap-[px]">
            <p>1</p>
            <p>345</p>
          </div>
        </div>
        <div className="bg-[#23EE1F] text-white flex p-2 items-center flex-col justify-between mt-4 w-36 md:w-[25%] lg:w-36 xl:w-[25%] 2xl:w-[25%] rounded-lg h-[100px]">
          <SubtitleText className="mt-2 text-white">
            Pading Request
          </SubtitleText>
          <div className="flex font-semibold gap-5 md:gap-[90px]  lg:gap-[px]">
            <p>1</p>
            <p>345</p>
          </div>
        </div>
        <div className="bg-[#00C2FF] text-white flex p-2 items-center flex-col justify-between mt-4 w-36 md:w-[25%] lg:w-36 xl:w-[25%] 2xl:w-[25%] rounded-lg h-[100px]">
          <SubtitleText className="mt-2 text-white">
            Pading Request
          </SubtitleText>
          <div className="flex font-semibold gap-5 md:gap-[90px]  lg:gap-[px]">
            <p>1</p>
            <p>345</p>
          </div>
        </div>
        <div className="bg-[#CB79FF] text-white flex p-2 items-center flex-col justify-between mt-4 w-36 md:w-[25%] lg:w-36 xl:w-[25%] 2xl:w-[25%] rounded-lg h-[100px]">
          <SubtitleText className="mt-2 text-white">
            Pading Request
          </SubtitleText>
          <div className="flex font-semibold gap-5 md:gap-[90px]  lg:gap-[px]">
            <p>1</p>
            <p>345</p>
          </div>
        </div>     
      </div>
    </div>
  );
}
