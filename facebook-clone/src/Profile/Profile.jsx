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
import { MdPhotoLibrary } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { RiFlagFill } from "react-icons/ri";
import {AiOutlineLike } from "react-icons/ai";
import {MdOutlineModeComment } from "react-icons/md";
import {RiShareForwardLine } from "react-icons/ri";

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
          <a href="/" target="_blank">See all</a>
        </div>
        <p className="text-sm opacity-50">5,600 friends</p>
        
        <div className="grid grid-cols-3 gap-[5px]">
          <div>
          <img className="h-[100px] w-[100px]" src="./assets/Images/blesssing.jpeg" alt=""/>
          <p>Blessing</p>
          </div>
          <div>
          <img className="h-[100px] w-[100px]" src="./assets/Images/durosola.jpeg" alt=""/>
          <p>Durosola</p>
          </div>
          <div>
          <img className="h-[100px] w-[100px]" src="./assets/Images/eboda.jpeg" alt=""/>
          <p>Eboda</p>
          </div>
          <div>
          <img className="h-[100px] w-[100px]" src="./assets/Images/lolu.jpeg" alt=""/>
          <p>Omololu</p>
          </div>
          <div>
          <img className="h-[100px] w-[100px]" src="./assets/Images/sorelina.jpeg" alt=""/>
          <p>Sorelina</p>
          </div>
          <div>
          <img className="h-[100px] w-[100px]" src="./assets/Images/yisola.jpg" alt=""/>
          <p>Yisola</p>
          </div>
        </div>

        <div className="flex gap-[25px] mt-[5%]">
          <div className="flex bg-[#787777] p-[6px] rounded-full items-center gap-[5px]">
            <MdPhotoLibrary/>
            <p>Photos</p>
          </div>
          <div className="flex bg-[#787777] p-[6px] rounded-full items-center gap-[5px]">
            <AiFillStar/>
            <p>Life events</p>
          </div>
        </div>

        <div className="mt-[5%]">
          <p className="font-bold">Posts</p>
          <div className="flex justify-between items-center">
            <img className="rounded-full w-[40px]" src="./assets/Images/dummy.jpeg" alt=""/>
            <input className="p-[7px] rounded-2xl w-[75%]" type="text" placeholder="Post a status update" name="post"/>
            <div className="text-3xl">
            <MdPhotoLibrary/>
            </div>
          </div>

          <div className="flex justify-between mt-[5%]">
            <div className="flex gap-[9px] ">
            <div className="text-green-500">
            <MdPhotoLibrary/>
            </div>
            <p className="text-sm">Photo</p>
            </div>
            <div className="flex gap-[9px]">
            <div className="text-red-500">
            <ImLocation2/>
            </div>
            <p className="text-sm">Check in</p>
            </div>
            <div className="flex gap-[9px]">
            <div className="text-purple-500">
            <RiFlagFill/>
            </div>
            <p className="text-sm">Life Event</p>
            </div>
          </div>

          <hr className="mt-[5%]"/>

          <div className="mt-[5%]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[20px]">
              <img className="w-[40px] rounded-full" src="./assets/Images/sorelina.jpeg" alt=""/>
              <div>
              <p className="flex items-center text-lg justify-between">Sorelina E.</p>
              <p className="text-sm opacity-50">Apr 12, 2023 .</p>
              </div>
              </div>
              <BiDotsHorizontalRounded/>
            </div>
            <p className="text-xl mt-[2%]">Happy Birthday, Wishing you longest life and prosperity</p>

            <div className="flex justify-between mt-[20px]">
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <AiOutlineLike/>
              </button>
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <MdOutlineModeComment/>
              </button>
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <RiShareForwardLine/>
              </button>
            </div>
          </div>

          <hr className="mt-[5%]"/>

          <div className="mt-[5%]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[20px]">
              <img className="w-[40px] rounded-full" src="./assets/Images/lolu.jpeg" alt=""/>
              <div>
              <p className="flex items-center text-lg justify-between">Omololu S.</p>
              <p className="text-sm opacity-50">Apr 12, 2023 .</p>
              </div>
              </div>
              <BiDotsHorizontalRounded/>
            </div>
            <p className="text-xl mt-[2%]">Happy Birthday to you dear, more life</p>

            <div className="flex justify-between mt-[20px]">
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <AiOutlineLike/>
              </button>
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <MdOutlineModeComment/>
              </button>
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <RiShareForwardLine/>
              </button>
            </div>
          </div>

          <hr className="mt-[5%]"/>

          <div className="mt-[5%]">
            <div className="flex items-center justify-between">
              <div className="flex gap-[20px]">
              <img className="w-[40px] rounded-full" src="./assets/Images/eboda.jpeg" alt=""/>
              <div>
              <p className="flex items-center text-lg justify-between">Temidayo E.</p>
              <p className="text-sm opacity-50">Apr 12, 2023 .</p>
              </div>
              </div>
              <BiDotsHorizontalRounded/>
            </div>
            <p className="text-xl mt-[2%]">Birthday blessings OG, God bless your new age</p>

            <div className="flex justify-between mt-[20px]">
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <AiOutlineLike/>
              </button>
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <MdOutlineModeComment/>
              </button>
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] rounded-xl text-xl">
                <RiShareForwardLine/>
              </button>
            </div>
          </div>

          <div className="mt-[5%]">
            <div className="mb-[5%] flex items-center justify-between">
              <div className="flex gap-[20px]">
              <img className="w-[40px] rounded-full" src="./assets/Images/deke4.jpeg" alt=""/>
              <div>
              <p className="flex items-center text-lg justify-between">Moradeke Solanke.</p>
              <p className="text-sm opacity-50">Apr 12, 2023 .</p>
              </div>
              </div>
              <BiDotsHorizontalRounded/>
            </div>
            
            <img src="./assets/Images/deke6.jpeg" alt=""/>

            <div className="flex justify-between mt-[20px]">
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] gap-[5px] items-center rounded-xl text-xl">
                <AiOutlineLike/>
                <p className="text-lg">600</p>
              </button>
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] gap-[5px] items-center rounded-xl text-xl">
                <MdOutlineModeComment/>
                <p className="text-lg">70</p>
              </button>
              <button className="flex justify-center bg-[#575757] p-[2%] w-[30%] gap-[5px] items-center rounded-xl text-xl">
                <RiShareForwardLine/>
                <p className="text-lg">3</p>
              </button>
            </div>
          </div>

          <a className="flex justify-center mt-[10%] text-xl" href="/">Loading more...</a>
        </div>
      </div>
    </>
  );
}

export default Profile;
