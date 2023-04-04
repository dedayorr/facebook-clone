import React from "react";
import {BiDotsHorizontalRounded} from "react-icons/bi"

function LeftSideBar() {
  return (
    <>
      <div className="text-md bg-[#000] w-[30%] p-[2%] flex flex-col gap-[20px] text-white ">
        <p>Sponsored</p>
        <div className="flex gap-[15px] font-bold">
          <img
            className="rounded-lg"
            src="./assets/Images/apply.jpeg"
            width="130px"
            alt=""
          />
          <div className="">
            <p>Apply fast & easy in a few clicks</p>
            <p className="text-sm font-light">Proxify.io</p>
          </div>
        </div>

        <div className="flex gap-[15px]">
          <img
            className="rounded-lg"
            src="./assets/Images/oraimo.jpeg"
            width="130px"
            alt=""
          />
          <div>
            <p className="font-bold">New Launch Special Deal</p>
            <p className="text-sm">ng.oraimo.com</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
            <p>Your profile and pages</p>
            <BiDotsHorizontalRounded/>
        </div>

        <div>
            <img src="" alt=""/>
            <p>Gifted hands empowerment foundation</p>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
