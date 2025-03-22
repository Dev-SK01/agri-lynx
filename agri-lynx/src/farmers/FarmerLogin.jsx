import React from 'react'
import OtpInputField from '../components/OtpInputField'

const FarmerLogin = (otp, setOtp, handleChange) => {
  return (
    <div className=' flex justify-center items-center h-dvh '>
      <div className='items-center border-(--secondary) rounded-3xl border-2  w- h-100 p-4 grow-0' >

        <form action="" className='justify-items-center '>
          <h1 className="font-inknut  text-xl">LOGIN</h1>
          <select name="user" id="user" className='bg-(--teritary) rounded-2xl h-8 border-y-4 border-b-(--secondary) border-t-0 mt-4 font-inter' >
            <option value="Select ">Select the type</option>
            <option value="Farmar">Farmar</option>
            <option value="Logistics Partner">Logistics Partner</option>
            <option value="Local Market Owner">Local Market Owner</option>

          </select>
          <div className='mt-7'>
            <p className='font-bold font-inter ms-0.5'>Email </p>
            <div className='flex gap-1.5 ms-0.5 mt-4 relative'>
              <input className='bg-gray-300 rounded-sm h-7 p-1 font-inter' type="email" placeholder='Email' />

              <button type='submit' className='click-btn text-base  h-7 w-20 p-0.5'>Verify</button>
            </div>
            <p className='font-inter text-gray-400 mt-2 ms-0.5'>Enter your email address</p>

          </div>
          <div className='flex-col mt-5' >
            <OtpInputField

            />
          </div>

          <div>
            <button type="submit" className='click-btn text-lg mt-7 h-9 w-20'>Login</button>
          </div>

          <div className='flex mt-9 '>
            <p className='font-bold text-blue-500'>Not Registerd?</p>
            <p className='font-bold text-(--secondary)'>Register</p></div>


        </form>


      </div>
    </div>

  )
}

export default FarmerLogin
