import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { LiaAppleAltSolid } from "react-icons/lia";
import food from "../../assets/meat.svg.png";
import { PiEggCrackBold } from "react-icons/pi";

import banner from "../../assets/banner.jpeg";

const categories = [
  {
    name: "All Categories",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: <IoIosArrowDown className="h-6 w-6 text-[#030712]" />,
  },
  {
    name: "Red Chilli Powder",
    icon: <LiaAppleAltSolid className="h-6 w-6 text-[#030712]" />,
    arrow: <IoIosArrowForward className="h-6 w-6 text-[#030712]" />,
  },
  {
    name: "Turmeric Powder",
    icon: <img src={food} alt="Meats & Seafood" className="h-6 w-6" />,
    arrow: <IoIosArrowForward className="h-6 w-6 text-[#030712]" />,
  },
  {
    name: "Coriander Powder",
    icon: <PiEggCrackBold className="h-6 w-6 text-[#030712]" />,
    arrow: <IoIosArrowForward className="h-6 w-6 text-[#030712]" />,
  },
  {
    name: "Jeera Powder",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: <IoIosArrowForward className="h-6 w-6 text-[#030712]" />,
  },
  {
    name: "Kuti Mirch",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: <IoIosArrowForward className="h-6 w-6 text-[#030712]" />,
  },
  {
    name: "Kashmiri Mirch Powder",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: null,
  },
  {
    name: "Black Pepper Powder",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: null,
  },
  {
    name: "Dry Mango/ Amchur Powder",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: null,
  },
  {
    name: "Dry Ginger Powder",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: null,
  },
  {
    name: "Saunf Powder",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: null,
  },
  {
    name: "Yellow Chilli Powder",
    icon: <BiCategory className="h-6 w-6 text-[#030712]" />,
    arrow: null,
  },
];

function NavList() {
  return (
    <div className="flex flex-col lg:flex-row  mx-4 lg:px-10 gap-7">
      <div className="w-full lg:w-[300px] border-2 border-[#E5E7EB] rounded-lg">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center border-b border-[#E5E7EB] p-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0">{category.icon}</div>
            <div className="ml-3 flex-grow">
              <p className="font-[inter] font-semibold text-[#030712]">
                {category.name}
              </p>
            </div>
            {category.arrow && (
              <div className="flex-shrink-0">{category.arrow}</div>
            )}
          </div>
        ))}
      </div>
      <div className="ml-6">
        <div className="flex items-center justify-between  h-10 ">
          <div className="flex flex-wrap  gap-4  lg:gap-1.5 mt-4 lg:mt-0 lg:ml-0">
            {[
              { label: "Home", hasArrow: true },
              { label: "Shop", hasArrow: true },
              { label: "Red Chilli Powder", hasArrow: false },
              { label: "Turmeric Powder", hasArrow: false },
              { label: "Blog", hasArrow: false },
              { label: "Contact", hasArrow: false },
            ].map((item, index) => (
              <div key={index} className="flex  items-center justify-between ">
                <a
                  href="#"
                  className="font-semibold font-inter text-sm lg:text-[12px] group-hover:text-[#634C9F] group-hover:text-[16px] transition-all duration-300"
                >
                  {item.label}
                </a>
                {item.hasArrow && (
                  <IoIosArrowDown
                    size={18}
                    className="text-[#030712] ml-0.5 group-hover:text-[#634C9F] group-hover:scale-110 transition-all duration-300"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between   gap-4 ">
            <div className="flex  group">
              <a
                href="#"
                className="font-semibold font-inter text-sm lg:text-[12px] group-hover:text-[#634C9F] group-hover:text-[16px] transition-all duration-300"
              >
                Trending Products
              </a>
              <IoIosArrowDown
                size={18}
                className="text-[#030712] ml-0.5 group-hover:text-[#634C9F] group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="flex  gap-1.5 group">
              <a
                href="#"
                className="font-semibold font-inter text-sm lg:text-[12px] text-[#DC2626] group-hover:text-[16px] transition-all duration-300"
              >
                Almost Finished
              </a>
              <button className="h-[24px] w-[40px] rounded text-white text-xs font-bold bg-gradient-to-r from-[#DC2626] to-[#EA580C]">
                SALE
              </button>
              <IoIosArrowDown
                size={18}
                color="#DC2626"
                className="ml-0.5 group-hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row mt-2.5 justify-between gap-4">
              <div className="relative w-full lg:w-[850px] h-[530px] rounded-lg overflow-hidden">
                <img
                  src={banner}
                  alt="banner"
                  className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute top-10 left-6 lg:top-20 lg:left-9">
                  <button className="py-2 px-2.5 text-sm lg:text-[15px] rounded-md bg-gradient-to-r from-[#16A34A80] to-[#22C55E00] font-[inter] font-semibold text-[#166534]">
                    Weekend Discount
                  </button>
                  <div className="w-full lg:w-[440px] mt-4">
                    <h2 className="text-[#39245F] font-[inter] font-bold text-2xl lg:text-[42px] leading-tight">
                      Get the best quality products at the lowest prices
                    </h2>
                  </div>
                  <div className="mt-3">
                    <p className="font-[inter] font-normal text-[#030712] text-sm lg:text-[16px]">
                      We have prepared special discounts for you on grocery products.
                    </p>
                    <p className="font-[inter] font-normal text-[#030712] text-sm lg:text-[16px]">
                      Don't miss these opportunities...
                    </p>
                  </div>
                  <div className="mt-6 lg:mt-12">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                      <button className="bg-[#634C9F] px-4 py-2 font-[inter] font-bold text-white rounded-lg hover:bg-[#4a3a7a] transition-colors">
                        Shop Now
                      </button>
                      <div>
                        <div className="flex items-center">
                          <h2 className="text-[#DC2626] text-xl lg:text-[28px] font-bold font-[barlow]">
                            $27.99
                          </h2>
                          <h4 className="font-[barlow] ml-2 font-medium text-lg lg:text-[19px] line-through">
                            $56.67
                          </h4>
                        </div>
                        <p className="font-[inter] font-normal text-xs lg:text-[12px] text-[#030712] opacity-50">
                          Don't miss this limited time offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default NavList;
