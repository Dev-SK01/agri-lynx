import React from "react";
import { Input } from "@/components/ui/input";
import phoneSvg from "../../assets/phone.svg";

const PersonalDetails = () => {
  return (
    <>
      <div className="w-full max-w-sm">
        <label htmlFor="name" className="font-bold font-inter mb-2">
          Name
        </label>
        <Input
          type="text"
          placeholder="Enter Your Name"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="name"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="number" className="font-bold font-inter flex mb-2">
          Phone Number <img src={phoneSvg} className="ml-2 h-[20px] w-[20px]" />
        </label>
        <Input
          type="number"
          placeholder="Enter Your Phone Number"
          className="font-inter  bg-(--teritary) pt-5 pb-5"
          id="number"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="alter-number" className="font-bold font-inter flex mb-2">
          Alternate Phone Number <img src={phoneSvg} className="ml-2 h-[20px] w-[20px]" />
        </label>
        <Input
          type="number"
          placeholder="Enter Your Alternate Number"
          className="font-inter  bg-(--teritary) pt-5 pb-5"
          id="alter-number"
        />
      </div>
    </>
  );
};

export default PersonalDetails;
