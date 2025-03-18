import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"




import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectLabel } from '@radix-ui/react-select'





import React from 'react'

const LocalMarketOwnerRegistration = () => {
  return (
    <div className="place-content-center ">
      <h1 className="--font-inknut font-bold text-2xl mt-5  text-center">Registration</h1>





      <div className="flex justify-center items-center  flex-col">
    <Select className="flex justify-center items-center font-inter font-bold text-5xl " >
    <SelectTrigger className="w-[180px] pb-3 pt-3 mt-5 bg-(--teritary) font-inter font-bold ">
    <SelectValue placeholder="Select One" />
    </SelectTrigger>
    <SelectContent>
      
    <SelectItem value="Farmer">Farmer</SelectItem>
    <SelectItem value="Logistic">Logistic</SelectItem>
    <SelectItem value="Owner">Owner</SelectItem>
    </SelectContent>
    </Select>
    <br></br>


    <div className="">
      <Label htmlFor="email" className="font-bold text-1xl font-inter">Email:</Label>
  
      <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Enter the email" />
      <Button type="submit" className="bg-(--secondary)">Verify</Button>
    </div>
      
    </div>
    

    
      


      

      
      
      
      
      
     
      
      
      

    </div>
    </div>
  )
}

export default LocalMarketOwnerRegistration
