import React from 'react'
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { ParagraphText, SubtitleText } from "../UI/Typography";
import { SecondaryButton } from '../UI/Button'

const items = [
  {
    id: 1,
    image: "./image/build1.png",
    name: "Pagenat app",
    description: "Kate Tanner",
  },
  {
    id: 2,
    image: "./image/build2.png",
    name: "Chat App",
    description: "Col, Raderick Deckar",
  },
  {
    id: 3,
    image: "./image/build3.png",
    name: "Management App",
    description: "Murdock",
  },
  {
    id: 4,
    image: "./image/build4.png",
    name: "Management App",
    description: "Kate Tanner",
  },
  {
    id: 5,
    image: "./image/build5.png",
    name: "Management App",
    description: "Milk Torello",
  },
  {
    id: 6,
    image: "./image/build6.png",
    name: "Management App",
    description: "Dori Doreau",
  },
];
export default function BuildingList() {
    return (
      <div className="flex flex-col w-full p-2 h-screen">
        <div className="flex gap-3  justify-between">
          <ParagraphText>Buildings</ParagraphText>
          <SecondaryButton isActive={true}>
            <span className="px-1">+</span> Add Buildings
          </SecondaryButton>
        </div>
        <div className="flex items-center mt-2">
          <input
            className="p-3 w-full border rounded-lg hover:border-blue-500"
            type="email"
            placeholder="Email Address"
          />
          <BsSearch className=" text-[#8B8B8B] ml-[-30px]" />
        </div>
        <div className='flex flex-col '>
          {items.map((elem) => {
            const { id, image, name , description} = elem;
            return (
              <div
                key={id}
                className="flex h-[60px] rounded-lg justify-between text-gray-400 mt-3 gap-2 bg-white  items-center"
              >
                <div className="flex items-center">
                  <img src={image} width={60} className="p-2" alt="" />
                  <SubtitleText className="text-black">{name}</SubtitleText>
                </div>
                <SubtitleText className={"mr-[30px]"}>{description}</SubtitleText>
              </div>
            );
          })}
        </div>
      </div>
    );
}
