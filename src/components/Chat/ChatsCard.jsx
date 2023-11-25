import React from 'react'
import { SubtitleText,TinyText } from '../UI/Typography';
export default function ChatsCard() {
    return (
      <>
        <div className="bg-[#F2F2F2] flex flex-col self-start rounded-tl-lg rounded-tr-lg rounded-br-lg p-2">
          <SubtitleText className={"text-start pr-6"}>
            Hello this is apptex company
          </SubtitleText>
          <TinyText className={"text-end pl-6 mt-1"}>8:00 PM</TinyText>
        </div>
        <div className="bg-[#22A2FF] flex flex-col self-end rounded-t-lg rounded-l-lg p-2">
          <SubtitleText className={"!text-white text-start pr-6"}>
            Hello world this UI/UX designer Ismail
          </SubtitleText>
          <TinyText className={"!text-white text-end pl-6"}>8:00 PM</TinyText>
        </div>
      </>
    );
}
