import React from 'react'
import Avatar from "../Assests/Avatar.svg"
import Vector from "../Assests/Vector.svg"
import log from "../Assests/log.svg"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
const LocalMarketOwnerDashboard = () => {
         
  return (
    <>
        <div className="flex items-center justify-center flex-col ">
         {/* Header */}
                    <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl '>
                        <h1 className='font-bold font-inter mt-3 ms-10 text-1xl'>Sanjay Sriram</h1>
                        <div className='ml-40'>
                            <img src={Avatar} alt="avatar" />
                        </div>
                        </header>
                        </div>
                    
                  <div className="flex items-center justify-center flex-col">  
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Name:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Shop Name:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Age:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Email:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Phone Number:<img className="h-[20px] w-[20px]" src={Vector} alt="Assests"/></Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Alternate Number:<img className="h-[20px] w-[20px]" src={Vector} alt="Assests"/></Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  </div>
                 
                  <div className=" flex items-center  flex-col  mt-5  font-bold ">
                    <div className="mr-60">
                      <h1>ADDRESS DETAILS</h1>
                    </div>
                    </div>

                  <div className="flex items-center justify-center flex-col">
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Address:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Taluka:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Distric:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">State:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Pincode:</Label><Input className="text-black bg-gray-200" placeholder=""/></div>
                  </div>
                  <nav className='flex items-center justify-center'>
                  <div className=" flex items-center justify-center rounded-xl h-8  w-30  bg-(--green) mt-9 ">
                  <img src={log} alt="Assests"/> <h1 className=" font-bold  text-xl ml-1.5"> Logout</h1>
                  </div>
                  </nav>
                  
    </>
  )
}

export default LocalMarketOwnerDashboard
