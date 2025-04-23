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
import LogisticHome from '../OrderManagement/LogisticHome';
import Toast from "@/utils/toast";
import { toast } from "react-toastify";
import RegistrationContext from '@/registration/context/RegistrationContext';

const DashBoard = () => {
  const { LogisticData } = useContext(LogisticContext);
  const [showDetails, setShowDetails] = useState(false);
  const handleAvatarClick = () => {
    setShowDetails(true);
  };
  const { setUserData } = useContext(RegistrationContext);
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
          <Link to="/">
            <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
              {LogisticData?.name}!
            </h1>
          </Link>
          <div className='ms-83 pb-1 fixed'>
            <img src={avatar} onClick={handleAvatarClick} alt="avatar" />
          </div>
        </header>





        <div className="w-full flex flex-col scrollbar overflow-auto  items-center justify-center mt-2">
          {/* personal details */}
          <div className="w-full max-w-sm">
            <label htmlFor="name" className="font-bold font-inter mb-2">
              Name
            </label>
            <Input
              type="text"
              placeholder="Enter Your Name"
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="name"
              disabled={true}
              value={LogisticData?.name || "Name"}
            />
          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="number" className="font-bold font-inter flex mb-2">
              Phone Number{" "}
              <img src={phone} className="ml-2 h-[20px] w-[20px]" />
            </label>
            <Input
              type="number"
              placeholder="Enter Your Phone Number"
              className="font-inter  bg-(--teritary) pt-5 pb-5"
              id="number"
              disabled={true}
              value={LogisticData?.phoneNumber || "Phone Number"}
            />
          </div>
          <div className="w-full max-w-sm mt-5">
            <label
              htmlFor="alter-number"
              className="font-bold font-inter flex mb-2"
            >
              Alternate Phone Number
              <img src={phone} className="ml-2 h-[20px] w-[20px]" />
            </label>
            <Input
              type="number"
              placeholder="Enter Your Alternate Number"
              className="font-inter  bg-(--teritary) pt-5 pb-5"
              id="alter-number"
              disabled={true}
              value={LogisticData?.alternateNumber || "Alternate Number"}
            />
          </div>
          {/* Address Details */}
          <div className="w-full max-w-sm mt-10">
            <label htmlFor="number" className="font-bold font-inter flex mb-2">
              ADDRESS DETAILS
            </label>
          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="address" className="font-bold font-inter mb-2">
              Address
            </label>
            <Input
              type="text"
              placeholder="Enter Your Address"
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="address"
              disabled={true}
              value={LogisticData?.address || "Address"}
            />
          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="taluk" className="font-bold font-inter mb-2">
              Taluk
            </label>
            <Input
              type="text"
              placeholder="Enter Your Taluk"
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="taluk"
              disabled={true}
              value={LogisticData?.taluk || "Taluk"}
            />
          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="district" className="font-bold font-inter mb-2">
              District
            </label>
            <Input
              type="text"
              placeholder="Enter Your District"
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="district"
              disabled={true}
              value={LogisticData?.district || "District"}
            />
          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="state" className="font-bold font-inter mb-2">
              State
            </label>
            <Input
              type="text"
              placeholder="Enter Your State"
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="state"
              disabled={true}
              value={LogisticData?.state || "State"}
            />
          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="pincode" className="font-bold font-inter mb-2">
              Pincode
            </label>
            <Input
              type="number"
              placeholder="Enter Your Pincode"
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="pincode"
              minLength={6}
              disabled={true}
              value={LogisticData?.pincode || "Pincode"}
            />

          </div>
          <div className="w-full max-w-sm mt-10">
            <label htmlFor="number" className="font-bold font-inter flex mb-2">
              VECHICLE DETAILS
            </label>
          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="vehicleType" className="font-bold font-inter mb-2">
              VehicleType
            </label>
            <Input
              type="text"
              placeholder="Enter Your VehicleType "
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="vehicleType"

              disabled={true}
              value={LogisticData?.vehicleType || "vehicleType"}
            />

          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="vehicleNumber" className="font-bold font-inter mb-2">
              VehicleNumber
            </label>
            <Input
              type="text"
              placeholder="Enter Your vehicleNumber"
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="vehicleNumber"

              disabled={true}
              value={LogisticData?.vehicleNumber || "vehicleNumber"}
            />

          </div>
          <div className="w-full max-w-sm mt-5">
            <label htmlFor="licenseNumber" className="font-bold font-inter mb-2">
              LicenseNumber
            </label>
            <Input
              type="text"
              placeholder="Enter Your licenseNumber"
              className="font-inter bg-(--teritary) pt-5 pb-5"
              id="licenseNumber"
              minLength={6}
              disabled={true}
              value={LogisticData?.licenseNumber || "licenseNumber"}
            />

          </div>

          <div
            className="flex px-6 py-2 mt-6 items-center justify-evenly bg-(--green) rounded-[15px]"
            onClick={logOut}
          >
            <img src={log} alt="logout" />
            <p className="font-inter font-bold ml-2">Logout</p>
          </div>
          {/* version */}
          <p className="font-inter font-bold mt-2">V1.0.0</p>

        </div>

        {/* Footer */}
        {/* <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
                        <Link to="/">
                        <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1'>
                            <img src={product} alt="product" />
                        </div>
                        </Link>
                        <Link to="/checkoutPage">
                            <div className="ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1">
                                <img src={ordericon} alt="orderIcon" />
                            </div>
                        </Link>
                        <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1 pt-1'>
                            <img src={logistic} alt="logistic" />
                        </div>
                        <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1 pt-1'>
                            <img src={analytics} alt="analytics" />
                        </div>
                    </footer> */}

      </div>

    </>

  )
}

export default DashBoard
