import React from "react";
import PromotionDetail from "./PromotionDetail";
import PromotionDetailCard from "./PromotionDetailCard";

export default function Promotion() {
  return (
    <div className="grid absolute top-[60px] w-[84%] -right-[0px] grid-cols-3  gap-3">
      <div className="col-span-2 mt-5">
        <PromotionDetail />
      </div>

      <div className="w-full flex flex-col mt-5">
        <PromotionDetailCard />
      </div>
    </div>
  );
}
