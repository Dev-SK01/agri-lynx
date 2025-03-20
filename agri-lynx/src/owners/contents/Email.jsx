import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import OtpInputField from './Otp'


const Email = () => {

    return (
        <>
            {/*Email */}
            <div className="">
                <Label htmlFor="email" className="font-bold text-1xl font-inter pt-5 pb-5">Email:</Label>

                <div className="flex w-full max-w-sm items-center space-x-3">
                    <Input type="email" placeholder="Enter your email address" className="bg-(--teritary) pt-5 pb-5" />
                    <Button type="submit" className="text-white bg-(--secondary) font-bold text-[1.2rem] ">Verify</Button>
                </div>
                <br />

                
                
                
            </div>

        </>
    )
}
export default Email;
