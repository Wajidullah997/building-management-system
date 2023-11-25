import React, { useState } from "react";
import { SubtitleText } from "../UI/Typography";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function UserBasicInfo({ userType }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !location || !contact) {
      alert("Please fill in all fields");
      return;
    }

    const userTypeValue = userType || "Admin";
    const userData = {
      name,
      email,
      password,
      location,
      contact,
      userType: userTypeValue,
    };

    if (userTypeValue === "Employee") {
      userData.service = service; // Include service only for Employee
    }

    addDoc(collection(db, "users"), userData)
      .then(() => {
        alert("Message sent");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setService("");
    setPassword("");
    setLocation("");
    setContact("");
  };
  return (
    <div className=" w-full flex justify-center flex-col py-4 p-2">
      <form onSubmit={handleSubmit}>
        <SubtitleText className={"text-black"}>Name</SubtitleText>
        <input
          className="p-4 text-[13px] mt-1 border bg-white w-full rounded-lg hover:border-blue-500"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Saddar bazzar Peshawar"
        />
        <SubtitleText className={"text-black mt-3"}>
          E-mail Address
        </SubtitleText>
        <input
          className="p-3 mt-1 text-[13px] border bg-white w-full rounded-lg hover:border-blue-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="saddarbazar123@gmail.com"
        />
        <SubtitleText className={"text-black mt-3"}>Password</SubtitleText>
        <input
          className="p-3 mt-1 text-[13px] border bg-white w-full rounded-lg hover:border-blue-500"
          type="password"
          placeholder="Password234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {userType === "Employee" && (
          <>
            <SubtitleText className={"text-black mt-3"}>
              Service Type
            </SubtitleText>
            <select
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              id="service"
              className="border border-gray-200 mt-1 text-gray-400 text-[13px] p-3 bg-white w-full rounded-lg hover:border-blue-500"
            >
              <option value="">Select Service Type</option>
              <option value="Arslan">Arslan</option>
              <option value="Adnan">Adnan</option>
              <option value="Abubakar">Abubakar</option>
            </select>
          </>
        )}
        <SubtitleText className={"text-black mt-3"}>Location</SubtitleText>
        <input
          className="p-3 mt-1 text-[13px] border bg-white w-full rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Saddar Bazzar Peshawar"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <SubtitleText className={"text-black mt-3"}>Contact</SubtitleText>
        <input
          className="p-3 mt-1 text-[13px] border bg-white w-full rounded-lg hover:border-blue-500"
          type="text"
          placeholder="Saddar Bazzar Peshawar"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
