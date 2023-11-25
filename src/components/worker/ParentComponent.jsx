import React, { useState } from "react";
import EditProfileModal1 from "./EditProfileModal1";
import ManagerProfile from "./ManagerProfile";

export default function ParentComponent() {
  const [submittedData, setSubmittedData] = useState({});

  const handleCloseModal = (data) => {
    setSubmittedData(data);

    return (
      <>
        <EditProfileModal1 open={true} onClose={handleCloseModal} />
        <ManagerProfile submittedUserData={submittedData} />
      </>
    );
  }
}
