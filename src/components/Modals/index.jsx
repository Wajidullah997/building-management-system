import React, { useState } from "react";
import { SecondaryButton } from "../UI/Button";
import { BsSearch } from "react-icons/bs";
import { db,storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import mediafile from "../../assets/MediaFile.png";
import list1 from "../../assets/list1.png";
import img1 from "../../assets/editimg1.png";
import img2 from "../../assets/editimg2.png";
import profile from "../../assets/profile.png";
import mediafile1 from "../../assets/MediaFile1.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal } from "../UI/Modal";
import { ParagraphText, SubtitleText, TinyText } from "../UI/Typography";
import UserBasicInfo from "../worker/UserBasicInfo";
import BuildingData from "../worker/BuildingData";
const items = [
  {
    id: 1,
    image: "./image/list1.png",
    name: "Ali Khan Awan",
  },
  {
    id: 2,
    image: "./image/list2.png",
    name: "Ismail Khan",
  },
  {
    id: 3,
    image: "./image/list3.png",
    name: "Zubair khan",
  },
];
export const PromotionModal = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState([]);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     // Upload multiple images to Firebase Storage
     const uploadTasks = image.map(async (image) => {
       const storageRef = storage.ref();
       const imageRef = storageRef.child(image.name);
       await imageRef.put(image);
       return imageRef.getDownloadURL();
     });

     // Get the download URLs of uploaded images
     const imageUrls = await Promise.all(uploadTasks);

     // Add data to Firestore
     await db.collection("users").add({
       title,
       description,
       amount,
       images: imageUrls, // Save image URLs in Firestore
     });

     onClose(); // Close the modal after successful submission
   } catch (error) {
     console.error("Error adding document: ", error);
   }
 };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Add Promotion"}
      className={"flex flex-col bg-[#F8F8F8] overflow-x-hidden gap-10"}
    >
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="flex flex-col">
            <ParagraphText className={"font-bold !text-[12px]"}>
              Title
            </ParagraphText>
            <input
              type="text"
              placeholder="write your name"
              className="w-full bg-white text-[13px] p-3 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ParagraphText className={"font-bold !text-[12px] mt-4"}>
              Add Media Files
            </ParagraphText>
            <TinyText>Add up to six vedios images</TinyText>
            <div className="grid mt-2 grid-cols-3 p-1 gap-2 ">
              {Array.from({ length: 6 }, (_, index) => (
                <label key={index} className="cursor-pointer">
                  <img
                    width={50}
                    className="ml-1 mt-[2px]"
                    src={mediafile}
                    alt=""
                  />
                  <input
                    type="file"
                    value={image}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    multiple
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col ">
            <ParagraphText className={"font-bold !text-[12px]"}>
              Fund Description
            </ParagraphText>
            <textarea
              placeholder="Describe the fund"
              className="bg-white p-2 text-[13px] rounded-lg "
              name=""
              id=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="27"
              rows="4"
            ></textarea>
            <ParagraphText className={"!text-[10px] mt-3 font-bold"}>
              Set A Goal For Your Fundraiser
            </ParagraphText>
            <div className="flex  items-center">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="  rounded-lg text-[13px] w-[385px] p-4 bg-white "
              />
              <p className="ml-[-35px] text-[10px] font-bold">USD</p>
            </div>
          </div>
          <SecondaryButton
            className={"ml-[100px] w-full mr-[100px] "}
            isActive={true}
            onClick={onClose}
            type="submit"
          >
            Add Promotion
          </SecondaryButton>
        </div>
      </form>
    </Modal>
  );
};
export const QueryAssignModal = ({ open, onClose }) => {
  const [queryassignEmployeeModal, setQueryassignEmployeeModal] =
    useState(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Assign Employee"}
      className={"flex flex-col bg-[#F8F8F8] gap-10"}
    >
      <div className="bg-gray-300 h-[1px]"></div>
      <div className="flex items-center  -mt-[10px] -mb-[30px] justify-center gap-1">
        <div className="border-2   p-1 h-1 w-1 rounded-full bg-blue-400"></div>
        <div className="h-[1px] w-10 bg-blue-500"></div>
        <div className="border-2 p-1 h-1 w-1 rounded-full "></div>
      </div>
      <div className="flex flex-col">
        <div>
          {items.map((elem) => {
            const { id, image, name } = elem;
            return (
              <>
                <div
                  key={id}
                  className="flex border-[2px] hover:border-blue-300 hover:bg-white rounded-lg h-[60px] justify-between text-gray-400 mt-3 gap-2 bg-[#F8F8F8] items-center"
                >
                  <div className="flex items-center">
                    <img src={image} width={60} className="p-2" alt="" />
                    <div className="flex flex-col">
                      <SubtitleText className="text-black">{name}</SubtitleText>
                      <TinyText>Electrician</TinyText>
                    </div>
                  </div>
                  <BsThreeDotsVertical />
                </div>
              </>
            );
          })}
        </div>
        <SecondaryButton
          className={"mt-3"}
          onClick={() => {
            setQueryassignEmployeeModal(true);
          }}
          isActive={true}
        >
          Next
        </SecondaryButton>
        <QueryAssignEmployeeModal
          open={queryassignEmployeeModal}
          onClose={() => {
            setQueryassignEmployeeModal(false);
          }}
        />
      </div>
    </Modal>
  );
};
export const QueryAssignEmployeeModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Assign Employee"}
      className={"flex flex-col bg-[#F8F8F8] gap-10"}
    >
      <div className="bg-gray-300 h-[1px]"></div>
      <div className="flex items-center -mt-[10px] -mb-[10px] justify-center gap-1">
        <div className="border-2   p-1 h-1 w-1 rounded-full bg-blue-400"></div>
        <div className="h-[1px] w-10 bg-blue-500"></div>
        <div className="border-2 bg-blue-500  p-1 h-1 w-1 rounded-full "></div>
      </div>
      <SubtitleText className={"text-black"}>Assign Employee</SubtitleText>
      <div className="flex flex-col">
        <div className="flex border-[2px] -mt-[30px] hover:border-blue-300 hover:bg-white rounded-lg h-[60px] justify-between text-gray-400  gap-2 bg-[#F8F8F8] items-center">
          <div className="flex items-center ">
            <img src={list1} width={60} className="p-2" alt="" />
            <div className="flex flex-col">
              <SubtitleText className="text-black">Ali Khan Awan</SubtitleText>
              <TinyText>Electrician</TinyText>
            </div>
          </div>
          <BsThreeDotsVertical />
        </div>
        <SubtitleText className={"text-black mt-3"}>Description</SubtitleText>
        <form>
          <textarea
            name=""
            placeholder="Add Location"
            className="bg-white rounded-lg text-[13px] p-2"
            id=""
            cols="55"
            rows="4"
          ></textarea>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <SubtitleText className={"text-black"}>Date</SubtitleText>
              <input
                type="text"
                className="bg-white w-[185px] text-[13px] p-5 rounded-lg"
                placeholder="08/03/2018"
              />
            </div>
            <div>
              <SubtitleText className={"text-black"}>Date</SubtitleText>
              <input
                type="text"
                className="bg-white  w-[185px] text-[13px] p-5 rounded-lg "
                placeholder="08/03/2018"
              />
            </div>
          </div>
        </form>
      </div>
      <SecondaryButton className={"mt-3"} isActive={true}>
        Done
      </SecondaryButton>
    </Modal>
  );
};
export const EditProfileModal = ({ open, onClose }) => {
  const [editProfileModal1, setEditProfileModal1] = useState(false);
  const [editProfileModal2, setEditProfileModal2] = useState(false);
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={"flex flex-col bg-[#F8F8F8]"}
    >
      <div className="grid grid-cols-2 gap-6 mt-4">
        <img
          width={220}
          src={img1}
          alt=""
          onClick={() => {
            setEditProfileModal1(true);
          }}
        />
        <img
          width={220}
          src={img2}
          alt=""
          onClick={() => {
            setEditProfileModal2(true);
          }}
        />
        <EditProfileModal1
          open={editProfileModal1}
          onClose={() => {
            setEditProfileModal1(false);
          }}
        />
        <EditProfileModal2
          open={editProfileModal2}
          onClose={() => {
            setEditProfileModal2(false);
          }}
        />
      </div>
    </Modal>
  );
};
export const EditProfileModal1 = ({ open, onClose }) => {
const [image, setImage] = useState(null);
const [userData, setUserData] = useState({
  name: '',
  email: '',
  password: '',
  location: '',
  contact: '',
});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  const handleUserDataSubmit = async (e) => {
    e.preventDefault();
    try {
      if (image) {
        const storageRef = storage.ref();
        const imageRef = storageRef.child(image.name);
        await imageRef.put(image);
        const imageUrl = await imageRef.getDownloadURL();

        setUserData((prevData) => ({
          ...prevData,
          profileImageUrl: imageUrl,
        }));
      }

      await db.collection("users").add(userData);

      onClose();
    } catch (error) {
      console.error("Error adding user data: ", error);
    }
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Add Employee"}
      className={"flex flex-col  bg-[#F8F8F8]"}
    >
      <form onSubmit={handleUserDataSubmit}>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        {image && <img src={URL.createObjectURL(image)} className="w-[20%] ml-[150px]" alt="Preview" />}

        <UserBasicInfo onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>
      {/* <SecondaryButton type="submit" isActive={true} onClose={onClose}>
        Done
      </SecondaryButton> */}
    </Modal>
  );
};
export const EditProfileModal2 = ({ open, onClose }) => {
  const [assignBuildingModal, setAssignBuildingModal] = useState(false);
  const useDoc = (userData) => {
    console.log("saving data in firebase", userData);
  };
  const handleUserDataSubmit = (userData) => {
    useDoc(userData);
    onClose();
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Add Manager"}
      className={"flex flex-col bg-[#F8F8F8]"}
    >
      <div className="bg-gray-300  h-[1px]"></div>
      <div className="flex items-center mt-2 justify-center gap-1">
        <div className="border-2   p-1 h-1 w-1 rounded-full bg-blue-400"></div>
        <div className="h-[1px] w-10 bg-blue-500"></div>
        <div className="border-2 p-1 h-1 w-1 rounded-full "></div>
      </div>
      <img
        width={55}
        className="flex mt-2 -mb-4 ml-[163px]"
        src={profile}
        alt=""
      />
      <UserBasicInfo userType="Manager" onSubmit={handleUserDataSubmit} />
      <SecondaryButton
        className={"ml-[95px] mr-[95px]"}
        isActive={true}
        onClick={() => {
          setAssignBuildingModal(true);
        }}
      >
        Next
      </SecondaryButton>
      <AssignBuildingModal
        open={assignBuildingModal}
        onClose={() => {
          setAssignBuildingModal(false);
        }}
      />
    </Modal>
  );
};
export const AssignBuildingModal = ({ managerData, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={"Assign Building"}
      className={"flex flex-col"}
    >
      <div className="bg-gray-300  h-[1px]"></div>
      <div className="flex items-center mt-[10px] justify-center gap-1">
        <div className="border-2   p-1 h-1 w-1 rounded-full bg-blue-400"></div>
        <div className="h-[1px] w-10 bg-blue-400"></div>
        <div className="border-2 p-1 h-1 w-1 rounded-full bg-blue-400"></div>
      </div>
      <div className="flex  items-center mt-2 mr-3">
        <input
          className="p-3 flex-1 text-[13px] border rounded-lg hover:border-blue-500"
          type="email"
          placeholder="Email Address"
        />
        <BsSearch className="text-[#8B8B8B] ml-[-30px]" />
      </div>
      <BuildingData />
      <SecondaryButton
        className={"ml-[105px]   mr-[105px]"}
        onClick={onClose}
        isActive={true}
      >
        Done
      </SecondaryButton>
    </Modal>
  );
};
