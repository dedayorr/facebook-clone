import React from "react";
import { GoSearch } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";

function TopBar() {
  return (
    <div className="sticky top-0 flex justify-center items-center mx-auto bg-[#272626] p-[2%] md:p-[1%] z-99">
      <div className="hidden md:block text-white text-3xl">facebook</div>
      <div className="text-3xl text-blue-500 md:hidden ">
        <BsFacebook />
      </div>
      <div className="bg-[#686767] flex border w-[65%] md:w-[40%] mx-auto rounded-3xl p-[1%] md:p-[5px] items-center gap-[5px] md:gap-[10px]">
        <div className="text-white md:text-2xl">
          <GoSearch />
        </div>
        <input
          className="bg-[#686767] md:text-2xl"
          type="text"
          name="search"
          placeholder="Search Facebook"
        />
      </div>
      <div className="text-3xl flex text-white md:gap-[10px]">
        <FaFacebookMessenger />
        <MdCircleNotifications />
        <img className="rounded-full" src="./assets/Images/deke4.jpeg" width="20px" alt=""/>
      </div>
    </div>
  );
}

export default TopBar;
