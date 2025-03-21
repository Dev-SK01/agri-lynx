import React, { useContext } from "react";
import { Input } from "@/components/ui/input";
import FarmerContext from "../context/FarmerContext";

const AddressDetails = () => {
  const {
    address,
    setAddress,
    taluk,
    setTaluk,
    district,
    setDistrict,
    state,
    setState,
    pincode,
    SetPincode,
  } = useContext(FarmerContext);

  console.log({
    address,
    taluk,
    district,
    state,
    pincode,
  });

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
          onChange={(e) => setAddress(e.target.value)}
        />
        {address.length < 10 && (
          <p className="text-red-600 font-semibold">
            enter address!
          </p>
        )}
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
          onChange={(e) => setTaluk(e.target.value)}
        />
        {taluk.length < 2 && (
          <p className="text-red-600 font-semibold">
            enter taluk!
          </p>
        )}
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
          onChange={(e) => setDistrict(e.target.value)}
        />
         {district.length < 2 && (
          <p className="text-red-600 font-semibold">
            enter district!
          </p>
        )}
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
          onChange={(e) => setState(e.target.value)}
        />
         {state.length < 2 && (
          <p className="text-red-600 font-semibold">
            enter state!
          </p>
        )}
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
          onChange={(e) => SetPincode(e.target.value)}
        />
         {pincode.length < 6 && (
          <p className="text-red-600 font-semibold">
            enter pincode!
          </p>
        )}
      </div>
    </>
  );
};

export default AddressDetails;
