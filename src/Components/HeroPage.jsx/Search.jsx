import logo from "../../assets/AyushMasaleLogo.png"
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import account from "../../assets/Link.png"
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import { IoHeart } from "react-icons/io5";
import { BiCartAlt } from "react-icons/bi";



function Search() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    if(isLiked){
      setIsLiked(false);
      setLikeCount(likeCount - 1)
    } else {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
      
    }
  };





  return (
    <div className="flex mx-auto items-center justify-between  px-10 h-[78px] w-full   ">
      <div className=" flex items-center space-x-2.5 px-4 py-3 ">
        <a href="#">
          <div className="">
            <img src={logo} alt="logo" className="h-20" />
          </div>
        </a>
        <a className="h-8 w-8  ">
          <IoLocationOutline className="w-full h-full" />
        </a>
        <a className="flex flex-col">
          <p className="text-[11px] text-gray-900">Deliver to</p>
          <p className="text-[15px] font-medium text-gray-900">All</p>
        </a>
      </div>
      <div className="flex-1 max-w-[600px] ml-4 py-3">
        <form className="w-full ">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for products, categories or brands..."
              className="w-full px-4 py-2 border bg-[#F3F4F6] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
            />
            <button className="absolute right-1 p-[14px]">
              <IoSearchOutline className="" />
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-between  space-x-2.5 px-4 py-3 ">
        <a>
          <img src={account} alt="Login account" className="h-8 w-8" />
        </a>
        <a className="flex flex-col">
          <p className="text-[11px] text-gray-900">Sign In</p>
          <p className="text-[15px] font-medium text-gray-900">Acoount</p>
        </a>
        <a>
          <div className=" relative">
            <button onClick={handleLikeClick}>
              {isLiked ? (
                <IoHeart className="h-8 w-8" />
              ) : (
                <IoHeartOutline className="h-8 w-8" />
              )}
            </button>

            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-2xl  bg-[#DC2626] text-[8px] text-white flex items-center justify-center">
              {likeCount}
            </div>
          </div>
        </a>
        <a>
          <div className="relative">
            <button>
              <BiCartAlt className="h-8 w-8" />
            </button>
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-2xl  bg-[#DC2626] text-[8px] text-white flex items-center justify-center">
              0
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}


export default Search;