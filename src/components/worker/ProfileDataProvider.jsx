import React, { createContext, useContext, useState } from "react";

const ProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState([]);

  const updateProfileData = (newProfileData) => {
    setProfileData(newProfileData);
  };

  return (
    <ProfileDataContext.Provider value={{ profileData, updateProfileData }}>
      {children}
    </ProfileDataContext.Provider>
  );
};
