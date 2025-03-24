import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
    
    const Selection = () => {
      return (
        <>

      <div className="flex justify-center items-center  flex-col">
      <Select className="flex justify-center items-center font-inter font-bold text-5xl " >
        <SelectTrigger className="w-[180px] pb-3 pt-3 mt-5 bg-(--teritary) font-inter font-bold text-black shadow-[3px_3px_0px_0px_var(--secondary)] ">
          <SelectValue placeholder="Select User Type" />
        </SelectTrigger>
        <SelectContent className="font-inter font-bold">
          <SelectItem value="User">User</SelectItem>
          <SelectItem value="Farmer">Farmer</SelectItem>
          <SelectItem value="Logistic">Logistic</SelectItem>
          <SelectItem value="Owner">Owner</SelectItem>
        </SelectContent>
      </Select>
      <br/>
        
    </div>
    </>

      )
    }
    
  
export default Selection;
