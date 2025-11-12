import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="h-[41px] w-full bg-white shadow ">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-1 ">
        <ul className="flex items-center space-x-4.5 font-[inter] font-medium text-[#6B7280] text-[12px]  pt-3 ">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">My account</a>
          </li>
          <li>
            <a href="#">wishlist</a>
          </li>

          <li className="flex items-center ">
            <span className="h-[15px] border-l-1 border-[#E5E7EB]">
              <a className="ml-3">
                We deliver to you every day from&nbsp;
                <span className="text-[#EA580C] font-semibold">
                  7:00 to 23:00
                </span>
              </a>
            </span>
          </li>
        </ul>

        <ul className="flex items-center justify-center pt-3 font-[inter] text-[12px] space-x-4 text-[#6B7280] font-medium">
          <li className="flex items-center space-x-1">
            <a>English</a>
            <IoIosArrowDown />
          </li>
          <li className="flex items-center space-x-1">
            <a>USD</a>
            <IoIosArrowDown />
          </li>
          <li>
            <a>Order Tracking</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
