import React, { useState, useContext } from 'react'
import OwnerContext from '../context/OwnerContext'
import Avatar from "../Assests/Avatar.svg"
import Vector from "../Assests/Vector.svg"
import log from "../Assests/log.svg"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LocalMarketOwnerDashboard = () => {
  
  const { OwnerData } = useContext(OwnerContext);
         
  return (
    <>
    
        <div className="flex items-center justify-center flex-col ">
         {/* Header */}
                    <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl '>
                        <h1 className='font-bold font-inter mt-3 ms-10 text-1xl'>Luffy</h1>
                        <div className='ml-40'>
                            <img src={Avatar} alt="avatar" />
                        </div>
                        </header>
                        </div>
                    
                  <div className="flex items-center justify-center flex-col">  
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Name</Label><Input className="text-black bg-gray-200" value={OwnerData.name}disabled={true} /></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Shop Name</Label><Input className="text-black bg-gray-200" value={OwnerData.shopName}disabled={true} /></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Email</Label><Input className="text-black bg-gray-200" value={OwnerData.email}disabled={true} /></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Phone Number<img className="h-[20px] w-[20px]" src={Vector} alt="Assests"/></Label><Input className="text-black bg-gray-200" value={OwnerData.phoneNumber}disabled={true} /></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Alternate Number<img className="h-[20px] w-[20px]" src={Vector} alt="Assests"/></Label><Input className="text-black bg-gray-200" value={OwnerData.alternateNumber}disabled={true} /></div>
                  </div>
                 
                  <div className=" flex items-center  flex-col  mt-5  font-bold ">
                    <div className="mr-60">
                      <h1>ADDRESS DETAILS</h1>
                    </div>
                    </div>

                  <div className="flex items-center justify-center flex-col">
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Address</Label><Input className="text-black bg-gray-200" value={OwnerData.address}disabled={true} /></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Taluk</Label><Input className="text-black bg-gray-200" value={OwnerData.taluk}disabled={true} /></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">District</Label><Input className="text-black bg-gray-200" value={OwnerData.district}disabled={true} /></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">State</Label><Input className="text-black bg-gray-200" value={OwnerData.state}disabled={true} /></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Pincode</Label><Input className="text-black bg-gray-200" value={OwnerData.pincode}disabled={true} /></div>
                  </div>
                  <nav className='flex items-center justify-center'>
                  <div className=" flex items-center justify-center rounded-xl h-8  w-30  bg-(--green) mt-9 ">
                  <img src={log} alt="Assests"/> <h1 className=" font-bold  text-xl ml-1.5"> Logout</h1>
                  </div>
                  </nav>
                  <div className="flex items-center flex-col mt-2">
                    <h4 className="text-sm font-bold ">version 1.0.0</h4>
                  </div>
    </>
  )
}

export default LocalMarketOwnerDashboard
