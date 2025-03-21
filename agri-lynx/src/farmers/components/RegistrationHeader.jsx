import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OneTimePassword from "./OneTimePassword";
import FarmerContext from "../context/FarmerContext";
import { ToastContainer, toast, Slide } from "react-toastify";
import Toast from "../../utils/toast";

const RegistrationHeader = () => {
  const {
    email,
    setEmail,
    isCodeSent,
    setCodeSent,
    validateEmail,
    isOtpVerified,
    userType,
    setUserType,
  } = useContext(FarmerContext);

  const handleEmailVerification = () => {
    // validating email
    if (validateEmail(email)) {
      // email otp api implementation
      setCodeSent(true);
      if (isCodeSent) {
        Toast(toast.success, "OTP sent Successfully");
      }
    } else {
      Toast(toast.error, "Enter Proper Email!");
    }
  };

  const handleUserSelect = (e) => {
    if (!userType) {
      Toast(toast.error, "Select User Type!");
    } else {
      setEmail(e.target.value);
    }
  };
  
  return (
    <>
      <header>
        <h1 className="font-inknut text-center text-2xl mt-1 font-bold">
          REGISTRATION
        </h1>
      </header>
      {/* select dropdown for user selection */}
      <Select onValueChange={(value) => setUserType(value)}>
        <SelectTrigger className="w-[180px] pb-3 pt-3 mt-5 bg-(--teritary) font-inter font-bold text-black shadow-[3px_3px_0px_0px_var(--secondary)] ">
          <SelectValue placeholder="Select User Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="font-inter font-bold">
            <SelectLabel>USER</SelectLabel>
            <SelectItem value="farmer">Farmer</SelectItem>
            <SelectItem value="market">Local Market Owner</SelectItem>
            <SelectItem value="logistic">Logistic Partner</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* email for user verification */}
      <div className="mt-4 w">
        <label htmlFor="email" className="font-bold font-inter">
          Email
        </label>
        <div className="flex w-full max-w-sm items-center space-x-3 ">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            className="font-inter font-semibold bg-(--teritary) pt-5 pb-5"
            onChange={handleUserSelect}
          />
          <Button
            type="submit"
            className="text-white bg-(--secondary) font-bold text-[1.2rem] hover:bg-(--teritary) hover:text-black"
            onClick={handleEmailVerification}
            disabled={isOtpVerified ? true : false}
          >
            Verify
          </Button>
        </div>
      </div>
      {/* toast container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      {(isCodeSent || isOtpVerified) && <OneTimePassword />}
    </>
  );
};

export default RegistrationHeader;
