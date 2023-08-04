import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mx-auto flex gap-3  sm:flex-col w-full h-full bg-[#343A40]  ">
       <div className=" flex ml-5">
        <div className="mt-4 flex-row ">
          <div className="flex w-2/4 mr-4 ">
            <input
              type="email"
              autoComplete="email"
              className="py-2 px-4 border border-[#e97407] h-10 rounded-l-md mt-3  focus:outline-none focus:border-[#e97407]"
              placeholder="Enter your email"
            />
            <button className="bg-[#e97407]/70 hover:bg-[#e97407]/30 h-10 mt-3 text-white py-2 px-4 rounded-r-md   ">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" w-2/4 ">
          <div className="">
            <div className="">
              <h4 className="font-bold text-[#e97407] mt-3 mr-5 flex justify-end">Gadgets Hub</h4>
            </div>
          </div>
          <div className="">
            <ul className="flex flex-row mt-10 mr-5 gap-3 text-white  text-3xl flex justify-end ">
              <li className="hover:text-[#e97407]">
                {" "}
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li className="hover:text-[#e97407]">
                {" "}
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li className="hover:text-[#e97407]">
                {" "}
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

                        {/* second column */}
      <div className=" flex flex-col lg:flex-row md:flex-row">
        <div className=" w-1/4 ml-5 ">
          <h2 className="text-white mt-3 mb-5">Get To Know Us</h2>
          <div className="">
            <ul className=" text-white/50 ">
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Our Company</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Franchise Policy</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">More Support</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Development History</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="  w-1/4 ml-5">
          <h2 className="text-white mt-3 mb-5">Product Center</h2>
          <div className="">
            <ul className="text-white/50">
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Phone</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Audio</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Accessories</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Tablet</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Laptop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/4 ml-5">
          <h2 className="text-white mt-3 mb-5"> Store Location</h2>
          <div className="">
            <ul className="text-white/50">
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">New York</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Mumbai</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Lagos</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Abuja</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Ibadan</a>
              </li>
            </ul>
          </div>
          </div>
          <div className="w-1/4 ml-5">
          <h2 className="text-white mt-3 mb-5"> Store Location</h2>
          <div className="">
            <ul className="text-white/50">
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">New York</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Mumbai</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Lagos</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Abuja</a>
              </li>
              <li className="hover:text-[#e97407] hover:ml-5 duration-500	">
                <a href="/">Ibadan</a>
              </li>
            </ul>
          </div>
          </div>
      </div>
      
      
    </div>
  );
};

export default Footer;
