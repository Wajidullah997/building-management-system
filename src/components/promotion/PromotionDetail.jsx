import React, { useState,useEffect } from "react";
import { SecondaryButton } from "../UI/Button";
import { HeadTitleText, ParagraphText, SubtitleText } from "../UI/Typography";
import { PromotionModal } from "../Modals";
const items = [
  {
    id: 1,
    image: "./image/promo1.png",
    name: "Room For Rent",
    description: "Their is One Washroom Two",
    number: "Office Three",
    date: "11/22/2018",
  },
  {
    id: 2,
    image: "./image/promo2.png",
    name: "Room For Rent",
    description: "Their is One Washroom Two",
    number: "Office Three",
    date: "11/22/2018",
  },
  {
    id: 3,
    image: "./image/promo3.png",
    name: "Room For Rent",
    description: "Their is One Washroom Two",
    number: "Office Three",
    date: "11/22/2018",
  },
  {
    id: 4,
    image: "./image/promo4.png",
    name: "Room For Rent",
    description: "Their is One Washroom Two",
    number: "Office Three",
    date: "11/22/2018",
  },
];
export default function PromotionDetail() {
  const [promotionModal, setPromotionModal] = useState(false);
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    // Fetch promotions data from Firestore
    const fetchPromotions = async () => {
      try {
        const snapshot = await db.collection("users").get();
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPromotions(data);
      } catch (error) {
        console.error("Error fetching promotions: ", error);
      }
    };

    fetchPromotions();
  }, []); // Run once on component mount

  return (
    <div className="flex flex-col p-4 bg-white w-full rounded-lg">
      <div className="flex gap-3 mt-2  justify-between">
        <HeadTitleText>Promotion</HeadTitleText>
        <SecondaryButton
          isActive={true}
          onClick={() => {
            setPromotionModal(true);
          }}
        >
          <span className="px-1">+</span> Add Promotion
        </SecondaryButton>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-2">
        {promotions.map((promotion) => {
          const { id, image, name, description,number,data } = promotion;
          return (
            <div key={id} className="flex flex-col gap-2">
              <img src={image} alt="" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <ParagraphText>{name}</ParagraphText>
                  <SubtitleText>{description}</SubtitleText>
                  <SubtitleText>{number}</SubtitleText>
                </div>
                <SubtitleText>{data}</SubtitleText>
              </div>
            </div>
          );
        })}
      </div>
      <PromotionModal
        open={promotionModal}
        onClose={() => {
          setPromotionModal(false);
        }}
      />
    </div>
  );
}
