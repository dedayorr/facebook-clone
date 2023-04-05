import React from 'react'
import {AiFillCamera} from "react-icons/ai"

function Profile() {
  return (
    <>
    <div className=' mx-auto '>
      <div>
      <div className='h-[100px] bg-blue-300'>
        <img className='h-[200px] w-[100%] object-cover' src='./assets/Images/deke2.jpeg'  alt=''/>
        <div className='bg-black text-white w-[50px] h-[50px] relative top-[-60%] left-[80%]  p-[2%] text-2xl flex justify-center items-center rounded-full '>
        <AiFillCamera/>
        </div>
        <button className='bg-white text-black p-[2%] float-right mt-[-10px] hidden '>Edit Cover Photo</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Profile