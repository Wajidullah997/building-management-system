import React from "react";
import { SubtitleText, TinyText } from "../UI/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";

const items = [
  {
    id: 1,
    image: "./image/list1.png",
    name: "Pagenat app",
  },
  {
    id: 2,
    image: "./image/list2.png",
    name: "Chat App",
  },
  {
    id: 3,
    image: "./image/list3.png",
    name: "Management App",
  },
  {
    id: 4,
    image: "./image/list4.png",
    name: "Management App",
  },
  {
    id: 5,
    image: "./image/list5.png",
    name: "Management App",
  },
  {
    id: 6,
    image: "./image/list6.png",
    name: "Management App",
  },
];
export default function EmployeeProfile() {
  return (
    <div>
      {items.map((elem) => {
        const { id, image, name } = elem;
        return (
          <div
            key={id}
            className="flex h-[60px] justify-between text-gray-400 mt-3 gap-2 bg-white items-center"
          >
            <div className="flex items-center">
              <img src={image} width={60} className="p-2" alt="" />
              <div className="flex flex-col">
                <SubtitleText className="text-black">{name}</SubtitleText>
                <TinyText>Electrician</TinyText>
              </div>
            </div>
            <BsThreeDotsVertical />
          </div>
        );
      })}
    </div>
  );
}
