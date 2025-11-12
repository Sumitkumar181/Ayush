import card1 from "../../assets/card1.jpeg";
import card2 from "../../assets/card2.jpeg";
import card3 from "../../assets/card3.jpeg";
import card4 from "../../assets/card4.jpeg";
import { BsArrowRight } from "react-icons/bs";

const thisWeekData = [
  {
    id: 1,
    img: card1,
    thisWeek: "Only This Week",
    headIng1: "Provides you experienced",
    headIng2: "affordable price",
    subHead: "Eat one every day",
    shopBtn: "Shop Now",
  },
  {
    id: 2,
    img: card2,
    thisWeek: "Only This Week",
    headIng1: "Snacks that nourishes",
    headIng2: "our mind and body",
    subHead: "Shine the morning...",
    shopBtn: "Shop Now",
  },
  {
    id: 3,
    img: card3,
    thisWeek: "Only This Week",
    headIng1: "Unbeatable quality,",
    headIng2: "unbeatable prices.",
    subHead: "Only this week. Don’t miss...",
    shopBtn: "Shop Now",
  },
  {
    id: 4,
    img: card3,
    thisWeek: "Only This Week",
    headIng1: "Unbeatable quality,",
    headIng2: "unbeatable prices.",
    subHead: "Only this week. Don’t miss...",
    shopBtn: "Shop Now",
  },
];

export default function FeatureProductCard() {
  return (
    <div className="container mx-auto  font-inter">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {thisWeekData.map((cardData) => (
          <div
            {...cardData.id}
            className="relative rounded shadow-md overflow-hidden min-h-10  0"
          >
            
            <img
              src={cardData.img}
              alt="Agg"
              className="w-full h-full  object-cover"
            />
            <div className="absolute top-5 left-0 right-0  p-4 flex flex-col justify-end bg-opacity-40">
              <p className="text-sm  text-[#EA580C]">{cardData.thisWeek}</p>
              <h2 className="text-[#111827] w-[90%] font-bold text-[18px] mt-4  leading-[100%] tracking-[-0.88px]">
                {cardData.headIng1}
              </h2>
              <h2 className="text-[#111827] w-[90%]  font-bold text-[18px] mt-2  leading-[100%] tracking-[-0.88px]">
                {cardData.headIng2}
              </h2>
              <p className=" mt-3.5 text-[#6B7280] font-normal text-sm leading-[19px] tracking-[-0.32px]">
                {cardData.subHead}
              </p>
              <button className="flex items-center justify-between px-3  py-2 mt-5  bg-white border border-[#E5E7EB] rounded-2xl  h-9 w-26 font-bold text-xs leading-4 tracking-tight">
                {cardData.shopBtn}
                <BsArrowRight />
              </button>
            </div>
      
          </div>
          
        ))}
      </div>
    </div>
  );
}
