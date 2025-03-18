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

const RegistrationHeader = () => {
  const { email, setEmail ,isCodeSent,setCodeSent,validateEmail} = useContext(FarmerContext);

  const handleEmailVerification = () => {
    // validating email
    if (validateEmail(email)) {
      console.log(email);
      setCodeSent(true);
    }else{
      alert('Enter Proper Email!')
      setCodeSent(false)
    }
  };

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="text-white bg-(--secondary) font-bold text-[1.2rem] hover:bg-(--teritary) hover:text-black"
            onClick={handleEmailVerification}
          >
            Verify
          </Button>
        </div>
      </div>
      {isCodeSent && <OneTimePassword />}
    </>
  );
};

export default RegistrationHeader;
