import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Address = () => {
  return (

      <div className="flex flex-col items-center justify-center  " >
        
        <Label htmlFor="number" className="font-bold font-inter flex mb-5 ">ADDRESS DETAILS</Label>
        
        <div className="w-full max-w-sm mt-5 ">
          <Label htmlFor="taluk" className="font-bold font-inter mb-2">Door No,Village,Post:</Label>
          <Input type="text" placeholder="Enter Your Taluk" className="font-inter bg-(--teritary) pt-5 pb-5 "id="taluk"/>
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="taluk" className="font-bold font-inter mb-2">Taluk:</Label>
          <Input type="text" placeholder="Enter Your Taluk" className="font-inter bg-(--teritary) pt-5 pb-5 "id="taluk"/>
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="district" className="font-bold font-inter mb-2">District:</Label>
          <Input type="text" placeholder="Enter Your District" className="font-inter bg-(--teritary) pt-5 pb-5"id="taluk"/>
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="State" className="font-bold font-inter mb-2">State:</Label>
          <Input type="text" placeholder="Enter Your State" className="font-inter bg-(--teritary) pt-5 pb-5"id="State"/>
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="State" className="font-bold font-inter mb-2">Pincode:</Label>
          <Input type="text" placeholder="Enter Your Pincode" className="font-inter bg-(--teritary) pt-5 pb-5"id="State"/>
        </div>

        
        
      </div>
      
      
    
  );
};

export default Address;