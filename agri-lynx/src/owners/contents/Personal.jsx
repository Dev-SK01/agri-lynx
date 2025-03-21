import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
const Personal =  () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center  ">
    <div className="w-full max-w-sm mt-5 ">
              <Label htmlFor="Name" className="font-bold font-inter mb-2">Name:</Label>
              <Input type="text" placeholder="Enter Your Name" className="font-inter bg-(--teritary) pt-5 pb-5 "id="Name"/>
    </div>
    <br/>

    </div>
    
    
    </>
  )
}
export  default Personal;