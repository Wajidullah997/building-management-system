import React from "react";
import List from "./List";
import Profile from "./Profile";
export default function Workers() {
  return (
    <div className="grid absolute top-[60px] w-[84%] -right-[0px] mr-3 grid-cols-3 overflow-y-auto gap-3">
      <div className="col-span-2 mt-4">
        <List />
      </div>
      <div className="w-full flex flex-col mt-4">
        <Profile />
      </div>
    </div>
  );
}
