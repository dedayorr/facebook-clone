import React from 'react'
import "./Login.css"

function Login() {
  return (
   <>
    <div className='text-center mt-[15%] text-4xl font-bold text-blue-500 md:text-6xl md:mt-[5%] '>facebook</div>
    <form className='boxShadow w-[95%] h-[450px] mx-auto mt-[2%] rounded-lg flex flex-col gap-[15px] md:w-[33%]'>
      <p className='text-xl text-center pt-[7%] md:text-2xl opacity-50'>Log in to facebook</p>
      <input className='border w-[95%] mx-auto h-[45px] p-[2%] text-lg rounded-md' type="text" placeholder='Email address or phone number'/>
      <input className='border w-[95%] mx-auto h-[45px] p-[2%] text-lg rounded-md' type="text" placeholder='Password'/>
      <button className='bg-blue-600 w-[95%] mx-auto rounded-md h-[43px] text-white font-medium md:font-bold md:text-xl'>Log in</button>
      <p className='text-blue-500 mx-auto'>Forgotten account?</p>
      <div className='flex justify-center items-center gap-[10px]'>
      <hr className='w-[40%]'/><div>or</div><hr className='w-[40%]'/>
      </div>
      <button className='bg-[#009900c7] w-[70%] p-[2%] mx-auto rounded-md text-white md:font-bold md:w-[50%] md:p-[4%] md:text-xl'>Create new account</button>
    </form>
    </>
  )
}

export default Login