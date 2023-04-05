import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi";
import { AiTwotoneHome } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { GiRadarSweep } from "react-icons/gi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
// import {CgProfile} from "react-icons/cg"

function Profile() {
  return (
    <>
      <div className=" mx-auto ">
        <div className="h-[100px]">
          <img
            className="h-[200px] w-[100%] object-cover"
            src="./assets/Images/deke2.jpeg"
            alt=""
          />
          <div className="bg-black text-white w-[50px] h-[50px] relative top-[-60%] left-[80%] p-[2%] text-2xl flex justify-center items-center rounded-full ">
            <AiFillCamera />
          </div>
          <button className="bg-white text-black p-[2%] float-right mt-[-10px] hidden ">
            Edit Cover Photo
          </button>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col gap-[10px]">
        <img
          className="border-[4px] border-black rounded-full w-[150px] ml-[10px] mt-[10%]"
          src="./assets/Images/deke4.jpeg "
          alt=""
        />

        <p className="font-bold ml-[10px] text-xl"> Moradeke Solanke</p>

        <div className="flex w-[95%] mx-auto gap-[10px]">
          <button className="w-[50%] rounded-md bg-blue-500 p-[1%] flex font-bold gap-[5px] justify-center items-center">
            <AiOutlinePlus />
            Add to story
          </button>
          <button className="w-[] rounded-md bg-[#535252] p-[2%] flex font-bold gap-[5px] justify-center items-center">
            <FiEdit2 />
            Edit profile
          </button>
          <button className="w-[40px] rounded-md bg-[#535252] p-[2%] flex font-bold gap-[5px] justify-center items-center">
            <BiDotsHorizontalRounded />
          </button>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[8px] w-[90%] mx-auto">
            <div className="text-xl">
              <HiAcademicCap />
            </div>
            <p className="text">
              Studied Microbiology at Ajayi Crowther University
            </p>
          </div>

          <div className="flex items-center gap-[8px] w-[90%] mx-auto">
            <div className="text-xl">
              <HiAcademicCap />
            </div>
            <p className="text">
              Went to Treasure Model College
            </p>
          </div>

          <div className="flex items-center gap-[8px] w-[90%] mx-auto">
            <div className="text-xl">
              <AiTwotoneHome />
            </div>
            <p className="text">Lives in Lagos, Nigeria</p>
          </div>
          <div className="flex items-center gap-[8px] w-[90%] mx-auto">
            <div className="text-xl">
              <ImLocation2 />
            </div>
            <p className="text">From Ijebu, Ogun, Nigeria</p>
          </div>
          <div className="flex items-center gap-[8px] w-[90%] mx-auto">
            <div className="text-xl">
              <AiFillHeart />
            </div>
            <p className="text">In a relationship</p>
          </div>
          <div className="flex items-center gap-[8px] w-[90%] mx-auto">
            <div className="text-xl">
              <GiRadarSweep/>
            </div>
            <p className="text">Followed by 5000 people</p>
          </div>
          <div className="flex items-center gap-[8px] w-[90%] mx-auto">
            <div className="text-xl">
              <HiDotsCircleHorizontal/>
            </div>
            <p className="text">See more about yourself</p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-[20px]">
        <div className="flex justify-between">
          <p className="text-lg">Friends</p>
          <a href="" target="_blank">See all</a>
        </div>
        <p className="text-sm opacity-50">5,600 friends</p>
        <div>
          <div>
          <img src="" alt=""/>
          <p>Ruth</p>
          </div>
          <div>
          <img src="" alt=""/>
          <p>Ruth</p>
          </div>
          <div>
          <img src="" alt=""/>
          <p>Ruth</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
