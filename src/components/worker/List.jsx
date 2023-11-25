import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SecondaryButton } from "../UI/Button";
import ManagerProfile from "./ManagerProfile";
import EmployeeProfile from "./EmployeeProfile";
import { EditProfileModal } from "../Modals";
const List = () => {
  const [isManagerData, setManagerData] = useState(true);
  const [isEmployeeData, setEmployeeData] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const showManagerData = () => {
    setManagerData(true);
    setEmployeeData(false);
  };

  const showEmployeeData = () => {
    setManagerData(false);
    setEmployeeData(true);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center mb-3 mr-3">
        <input
          className="p-4 flex-1 text-[13px] border rounded-lg hover:border-blue-500"
          type="email"
          placeholder="Email Address"
        />
        <BsSearch className="text-[#8B8B8B] ml-[-30px]" />
      </div>
      <div className="flex gap-3 mt-2 justify-between">
        <div className="flex gap-3">
          <SecondaryButton onClick={showManagerData} isActive={(isManagerData,true)}>
            Managers
          </SecondaryButton>
          <SecondaryButton
            className="!text-black w-32 bg-white"
            onClick={showEmployeeData}
            isActive={isEmployeeData}
          >
            Employee
          </SecondaryButton>
        </div>
        <SecondaryButton
          isActive={true}
          onClick={() => {
            setEditModal(true);
          }}
        >
          <span className="px-1">+</span> Add
        </SecondaryButton>
      </div>
      {isManagerData && <ManagerProfile />}
      {isEmployeeData && <EmployeeProfile />}
      <EditProfileModal
        open={editModal}
        onClose={() => {
          setEditModal(false);
        }}
      />
    </div>
  );
};

export default List;
