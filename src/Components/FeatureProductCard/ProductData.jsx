import React from 'react'
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import banana from "../../assets/banana.jpeg"
import lays from "../../assets/lays.jpeg";

const products = [
  {
    id: 1,
    image: banana,
    discount: "15%",
    title: "Fresh Banana",
    rating: 4.5,
    originalPrice: "$1.99",
    discountedPrice: "$1.99",
  },
  {
    id: 2,
    image: lays,
    discount: "15%",
    title: "Red Apple",
    rating: 3.5,
    originalPrice: "$1.99",
    discountedPrice: "$1.99",
  },
  {
    id: 3,
    image: lays,
    discount: "15%",
    title: "Sweet Orange",
    rating: 4.0,
    originalPrice: "$1.99",
    discountedPrice: "$1.99",
  },
  {
    id: 4,
    image: lays,
    discount: "15%",
    title: "Sweet Orange",
    rating: 4.5,
    originalPrice: "$1.99",
    discountedPrice: "$1.99",
  },
  {
    id: 5,
    image: lays,
    discount: "15%",
    title: "Sweet Orange",
    rating: 3.5,
    originalPrice: "$1.99",
    discountedPrice: "$1.99",
  },
  {
    id: 6,
    image: lays,
    discount: "15%",
    title: "Sweet Orange",
    rating: 3.5,
    originalPrice: "$1.99",
    discountedPrice: "$1.99",
  },
];




export default function ProductData() {
  return (
    <div className=" grid grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          class="h-50  flex gap-3 border border-border-gray "
        >
          <div className=" w-1/2 h-full relative">
            <div className="h-6 w-9  absolute top-4 left-3.5 bg-[#DC2626] font-inter font-extrabold text-light-white text-[10px] flex items-center justify-center rounded-[14px]">
              {product.discount}
            </div>
            <img
              src={product.image}
              alt="banana"
              className="h-full w-full  object-cover"
            />
          </div>
          <div className="w-1/2 mt-3 flex flex-col gap-3.5">
            <p className="w-38 font-inter font-medium text-[13px]">
              {product.title}
            </p>
            <Stack spacing={1} className="">
              <Rating
                name="half-rating"
                defaultValue={product.rating}
                precision={0.5}
              />
            </Stack>

            <span className="flex items-center gap-2 ">
              <p className="font-barlow  text-[22px] font-bold text-dark-red">
                {product.originalPrice}
              </p>
              <p className="font-barlow  text-[16px] font-medium">
                {product.discountedPrice}
              </p>
            </span>

            <button className=" pr-12 py-2 w-38 bg-white font-inter text-[13px] font-medium text-[#634C9F] border-2 border-[#634C9F] rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

    
  
