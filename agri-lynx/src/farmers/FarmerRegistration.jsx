import React, { useContext } from "react";
import RegistrationHeader from "./components/RegistrationHeader";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";
import BankDetails from "./components/BankDetails";
import { Button } from "@/components/ui/button";
import Container from "./components/Container";
import FarmerContext from "./context/FarmerContext";

const FarmerRegistration = () => {
  const { isOtpVerified } = useContext(FarmerContext);
  return (
    <Container>
      <RegistrationHeader />
      {isOtpVerified && (
        <>
          <PersonalDetails />
          <AddressDetails />
          <BankDetails />
          <Button
            type="submit"
            className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5 font-inter mb-4 w-full max-w-sm active:bg-(--teritary) active:text-black"
          >
            Register Now
          </Button>
        </>
      )}
    </Container>
  );
};

export default FarmerRegistration;
