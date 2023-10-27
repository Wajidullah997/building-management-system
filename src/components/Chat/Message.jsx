import React from "react";
import ChatList from "./ChatList";
import Chats from "./Chats";

export default function Message() {
  return (
    <div className="grid absolute  w-[84.5%] mr-3 top-[60px] overflow-hidden -right-[0px] grid-cols-3 ">
      <div className="w-full flex flex-col mt-1">
        <ChatList />
      </div>
      <div className="col-span-2 mt-3">
        <Chats />
      </div>
    </div>
  );
}
