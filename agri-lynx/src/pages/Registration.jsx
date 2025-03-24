import React, { useContext, useState } from "react";
import Header from "../registration/components/Header";
import PersonalDetails from "../registration/components/PersonalDetails";
import AddressDetails from "../registration/components/AddressDetails";
import BankDetails from "../registration/components/BankDetails";
import { Button } from "@/components/ui/button";
import Container from "../registration/components/Container";
import RegistrationContext from "../registration/context/RegistrationContext";
import VehicleDetails from "../registration/components/VehicleDetails";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import bottomBg from "../assets/login-bottom-bg.svg"
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
    clearForm,
    handleEmailVerification,
    verifyOtp,
    userData,
    setUserData,
    setIsLoading,
  } = useContext(RegistrationContext);

  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  // farmers registration
  const handleFarmerRegistration = () => {
    // disable btn
    setIsClicked(true);
    setIsLoading(true);
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
      name == ""
    ) {
      Toast(toast.error, "Enter Correct Details!");
    } else {
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
      // settimg timout for btn disabled
      setTimeout(() => setIsClicked(false), 3000);
      //backend api
      const response = { userId: "123456789", userType };
      // checking registered user or not from server response
      Toast(toast.success, "registered Successfully");
      setUserData(response);
      // clearing form function;
      clearForm();
      Toast(toast.update, "Redirecting....");
      navigate("farmerdashboard");
      setTimeout(() => setIsLoading, 3000);
    }
  };
  // local market owners registration
  const handleLocalMarketRegistration = () => {
    // disable btn
    setIsClicked(true);
    setIsLoading(true);
    if (
      phoneNumber === "pn" ||
      alternatePhoneNumber === "an" ||
      address === "test-test-test" ||
      taluk === "tl" ||
      district === "dt" ||
      state === "st" ||
      pincode === "630555" ||
      name == ""
    ) {
      Toast(toast.error, "Enter Correct Details!");
    } else {
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
      setTimeout(() => setIsClicked(false), 3000);
      //backend api
      const response = { userId: "123456789", userType };
      // checking registered user or not from server response
      Toast(toast.success, "registered Successfully");
      setUserData(response);
      // clearing form function;
      clearForm();
      Toast(toast.update, "Redirecting....");
      navigate("localmarketdashboard");
      setTimeout(() => setIsLoading(false), 3000);
    }
  };
  // logistics registration
  const handleLogisticsRegistration = () => {
    // disable btn
    setIsClicked(true);
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
      licenseNumber == "" ||
      name == ""
    ) {
      Toast(toast.error, "Enter Correct Details!");
    } else {
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
        licenseNumber,
      };
      console.log(logisticsData);
      setTimeout(() => setIsClicked(false), 3000);
      //backend api
      const response = { userId: "123456789", userType };
      // checking registered user or not from server response
      Toast(toast.success, "registered Successfully");
      setUserData(response);
      // clearing form function;
      clearForm();
      Toast(toast.update, "Redirecting....");
      navigate("logisticdashboard");
      setTimeout(()=> setIsLoading(false),3000);
    }
  };
  return (
    <Container>
      <Header
        verificationHandler={handleEmailVerification}
        headerType={"REGISTRATION"}
        otpHandler={verifyOtp}
      />
       {!isOtpVerified && <img src={bottomBg} alt="login-bottom-bg" className="absolute bottom-0"/>}
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
          <></>
        ))}
    </Container>
  );
};

export default Registration;
