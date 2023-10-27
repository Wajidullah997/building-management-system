import { ParagraphText, TinyText } from "../UI/Typography";
import React from "react";
const items = [
  {
    id: 1,
    image: "./image/list1.png",
    name: "Sarah Johnson",
    time: "12:01 pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 4,
  },
  {
    id: 2,
    image: "./image/list2.png",
    name: "Jane Carr",
    time: "11:54 pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 2,
  },
  {
    id: 3,
    image: "./image/list3.png",
    name: "Mike Snith",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 1,
  },
  {
    id: 4,
    image: "./image/list4.png",
    name: "Angel Smith",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 4,
  },
  {
    id: 5,
    image: "./image/list5.png",
    name: "Kaiya Levin",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 1,
  },
  {
    id: 4,
    image: "./image/list6.png",
    name: "Angel Smith",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 4,
  },
  {
    id: 5,
    image: "./image/list1.png",
    name: "Kaiya Levin",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 1,
  },
  {
    id: 4,
    image: "./image/list2.png",
    name: "Angel Smith",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 4,
  },
  {
    id: 5,
    image: "./image/list5.png",
    name: "Kaiya Levin",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 1,
  },
  {
    id: 4,
    image: "./image/list4.png",
    name: "Angel Smith",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 4,
  },
  {
    id: 5,
    image: "./image/list5.png",
    name: "Kaiya Levin",
    time: "11:22pm",
    description:
      "I can't Join, Sorry! Have Fun! this for fun only don't waorroy abou",
    message: 1,
  },
  {
    id: 6,
    image: "./image/list6.png",
    name: "Phillip Aminaoff",
    time: "11:22pm",
    description:
      "This is for fun only I can't Join, Sorry! Have Fun! this for fun only",
    message: 9,
  },
];

export const ChatCard = () => {
  return (
    <div className="py-2   overflow-x-hidden w-full justify-start flex flex-col  items-center gap-1 border-[1px] border-transparent border-slate-300">
      {items.map((elem) => {
        const { id, image, name, description, time, message } = elem;
        return (
          <>
            <div
              key={id}
              className="flex bg-white p-2 rounded-lg  items-center h-[50px] hover:bg-white gap-3 "
            >
              <img src={image} width={40} alt="" />
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <ParagraphText
                    className={"!text-[11px] font-bold text-[#243B53]"}
                  >
                    {name}
                  </ParagraphText>
                  <TinyText className={"!text-primary mr-[30px]"}>{time}</TinyText>
                </div>
                <div className="flex w-full justify-between items-center">
                  <TinyText className="truncate w-[90%] mt-2 ">
                    {description}
                  </TinyText>
                  {/* <TinyText
                    className={
                      "rounded-full px-1 py-[1px] bg-blue-300 !text-white"
                    }
                  >
                    {message}
                  </TinyText> */}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
