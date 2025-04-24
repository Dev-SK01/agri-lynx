import React, { useState, useContext } from 'react'
import OwnerContext from '../context/OwnerContext'
import Avatar from "../../Assests/Avatar.svg"
import log from "../../Assests/log.svg"
import phoneImg from "../../assets/phone.svg"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from "react-toastify";
import RegistrationContext from '@/registration/context/RegistrationContext'
import { Link } from 'react-router-dom'
import Toast from '@/utils/toast'

const LocalMarketOwnerDashboard = () => {
  const { OwnerData } = useContext(OwnerContext);
  const { setUserData } = useContext(RegistrationContext);

  const [showDetails, setShowDetails] = useState(false);

  const handleAvatarClick = () => {
    setShowDetails(true);
  };

  const logOut = () => {
    if (confirm("Are you Sure !")) {
      localStorage.removeItem("userData");
      Toast(toast.success, "Logged Out !");
      // setting for userData state
      setUserData("");
    }
  };

  return (
    <>

      <div className="flex items-center justify-between flex-col ">
        {/* Header */}
        <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
          <Link to="/">
            <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
              {OwnerData?.name}
            </h1>
          </Link>
          <div className='ms-83 pb-1 fixed'>
            <img src={Avatar} onClick={handleAvatarClick} alt="avatar" />
          </div>
        </header>

        <div className=' overflow-scroll h-[84vh] scrollbar'>
          <div className="flex items-center justify-center flex-col ">
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">Name</Label><Input className="mt-1 text-black bg-gray-200 font-bold" value={OwnerData?.name} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">Shop Name</Label><Input className="mt-1text-black bg-gray-200 font-bold" value={OwnerData?.shopName} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">Email</Label><Input className="mt-1 text-black bg-gray-200 font-bold" value={OwnerData?.email} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">Phone Number<img className="h-[20px] w-[20px]" src={phoneImg} alt="phone" /></Label><Input className="text-black bg-gray-200 font-bold" value={OwnerData?.phoneNumber} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">Alternate Number<img className="h-[20px] w-[20px]" src={phoneImg} alt="phone" /></Label><Input className="text-black bg-gray-200 font-bold" value={OwnerData?.alternateNumber} disabled={true} /></div>
          </div>

          <div className=" flex items-center  flex-col  mt-5  font-bold ">
            <div className="mr-60 font-inter mb-2 font-bold">
              <h1>ADDRESS DETAILS</h1>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col">
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">Address</Label><Input className="text-black bg-gray-200 font-bold" value={OwnerData?.address} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">Taluk</Label><Input className="text-black bg-gray-200 font-bold" value={OwnerData?.taluk} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">District</Label><Input className="text-black bg-gray-200 font-bold" value={OwnerData?.district} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">State</Label><Input className="text-black bg-gray-200 font-bold" value={OwnerData?.state} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold font-inter mb-2">Pincode</Label><Input className="text-black bg-gray-200 font-bold" value={OwnerData?.pincode} disabled={true} /></div>
          </div>
          <nav className='flex items-center justify-center flex-col'>
            <div className=' mt-7 '>
              <Button onClick={logOut} className='bg-(--green)  font-bold rounded-xl text-xl font-inter' variant="outline"><img src={log} alt='Assests' />Logout</Button>
            </div>
          </nav>
          <div className="flex items-center flex-col mt-2">
            <h4 className="text-sm font-bold ">version 1.0.0</h4>
          </div>
        </div>
      </div>


    </>
  )
}

export default LocalMarketOwnerDashboard
