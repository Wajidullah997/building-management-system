import React from "react";
import Promo5 from "../../assets/promo5.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ParagraphText, SubtitleText } from "../UI/Typography";

export default function PromotionDetailCard() {
  return (
    <div className="p-3 bg-white rounded-lg h-screen">
      <div className="flex">
        <img className="" src={Promo5} alt="promo5" />
        {/* <BsThreeDotsVertical className="bg-white ml-[400px] mt-2 relative h-7 text-gray-500 p-1 rounded-lg w-[30px]" /> */}
      </div>
      <div className="bg-[#F8F8F8] flex rounded-lg p-4 mt-[-30px] relative flex-col 2xl:ml-[60px] md:ml-5 w-[280px]">
        <div className="flex items-center justify-between py-3">
          <ParagraphText className={"text-black font-bold"}>
            The Beach Suit
          </ParagraphText>
          <SubtitleText>22 May 2022</SubtitleText>
        </div>
        <SubtitleText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde rem
          tempore dolorum praesentium eveniet? Corporis voluptas quam qui nobis
          cumque quod iure omnis quas hic libero tenetur, consequuntur
          necessitatibus a!
        </SubtitleText>
        <div className="bg-gray-200 px-1 h-[1px]  mt-3"></div>
        <div className="flex justify-between py-3 mt-3 pb-[80px]">
          <ParagraphText>Prise</ParagraphText>
          <ParagraphText className={"text-black font-bold"}>
            The Beach Suit
          </ParagraphText>
        </div>
      </div>
    </div>
  );
}
