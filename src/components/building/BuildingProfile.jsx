import React, { useState } from "react";
import build1 from "../../assets/build1.png";
import CircularCard from "./CircularCard";
import list1 from "../../assets/list1.png";

import {
  BsThreeDotsVertical,
  BsChevronCompactLeft,
  BsSearch,
  BsChat,
} from "react-icons/bs";
import { ParagraphText1, ParagraphText, SubtitleText } from "../UI/Typography";
import { PrimaryButton, SecondaryButton } from "../UI/Button";
import BuildingData from "../worker/BuildingData";
import AccountDetail from "./AccountDetail";
import { EditProfileModal1 } from "../Modals";

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
  {
    id: 5,
    name: "Al Haj Tower",
    location: "Town Peshawar",
    image: "./image/building2.png",
  },
];

const BuildingProfile = () => {
  const [editProfileModal1, setEditProfileModal1] = useState(false);

  const [isAppartmentDataVisible, setAppartmentDataVisible] = useState(true);
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [isAccountDetail, setAccountDetail] = useState(false);

  const showApparmentDataInfo = () => {
    setAppartmentDataVisible(true);
    setDetailVisible(false);
    setAccountDetail(false);
  };

  const showAccountDetail = () => {
    setAppartmentDataVisible(false);
    setAccountDetail(true);
    setDetailVisible(false);
  };

  const showDetailData = () => {
    setAppartmentDataVisible(false);
    setAccountDetail(false);
    setDetailVisible(true);
  };

  return (
    <div className="h-full bg-white w-full rounded-lg p-3 py-[20px]">
      {isAppartmentDataVisible && (
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <BsChevronCompactLeft className="bg-gray-100 rounded-md h-6 w-6 p-1" />
            <BsThreeDotsVertical className="bg-gray-100 rounded-md h-6 w-6 p-1" />
          </div>
          <div className="flex flex-col items-center">
            <img src={build1} width={65} className="" alt="" />
            <ParagraphText1 className={"font-semibold"}>
              Itunoluwa
            </ParagraphText1>
            <SubtitleText>Electrician</SubtitleText>
            <div className="flex mt-3 gap-1">
              <PrimaryButton
                onClick={showApparmentDataInfo}
                isActive={isAppartmentDataVisible}
              >
                Appartments
              </PrimaryButton>
              <SecondaryButton
                className={"bg-[#22A2FF]"}
                onClick={showDetailData}
                isActive={isDetailVisible}
              >
                Details
              </SecondaryButton>
            </div>
          </div>
          <div className="flex items-center mt-2 gap-5 p-2 w-full">
            <input
              className="p-3 w-full text-[13px] border rounded-lg hover:border-blue-500"
              type="email"
              placeholder="Email Address"
            />
            <BsSearch className="text-[#8B8B8B] ml-[-40px]" />
            <SecondaryButton
              className={"font-bold text-lg !text-[25px]"}
              isActive={true}
              onClick={() => {
                setEditProfileModal1(true);
              }}
            >
              +
            </SecondaryButton>
          </div>
          <BuildingData />
        </div>
      )}
      {isDetailVisible && (
        <div className=" flex flex-col py-3 p-3">
          <BsThreeDotsVertical className="bg-gray-100 right-0 rounded-md h-6 w-6 p-1" />

          <div className="flex flex-col items-center">
            <img src={build1} width={65} className="" alt="" />
            <ParagraphText1 className={"font-semibold"}>
              Itunoluwa
            </ParagraphText1>
            <SubtitleText>Electrician</SubtitleText>
            <div className="flex mt-3 gap-1">
              <PrimaryButton
                onClick={showApparmentDataInfo}
                isActive={isAppartmentDataVisible}
              >
                Appartments
              </PrimaryButton>
              <SecondaryButton
                className={"bg-[#22A2FF]"}
                onClick={showDetailData}
                isActive={isDetailVisible}
              >
                Details
              </SecondaryButton>
            </div>
          </div>
          <div className="bg-[#F8F8F8] mt-3 rounded-lg p-2 flex flex-col py-6">
            <ParagraphText>Manager</ParagraphText>
            <div
              className="mt-2 mb-2 bg-white rounded-lg cursor-pointer flex items-center"
              onClick={showAccountDetail}
              isActive={isAccountDetail}
            >
              <img src={list1} width={50} className="p-2" alt="" />
              <SubtitleText className="text-black">Ali Khan</SubtitleText>
            </div>
            <ParagraphText>Problem Analytics</ParagraphText>
            <div className="bg-white h-[120px] flex gap-10 rounded-lg justify-center mt-3 items-center">
              <CircularCard />
            </div>
          </div>
        </div>
      )}
      {isAccountDetail && <AccountDetail />}
      <EditProfileModal1
        open={editProfileModal1}
        onClose={() => {
          setEditProfileModal1(false);
        }}
      />
    </div>
  );
};

export default BuildingProfile;
