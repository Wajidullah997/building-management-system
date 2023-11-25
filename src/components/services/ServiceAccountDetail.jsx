import React from 'react'
import list1 from "../../assets/list1.png";
import { ParagraphText,SubtitleText } from "../UI/Typography";
import UserBasicInfo from '../worker/UserBasicInfo';

export default function ServiceAccountDetail() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img src={list1} width={65} className="" alt="" />

        <ParagraphText className={"font-semibold !text-[15px]"}>
          Ahsan Malik
        </ParagraphText>
        <SubtitleText>Appartment Owner</SubtitleText>
      </div>
      <UserBasicInfo/>
    </div>
  );
}
