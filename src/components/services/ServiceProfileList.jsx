import React, { useState } from "react";
import { SecondaryButton } from "../UI/Button";
import { SubtitleText } from "../UI/Typography";
import {
  BsThreeDotsVertical,
  BsChevronCompactLeft,
  BsSearch,
  BsChat,
} from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import ServiceAccountDetail from "./ServiceAccountDetail";

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
    name: "Chat App",
  },
  {
    id: 4,
    image: "./image/list4.png",
    name: "Chat App",
  },
  {
    id: 5,
    image: "./image/list5.png",
    name: "Chat App",
  },
  {
    id: 6,
    image: "./image/list6.png",
    name: "Chat App",
  },
];

const ServiceProfileList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOptionsMenuVisible, setOptionsMenuVisible] = useState(false);

  const showAccountDetail = (id) => {
    setSelectedItem(id);
  };

  const goBackToList = () => {
    setSelectedItem(null);
  };

  const toggleOptionsMenu = () => {
    setOptionsMenuVisible(!isOptionsMenuVisible);
  };

  return (
    <div className="h-full bg-white rounded-lg p-3 py-[20px]">
      {selectedItem === null ? (
        <div className="flex flex-col p-2">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <BsChevronCompactLeft
                className="bg-gray-100 rounded-md h-6 w-6 p-1"
                onClick={goBackToList}
              />
              <h3>Electricians</h3>
            </div>
            <BsThreeDotsVertical className="bg-gray-100 rounded-md h-6 w-6 p-1" />
          </div>
          <div className="flex  items-center mt-3 gap-5 p-2 w-full">
            <input
              className="p-3 bg-[#F8F8F8] w-full border rounded-lg hover:border-blue-500"
              type="email"
              placeholder="Email Address"
            />
            <BsSearch className="text-[#8B8B8B] ml-[-40px]" />
            <SecondaryButton
              className={"h-[45px] font-bold text-lg !text-[25px]"}
              isActive={true}
            >
              +
            </SecondaryButton>
          </div>
        </div>
      ) : null}
      {selectedItem === null ? (
        <div>
          {items.map((elem) => {
            const { id, image, name } = elem;
            return (
              <div
                key={id}
                className="flex bg-[#F8F8F8]  h-[60px] justify-between text-gray-400 mt-3 gap-2 rounded-lg items-center"
              >
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => showAccountDetail(id)}
                >
                  <img src={image} width={60} className="p-2" alt="" />
                  <SubtitleText className="text-black">{name}</SubtitleText>
                </div>
                <BsThreeDotsVertical />
              </div>
            );
          })}
        </div>
      ) : null}

      {selectedItem !== null ? (
        <div className="flex flex-col">
          <div className="flex justify-between text-gray-400">
            <div>
              <BsChevronCompactLeft
                className="bg-gray-100 rounded-md h-6 w-6 p-1"
                onClick={goBackToList}
              />
            </div>
            <div className="flex gap-2">
              <BiPhoneCall className="bg-gray-100 rounded-md h-6 w-6 p-1" />
              <BsChat className="bg-gray-100 rounded-md h-6 w-6 p-1" />
              <div className="relative">
                <BsThreeDotsVertical
                  className="bg-gray-100 rounded-md h-6 w-6 p-1 cursor-pointer"
                  onClick={toggleOptionsMenu}
                />
                {isOptionsMenuVisible && (
                  <div className="absolute top-0 right-0 md:w-[130px] items-center h-[50px] cursor-pointer mt-7 bg-[#F8F8F8] border rounded-lg p-1 flex flex-col">
                    <SubtitleText>edit</SubtitleText>
                    <SubtitleText className="whitespace-nowrap">
                      Remove Electrician
                    </SubtitleText>
                  </div>
                )}
              </div>
            </div>
          </div>
          <ServiceAccountDetail />
        </div>
      ) : null}
    </div>
  );
};

export default ServiceProfileList;
