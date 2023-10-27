import React, { useState } from "react";
import { SecondaryButton } from "../UI/Button";
import { BsSearch } from "react-icons/bs";
import mediafile from "../../assets/MediaFile.png";
import list1 from "../../assets/list1.png";
import img1 from "../../assets/editimg1.png";
import img2 from "../../assets/editimg2.png";
import profile from "../../assets/profile.png";
import mediafile1 from "../../assets/MediaFile1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal } from "../UI/Modal";
import { ParagraphText, SubtitleText, TinyText } from "../UI/Typography";
import UserBasicInfo from "../worker/UserBasicInfo";
import BuildingData from "../worker/BuildingData";
const items = [
  {
    id: 1,
    image: "./image/list1.png",
    name: "Ali Khan Awan",
  },
  {
    id: 2,
    image: "./image/list2.png",
    name: "Ismail Khan",
  },
  {
    id: 3,
    image: "./image/list3.png",
    name: "Zubair khan",
  },
];
export const PromotionModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Add Promotion"}
      className={"flex flex-col bg-[#F8F8F8] overflow-x-hidden gap-10"}
    >
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <ParagraphText className={"font-bold !text-[12px]"}>
            Title
          </ParagraphText>
          <form>
            <input
              type="text"
              placeholder="write your name"
              className="w-full bg-white h-[45px] rounded-lg"
            />
          </form>
          <ParagraphText className={"font-bold !text-[12px] mt-4"}>
            Add Media Files
          </ParagraphText>
          <TinyText>Add up to six vedios images</TinyText>
          <div className="grid mt-2 grid-cols-3 p-1 gap-2 ">
            <img width={50} className="ml-1 mt-[2px]" src={mediafile} alt="" />
            <img width={60} src={mediafile1} alt="" />
            <img width={60} src={mediafile1} alt="" />
            <img width={60} src={mediafile1} alt="" />
            <img width={60} src={mediafile1} alt="" />
            <img width={60} src={mediafile1} alt="" />
          </div>
        </div>
        <div className="flex flex-col ">
          <ParagraphText className={"font-bold !text-[12px]"}>
            Fund Description
          </ParagraphText>
          <form>
            <textarea
              placeholder="Describe the fund"
              className="bg-white p-2 rounded-lg "
              name=""
              id=""
              cols="22"
              rows="4"
            ></textarea>
            <ParagraphText className={"!text-[10px] mt-3 font-bold"}>
              Set A Goal For Your Fundraiser
            </ParagraphText>
            <div className="flex  items-center">
              <input
                type="text"
                placeholder="Amount"
                className=" p-2 rounded-lg h-[50px] bg-white "
              />
              <p className="ml-[-35px] text-[10px] font-bold">USD</p>
            </div>
          </form>
        </div>
      </div>
      <SecondaryButton className={"ml-[100px] mr-[100px] "} isActive={true}
      onClick={onClose}>
        Add Promotion
      </SecondaryButton>
    </Modal>
  );
};
export const QueryAssignModal = ({ open, onClose }) => {
  const [queryassignEmployeeModal, setQueryassignEmployeeModal] =
    useState(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Assign Employee"}
      className={"flex flex-col  gap-10"}
    >
      <div className="bg-gray-300 h-[1px]"></div>
      <div className="flex items-center  -mt-[10px] -mb-[30px] justify-center gap-1">
        <div className="border-2   p-1 h-1 w-1 rounded-full bg-blue-400"></div>
        <div className="h-[1px] w-10 bg-blue-500"></div>
        <div className="border-2 p-1 h-1 w-1 rounded-full "></div>
      </div>
      <div className="flex flex-col">
        <div>
          {items.map((elem) => {
            const { id, image, name } = elem;
            return (
              <>
                <div
                  key={id}
                  className="flex border-[2px] hover:border-blue-300 hover:bg-white rounded-lg h-[60px] justify-between text-gray-400 mt-3 gap-2 bg-[#F8F8F8] items-center"
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
              </>
            );
          })}
        </div>
        <SecondaryButton
          className={"mt-3"}
          onClick={() => {
            setQueryassignEmployeeModal(true);
          }}
          isActive={true}
        >
          Next
        </SecondaryButton>
        <QueryAssignEmployeeModal
          open={queryassignEmployeeModal}
          onClose={() => {
            setQueryassignEmployeeModal(false);
          }}
        />
      </div>
    </Modal>
  );
};
export const QueryAssignEmployeeModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Assign Employee"}
      className={"flex flex-col  gap-10"}
    >
      <div className="bg-gray-300 h-[1px]"></div>
      <div className="flex items-center -mt-[10px] -mb-[10px] justify-center gap-1">
        <div className="border-2   p-1 h-1 w-1 rounded-full bg-blue-400"></div>
        <div className="h-[1px] w-10 bg-blue-500"></div>
        <div className="border-2 bg-blue-500  p-1 h-1 w-1 rounded-full "></div>
      </div>
      <SubtitleText className={"text-black"}>Assign Employee</SubtitleText>
      <div className="flex flex-col">
        <div className="flex border-[2px] -mt-[30px] hover:border-blue-300 hover:bg-white rounded-lg h-[60px] justify-between text-gray-400  gap-2 bg-[#F8F8F8] items-center">
          <div className="flex items-center ">
            <img src={list1} width={60} className="p-2" alt="" />
            <div className="flex flex-col">
              <SubtitleText className="text-black">Ali Khan Awan</SubtitleText>
              <TinyText>Electrician</TinyText>
            </div>
          </div>
          <BsThreeDotsVertical />
        </div>
        <SubtitleText className={"text-black mt-3"}>Description</SubtitleText>
        <form>
          <textarea
            name=""
            placeholder="Add Location"
            className="bg-[#F8F8F8] rounded-lg p-2"
            id=""
            cols="66"
            rows="3"
          ></textarea>
          <div className="grid grid-cols-2">
            <div>
              <SubtitleText className={"text-black"}>Date</SubtitleText>
              <input
                type="text"
                className="bg-[#F8F8F8] p-4 rounded-lg"
                placeholder="08/03/2018"
              />
            </div>
            <div>
              <SubtitleText className={"text-black"}>Date</SubtitleText>
              <input
                type="text"
                className="bg-[#F8F8F8]  p-4 rounded-lg "
                placeholder="08/03/2018"
              />
            </div>
          </div>
        </form>
      </div>
      <SecondaryButton className={"mt-3"} isActive={true}>
        Done
      </SecondaryButton>
    </Modal>
  );
};
export const EditProfileModal = ({ open, onClose }) => {
  const [editProfileModal1, setEditProfileModal1] = useState(false);
  const [editProfileModal2, setEditProfileModal2] = useState(false);
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={"flex flex-col bg-[#F8F8F8]"}
    >
      <div className="grid grid-cols-2 gap-6 mt-4">
        <img
          width={220}
          src={img1}
          alt=""
          onClick={() => {
            setEditProfileModal1(true);
          }}
        />
        <img
          width={220}
          src={img2}
          alt=""
          onClick={() => {
            setEditProfileModal2(true);
          }}
        />
        <EditProfileModal1
          open={editProfileModal1}
          onClose={() => {
            setEditProfileModal1(false);
          }}
        />
        <EditProfileModal2
          open={editProfileModal2}
          onClose={() => {
            setEditProfileModal2(false);
          }}
        />
      </div>
    </Modal>
  );
};
export const EditProfileModal1 = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Add Employee"}
      className={"flex flex-col  bg-[#F8F8F8]"}
    >
      <img
        width={65}
        className="flex items-center justify-center -mb-1 mt-2 ml-[163px]"
        src={profile}
        alt=""
      />
      <UserBasicInfo />
      <SecondaryButton isActive={true}>Next</SecondaryButton>
    </Modal>
  );
};
export const EditProfileModal2 = ({ open, onClose }) => {
  const [assignBuildingModal, setAssignBuildingModal] = useState(false);
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Add Manager"}
      className={"flex flex-col bg-[#F8F8F8]"}
    >
      <div className="bg-gray-300  h-[1px]"></div>
      <div className="flex items-center mt-2 justify-center gap-1">
        <div className="border-2   p-1 h-1 w-1 rounded-full bg-blue-400"></div>
        <div className="h-[1px] w-10 bg-blue-500"></div>
        <div className="border-2 p-1 h-1 w-1 rounded-full "></div>
      </div>
      <img
        width={55}
        className="flex mt-2 -mb-4 ml-[163px]"
        src={profile}
        alt=""
      />
      <UserBasicInfo />
      <SecondaryButton
        className={"ml-[95px] mr-[95px]"}
        isActive={true}
        onClick={() => {
          setAssignBuildingModal(true);
        }}
      >
        Next
      </SecondaryButton>
      <AssignBuildingModal
        open={assignBuildingModal}
        onClose={() => {
          setAssignBuildingModal(false);
        }}
      />
    </Modal>
  );
};

export const AssignBuildingModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Assign Building"}
      className={"flex flex-col"}
    >
      <div className="bg-gray-300  h-[1px]"></div>
      <div className="flex items-center mt-[10px] justify-center gap-1">
        <div className="border-2   p-1 h-1 w-1 rounded-full bg-blue-400"></div>
        <div className="h-[1px] w-10 bg-blue-400"></div>
        <div className="border-2 p-1 h-1 w-1 rounded-full bg-blue-400"></div>
      </div>
      <div className="flex  items-center mt-2 mr-3">
        <input
          className="p-3 flex-1 border rounded-lg hover:border-blue-500"
          type="email"
          placeholder="Email Address"
        />
        <BsSearch className="text-[#8B8B8B] ml-[-30px]" />
      </div>
      <BuildingData />
      <SecondaryButton
        className={"ml-[105px]   mr-[105px]"}
        onClick={onClose}
        isActive={true}
      >
        Done
      </SecondaryButton>
    </Modal>
  );
};
