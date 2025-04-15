import React, { useState, useContext } from 'react'
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import avatar from "../../Assest/avatar.svg"
import log from "../../Assest/log.svg";
import phone from "../../Assest/phone.svg";
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import LogisticContext from '../context/LogisticContext';
import { Link } from "react-router-dom";
import Logistic from '../Logistic';

const DashBoard = () => {
  const { LogisticData } = useContext(LogisticContext);
  const [showDetails, setShowDetails] = useState(false);
  const handleAvatarClick = () => {
    setShowDetails(true);
  };
  const logOut = () => {
    if (confirm("Are you Sure !")) {
      localStorage.removeItem("userData");
      Toast(toast.success, "Logged Out!...");
      // setting for userData state
      setUserData("");
    }
  };
  return (

    <>
      <div className="flex items-center justify-center flex-col ">
        {/* Header
        <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>

          {!showDetails ? (
            <div onClick={handleAvatarClick} className='cursor-pointer absolute right-10 top-1'>
              <img src={avatar} alt="avatar" />
            </div>
          ) : (
            <>
              <h1 className='font-bold font-inter pt-1 ms-10 text-1xl'>
                Welcome {LogisticData.name}!
              </h1>
              <div className='absolute right-10 top-1'>
                <img src={avatar} alt="avatar" />
              </div>
            </>
          )}
        </header> */}
        {/* Header */}
        
        <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
          <Link to="/logistic">
          <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
             {LogisticData?.name}!
          </h1>
          </Link>
          <div className='ms-83 pb-1 fixed'>
            <img src={avatar} onClick={handleAvatarClick} alt="avatar" />
          </div>

        </header>

        

        <main className="w-[95%] overflow-auto h-[80vh] rounded-md scrollbar">
          {showDetails && (
            <>
              <div className="flex items-center justify-center flex-col">

                <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Name</Label><Input className="text-black bg-gray-200" value={LogisticData.name} disabled={true} /></div>
               
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
                <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Address</Label><Input className="text-black bg-gray-200" value={LogisticData.address} disabled={true} /></div>
                <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Taluk</Label><Input className="text-black bg-gray-200" value={LogisticData.taluk} disabled={true} /></div>
                <div className="mt-5 w-full max-w-sm "><Label className="font-bold">District</Label><Input className="text-black bg-gray-200" value={LogisticData.district} disabled={true} /></div>
                <div className="mt-5 w-full max-w-sm "><Label className="font-bold">State</Label><Input className="text-black bg-gray-200" value={LogisticData.state} disabled={true} /></div>
                <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Pincode</Label><Input className="text-black bg-gray-200" value={LogisticData.pincode} disabled={true} /></div>
               
              </div>
              <div className=" flex items-center  flex-col  mt-5  font-bold ">
                <div className="mr-60">
                  <h1>VECHICLE DETAILS</h1>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col">
              <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Vechicle Type</Label><Input className="text-black bg-gray-200" value={LogisticData.vehicleType} disabled={true} /></div>
              <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Vechicle Number</Label><Input className="text-black bg-gray-200" value={LogisticData.vehicleNumber} disabled={true} /></div>
              <div className="mt-5 w-full max-w-sm "><Label className="font-bold">Liecense Number</Label><Input className="text-black bg-gray-200" value={LogisticData.licenseNumber} disabled={true} /></div>
                
              </div>
              
              <nav className='flex items-center justify-center flex-col'>
                <div className=" flex items-center justify-center rounded-xl h-8  w-30  bg-(--green) mt-9 " onClick={logOut}>
                  <img src={log} alt="Assests" /> <h1 className=" font-bold  text-xl ml-1.5"> Logout</h1>

                </div>
                <p className='font-bold'>V1.0.0</p>
              </nav>
            </>
          )}
        </main>
        {/* Footer*/}
        <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1'>
            <img src={product} alt="product" />
          </div>
          <Link to="/logistic">
            <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1">
              <img src={ordericon} alt="orderIcon"  />
            </div>
          </Link>
          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1'>
            <img src={logistic} alt="logistic" />
          </div>
          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1'>
            <img src={analytics} alt="analytics" />
          </div>
        </footer>

      </div>

    </>

  )
}

export default DashBoard
