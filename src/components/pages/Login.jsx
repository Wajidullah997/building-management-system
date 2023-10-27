import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { ParagraphText, SubtitleText } from "../UI/Typography";
import { BsChevronCompactDown } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { SecondaryButton } from "../../components/UI/Button";
import rifik from "../../assets/rafiki.png";
export default function Login() {
  return (
    <div className="flex w-[90%] h-screen items-center py-32 justify-center mx-auto ">
      <div className="flex w-[40%] flex-col">
        <img src={Logo} alt="" width={60} />
        <p className="text-[#22A2FF] py-4 font-bold"> Servike </p>
        <ParagraphText className={""}> Welcome Back!</ParagraphText>
        <SubtitleText>Please Login to your Account.</SubtitleText>
        <SubtitleText className={"mt-4 text-black"}>
          E-Mail Addreess
        </SubtitleText>
        <form>
          <div className="flex items-center">
            <input
              className="p-3 w-[80%] border rounded-lg border-blue-500"
              type="email"
              placeholder="Email Address"
            />
            <BsChevronCompactDown className="bg-blue-500 rounded-md text-white ml-[-20px]" />
          </div>
          <SubtitleText className={"mt-4 text-black"}>Password</SubtitleText>
          <div className="flex items-center">
            <input
              className="p-3 w-[80%] border rounded-lg hover:border-blue-500"
              type="email"
              placeholder="Email Address"
            />
            <HiOutlineEye className="rounded-md text-[#8B8B8B] ml-[-20px]" />
          </div>
          <SecondaryButton
            className={"text-white w-[80%] cursor-pointer py-3 mt-8"}
            isActive={true}
          >
            <Link to={"/"}> Log in</Link>
          </SecondaryButton>
        </form>
      </div>
      <div className="w-[45%] bg-white h-screen py-32">
        <img src={rifik} alt="" />
      </div>
    </div>
  );
}
