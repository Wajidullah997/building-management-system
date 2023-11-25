import React from "react";
import List from "./List";
import Profile from "./Profile";
export default function Workers() {
  return (
    <div className="grid absolute top-[60px] w-[83%] -right-[0px] mr-3 grid-cols-3 overflow-y-auto gap-3">
      <div className="col-span-2 mt-5">
        <List />
      </div>
      <div className="w-full flex flex-col mt-5">
        <Profile />
      </div>
    </div>
  );
}
