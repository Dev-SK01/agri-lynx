import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RegistrationHeader = () => {
  return (
    <>
      <header>
        <h1 className="font-inknut text-center text-2xl mt-5 font-bold">
          REGISTRATION
        </h1>
      </header>
      {/* select dropdown for user selection */}
      <Select>
        <SelectTrigger className="w-[180px] pb-3 pt-3 mt-5 bg-(--teritary) font-inter font-bold text-black shadow-[3px_3px_0px_0px_var(--secondary)] ">
          <SelectValue placeholder="Select User Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="font-inter font-bold">
            <SelectLabel>USER</SelectLabel>
            <SelectItem value="farmer">Farmer</SelectItem>
            <SelectItem value="local market">Local Market Owner</SelectItem>
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
            className="font-inter font-semibold bg-(--teritary) pt-5 pb-5"
          />
          <Button
            type="submit"
            className="text-white bg-(--secondary) font-bold text-[1.2rem]"
          >
            Verify
          </Button>
        </div>
      </div>
      {/* OTP verification  */}
      <div className="flex items-center flex-col mt-5">
        <InputOTP maxLength={6}>
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
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default RegistrationHeader;
