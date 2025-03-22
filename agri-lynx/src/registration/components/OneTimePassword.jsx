import React, { useContext } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import RegistrationContext from "../context/RegistrationContext";
import {toast} from "react-toastify";
import Toast from "@/utils/toast";

const OneTimePassword = () => {
  const { otp, setOtp, setOtpVerified ,isOtpVerified} = useContext(RegistrationContext);
  
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
              disabled={isOtpVerified ? true : false}
            />
            <InputOTPSlot
              index={1}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
              disabled={isOtpVerified ? true : false}
            />
            <InputOTPSlot
              index={2}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
              disabled={isOtpVerified ? true : false}
            />
            <InputOTPSlot
              index={3}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
              disabled={isOtpVerified ? true : false}
            />
            <InputOTPSlot
              index={4}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
              disabled={isOtpVerified ? true : false}
            />
            <InputOTPSlot
              index={5}
              className="ml-2 mr-2 bg-(--teritary) rounded-sm px-5 py-5"
              disabled={isOtpVerified ? true : false}
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
    </>
  );
};

export default OneTimePassword;
