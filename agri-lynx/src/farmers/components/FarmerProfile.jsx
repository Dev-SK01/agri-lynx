import { Input } from "@/components/ui/input";
import React, { useContext } from "react";
import phoneSvg from "../../assets/phone.svg";
import Navigation from "./Navigation";
import FarmerContext from "../context/FarmerContext";
import logoutImg from "../../assets/logout.svg";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";
import RegistrationContext from "@/registration/context/RegistrationContext";

const FarmerProfile = () => {
  // context
  const { farmerData } = useContext(FarmerContext);
  const {setUserData} = useContext(RegistrationContext);

  const logOut = () => {
    if (confirm("Are you Sure !")) {
      localStorage.removeItem("userData");
      Toast(toast.success, "Logged Out!...");
      // setting for userData state
      setUserData("");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col scrollbar">
      <div className="w-[95%] h-[10vh] mt-4 ">
        <Navigation />
      </div>
      <section className="w-full flex flex-col items-center justify-center">
        {/* personal details */}
        <div className="w-full max-w-sm">
          <label htmlFor="name" className="font-bold font-inter mb-2">
            Name
          </label>
          <Input
            type="text"
            placeholder="Enter Your Name"
            className="font-inter bg-(--teritary) pt-5 pb-5"
            id="name"
            disabled={true}
            value={farmerData.name}
          />
        </div>
        <div className="w-full max-w-sm mt-5">
          <label htmlFor="number" className="font-bold font-inter flex mb-2">
            Phone Number{" "}
            <img src={phoneSvg} className="ml-2 h-[20px] w-[20px]" />
          </label>
          <Input
            type="number"
            placeholder="Enter Your Phone Number"
            className="font-inter  bg-(--teritary) pt-5 pb-5"
            id="number"
            disabled={true}
            value={farmerData.phoneNumber}
          />
        </div>
        <div className="w-full max-w-sm mt-5">
          <label
            htmlFor="alter-number"
            className="font-bold font-inter flex mb-2"
          >
            Alternate Phone Number
            <img src={phoneSvg} className="ml-2 h-[20px] w-[20px]" />
          </label>
          <Input
            type="number"
            placeholder="Enter Your Alternate Number"
            className="font-inter  bg-(--teritary) pt-5 pb-5"
            id="alter-number"
            disabled={true}
            value={farmerData.alternateNumber}
          />
        </div>
        {/* Address Details */}
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
            disabled={true}
            value={farmerData.address}
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
            disabled={true}
            value={farmerData.taluk}
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
            disabled={true}
            value={farmerData.district}
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
            disabled={true}
            value={farmerData.state}
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
            minLength={6}
            disabled={true}
            value={farmerData.pincode}
          />
        </div>
        {/* bank details */}
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
            style={{ textTransform: "uppercase" }}
            disabled={true}
            value={farmerData.ifscCode}
          />
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
            disabled={true}
            value={farmerData.accountNumber}
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
            disabled={true}
            value={farmerData.accountHolderName}
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
            style={{ textTransform: "uppercase" }}
            disabled={true}
            value={farmerData.upiId}
          />
        </div>
        <div className="w-full max-w-sm mt-5">
          <label htmlFor="bank-name" className="font-bold font-inter mb-2">
            Bank Name
          </label>
          <Input
            type="text"
            placeholder="BANK NAME"
            className="font-inter bg-(--teritary) pt-5 pb-5"
            id="bank-name"
            style={{ textTransform: "uppercase" }}
            disabled={true}
            key={1}
            value={farmerData.bankName}
          />
        </div>
        <div className="w-full max-w-sm mt-5">
          <label htmlFor="branch" className="font-bold font-inter mb-2">
            Bank Branch
          </label>
          <Input
            type="text"
            placeholder="BRANCH NAME"
            className="font-inter bg-(--teritary) pt-5 pb-5"
            id="branch"
            style={{ textTransform: "uppercase" }}
            disabled={true}
            key={2}
            value={farmerData.bankBranch}
          />
        </div>
      </section>
      <div
        className="flex px-6 py-2 mt-6 items-center justify-evenly bg-(--green) rounded-[15px]"
        onClick={logOut}
      >
        <img src={logoutImg} alt="logout" />
        <p className="font-inter font-bold ml-2">Logout</p>
      </div>
      {/* version */}
      <p className="font-inter font-bold mt-2">V1.0.0</p>
    </div>
  );
};

export default FarmerProfile;
