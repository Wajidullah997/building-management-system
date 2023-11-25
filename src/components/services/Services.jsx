import React from "react";
import ServiceList from "./ServiceList";
import ServiceProfileList from "./ServiceProfileList";
export default function Services() {
  return (
    <div className="grid absolute top-[60px] w-[83%] mr-3 -right-[0px] grid-cols-3 gap-3">
      <div className="col-span-2 mt-5">
        <ServiceList />
      </div>

      <div className="w-full flex flex-col mt-5">
        <ServiceProfileList />
      </div>
    </div>
  );
}
