import React from "react";
import { AiFillHome } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { RiGamepadFill } from "react-icons/ri";
import { TiThSmallOutline } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiInterleavedClaws } from "react-icons/gi";

function RightSideBar() {
  return (
    <>
      <div className="text-md bg-[#000] w-[30%] p-[2%] flex flex-col gap-[20px] text-white">
        <div className="flex gap-[10px] items-center">
          <div className="text-blue-500">
            <AiFillHome />
          </div>

          <p className="text-white">Home</p>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="">
            <img
              className="rounded-full"
              src="./assets/Images/deke4.jpeg"
              width="20"
              height="20"
              alt=""
            />
          </div>

          <p className="">Moradeke Solanke</p>
        </div>

        <hr className="w-[50%]" />

        <div className="flex gap-[15px] items-center">
          <div className="text-blue-500">
            <GrYoutube />
          </div>
          <div>Watch</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <div className="text-blue-500">
            <SiHomeassistantcommunitystore />
          </div>
          <div>Marketplace</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <div className="text-blue-500">
            <RiGamepadFill />
          </div>
          <div>Gaming</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <div className="border p-[2px] rounded-xl">
            <TiThSmallOutline />
          </div>
          <div>See all</div>
        </div>

        <hr className="w-[50%]" />

        <div className="flex gap-[15px] items-center">
          <img
            className="rounded-full"
            src="./assets/Images/test1.jpeg"
            width="20"
            height="20"
            alt=""
          />
          <div>N-POWER BATCH C,STREAM 1&2</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <img
            className="rounded-full"
            src="./assets/Images/test4.jpeg"
            width="20"
            height="20"
            alt=""
          />
          <div>UAM-INTERACTORS(verified)</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <img
            className="rounded-2xl"
            src="./assets/Images/test6.jpeg"
            width="20"
            alt=""
          />
          <div>Lama Dev</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <div className="border p-[2px] rounded-xl">
            <HiOutlineUserGroup />
          </div>
          <div>See all groups</div>
        </div>

        <hr className="w-[50%]" />

        <div className="flex gap-[15px] items-center">
          <img
            className="rounded-2xl"
            src="./assets/Images/test3.jpeg"
            width="20"
            alt=""
          />
          <div>The AfroMedia Podcast</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <img
            className="rounded-2xl"
            src="./assets/Images/test3.jpeg"
            width="20"
            alt=""
          />
          <div>Abuja Capital International Coll...</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <img
            className="rounded-2xl"
            src="./assets/Images/test7.jpeg"
            width="20"
            alt=""
          />
          <div>Arian Credit</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <img
            className="rounded-2xl"
            src="./assets/Images/test6.jpeg"
            width="20"
            alt=""
          />
          <div>Coch Fx</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <img
            className="rounded-2xl"
            src="./assets/Images/test7.jpeg"
            width="20"
            alt=""
          />
          <div>Dooshai's Cakes & Fashion Hub</div>
        </div>
        <div className="flex gap-[15px] items-center">
          <div className="border p-[2px] rounded-xl">
            <GiInterleavedClaws />
          </div>
          <div>See all shortcuts</div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
