
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function NewArrivalCard({
  image,
  discount,
  tagIcon,
  tagText,
  title,
  price,
  originalPrice,
}) {
  return (
    <div className="mx-auto h-100 w-49 border-r border-[#E5E7EB]">
      <div className="h-40 w-40  ml-1.5 mt-1.5  relative ">
        <div className="h-6 w-9 absolute top-4 left-3.5 bg-[#DC2626] font-inter font-extrabold text-light-white text-[10px] flex items-center justify-center rounded-[14px]">
          {discount}
        </div>
        <img src={image} alt="OIL" className="h-full w-full object-cover" />
      </div>

      <div className="h-1/2  w-44 ml-2.5">
        <div className="flex items-center justify-center gap-0.5 rounded-[14px] text-[10px] font-extrabold font-inter  bg-gradient-to-r  from-[#D4FC79] to-[#96E6A1] h-6 w-20 ">
          <img src={tagIcon} alt="ORGANIC" />
          <p className="text-[#166534]">{tagText}</p>
        </div>

        <p className="w-38 font-inter font-medium text-[13px]  mt-3">{title}</p>
        <Stack spacing={1} className="mt-2">
          <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
        </Stack>

        <span className="flex items-center gap-2 mt-4">
          <p className="font-barlow  text-[22px] font-bold text-dark-red">
            {price}
          </p>
          <p className="font-barlow  text-[16px] font-medium">
            {originalPrice}
          </p>
        </span>

        <button className="mt-3 pr-12 py-2 w-38 bg-white font-inter text-[13px] font-medium text-[#634C9F] border-2 border-[#634C9F] rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
