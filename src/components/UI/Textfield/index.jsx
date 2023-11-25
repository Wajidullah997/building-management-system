import React from "react";

//packages
import clsx from "clsx";
import { Field } from "formik";

export const TextField = ({
  className,
  error,
  id,
  name,
  maxLength,
  placeholder,
  ...other
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Field
        {...other}
        maxLength={maxLength}
        id={id}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "p-3 focus:outline-none border rounded-[8px] border-slate-300 text-black text-sm",
          className
        )}
      />
      <div className="text-red-600 text-sm px-1">{error}</div>
    </div>
  );
};

export const OptionField = ({
  error,
  data,
  dataItems,
  name,
  optionType,
  ...other
}) => {
  return (
    <>
      <select
        {...other}
        value={data.title}
        name={name}
        className="w-full h-[40px] lg:h-[50px] text-black border border-grey px-2 rounded-md"
      >
        {dataItems?.map((item, index) => {
          return (
            <option
              value={item.title}
              key={index}
              className="border border-black"
            >
              {item.title}
            </option>
          );
        })}
      </select>
      <div className="text-red-600 text-sm px-1">{error}</div>
    </>
  );
};

export const TextArea = ({
  value,
  className,
  error,
  id,
  name,
  maxLength,
  placeholder,
  ...other
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Field
        {...other}
        maxLength={maxLength}
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "p-3 focus:outline-none border rounded-[8px] border-grey text-black text-sm",
          className
        )}
      />
      <div className="text-red-600 text-sm px-1">{error}</div>
    </div>
  );
};
