import { BsArrowRight } from "react-icons/bs";

export default function PapularCompanies() {
    return (
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-3 ">
            <h2 className="font-bold heading-color text-[18px]">
              Popular Companies
            </h2>
            <p className="font-normal text-Dark-grayish-blue text-[12px]">
              Some of the new products arriving this weeks
            </p>
          </div>

          <div className="">
            <button className="flex items-center justify-between px-3  py-2   bg-white border border-[#E5E7EB] rounded-2xl  h-9 w-26 font-bold text-xs leading-4 tracking-tight">
              View All
              <BsArrowRight />
            </button>
          </div>
            </div>
            <div>
                
            </div>
      </div>
    );
}
