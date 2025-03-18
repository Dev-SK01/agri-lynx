import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddressDetails = () => {
  return (
    <>
      <div className="w-full max-w-sm mt-10">
        <label htmlFor="number" className="font-bold font-inter flex mb-2">
          ADDRESS DETAILS
        </label>
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="address" className="font-bold font-inter mb-2">
          Address
        </label>
        <Input
          type="text"
          placeholder="Enter Your Address"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="address"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="taluk" className="font-bold font-inter mb-2">
          Taluk
        </label>
        <Input
          type="text"
          placeholder="Enter Your Taluk"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="taluk"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="district" className="font-bold font-inter mb-2">
          District
        </label>
        <Input
          type="text"
          placeholder="Enter Your District"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="district"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="state" className="font-bold font-inter mb-2">
          State
        </label>
        <Input
          type="text"
          placeholder="Enter Your State"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="state"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="pincode" className="font-bold font-inter mb-2">
          Pincode
        </label>
        <Input
          type="number"
          placeholder="Enter Your Pincode"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="pincode"
          maxLength={6}
        />
      </div>
    </>
  );
};

export default AddressDetails;
