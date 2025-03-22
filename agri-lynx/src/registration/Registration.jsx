import React, { useContext, useState } from "react";
import RegistrationHeader from "./components/RegistrationHeader";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import BankDetails from "./components/BankDetails";
import { Button } from "@/components/ui/button";
import Container from "./components/Container";
import RegistrationContext from "./context/RegistrationContext";
import VehicleDetails from "./components/VehicleDetails";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";

const Registration = () => {
  const {
    isOtpVerified,
    userType,
    email,
    name,
    phoneNumber,
    alternatePhoneNumber,
    address,
    taluk,
    district,
    state,
    pincode,
    accountNumber,
    accountHolderName,
    ifscCode,
    bankName,
    bankBranch,
    upiId,
    vehicleType,
    vehicleNumber,
    licenseNumber,
    isRegistered,
    setIsRegistered,
  } = useContext(RegistrationContext);

  const [isClicked, setIsClicked] = useState(false);
// farmers registration
  const handleFarmerRegistration = () => {
    if (
      phoneNumber === "pn" ||
      alternatePhoneNumber === "an" ||
      address === "test-test-test" ||
      taluk === "tl" ||
      district === "dt" ||
      state === "st" ||
      pincode === "630555" ||
      ifscCode === "IOBA0001872" ||
      accountNumber === "1234567" ||
      accountHolderName === "ahn" ||
      upiId === "@" || name == ""
    ) {
      Toast(toast.error, "Enter Correct Details!");
    } else {
      // disable btn
    setIsClicked(true);
      const farmerData = {
        email,
        name,
        phoneNumber,
        alternatePhoneNumber,
        address,
        taluk,
        district,
        state,
        pincode,
        ifscCode,
        accountNumber,
        accountHolderName,
        bankName,
        bankBranch,
        upiId,
      };
      console.log(farmerData);
      setTimeout(()=>setIsClicked(false),3000);
      const response = { serverStatus: true }; //backend api
      if (response.serverStatus) {
        setIsRegistered(true);
        Toast(toast.success, "Registered successFully");
      } else {
        setIsRegistered(false);
        Toast(toast.error, "Error In Registration");
      }
    }
  };
// local market owners registration
  const handleLocalMarketRegistration = () => {
    if (
      phoneNumber === "pn" ||
      alternatePhoneNumber === "an" ||
      address === "test-test-test" ||
      taluk === "tl" ||
      district === "dt" ||
      state === "st" ||
      pincode === "630555" || name == ""
    ) {
      Toast(toast.error, "Enter Correct Details!");
    } else {
      // disable btn
    setIsClicked(true);
      const marketData = {
        email,
        name,
        phoneNumber,
        alternatePhoneNumber,
        address,
        taluk,
        district,
        state,
        pincode,
      };
      console.log(marketData);
      setTimeout(()=>setIsClicked(false),3000);
      const response = { serverStatus: true }; //backend api
      if (response.serverStatus) {
        setIsRegistered(true);
        Toast(toast.success, "Registered successFully");
      } else {
        setIsRegistered(false);
        Toast(toast.error, "Error In Registration");
      }
    }
  };
// logistics registration
  const handleLogisticsRegistration = () => {
    if (
      phoneNumber === "pn" ||
      alternatePhoneNumber === "an" ||
      address === "test-test-test" ||
      taluk === "tl" ||
      district === "dt" ||
      state === "st" ||
      pincode === "630555" ||
      ifscCode === "IOBA0001872" ||
      accountNumber === "1234567" ||
      accountHolderName === "ahn" ||
      upiId === "@" ||
      vehicleType === "vt" ||
      vehicleNumber == "" ||
      licenseNumber == "" || name == ""
    ) {
      Toast(toast.error, "Enter Correct Details!");
    } else {
      // disable btn
    setIsClicked(true);
      const logisticsData = {
        email,
        name,
        phoneNumber,
        alternatePhoneNumber,
        address,
        taluk,
        district,
        state,
        pincode,
        vehicleType,
        vehicleNumber,
        licenseNumber
      };
      console.log(logisticsData);
      setTimeout(()=>setIsClicked(false),3000);
      const response = { serverStatus: true }; //backend api
      if (response.serverStatus) {
        setIsRegistered(true);
        Toast(toast.success, "Registered successFully");
      } else {
        setIsRegistered(false);
        Toast(toast.error, "Error In Registration");
      }
    }
  };

  return (
    <Container>
      <RegistrationHeader />
      {isOtpVerified &&
        (userType == "farmer" ? (
          <>
            <PersonalDetails />
            <AddressDetails />
            <BankDetails />
            <Button
              type="submit"
              className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5 font-inter mb-4 w-full max-w-sm active:bg-(--teritary) active:text-black"
              disabled={isClicked}
              onClick={handleFarmerRegistration}
            >
              Register Now
            </Button>
          </>
        ) : userType == "market" ? (
          <>
            <PersonalDetails />
            <AddressDetails />
            <Button
              type="submit"
              className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5 font-inter mb-4 w-full max-w-sm active:bg-(--teritary) active:text-black"
              disabled={isClicked}
              onClick={handleLocalMarketRegistration}
            >
              Register Now
            </Button>
          </>
        ) : userType == "logistic" ? (
          <>
            <PersonalDetails />
            <AddressDetails />
            <VehicleDetails />
            <Button
              type="submit"
              className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5 font-inter mb-4 w-full max-w-sm active:bg-(--teritary) active:text-black"
              disabled={isClicked}
              onClick={handleLogisticsRegistration}
            >
              Register Now
            </Button>
          </>
        ) : (
          <p className="font-bold text-green-500">NO USER SELECTED</p>
        ))}
    </Container>
  );
};

export default Registration;
