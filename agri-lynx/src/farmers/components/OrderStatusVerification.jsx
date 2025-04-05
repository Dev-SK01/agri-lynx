import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useContext, useState } from "react";
import calanderImg from "../../assets/calendar.svg";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";
import FarmerContext from "../context/FarmerContext";

const OrderStatusVerification = ({ orderData, setOtpView, orderId,orderStatus }) => {
  const { packedOrders, setPackedOrders, shippedOrders, setShippedOrders } =
    useContext(FarmerContext);
  const [otp, setOtp] = useState("");
  //   console.log("OTP :", otp);

  const sendOtp = () => {
    try {
      // email otp send api
      const req = "";
      const res = true;
      if (res) {
        Toast(toast.success, "OTP send Successfully");
      } else {
        Toast(toast.error, "Failed to send OTP!");
      }
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };

  const verifyOtp = () => {
    if (otp.length == 6) {
      try {
        // otp verify backend api
        const req = "";
        const res = true;
        if (res) {
          // packed and shipped state changes
          const shippedOrder = orderData;
          const packedOrder = packedOrders.filter((order) => {
            if (orderId.toLowerCase() !== order.orderId.toLowerCase()) {
              return order;
            }
          });
          shippedOrder[0].orderStatus = orderStatus;
          console.log(shippedOrder);
          setShippedOrders([...shippedOrders, shippedOrder[0]]);
          setPackedOrders(packedOrder);
          Toast(toast.success, "Order Status Updated Successfully");
          setTimeout(() => setOtpView(false), 2000);
        } else {
          Toast(toast.error, "Failed To Verify OTP!");
          setTimeout(() => setOtpView(false), 2000);
        }
      } catch (err) {
        Toast(toast.error, err.message);
      }
    } else {
      Toast(toast.error, "Enter OTP!");
    }
  };

  return (
    <div className="absolute flex items-center justify-center h-[80vh] backdrop-blur-[5px]">
      <div className="flex items-center justify-center flex-col  bg-(--green) rounded-md w-[95dvw]">
        {/* order id and date section */}
        <div className="w-[95%] mt-4 text-center bg-(--primary) rounded-sm">
          <h1 className="font-bold text-[1.2rem] font-inter">
            #{orderData[0].orderId.toUpperCase()}
          </h1>
          <div className="text-center flex items-center justify-center">
            <img
              src={calanderImg}
              alt="calander"
              className="h-[25px] w-[25px]"
            />
            <span className="font-inter ml-2">{orderData[0]?.orderDate}</span>
          </div>
        </div>
        {/* email section */}
        <div className="mt-4">
          <label htmlFor="email" className="font-bold font-inter">
            {orderData[0]?.logistics?.name}
          </label>
          <div className="flex w-full max-w-sm items-center space-x-3 ">
            <Input
              type="email"
              placeholder="Email"
              value={orderData[0]?.logistics?.email}
              className="font-inter font-semibold bg-(--primary) pt-5 pb-5"
              disabled={true}
            />
            <Button
              type="submit"
              className="text-white bg-(--secondary) font-bold text-[1.2rem] hover:bg-(--primary) hover:text-black active:bg-(--primary) active:text-black"
              onClick={sendOtp}
            >
              send
            </Button>
          </div>
        </div>
        {/* OTP verification  */}
        <div className="flex items-center flex-col mt-5 pb-4">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup className="font-inter font-semibold">
              <InputOTPSlot
                index={0}
                className="ml-2 mr-2 bg-(--primary) rounded-sm px-5 py-5"
              />
              <InputOTPSlot
                index={1}
                className="ml-2 mr-2 bg-(--primary) rounded-sm px-5 py-5"
              />
              <InputOTPSlot
                index={2}
                className="ml-2 mr-2 bg-(--primary) rounded-sm px-5 py-5"
              />
              <InputOTPSlot
                index={3}
                className="ml-2 mr-2 bg-(--primary) rounded-sm px-5 py-5"
              />
              <InputOTPSlot
                index={4}
                className="ml-2 mr-2 bg-(--primary) rounded-sm px-5 py-5"
              />
              <InputOTPSlot
                index={5}
                className="ml-2 mr-2 bg-(--primary) rounded-sm px-5 py-5"
              />
            </InputOTPGroup>
          </InputOTP>
          <Button
            type="submit"
            className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5"
            onClick={verifyOtp}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusVerification;
