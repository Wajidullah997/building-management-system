import React from 'react'
import list1 from "../../assets/list1.png";
import { ParagraphText,SubtitleText } from "../UI/Typography";

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
      <form className="mt-5">
        <SubtitleText>Appartment Number</SubtitleText>
        <input
          className="p-3 mt-1 border bg-[#F8F8F8] w-[340px] rounded-lg hover:border-blue-500"
          type="text"
          placeholder="05"
        />
        <SubtitleText className={"text-black mt-3"}>
          E-mail Address
        </SubtitleText>
        <input
          className="p-3 mt-1 border bg-[#F8F8F8] w-[340px] rounded-lg hover:border-blue-500"
          type="email"
          placeholder="saddarbazar123@gmail.com"
        />
        <SubtitleText className={"text-black mt-3"}>Password</SubtitleText>
        <input
          className="p-3 mt-1 border bg-[#F8F8F8] w-[340px] rounded-lg hover:border-blue-500"
          type="password"
          placeholder="Password234"
        />
        <SubtitleText className={"text-black mt-3"}>Contact</SubtitleText>
        <input
          className="p-3 mt-1 border bg-[#F8F8F8] w-[340px] rounded-lg hover:border-blue-500"
          type="text"
          placeholder="091-2345668"
        />
      </form>
    </div>
  );
}
