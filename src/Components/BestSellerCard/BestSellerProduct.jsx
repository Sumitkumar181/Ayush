import React from 'react'
import cream from "../../assets/Cream.jpeg"
import BabyFood from "../../assets/BabyFood.jpeg"
import { BsArrowRight } from "react-icons/bs";

const SellerCardData = [
  {
    id: 1,
    img: cream,
    thisWeek: "Only This Week",
    headIng: "Provides you experienced affordable price",
    subHead: "Eat one every day",
    shopBtn: "Shop Now",
  },
  {
    id: 2,
    img: BabyFood,
    thisWeek: "Only This Week",
    headIng: "Snacks that nourishes our mind and body",
    subHead: "Shine the morning...",
    shopBtn: "Shop Now",
  },
];

export default function BestSellerProduct() {
  return (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          {SellerCardData.map((sellerData) => (
            <div
              key={sellerData.id}
              className="relative rounded shadow-md overflow-hidden min-h-10"
            >
              
              <img
                src={sellerData.img}
                alt="Agg"
                className="w-full h-full  object-cover"
              />
              <div className="absolute top-5 left-0 right-0  p-4 flex flex-col justify-end bg-opacity-40">
                <p className="text-sm  text-[#EA580C]">{sellerData.thisWeek}</p>
                <h2 className="text-[#111827] w-[90%] font-bold text-[18px] mt-4  leading-[100%] tracking-[-0.88px]">
                  {sellerData.headIng}
                </h2>
                <p className=" mt-3.5 text-[#6B7280] font-normal text-sm leading-[19px] tracking-[-0.32px]">
                  {sellerData.subHead}
                </p>
                <button className="flex items-center justify-between px-3  py-2 mt-5  bg-white border border-[#E5E7EB] rounded-2xl  h-9 w-26 font-bold text-xs leading-4 tracking-tight">
                  {sellerData.shopBtn}
                  <BsArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      
  );
}
