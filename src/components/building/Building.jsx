import React from "react";
import BuildingList from "./BuildingList";
import BuildingProfile from "./BuildingProfile";

export default function Building() {
  return (
    <div className="grid absolute top-[60px] w-[85%] -right-[0px] grid-cols-3 overflow-y-auto gap-3">
      <div className="col-span-2 mt-4">
        <BuildingList />
      </div>

      <div className="w-full flex flex-col mt-4">
        <BuildingProfile />
      </div>
    </div>
  );
}
