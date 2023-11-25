import React from "react";
import { HeadTitleText, ParagraphText } from "../UI/Typography";
import bell from "../../assets/Bell.png";
import profile from "../../assets/nav.png";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="bg-white w-screen h-[70px]">
      <div className="flex  justify-between py-4 items-center mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <HeadTitleText className="whitespace-nowrap px-[140px]">
          {location.pathname === "/" ? "Home" : ""}
          {location.pathname === "/worker" ? "Workers" : ""}
          {location.pathname === "/queries" ? "Queries" : ""}
          {location.pathname === "/promotion" ? "Promotion" : ""}
          {location.pathname === "/building" ? "Building" : ""}
          {location.pathname === "/services" ? "Services" : ""}
          {location.pathname === "/messages" ? "Message" : ""}
          {location.pathname === "/setting" ? "Setting" : ""}
          {location.pathname === "/help" ? "Help And Support" : ""}
        </HeadTitleText>
        <div className="flex h-10 gap-2">
          <img
            className="bg-gray-100 rounded-[12px] py-1"
            src={bell}
            width={30}
            alt="bell"
          />
          <div className="bg-gray-100  gap-2  p-2 whitespace-nowrap w-36 font-bold justify-between flex items-center rounded-[12px]">
            <img src={profile} width={30} alt="profile" />
            <ParagraphText>Kabir Sing</ParagraphText>
          </div>
        </div>
      </div>
    </div>
  );
}
