import React from "react";
import { ParagraphText } from "../UI/Typography";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { BsChevronCompactDown } from "react-icons/bs";
const data = [
  { name: "Sun", uv: 400, pv: 2400, amt: 2400 },
  { name: "Mon", uv: 500, pv: 2200, amt: 2800 },
  { name: "Tue", uv: 300, pv: 2000, amt: 2600 },
  { name: "Thu", uv: 400, pv: 1900, amt: 2200 },
  { name: "Fri", uv: 400, pv: 1800, amt: 2500 },
  { name: "Sat", uv: 400, pv: 1800, amt: 2500 },
];
const Chart = () => {
  return (
    <div className="bg-white p-4 mt-3 rounded-lg ">
      <div className="flex justify-between items-center">
        <ParagraphText>Activity</ParagraphText>
        <span className="text-[13px] cursor-pointer p-2 w-28 bg-[#22A2FF] rounded-lg text-white ">
          <div className="flex  whitespace-nowrap  items-center gap-2">
            Add Service
            <BsChevronCompactDown />
          </div>
        </span>
      </div>
      <div className="mt-8">
        <LineChart
          width={650}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <Line type="monotone" dataKey="uv" stroke="#22A2FF" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};
export default Chart;
