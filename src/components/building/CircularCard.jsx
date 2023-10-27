import React from 'react'
import { CircularProgress } from "@mui/material";
import {  SubtitleText } from "../UI/Typography";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage1 = 66;
const percentage2 = 80;
const percentage3 = 90;


export default function CircularCard() {
  return (
    <div className="flex h-[100px]">
    
      <div className="flex flex-col items-center">
        <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
        <SubtitleText className={"mt-5"}>panding</SubtitleText>
      </div>
      <div className="flex flex-col items-center">
        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
        <SubtitleText className={"mt-5"}>resolved</SubtitleText>
      </div>{" "}
      <div className="flex flex-col  items-center">
        <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
        <SubtitleText className={"mt-5"}>oncomplete</SubtitleText>
      </div>
    </div>
  );
}
