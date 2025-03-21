import React, { useContext } from "react";
import RegistrationHeader from "./components/RegistrationHeader";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import BankDetails from "./components/BankDetails";
import FarmerContext from "./context/FarmerContext";
import logo from "/icon/logo.webp"
const FarmerRegistration = () => {
  const { isOtpVerified } = useContext(FarmerContext);
  return (
    <section className="flex justify-center items-center  flex-col border-2 border-(--secondary) rounded-2xl">
      <img src={logo} alt="logo" className="h-[100px] w-[100px]"/>
      <RegistrationHeader />
      {isOtpVerified && (
        <>
          <PersonalDetails />
          <AddressDetails />
          <BankDetails />
        </>
      )}
    </section>
  );
};

export default FarmerRegistration;
