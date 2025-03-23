import React, { useContext } from "react";
import RegistrationContext from "../context/RegistrationContext";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import Toast from "../../utils/toast";

const VehicleDetails = () => {
  const {
    vehicleType,
    setVehicleType,
    vehicleNumber,
    setVehicleNumber,
    licenseNumber,
    setLicenseNumber,
    validateVehicleNumber,
    validateLicenseNumber,
  } = useContext(RegistrationContext);

  console.log({
    vehicleType,
    vehicleNumber,
    licenseNumber
  });
  const handleVehicleNumber = (e) => {
    const Vnumber = e.target.value.toUpperCase();
    setVehicleNumber(Vnumber);
    console.log("inner",Vnumber.length);
    
    if(Vnumber.length == 12 || Vnumber.length == 13){
      if(!validateVehicleNumber(Vnumber)){
        Toast(toast.error,"Enter Correct Vehicle Number");
      }
    }else if(Vnumber.length > 13){
      Toast(toast.error,"Vehicle Number Should Not Exceed 13 Digits!");
    }
  }

  const handleLicenseNumber = (e)=>{
    const Lnumber = e.target.value.toUpperCase()
    setLicenseNumber(Lnumber);
    console.log("inner",Lnumber.length);
    if(Lnumber.length == 15 || Lnumber.length == 17){
      if(!validateLicenseNumber(Lnumber)){
        Toast(toast.error,"Enter Correct License Number");
      }
    }else if(Lnumber.length > 17){
      Toast(toast.error,"License Number Should Not Exceed 17 Digits!");
    }
  }
  // console.log(vehicleNumber.length,licenseNumber.length);
  // console.log(validateVehicleNumber("AP-05-BJ-9901"),validateLicenseNumber(licenseNumber));
  
  return (
    <>
      <div className="w-full max-w-sm mt-10">
        <label htmlFor="number" className="font-bold font-inter flex mb-2">
          VEHICLE DETAILS
        </label>
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="vehicle type" className="font-bold font-inter mb-2">
          Vehicle Type
        </label>
        <Input
          type="text"
          placeholder="Enter Your Vehicle Type"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="vehicle type"
          style={{ textTransform: "uppercase" }}
          onChange= {(e)=> setVehicleType(e.target.value)}
        />
        {vehicleType.length < 2 && (
          <p className="text-red-600 font-semibold">
            enter Vehicle Type!
          </p>
        )}
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="vehicle number" className="font-bold font-inter mb-2">
          Vehicle Number
        </label>
        <Input
          type="text"
          placeholder="Enter Your Vehicle Number"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="vehicle number"
          style={{ textTransform: "uppercase" }}
          onChange= {(e)=> handleVehicleNumber(e)}
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="License Number" className="font-bold font-inter mb-2">
          License Number
        </label>
        <Input
          type="text"
          placeholder="Enter Your License Number"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="License Number"
          style={{ textTransform: "uppercase" }}
          onChange= {(e)=> handleLicenseNumber(e)}
        />
      </div>
    </>
  );
};

export default VehicleDetails;
