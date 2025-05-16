import React, { useContext, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogisticContext from "../context/LogisticContext";
import calandar from "../../Assest/calendar.svg";

const VerificationOTP = ({ orderId }) => {
  const {
    LogisticOrders,
    LogisticData,
    setShowOtpPopup,
    setOrderStatus,
    updateOrderStatus,
  } = useContext(LogisticContext);

  const currentOrder = LogisticOrders.find(
    (order) => order.orderId === orderId
  );
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (currentOrder?.customer?.email) {
      setEmail(currentOrder.customer?.email);
    }
  }, [currentOrder]);

  const sendOtp = () => {
    try {
      const res = true;
      if (res) {
        toast.success("OTP sent to " + email);
      } else {
        toast.error("Failed to send OTP!");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      toast.success("OTP verified!");
      setOrderStatus("Delivered");
      setTimeout(() => setShowOtpPopup(false), 2000);
      updateOrderStatus(orderId, "Delivered");
    } else {
      toast.error("Invalid OTP");
    }
  };

  // Call this function after OTP is verified
  const verifyOtpAndChangeStatus = async (email, otp, orderId) => {
    if (otp.length !== 6) {
      toast.error("Enter OTP!");
    } else {
      const req = await fetch(
        import.meta.env.VITE_API_BASE_URL + "/verifycustomer",
        {
          method: "POST",
          headres: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp, orderId }),
        }
      );
      const res = await res.json(req);
      if (res?.isVerified) {
        setOrderStatus("Delivered");
        setTimeout(() => setShowOtpPopup(false), 2000);
        updateOrderStatus(orderId, "Delivered");
        toast.success("Status updated !");
        setShowOtpPopup(false);
      } else {
        toast.error("Error In Update Order Status");
      }
    }
  };
  // Prevent rendering until currentOrder is ready
  if (!currentOrder) return null;

  return (
    <>
      <ToastContainer />
      <div className="absolute flex ps-5 justify-items-center items-center h-[100vh] backdrop-blur-[5px] top-0.5">
        <div className="flex-col items-center justify-center bg-(--green) rounded-md w-[90dvw]">
          {/* Order ID and Date */}
          <div className="w-full text-center bg-(--green) rounded-md py-3 px-2">
            <h1 className="font-bold text-lg font-inter truncate">
              #{currentOrder.orderId.toUpperCase()}
            </h1>
            <div className="flex justify-center items-center mt-2">
              <img src={calandar} alt="calendar" className="h-5 w-5" />
              <span className="ml-2 font-inter text-sm">
                {currentOrder.orderDate}
              </span>
            </div>
          </div>

          {/* Email section */}
          <div className="mt-4 w-full">
            <label htmlFor="email" className="font-bold font-inter block mb-1">
              {currentOrder.logistics?.name}
            </label>
            <div className="flex px-5 flex-row gap-8 sm:flex-row items-stretch sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-inter font-semibold bg-(--primary) py-3 text-sm"
              />
              <Button
                type="button"
                className="text-white bg-(--secondary) font-bold text-base px-4 py-2"
                onClick={sendOtp}
              >
                Send
              </Button>
            </div>
          </div>

          {/* OTP Input */}
          <div className="flex flex-col items-center mt-6 w-full">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              className="w-full justify-center"
            >
              <InputOTPGroup className="font-inter font-semibold flex flex-wrap justify-center">
                {[...Array(6)].map((_, i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="m-1 bg-(--primary) rounded-md px-4 py-4 text-center text-base"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <Button
              type="button"
              className="text-white bg-(--secondary) font-bold text-base mt-4 px-6 py-2 sm:w-auto"
              onClick={()=> verifyOtpAndChangeStatus(email, otp, currentOrder.orderId)}
            >
              Verify
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationOTP;
