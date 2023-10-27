import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { SecondaryButton } from "../UI/Button";

export default function Sidebar() {
  const links = [
    { to: "/", text: "Home" },
    { to: "/worker", text: "Workers" },
    { to: "/queries", text: "Queries" },
    { to: "/promotion", text: "Promotion" },
    { to: "/building", text: "Buildings" },
    { to: "/services", text: "Services" },
    { to: "/messages", text: "Messages" },
  ];

  const settingsLinks = [
    { to: "/setting", text: "Setting" },
    { to: "/help", text: "Help & Support" },
  ];
  return (
    <div className="bg-white mt-[-45px] w-[120px] md:w-[170px] h-screen overflow-y-auto">
      <div className="flex items-center gap-2 justify-center">
        <img src={logo} alt="logo" width={30} />
        <p className="text-[#22A2FF] font-bold"> Servike </p>
      </div>
      <div className="md:flex-col h-[340px] py-2 left-5 md:w-32 relative md:mt-10 bg-[#F8F8F8]">
        <ul className="text-[14px] text-gray-400 text-start px-2">
          {links.map((link, index) => (
            <li className="p-3" key={index}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex-col left-5 md:w-32 relative md:mt-5 bg-[#F8F8F8]">
        <ul className="text-start text-[14px] text-gray-400">
          {settingsLinks.map((link, index) => (
            <li className="p-2 whitespace-nowrap" key={index}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-6 px-2">
        <SecondaryButton className="w-[90%]" isActive={true}>
          Log out
        </SecondaryButton>
      </div>
    </div>
  );
}
