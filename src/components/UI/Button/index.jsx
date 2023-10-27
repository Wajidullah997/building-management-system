import React from "react";

//packages
import clsx from "clsx";

export const SecondaryButton = ({
  className,
  type,
  onClick,
  children,
isActive,
  ...other
}) => {
  return (
    <button
      {...other}
      type={type}
      active={isActive}
      onClick={onClick}
      className={clsx(
        className,
        "px-5 py-2  text-[12px] text-white lg:text-[14px] border border-grey font-medium text-grey flex items-center justify-center rounded-lg",
        isActive ? "bg-[#22A2FF]" : "cursor-pointer"
      )}
    >
      {children}
    </button>
  );
};

export const PrimaryButton = ({
  className,
  type,
  onClick,
  children,
  isActive,
  ...other
}) => {
  return (
    <button
      {...other}
      type={type}
      active={isActive}
      onClick={onClick}
      className={clsx(
        className,
        "px-5 py-2 bg-[#F8F8F8]  text-[12px] text-[#8B8B8B] lg:text-[14px] border border-grey font-medium text-grey flex items-center justify-center rounded-lg",
        isActive ? "bg-[#22A2FF]" : "cursor-pointer"
      )}
    >
      {children}
    </button>
  );
};