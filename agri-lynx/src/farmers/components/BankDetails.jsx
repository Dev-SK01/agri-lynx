import React from "react";
import { Input } from "@/components/ui/input";

const BankDetails = () => {
  return (
    <>
      <div className="w-full max-w-sm mt-10">
        <label htmlFor="number" className="font-bold font-inter flex mb-2">
          BANK DETAILS
        </label>
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="ifsc-code" className="font-bold font-inter mb-2">
          IFSC CODE
        </label>
        <Input
          type="text"
          placeholder="Enter Your IFSC Code"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="ifsc-code"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="account-number" className="font-bold font-inter mb-2">
          Account Number
        </label>
        <Input
          type="text"
          placeholder="Enter Your Account Number"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="account-number"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="holder-name" className="font-bold font-inter mb-2">
          Account Holder Name
        </label>
        <Input
          type="text"
          placeholder="Enter Your Account Holder Name"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="holder-name"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="bank-name" className="font-bold font-inter mb-2">
          Bank Name
        </label>
        <Input
          type="text"
          placeholder="Enter Your Bank Name"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="bank-name"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="branch" className="font-bold font-inter mb-2">
          Bank Branch
        </label>
        <Input
          type="text"
          placeholder="Enter Your Bank Branch"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="branch"
        />
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="upi" className="font-bold font-inter mb-2">
          UPI ID
        </label>
        <Input
          type="text"
          placeholder="Enter Your UPI ID"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="upi"
        />
      </div>
    </>
  );
};

export default BankDetails;
