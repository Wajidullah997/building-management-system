import React from 'react'
import { SubtitleText } from '../UI/Typography';

const items = [
  {
    id: 1,
    name: "Ali Tower",
    location: "Town Peshawar",
    image: "./image/building1.png",
  },
  {
    id: 2,
    name: "Sabar Tower",
    location: "Town Peshawar",
    image: "./image/building2.png",
  },
  {
    id: 3,
    name: "Jawad Tower",
    location: "Abdara Peshawar",
    image: "./image/building3.png",
  },
  {
    id: 4,
    name: "Ismail Tower",
    location: "Saddar Peshawar",
    image: "./image/building1.png",
  },
];
export default function BuildingData() {
  return (
    <div className="items-center  flex flex-col py-6">
      {items.map((elem) => {
        const { id, image, name } = elem;
        return (
          <div
            key={id}
            className="flex rounded-lg flex-col  w-full text-gray-400 mt-3 gap-2 bg-[#F8F8F8]"
          >
            <div className="flex items-center">
              <img src={image} width={70} className="p-2" alt="" />
              <div className="flex flex-col">
                <SubtitleText className="text-black">{name}</SubtitleText>
                <p className="text-[10px] text-gray-400">
                  Universty Road Peshawar
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
