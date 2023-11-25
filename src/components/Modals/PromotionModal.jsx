import React from 'react'
import { ParagraphText, TinyText } from "../UI/Typography";
import { SecondaryButton } from '../UI/Button';
import mediafile from "../../assets/MediaFile.png";
import mediafile1 from "../../assets/MediaFile1.png";
import { Modal } from '@mui/material';
export const PromotionModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Add Promotion"}
      className={"flex flex-col bg-[#F8F8F8] overflow-x-hidden gap-10"}
    >
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="flex flex-col">
          <ParagraphText className={"font-bold !text-[12px]"}>
            Title
          </ParagraphText>
          <form>
            <input
              type="text"
              placeholder="write your name"
              className="w-full bg-white text-[13px] p-3 rounded-lg"
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
              className="bg-white p-2 text-[13px] rounded-lg "
              name=""
              id=""
              cols="27"
              rows="4"
            ></textarea>
            <ParagraphText className={"!text-[10px] mt-3 font-bold"}>
              Set A Goal For Your Fundraiser
            </ParagraphText>
            <div className="flex  items-center">
              <input
                type="text"
                placeholder="Amount"
                className="  rounded-lg text-[13px] w-[385px] p-4 bg-white "
              />
              <p className="ml-[-35px] text-[10px] font-bold">USD</p>
            </div>
          </form>
        </div>
      </div>
      <SecondaryButton
        className={"ml-[100px] mr-[100px] "}
        isActive={true}
        onClick={onClose}
      >
        Add Promotion
      </SecondaryButton>
    </Modal>
  );
};
