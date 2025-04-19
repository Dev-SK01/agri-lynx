import React, { useContext, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LogisticContext from '../context/LogisticContext';
import calandar from "../../Assest/calendar.svg";

const VerificationOTP = () => {
    const { LogisticOrders,LogisticData } = useContext(LogisticContext);
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState(LogisticOrders[0]?.LogisticOrders?.email || "");
    const { setShowOtpPopup, setOrderStatus } = useContext(LogisticContext);
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
            setOrderStatus("Deliverd");
            setShowOtpPopup(true); // close modal
          } else {
            toast.error("Invalid OTP");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="absolute flex ps-5 justify-items-center items-center   h-[100vh] backdrop-blur-[5px] top-0.5 ">
                <div className="flex-col items-center justify-center  bg-(--green) rounded-md w-[90dvw]">
                    {/* Order ID and Date */}
                    <div className="w-full text-center   bg-(--green) rounded-md py-3 px-2">
                        <h1 className="font-bold text-lg font-inter truncate">
                            #{LogisticOrders[0]?.orderId.toUpperCase()}
                        </h1>
                        <div className="flex justify-center items-center mt-2">
                            <img src={calandar} alt="calendar" className="h-5 w-5" />
                            <span className="ml-2 font-inter text-sm">
                                {LogisticOrders[0]?.orderDate}
                            </span>
                        </div>
                    </div>

                    {/* Email section */}
                    <div className="mt-4 w-full">
                        <label htmlFor="email" className="font-bold font-inter block mb-1">
                            {LogisticOrders[0]?.LogisticOrders?.name}
                        </label>
                        <div className="flex px-5 flex-row gap-8 sm:flex-row items-stretch sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={LogisticOrders[0]?.logistics?.email}
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
                            className="text-white  bg-(--secondary) font-bold text-base mt-4 px-6 py-2  sm:w-auto"
                            onClick={verifyOtp}
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
