import DeatilsCard from "./DeatilsCard"
import NewArrivalData from "../NewArrivalCard/NewArrivalData"
import payment from "../../assets/payment.png"
import QualityAssurance from "../../assets/Quality.png"
import Stock from "../../assets/Stock.png"
import Delivery from "../../assets/Delivery.png"

const featureData = [
    {
        id: 1,
        image: payment,
        heading: "Payment only online",
        paragraph: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
    {
        id: 2,
        image: Stock,
        heading: "New stocks and sales",
        paragraph: "Tasigförsamhet beteendedesign. Mobilecheckout.Ylig kärrtorpa.",
    },
    {
        id: 3,
        image: QualityAssurance,
        heading: "Quality assurance",
        paragraph: "Tasigförsamhet beteendedesign. Mobilecheckout.Ylig kärrtorpa.",
    },
    {
        id: 4,
        image: Delivery,
        heading: "Delivery from 1 hour",
        paragraph: "Tasigförsamhet beteendedesign. Mobilecheckout.Ylig kärrtorpa.",
    },
];


export default function FeatureList() {

    return (
      <>
        <div className=" flex items-center mx-22 mt-7  justify-between h-32 font-inter border-b-1 border-[#E5E7EB]">
          {featureData.map((feature) => (
            <div {...feature.id} className="flex h-full w-80">
              <div className="mt-18">
                <img src={feature.image} alt={feature.heading} className="" />
              </div>

              <div className="ml-3">
                <h2 className=" font-bold text-[16px] tracking-[-0.32px] text-[#030712]">
                  {feature.heading}
                </h2>
                <p className=" font-normal text-[13px] leading-4.5 mt-2 text-[#6B7280]">
                  {feature.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 mx-22">
          <DeatilsCard />
        </div>
        <div className="mt-6 flex gap-3 items-center mx-22 ">
          <h2 className="font-bold text-xl   text-[#030712]">New Arrivals</h2>
          <p className="font-normal text-xs text-[#9CA3AF] mt-1.5">
            Dont miss this opportunity at a special discount just for this week.
          </p>
        </div>
        <div className="mt-4 mx-22 border border-[#E5E7EB]">
          <NewArrivalData />
        </div>
      </>
    );
}
