import React from "react";
import { ParagraphText } from "../UI/Typography";
import NewqueryCard from "./NewqueryCard";
export default function Newqueries() {
  return (
    <div className="bg-white mr-4  p-2 rounded-lg">
      <ParagraphText>New Queries</ParagraphText>
      <div className="flex flex-col">
        <NewqueryCard />
        <NewqueryCard />
        <NewqueryCard />
      </div>
      <button className="bg-[#F8F8F8] w-full mt-2 p-2">
        <h4 className="text-[15px] text-[#22A2FF]">See all Quries</h4>
      </button>
    </div>
  );
}
