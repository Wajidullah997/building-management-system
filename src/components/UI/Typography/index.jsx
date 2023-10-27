import React from "react";

//packages
import clsx from "clsx";

export const HeadTitleText = ({ className, onClick, children, ...other }) => {
  return (
    <div
      {...other}
      onClick={onClick}
      className={clsx(
        "text-[22px] lg:text-[26px] text-[#1A2D33] capitalize font-semibold break-words",
        className
      )}
    >
      {children}
    </div>
  );
};



export const SubtitleText = ({ className, onClick, children, ...other }) => {
  return (
    <div
      {...other}
      onClick={onClick}
      className={clsx(
        "text-[12px] text-[#8B8B8B] font-normal break-words capitalize",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ParagraphText = ({ className, onClick, children, ...other }) => {
  return (
    <div
      {...other}
      onClick={onClick}
      className={clsx(
        "text-[12px] lg:text-[16px] text-[#1A2D33] capitalize font-semi break-words",
        className
      )}
    >
      {children}
    </div>
  );
};
export const ParagraphText1 = ({ className, onClick, children, ...other }) => {
  return (
    <div
      {...other}
      onClick={onClick}
      className={clsx(
        "text-[12px] lg:text-[16px] text-[#22A2FF] capitalize font-normal break-words",
        className
      )}
    >
      {children}
    </div>
  );
};
export const TinyText = ({ className, onClick, children, ...other }) => {
  return (
    <div
      {...other}
      onClick={onClick}
      className={clsx(
        "text-[7px] lg:text-[9px] text-[#243B53] capitalize font-normal break-words",
        className
      )}
    >
      {children}
    </div>
  );
};
