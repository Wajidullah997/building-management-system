import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosPhonePortrait } from "react-icons/io";
import { SecondaryButton } from "../UI/Button";
import { QueryAssignModal } from "../Modals";

import { ParagraphText1, SubtitleText } from "../UI/Typography";


export default function QueryAccountDetail() {
  const [queryassignModal, setQueryassignModal] = useState(false);

  return (
    <div className="h-full bg-white rounded-lg p-3 py-[30px] ">
      <div className="items-center gap-1 grid grid-cols-2 py-4">
        <div className="bg-[#F8F8F8] pl-2 flex flex-col justify-between rounded-lg p-4">
          <ParagraphText1 className={"!text-[12px]"}>Appartment</ParagraphText1>
          <SubtitleText>01</SubtitleText>
        </div>
        <div className="bg-[#F8F8F8] pl-2  flex flex-col justify-between rounded-lg p-4">
          <ParagraphText1 className={"!text-[12px]"}>Pakistan</ParagraphText1>
          <SubtitleText>Electricity</SubtitleText>
        </div>
        <div className="bg-[#F8F8F8] pl-2 mt-3  flex flex-col justify-between rounded-lg p-4">
          <ParagraphText1 className={"!text-[12px]"}>Date</ParagraphText1>
          <SubtitleText>08/03/2016</SubtitleText>
        </div>
        <div className="bg-[#F8F8F8] pl-2  mt-3 flex flex-col justify-between rounded-lg p-4">
          <ParagraphText1 className={"!text-[12px]"}>Appartment</ParagraphText1>
          <SubtitleText>09:00 Am</SubtitleText>
        </div>
      </div>
      <div className="bg-[#F8F8F8] flex flex-col justify-between rounded-lg p-1 ">
        <ParagraphText1 className={"!text-[12px]"}>Description</ParagraphText1>
        <SubtitleText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, illum
          ducimus totam in hic nihil.
        </SubtitleText>
      </div>
      <div className="bg-[#F8F8F8] pl-2 pr-3 items-center justify-between  mt-4  flex rounded-lg p-4 ">
        <div className="flex flex-col justify-between">
          <ParagraphText1 className={"!text-[12px]"}>
            Description
          </ParagraphText1>
          <SubtitleText>Abdara Road Peshawar</SubtitleText>
        </div>
        <GrLocation />
      </div>
      <div className="bg-[#F8F8F8] pl-2 pr-3 items-center justify-between  mt-4  flex rounded-lg p-1 h-[65px]">
        <div className="flex flex-col justify-between">
          <ParagraphText1 className={"!text-[12px]"}>
            Description
          </ParagraphText1>
          <SubtitleText>Abdara Road Peshawar</SubtitleText>
        </div>
        <IoIosPhonePortrait />
      </div>
      <SecondaryButton
        className={" w-full mt-3"}
        isActive={true}
        onClick={() => {
          setQueryassignModal(true);
        }}
      >
        Assign Empty
      </SecondaryButton>
      <QueryAssignModal
        open={queryassignModal}
        onClose={() => {
          setQueryassignModal(false);
        }}
      />
    </div>
  );
}
