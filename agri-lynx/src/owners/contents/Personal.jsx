import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
const Personal =  () => {
  return (
    <>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name" className="font-bold text-1xl font-inter">Name:</Label>
      <Input type="Name" id="Name" placeholder="Enter your Name" className="bg-(--teritary)" />
    </div>
    </>
  )
}
export  default Personal;