import React from "react";
import Review from "./Review";
import Newqueries from "./Newqueries";
import Chart from "./Chart";

export default function Home() {
  return (
    <div className="grid absolute top-[60px] w-[85%] -right-[0px] grid-cols-3 overflow-y-auto gap-3">
      <div className="col-span-2 mt-4">
        <Review />
        <Chart />
      </div>
      <div className="w-full flex flex-col mt-4">
        <Newqueries />
      </div>
    </div>
  );
}
