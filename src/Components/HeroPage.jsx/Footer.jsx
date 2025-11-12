
import { FiMail } from "react-icons/fi";
import Google_Play from "../../assets/Google_Play.png"
import App_Store from "../../assets/App_Store.png"

import { FiPhoneCall } from "react-icons/fi";



export default function Footer() {
  return (
      <div className="h-150 w-full bg-[#F3F4F6] mt-7 ">
          <div className="px-22 w-full h-full  pt-8">
              <div className="flex items-center justify-between  ">
                  <div className="h-22 w-90 ">
                      <h2 className="font-[inter] font-bold text-[20px] text-[#111827]">Join our newsletter for £10 offs</h2>
                      <p className="font-[inter] text-[13px] font-normal text-[#6B7280]">Register now to get latest updates on promotions &
                          coupons.Don’t worry, we not spam!</p>
                  </div>
                  <div className="h-22 w-110">
                      <div className="flex">
                          <div className="flex  gap-2 relative">
                              <FiMail size={18} className="absolute left-3 text-[#9CA3AF] flex mt-4" />
                              <input type="text" placeholder="Enter your email address" className="block h-12 w-90   border-t  border-b border-l rounded-tl-md rounded-bl-md bg-white border-[#D1D5DB] pl-10  placeholder:text-[14px] placeholder:text-[#9CA3AF]" />

                          </div>
                          
                          <button className="w-20 rounded-tr-md rounded-br-md font-[inter] font-bold text-[14px] text-white bg-[#634C9F] ">SEND</button>
                      </div>
                      <p className=" mt-2 font-[inter] text-[11px]  font-normal">By subscribing you agree to our <a href="#" className="text-[#634C9F]">Terms & Conditions and Privacy & Cookies Policy</a></p>
                      
                  </div>
              </div>
              <div className="h-96 w-full border-t border-b border-[#D1D5DB] mt-12 flex flex-row  ">
                  <div className="flex-1 ">
                      <h2 className="mt-10 font-[inter] font-semibold text-[14px] text-[#111827]">Do You Need Help ?</h2>
                      <p className="mt-5 font-[inter] text-[11px] text-[#6B7280]">Autoseligen syr. Nek diarask fröbomba. Nör
                          antipol kynoda nynat. Pressa fåmoska.</p>
                      <div className="flex items-center gap-4 mt-7">
                          <FiPhoneCall size={27} />
                          <div className="font-[inter]">
                              <p className="font-normal text-[12px] text-[#6B7280]">Monday-Friday: 08am-9pm</p>
                              <p className="font-bold text-[20px] ">0 800 300-353</p>
                          </div>

                      </div>
                      <div className="flex items-center gap-4 mt-13">
                          <FiMail size={27} />
                          <div className="font-[inter]">
                              <p className="font-normal text-[12px] text-[#6B7280]">Need help with your order?</p>
                              <p className="font-bold text-[14px] ">info@example.com</p>
                          </div>

                      </div>
                  </div>
                  <div className="flex-1 items-center justify-center ">
                      <div className="px-9  ">
                          <div className="flex flex-col gap-2">
                          <h2 className="mt-10 font-[inter] font-semibold text-[14px] text-[#111827]">Make Money with Us</h2>
                          <p className="mt-5 font-[inter] text-[11px] text-[#6B7280]">Sell on Grogin</p>
                          <p className=" font-[inter] text-[11px] text-[#6B7280]">Sell Your Services on Grogin</p>
                          <p className=" font-[inter] text-[11px] text-[#6B7280]">Sell on Grogin Business</p>
                          <p className=" font-[inter] text-[11px] text-[#6B7280]">Sell Your Apps on Grogin</p>
                          <p className=" font-[inter] text-[11px] text-[#6B7280]">Become an Affilate</p>
                          <p className=" font-[inter] text-[11px] text-[#6B7280]">Advertise Your Products</p>
                          <p className=" font-[inter] text-[11px] text-[#6B7280]">Sell-Publish with Us</p>
                          <p className=" font-[inter] text-[11px] text-[#6B7280]">Become an Blowwe Vendor</p>
                      </div>

                      </div>

                  </div>
                  <div className="flex-1 items-center justify-center">
                      <div className="px-9  ">
                          <div className="flex flex-col gap-2">
                              <h2 className="mt-10 font-[inter] font-semibold text-[14px] text-[#111827]">Let Us Help You</h2>
                              <p className="mt-5 font-[inter] text-[11px] text-[#6B7280]">Accessibility Statement</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Your Orders</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Returns & Replacements</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Shipping Rates & Policies</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Refund and Returns Policy</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Privacy Policy</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Terms and Conditions</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Cookie Settings</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Help Center</p>
                          </div>

                      </div>
                  </div>
                  <div className="flex-1 ">
                      <div className="px-9  ">
                          <div className="flex flex-col gap-2">
                              <h2 className="mt-10 font-[inter] font-semibold text-[14px] text-[#111827]">Get to Know Us</h2>
                              <p className="mt-5 font-[inter] text-[11px] text-[#6B7280]">Careers for Grogin</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">About Grogin</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Inverstor Relations</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Grogin Devices</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Customer reviews</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Social Responsibility</p>
                              <p className=" font-[inter] text-[11px] text-[#6B7280]">Store Locations</p>
                              
                          </div>

                      </div>
                  </div>
                  <div className="flex-1 ">
                      <div className="px-2  ">
                          <div className="flex flex-col gap-2">
                              <h2 className="mt-10 font-[inter] font-semibold text-[14px] text-[#111827]">Download our app</h2>
                              <span className="flex mt-5">
                                  <img src={Google_Play} alt="Google_Play"  className="h-9 w-30 object-cover"/>
                                  <p className=" font-[inter] ml-3 font-medium text-[10px] text-[#6B7280]">Download App Get
                                      -10% Discount</p>
                              </span>
                              <span className="flex mt-2">
                                  <img src={App_Store} alt="Google_Play" className="h-9 w-30 object-cover" />
                                  <p className=" font-[inter] ml-3 font-medium text-[10px] text-[#6B7280]">Download App Get
                                      -20% Discount</p>
                              </span>
                              <span className="flex mt-2">
                                  
                              </span>
                              

                              

                          </div>

                      </div>
                  </div>
              </div>
          </div>
         
          
    </div>
  )
}
