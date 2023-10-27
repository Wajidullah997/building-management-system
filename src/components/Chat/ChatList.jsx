import React from "react";
import { BsSearch } from "react-icons/bs";
import { SubtitleText } from "../UI/Typography";
import { ChatCard } from "./ChatCard";

export default function ChatList() {
  return (
    <div className="flex flex-col  p-2 w-full h-screen">
      <div className="flex items-center">
        <input
          className="p-3 w-full border rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Search ..."
        />
        <BsSearch className=" text-[#8B8B8B] ml-[-30px]" />
      </div>
      <SubtitleText>Today</SubtitleText>
      <div className="flex mt-2  h-[calc(120vh-300px)]">
        <ChatCard />
      </div>
    </div>
  );
}
