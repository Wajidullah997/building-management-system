import React from 'react'
import { SecondaryButton } from '../UI/Button';
import { SubtitleText } from '../UI/Typography';
import { BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
const items = [
  {
    id: 1,
    image: "./image/serv1.png",
    name: "Pagenat app",
  },
  {
    id: 2,
    image: "./image/serv2.png",
    name: "Chat App",
  },
  {
    id: 3,
    image: "./image/serv3.png",
    name: "Management App",
  },
 
];
export default function ServiceList() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex gap-3 mt-2 justify-between">
        <h3>Services</h3>
        <SecondaryButton isActive={true}>
          <span className="px-1">+</span> Add
        </SecondaryButton>
      </div>
      <div className="flex mt-3 items-center">
        <input
          className="p-3 w-full border rounded-lg hover:border-blue-500"
          type="email"
          placeholder="Email Address"
        />
        <BsSearch className=" text-[#8B8B8B] ml-[-30px]" />
      </div>

      <div>
        {items.map((elem) => {
          const { id, image, name } = elem;
          return (
            <div
              key={id}
              className="flex h-[60px] rounded-lg justify-between text-gray-400 mt-3 gap-2 bg-white items-center"
            >
              <div className="flex items-center">
                <img src={image} width={60} className="p-2" alt="" />
                <SubtitleText className="text-black">{name}</SubtitleText>
              </div>
              <BsThreeDotsVertical />
            </div>
          );
        })}
      </div>
    </div>
  );
}
