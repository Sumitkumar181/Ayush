import { BsArrowRight } from "react-icons/bs";

import ProductData from "./ProductData";






function FeatureProductTab() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-3 ">
          <h2 className="font-bold heading-color text-[18px]">
            Featured Products
          </h2>
          <p className="font-normal text-Dark-grayish-blue text-[12px]">
            Do not miss the current offers until the end of March.
          </p>
        </div>

        <div className="">
          <button className="flex items-center justify-between px-3  py-2   bg-white border border-[#E5E7EB] rounded-2xl  h-9 w-26 font-bold text-xs leading-4 tracking-tight">
            View All
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <ProductData/>
      </div>
    </div>
  );
}

export default FeatureProductTab;
