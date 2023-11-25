import React, { useState } from "react";
import list1 from "../../assets/list1.png";
import { BsThreeDotsVertical, BsChat } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { ParagraphText1, SubtitleText } from "../UI/Typography";
import { PrimaryButton, SecondaryButton } from "../UI/Button";
import UserBasicInfo from "./UserBasicInfo";
import BuildingData from "./BuildingData";

const Profile = () => {
  const [show,setShow] = useState(false)
  const [isBasicInfoVisible, setBasicInfoVisible] = useState(true);
  const [isBuildingDataVisible, setBuildingDataVisible] = useState(false);
  const showBasicInfo = () => {
    setBasicInfoVisible(true);
    setBuildingDataVisible(false);
  };
  const showBuildingData = () => {
    setBasicInfoVisible(false);
    setBuildingDataVisible(true);
  };
  const ShowList = ()=>{
    if (show == true) {
  setShow(false)
    } else {
      setShow(true)
}
  }
  return (
    <div className="h-full bg-white rounded-lg p-3 py-[20px]">
      <div className="flex right-0 gap-2 ml-[240px] items-center text-gray-400">
        <BiPhoneCall className="bg-gray-100 rounded-md h-6 w-6 p-1" />
        <BsChat className="bg-gray-100 rounded-md h-6 w-6 p-1" />
        <BsThreeDotsVertical onClick={ShowList} className="bg-gray-100 rounded-md h-6 w-6 p-1" />
        {
          show && (
        <div className="absolute top-0 right-0 md:w-[130px]  items-center h-[50px] cursor-pointer mt-[60px] mr-[10px] bg-[#F8F8F8] border rounded-lg p-1 flex flex-col">
                    <SubtitleText>edit</SubtitleText>
                    <SubtitleText className="whitespace-nowrap">
                      Remove Electrician
                    </SubtitleText>
                  </div>)
        }
      </div>
      <div className="flex flex-col items-center">
        <img src={list1} width={70} className="p-2" alt="" />
        <ParagraphText1 className={"font-semibold"}>Itunoluwa</ParagraphText1>
        <SubtitleText>Electrician</SubtitleText>
        <div className="flex mt-3 gap-1">
          <PrimaryButton onClick={showBasicInfo} isActive={isBasicInfoVisible}>
            Basic info
          </PrimaryButton>
          <SecondaryButton
            className={"bg-[#22A2FF]"}
            onClick={showBuildingData}
            isActive={isBuildingDataVisible}
          >
            Buildings
          </SecondaryButton>
        </div>
      </div>
        {isBasicInfoVisible && <UserBasicInfo />}
        {isBuildingDataVisible && <BuildingData />}
    </div>
  );
};
export default Profile;
