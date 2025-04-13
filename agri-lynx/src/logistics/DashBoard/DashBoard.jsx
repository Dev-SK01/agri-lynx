import React, { useState, useContext } from 'react'
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import avatar from "../../Assest/avatar.svg"
import log from "../../Assest/log.svg";
import phone from "../../Assest/phone.svg";
import LogisticContext from '../context/LogisticContext';



const DashBoard = () => {
  const { LogisticData } = useContext(LogisticContext);

  return (

    <>
      <div className="flex items-center justify-center flex-col ">
        {/* Header */}
        <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl '>
          <h1 className='font-bold font-inter pt-1 ms-10 text-1xl'>
            Welcome !
          </h1>
          <div className='ms-83 pb-1 fixed'>
            <img src={avatar} alt="avatar" />
          </div>

        </header>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Name</Label><Input className="text-black bg-gray-200" value={LogisticData.name} disabled={true} /></div>
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Shop Name</Label><Input className="text-black bg-gray-200" value={LogisticData.shopName} disabled={true} /></div>
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Email</Label><Input className="text-black bg-gray-200" value={LogisticData.email} disabled={true} /></div>
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Phone Number<img className="h-[20px] w-[20px]" src={phone} alt="Assests" /></Label><Input className="text-black bg-gray-200" value={LogisticData.phoneNumber} disabled={true} /></div>
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Alternate Number<img className="h-[20px] w-[20px]" src={phone} alt="Assests" /></Label><Input className="text-black bg-gray-200" value={LogisticData.alternateNumber} disabled={true} /></div>
      </div>

      <div className=" flex items-center  flex-col  mt-5  font-bold ">
        <div className="mr-60">
          <h1>ADDRESS DETAILS</h1>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Address</Label><Input className="text-black bg-gray-200"value={LogisticData.address} disabled={true} /></div>
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Taluk</Label><Input className="text-black bg-gray-200" value={LogisticData.taluk} disabled={true} /></div>
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">District</Label><Input className="text-black bg-gray-200" value={LogisticData.district} disabled={true}/></div>
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">State</Label><Input className="text-black bg-gray-200"value={LogisticData.state} disabled={true} /></div>
        <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Pincode</Label><Input className="text-black bg-gray-200"value={LogisticData.pincode} disabled={true} /></div>
      </div>
      <nav className='flex items-center justify-center flex-col'>
        <div className=" flex items-center justify-center rounded-xl h-8  w-30  bg-(--green) mt-9 ">
          <img src={log} alt="Assests" /> <h1 className=" font-bold  text-xl ml-1.5"> Logout</h1>
          
        </div>
        <p className='font-bold'>V1.0.0</p>
      </nav>

    </>

  )
}

export default DashBoard
