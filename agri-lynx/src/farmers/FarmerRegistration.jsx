import React, { useContext } from "react";
import RegistrationHeader from "./components/RegistrationHeader";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import BankDetails from "./components/BankDetails";
import { FarmerContextProvider } from "./context/FarmerContext";
import FarmerContext from "./context/FarmerContext";

const FarmerRegistration = () => {
  const { isOtpVerified} = useContext(FarmerContext);
  return (
    <FarmerContextProvider>
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
    </FarmerContextProvider>
  );
};

export default FarmerRegistration;
