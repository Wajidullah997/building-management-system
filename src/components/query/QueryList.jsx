import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SecondaryButton } from "../UI/Button";
import NewqueryCard from '../Home/NewqueryCard';

export default function QueryList() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex items-center">
        <input
          className="p-4 text-[13px] w-full border rounded-lg hover:border-blue-500"
          type="email"
          placeholder="Email Address"
        />
        <BsSearch className=" text-[#8B8B8B] ml-[-30px]" />
      </div>
      <div className="flex gap-5 mt-2">
        {<SecondaryButton isActive={true}>Managers</SecondaryButton>}

        <SecondaryButton className="!text-black w-32 bg-white">
          Assigned
        </SecondaryButton>
        <SecondaryButton className="!text-black w-32 bg-white">
          In Progress
        </SecondaryButton>
        <SecondaryButton className="!text-black w-32 bg-white">
          Resoule
        </SecondaryButton>
      </div>
      <div className="bg-white mt-2 p-2 rounded-lg">
        <div className="flex flex-col">
          <NewqueryCard />
          <NewqueryCard />
          <NewqueryCard />
        </div>
        <button className="bg-[#F8F8F8] w-full mt-2 p-2">
          <h4 className="text-[15px] text-[#22A2FF]">See all Quries</h4>
        </button>
      </div>
    </div>
  );
}
