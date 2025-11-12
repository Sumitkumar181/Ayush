import AggBanner from "../../assets/QualityAgg.jpeg";
import Snack from "../../assets/Snack.jpeg";
import Unbeatable from "../../assets/Unbeatable.jpeg";
import { BsArrowRight } from "react-icons/bs";

// import Snack from "../assets/Snack.jpeg";
// import Unbeatable from "../assets/Unbeatable.jpeg";

const thisWeekData = [
  {
    id: 1,
    img: AggBanner,
    thisWeek: "Only This Week",
    headIng1: "Quality eggs at an",
    headIng2: "affordable price",
    subHead: "Eat one every day",
    shopBtn: "Shop Now",
  },
  {
    id: 2,
    img: Snack,
    thisWeek: "Only This Week",
    headIng1: "Snacks that nourishes",
    headIng2: "our mind and body",
    subHead: "Shine the morning...",
    shopBtn: "Shop Now",
  },
  {
    id: 3,
    img: Unbeatable,
    thisWeek: "Only This Week",
    headIng1: "Unbeatable quality,",
    headIng2: "unbeatable prices.",
    subHead: "Only this week. Don’t miss...",
    shopBtn: "Shop Now",
  },
];

export default function DeatilsCard() {
  return (
    <div className="container mx-auto  font-inter">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {thisWeekData.map((weeklyData) => (
          <div
            {...weeklyData.id}
            className="relative rounded shadow-md overflow-hidden "
          >
            <img
              src={weeklyData.img}
              alt="Agg"
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute top-5 left-0 right-0  p-4 flex flex-col justify-end bg-opacity-40">
              <p className="text-sm  text-[#EA580C]">{weeklyData.thisWeek}</p>
              <h2 className="text-[#111827] w-[60%] font-bold text-xl mt-4  leading-[100%] tracking-[-0.88px]">
                {weeklyData.headIng1}
              </h2>
              <h2 className="text-[#111827] w-[60%]  font-bold text-xl mt-1.5  leading-[100%] tracking-[-0.88px]">
                {weeklyData.headIng2}
              </h2>
              <p className=" mt-3.5 text-[#6B7280] font-normal text-sm leading-[19px] tracking-[-0.32px]">
                {weeklyData.subHead}
              </p>
              <button className="flex items-center justify-between px-3  py-2 mt-5  bg-white border border-[#E5E7EB] rounded-2xl  h-9 w-26 font-bold text-xs leading-4 tracking-tight">
                {weeklyData.shopBtn}
                <BsArrowRight />
              </button>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
