import React from "react";
import { SubtitleText } from "../UI/Typography";
export default function UserBasicInfo() {
  return (
    <div className="items-center w-full  flex justify-center flex-col py-4">
      <form>
        <SubtitleText className={"text-black"}>Name</SubtitleText>
        <input
          className="p-3 mt-1 border bg-[#F8F8F8] w-[330px] rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Saddar bazzar Peshawar"
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
        <SubtitleText className={"text-black mt-3"}>Location</SubtitleText>
        <input
          className="p-3 mt-1 border bg-[#F8F8F8] w-[340px] rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Saddar Bazzar Peshawar"
        />
      </form>
    </div>
  );
}
