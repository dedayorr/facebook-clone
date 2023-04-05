import React from "react";
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineUserSwitch} from "react-icons/ai"
import {HiSpeakerphone} from "react-icons/hi"
import {BsCameraVideo} from "react-icons/bs"
import {CiSearch} from "react-icons/ci"
import {FaEllipsisH} from "react-icons/fa"
import "./LeftSideBar.css"


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
            <span className="profile-pages">
              <IoIosNotificationsOutline />
              <p> 2 notifications</p>
            </span>
      
            <span className="profile-pages">
              <AiOutlineUserSwitch />
              <p>Switch into user</p>
            </span>

            <span className="profile-pages">
              <HiSpeakerphone />
              <p>Create promotion</p>
            </span>

            <div className="friend-request">
              <h3>Friend requests</h3>
              <h3>See all</h3>
            </div>

            <div className="friend-request-section">
              <span>
                <img className="friend-request-image" src="./assets/Images/deke4.jpeg"  />
              </span>
              <div className="friend-request-details">
                <span className="friend-name">
                  <p>Dayo babe</p>
                  <p>2d</p>
                </span>
                <button className="friend-request-confirm">Confirm</button>
                <button className="friend-request-delete">Delete</button>
              </div>
            </div>

            <div className="birthday-section">
                <h3>Birthdays</h3>
                <span className="celebrant-info">
                  <img className="birthday-img" src="./assets/Images/birthday.jpg" />
                  <p className="birthday-info">Dayo's babe and 100 others have their birthday today</p>
                </span>
            </div>

          <div className="contacts">
            <div className="contacts-section">
                <h3>Contacts</h3>
              <div className="contact-icons">
                <BsCameraVideo />
                <CiSearch />
                <FaEllipsisH />
              </div>
            </div>
         
            <div className="contacts-online">
              <img className="contacts-online-img" src="./assets/Images/deke.jpeg" />
              <h3>Dayos' babe</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSideBar;
