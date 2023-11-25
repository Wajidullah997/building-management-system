import React from 'react'
import list1 from '../../assets/chat.png'
// import { BsSend} from 'react-icons/bs';
import search from '../../assets/chatsearch.png'
import {HiOutlinePhoneMissedCall} from 'react-icons/hi'
import { ParagraphText ,SubtitleText,TinyText} from '../UI/Typography';
import ChatsCard from './ChatsCard';
export default function Chats() {
  return (
    <div className="w-full h-[calc(100vh-100px)] relative bg-white rounded-lg  pb-3">
      <div className="relative flex gap-3 items-center p-2 border border-transparent border-b-slate-300">
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

        <ChatsCard />
        <ChatsCard />
        <SubtitleText className={"flex !items-center justify-center"}>
          Yesterday 12:20pm
        </SubtitleText>
        <ChatsCard />
        <ChatsCard />
        <ChatsCard />
        <ChatsCard />
        <ChatsCard />
      </div>
      <div className="flex items-center">
        <input
          className="p-3 w-full text-[13px] border rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Write message ..."
        />
        <img className="ml-[-30px]" src={search} alt="" />
      </div>
    </div>
  );
}

