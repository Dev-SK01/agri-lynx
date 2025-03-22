import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import FarmerContext from "../context/FarmerContext";
const BankDetails = () => {
  const {
    ifscCode,
    setIfscCode,
    accountNumber,
    setAccountNumber,
    accountHolderName,
    setAccountHolderName,
    bankName,
    setBankName,
    bankBranch,
    setBankBranch,
    upiId,
    setUpiId,
  } = useContext(FarmerContext);

  console.log({
    ifscCode,
    accountNumber,
    accountHolderName,
    bankName,
    bankBranch,
    upiId,
  });

  const fetchBankDetails = async (ifsc)=>{
    const END_POINT =`https://ifsc.razorpay.com/${ifsc}`;
   try{
    const response = await fetch(END_POINT);
    if(!response.ok){
      console.error("Failed To Fetch")
    }
    const bankData = await response.json();
    return bankData;
   }catch(err){
    console.error(err.message)
   }
  }

  const handleIFSC = async (e) =>{
    setIfscCode(e.target.value)
    if(ifscCode.length == 11 && ifscCode !== "IOBA0001872"){
      const bankData = await fetchBankDetails(ifscCode);
      if(bankData){
        setBankName(bankData.BANK);
        setBankBranch(bankData.BRANCH);
      }
    }
  }
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
          onChange={(e) => handleIFSC(e)}
          style={{textTransform:"uppercase"}}
        />
        {(ifscCode.length < 11 || ifscCode.length > 11) && (
          <p className="text-red-600 font-semibold">
            enter correct IFSC code!
          </p>
        )}
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="account-number" className="font-bold font-inter mb-2">
          Account Number
        </label>
        <Input
          type="number"
          placeholder="Enter Your Account Number"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="account-number"
          onChange={(e)=> setAccountNumber(e.target.value)}
        />
        {accountNumber.length < 5 && (
          <p className="text-red-600 font-semibold">
            enter correct Account Number!
          </p>
        )}
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
          onChange={(e)=> setAccountHolderName(e.target.value)}
        />
         {accountHolderName.length < 3 && (
          <p className="text-red-600 font-semibold">
            enter correct Account Holder Name!
          </p>
        )}
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
          onChange={(e)=>setUpiId(e.target.value)}
          style={{textTransform:"uppercase"}}
        />
        {!upiId.includes("@") && (
          <p className="text-red-600 font-semibold">
            enter correct UPI ID!
          </p>
        )}
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
          style={{textTransform:"uppercase"}}
          disabled={true}
          key={1}
          value={bankName}
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
          style={{textTransform:"uppercase"}}
          disabled={true}
          key={2}
          value={bankBranch}
        />
      </div>
    </>
  );
};

export default BankDetails;
