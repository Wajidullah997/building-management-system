// Higher-level component to manage state and data flow
import React, { useState } from "react";
import UserBasicInfo from "./UserBasicInfo";
import ManagerProfile from "./ManagerProfile";
import AssignBuildingModal from "./AssignBuildingModal";

export default function ParentComponent() {
  const [userData, setUserData] = useState(null); // State to hold user data

  // Function to receive submitted user data from UserBasicInfo
  const handleUserDataSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <UserBasicInfo onSubmit={handleUserDataSubmit} />

      {/* Pass userData to ManagerProfile */}
      <ManagerProfile managerData={userData} />

      {/* Pass userData to AssignBuildingModal */}
      <AssignBuildingModal managerData={userData} />
    </div>
  );
}
