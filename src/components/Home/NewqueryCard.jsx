import React from "react";
import { ParagraphText1, SubtitleText } from "../UI/Typography";
import frame1 from "../../assets/Frame1.png";
import frame2 from "../../assets/Frame2.png";
import Hotel from "../../assets/Hotel.png";
import oction from "../../assets/Octicons.png";

export default function NewqueryCard() {
  return (
    <div className="bg-[#F8F8F8] p-2 mt-2 rounded-lg flex h-[140px] flex-col justify-between">
      <div className="flex items-center justify-between">
        <ParagraphText1>Rashid Tawar</ParagraphText1>
        <SubtitleText>02:00 PM</SubtitleText>
      </div>
      <div className="flex gap-2 ">
        <img src={Hotel} width={15} alt="" />
        <SubtitleText>Apartment:01</SubtitleText>
      </div>
      <div className="flex gap-2 ">
        <img src={oction} width={15} alt="" />
        <SubtitleText>Electricity Problem</SubtitleText>
      </div>
      <div className="flex items-center self-end">
        <img src={frame1} alt="frame1" className="w-[35px] h-[35px]" />
        <img src={frame2} alt="frame2" width={50} />
      </div>
    </div>
  );
}
