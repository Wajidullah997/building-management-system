import React, { useState } from "react";
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

  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };
  return (
    <div className="bg-white mt-[-49px] w-[120px] md:w-[190px] 2xl:w-[190px] h-screen overflow-y-auto">
      <div className="flex items-center gap-2 justify-center">
        <Link to='/'>  <img src={logo} alt="logo" width={30} /></Link>
          <p className="text-[#22A2FF] font-bold">
            <Link to='/'>Servike </Link>
          </p>
      </div>
      <div className="md:flex-col h-[340px] py-2 left-6 2xl:left-8 md:w-36 relative rounded-lg md:mt-10 bg-[#F8F8F8]">
        <ul className="text-[14px] text-gray-400 text-start px-4">
          {links.map((link, index) => (
            <li className="p-3 " key={index}>
              <Link
                to={link.to}
                className={`${
                  activeLink === link.to
                    ? "bg-[#22A2FF] py-2 px-4 rounded-lg text-white"
                    : ""
                }`}
                onClick={() => handleLinkClick(link.to)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex-col rounded-lg left-5 md:w-36 relative md:mt-5 bg-[#F8F8F8]">
        <ul className="text-start text-[14px] text-gray-400">
          {settingsLinks.map((link, index) => (
            <li className="p-3 whitespace-nowrap" key={index}>
              <Link
                to={link.to}
                className={`${
                  activeLink === link.to
                    ? "bg-[#22A2FF] py-2 px-5 rounded-lg text-white"
                    : ""
                }`}
                onClick={() => handleLinkClick(link.to)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-4 px-2">
        <SecondaryButton className="w-[90%]" isActive={true}>
          Log out
        </SecondaryButton>
      </div>
    </div>
  );
}
