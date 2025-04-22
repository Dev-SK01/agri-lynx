import React, { useState, useContext } from 'react'
import OwnerContext from '../context/OwnerContext'
import Avatar from "../../Assests/Avatar.svg"
import log from "../../Assests/log.svg"
import Vector from "../../Assests/Vector.svg"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from "react-toastify";
import LocalMarketOwnerRegistration from '../LocalMarketOwnerRegistration'
import { useNavigate } from 'react-router'
import RegistrationContext from '@/registration/context/RegistrationContext'
import { Link } from 'react-router-dom'

const LocalMarketOwnerDashboard = () => {

  const { OwnerData } = useContext(OwnerContext);
  const [showDetails, setShowDetails] = useState(false);
  const handleAvatarClick = () => {
    setShowDetails(true);
  };
  const { setUserData } = useContext(RegistrationContext);
  const logOut = () => {
    if (confirm("Are you Sure !")) {
      localStorage.removeItem("userData");
      toast(toast.success, "Logged Out!...");
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
              {OwnerData?.name}!
            </h1>
          </Link>
          <div className='ms-83 pb-1 fixed'>
            <img src={Avatar} onClick={handleAvatarClick} alt="avatar" />
          </div>
        </header>

        <div className=' overflow-scroll h-[84vh] scrollbar'>
          <div className="flex items-center justify-center flex-col ">
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Name</Label><Input className="mt-1 text-black bg-gray-200" value={OwnerData?.name} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Shop Name</Label><Input className="mt-1text-black bg-gray-200" value={OwnerData?.shopName} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Email</Label><Input className="mt-1 text-black bg-gray-200" value={OwnerData?.email} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Phone Number<img className="h-[20px] w-[20px]" src={Vector} alt="Assests" /></Label><Input className="text-black bg-gray-200" value={OwnerData?.phoneNumber} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Alternate Number<img className="h-[20px] w-[20px]" src={Vector} alt="Assests" /></Label><Input className="text-black bg-gray-200" value={OwnerData?.alternateNumber} disabled={true} /></div>
          </div>

          <div className=" flex items-center  flex-col  mt-5  font-bold ">
            <div className="mr-60">
              <h1>ADDRESS DETAILS</h1>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col">
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Address</Label><Input className="text-black bg-gray-200" value={OwnerData?.address} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Taluk</Label><Input className="text-black bg-gray-200" value={OwnerData?.taluk} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">District</Label><Input className="text-black bg-gray-200" value={OwnerData?.district} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">State</Label><Input className="text-black bg-gray-200" value={OwnerData?.state} disabled={true} /></div>
            <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Pincode</Label><Input className="text-black bg-gray-200" value={OwnerData?.pincode} disabled={true} /></div>
          </div>
          <nav className='flex items-center justify-center flex-col'>
            <div className=' mt-7 '>
              <Button onClick={logOut} className='bg-(--green)  font-bold rounded-xl text-xl' variant="outline"><img src={log} alt='Assests' />Logout</Button>
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
