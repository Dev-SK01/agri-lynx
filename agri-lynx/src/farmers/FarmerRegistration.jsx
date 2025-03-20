import React, { useContext } from "react";
import RegistrationHeader from "./components/RegistrationHeader";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import BankDetails from "./components/BankDetails";
import FarmerContext from "./context/FarmerContext";

const FarmerRegistration = () => {
  const { isOtpVerified } = useContext(FarmerContext);
  return (
    <section className="flex justify-center items-center  flex-col">
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
