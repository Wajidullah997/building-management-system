import React from "react";
import { SubtitleText } from "../UI/Typography";

export default function QueryAccountInfo() {
  return (
    <div className=" flex w-full  justify-center flex-col py-3">
      <form>
        <SubtitleText className={"text-black"}>Name</SubtitleText>
        <input
          className="p-4 mt-1 text-[13px] border w-full bg-[#F8F8F8] rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Saddar bazzar Peshawar"
        />
        <SubtitleText className={"text-black mt-3"}>
          E-mail Address
        </SubtitleText>
        <input
          className="p-4 mt-1 border bg-[#F8F8F8] w-full  text-[13px]  rounded-lg hover:border-blue-500"
          type="email"
          placeholder="saddarbazar123@gmail.com"
        />
        <SubtitleText className={"text-black mt-3"}>Password</SubtitleText>
        <input
          className="p-4 mt-1 border bg-[#F8F8F8] text-[13px] w-full rounded-lg hover:border-blue-500"
          type="password"
          placeholder="Password234"
        />
        <SubtitleText className={"text-black mt-3"}>Location</SubtitleText>
        <input
          className="p-4 mt-1 border bg-[#F8F8F8] text-[13px] w-full rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Saddar Bazzar Peshawar"
        />
        <SubtitleText className={"text-black mt-3"}>Contact</SubtitleText>
        <input
          className="p-4 mt-1 border bg-[#F8F8F8] text-[13px] w-full rounded-lg hover:border-blue-500"
          type="number"
          placeholder="Saddar Bazzar Peshawar"
        />
      </form>
    </div>
  );
}
