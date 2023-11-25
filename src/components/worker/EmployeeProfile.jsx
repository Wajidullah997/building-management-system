import React, {useState,useEffect} from 'react'
import { SubtitleText,TinyText } from "../UI/Typography";
import { BsThreeDotsVertical } from "react-icons/bs";

const items = [
  {
    id: 1,
    image: "./image/list1.png",
    name: "Pagenat app",
  },
  {
    id: 2,
    image: "./image/list2.png",
    name: "Chat App",
  },
  {
    id: 3,
    image: "./image/list3.png",
    name: "Management App",
  },
  {
    id: 4,
    image: "./image/list4.png",
    name: "Management App",
  },
  {
    id: 5,
    image: "./image/list5.png",
    name: "Management App",
  },
  {
    id: 6,
    image: "./image/list6.png",
    name: "Management App",
  },
];
export default function EmployeeProfile() {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    // Fetch data from Firestore and update state
    const fetchData = async () => {
      try {
        const data = await db.collection("users").get();
        const updatedEmployeeData = data.docs.map((doc) => doc.data());
        setEmployeeData(updatedEmployeeData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); 
  return (
    <div>
      {employeeData.map((employee) => (
        <div
          key={employee.id}
          className="flex h-[60px] justify-between text-gray-400 mt-3 gap-2 bg-white items-center"
        >
          <div className="flex items-center">
            <img
              src={employee.profileImageUrl}
              width={60}
              className="p-2"
              alt=""
            />
            <div className="flex flex-col">
              <SubtitleText className="text-black">
                {employee.fullName}
              </SubtitleText>
              {/* Display other user details */}
            </div>
          </div>
          <BsThreeDotsVertical />
        </div>
      ))}
    </div>
  );
}
