import React, { useContext } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import FarmerContext from "../context/FarmerContext";
import { ToastContainer, toast ,Slide} from "react-toastify";
import Toast from "@/utils/toast";

const OneTimePassword = () => {
  const { otp, setOtp, setOtpVerified ,isOtpVerified} = useContext(FarmerContext);
  console.log(otp);
  
  const verifyOtp = () => {
    if (!otp || otp.length !== 6) {
      Toast(toast.error,"Enter OTP!");
    }else{
      // otp verification api
      setOtpVerified(true);
      Toast(toast.success,"OTP Verified");
    }
  };
  
  return (
    <>
      {/* OTP verification  */}
      <div className="flex items-center flex-col mt-5">
        <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
          <InputOTPGroup className="font-inter font-semibold">
            <InputOTPSlot
              index={0}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
            />
            <InputOTPSlot
              index={1}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
            />
            <InputOTPSlot
              index={2}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
            />
            <InputOTPSlot
              index={3}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
            />
            <InputOTPSlot
              index={4}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
            />
            <InputOTPSlot
              index={5}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
            />
          </InputOTPGroup>
        </InputOTP>
        <Button
          type="submit"
          className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5"
          onClick={verifyOtp}
          disabled={isOtpVerified ? true : false}
        >
          Continue
        </Button>
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
    </>
  );
};

export default OneTimePassword;
