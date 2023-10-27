import React from 'react'
import list1 from '../../assets/chat.png'
// import { BsSend} from 'react-icons/bs';
import search from '../../assets/chatsearch.png'
import {HiOutlinePhoneMissedCall} from 'react-icons/hi'
import { ParagraphText ,SubtitleText,TinyText} from '../UI/Typography';
export default function Chats() {
  return (
    <div className="w-full h-[calc(100vh-100px)] relative bg-white rounded-lg  pb-5">
      <div className="relative flex gap-3 items-center p-3 border border-transparent border-b-slate-300">
        <img src={list1} width={50} className="" alt="" />
        <div className="flex items-center w-full justify-between">
          <ParagraphText className={"!text-[14px]"}>Sarah Johson</ParagraphText>
          <HiOutlinePhoneMissedCall className="text-blue-300" />
        </div>
      </div>
      <div className="flex flex-col gap-3 h-[76%] overflow-y-scroll p-3">
        <SubtitleText className={"flex !items-center justify-center"}>
          Today 10:27am
        </SubtitleText>
        <div className="bg-[#F2F2F2] flex flex-col self-start rounded-tl-lg rounded-tr-lg rounded-br-lg p-2">
          <SubtitleText className={"text-start pr-6"}>Hello this is waijfbfhfgdbbfhjvf</SubtitleText>
          <TinyText className={"text-end pl-6 mt-1"}>8:00 PM</TinyText>
        </div>
        <div className="bg-[#22A2FF] flex flex-col self-end rounded-t-lg rounded-l-lg p-2">
          <SubtitleText className={"!text-white text-start pr-6"}>
            Hello world this is wajid
          </SubtitleText>
          <TinyText className={"!text-white text-end pl-6"}>8:00 PM</TinyText>
        </div>
        <div className="bg-[#F2F2F2] flex flex-col self-start rounded-tl-lg rounded-tr-lg rounded-br-lg p-2">
          <SubtitleText className={"text-start pr-6"}>Hello</SubtitleText>
          <TinyText className={"text-end pl-6"}>8:00 PM</TinyText>
        </div>
        <div className="bg-[#22A2FF] flex flex-col self-end rounded-t-lg rounded-l-lg p-2">
          <SubtitleText className={"!text-white text-start pr-6"}>
            Hello world this is wajid
          </SubtitleText>
          <TinyText className={"!text-white text-end pl-6"}>8:00 PM</TinyText>
        </div>
        <SubtitleText className={"flex !items-center justify-center"}>
          Yesterday 12:20pm
        </SubtitleText>

        <div className="bg-[#F2F2F2] flex flex-col self-start rounded-tl-lg rounded-tr-lg rounded-br-lg p-2">
          <SubtitleText className={"text-start pr-6"}>Hello</SubtitleText>
          <TinyText className={"text-end pl-6"}>8:00 PM</TinyText>
        </div>
        <div className="bg-[#22A2FF] flex flex-col self-end rounded-t-lg rounded-l-lg p-2">
          <SubtitleText className={"!text-white text-start pr-6"}>
            Hello world this is wajid from charsadda
          </SubtitleText>
          <TinyText className={"!text-white text-end pl-6"}>8:00 PM</TinyText>
        </div>
        <div className="bg-[#F2F2F2] flex flex-col self-start rounded-tl-lg rounded-tr-lg rounded-br-lg p-2">
          <SubtitleText className={"text-start pr-6"}>Hello</SubtitleText>
          <TinyText className={"text-end pl-6"}>8:00 PM</TinyText>
        </div>
        <div className="bg-[#22A2FF] flex flex-col self-end rounded-t-lg rounded-l-lg p-2">
          <SubtitleText className={"!text-white text-start pr-6"}>
            Hello world this is wajid
          </SubtitleText>
          <TinyText className={"!text-white text-end pl-6"}>8:00 PM</TinyText>
        </div>
      </div>
      <div className="flex items-center">
        <input
          className="p-3 w-full border rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Write message ..."
        />
        <img className="ml-[-30px]" src={search} alt="" />
      </div>
    </div>
  );
}

