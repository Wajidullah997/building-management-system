import React, { Component } from "react";
import list1 from "../../assets/list1.png";
import { BsThreeDotsVertical, BsChat } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { ParagraphText1, SubtitleText } from "../../components/UI/Typography";
import { SecondaryButton,PrimaryButton } from "../UI/Button";
import QueryAccountDetail from "./QueryAccountDetail";
import QueryAccountInfo from "./QueryAccountInfo";
export class QueryProfile extends Component {
  constructor() {
    super();
    this.state = {
      isBasicInfoVisible: true,
      isAccountData: false,
    };
  }

  showBasicInfo = () => {
    this.setState({
      isBasicInfoVisible: true,
      isAccountData: false,
    });
  };

  showAccountData = () => {
    this.setState({
      isBasicInfoVisible: false,
      isAccountData: true,
    });
  };

  render() {
    const { isBasicInfoVisible, isAccountData } = this.state;
    return (
      <div className="h-full bg-white rounded-lg p-3 py-[20px]">
        <div className="flex right-0 gap-2 ml-[240px] items-center text-gray-400">
          <BiPhoneCall className="bg-gray-100 rounded-md h-6 w-6 p-1" />
          <BsChat className="bg-gray-100 rounded-md h-6 w-6 p-1" />
          <BsThreeDotsVertical className="bg-gray-100 rounded-md h-6 w-6 p-1" />
        </div>
        <div className="flex flex-col items-center">
          <img src={list1} width={70} className="p-2" alt="" />
          <ParagraphText1 className={"font-semibold"}>Itunoluwa</ParagraphText1>
          <SubtitleText>Electrician</SubtitleText>
          <div className="flex mt-3 gap-1">
            <PrimaryButton
              onClick={this.showBasicInfo}
              isActive={isBasicInfoVisible}
            >
              Basic info
            </PrimaryButton>
            <SecondaryButton
              className={"bg-[#22A2FF]"}
              onClick={this.showAccountData}
              isActive={isAccountData}
            >
              Buildings
            </SecondaryButton>
          </div>
        </div>
        {isBasicInfoVisible && (
         <QueryAccountInfo/>
        )}
        {isAccountData && (
          <>
         <QueryAccountDetail/>
          </>
        )}
      </div>
    );
  }
}

export default QueryProfile;
