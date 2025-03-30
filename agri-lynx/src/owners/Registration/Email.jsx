import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Email = ({onOtpSent}) => {

        const { register, handleSubmit, formState: { errors } } = useForm();
        const [loading, setLoading] = useState(false);
      
        const onSubmit = async (data) => {
          setLoading(true);
          console.log("Valid email:", data.email);
      
          
    try {
        // Replace with your actual api
        const response = await fetch("", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: data.email }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          
          
          alert("OTP Sent Successfully! "); 
  
          
          toast.success("OTP Sent Successfully! ");
  
          onOtpSent(data.email); 
        } else {
          toast.error("Failed to send OTP.  Try again.");
        }
      } catch (error) {
        toast.error("Network error. Please try again later.");
      }
  
      setLoading(false);
    };
      

    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="w-full max-w-sm mt-5">
                <div className="">
                    <Label className='font-bold font-inter mb-3'>Email:</Label>

                </div>
                <div className="flex w-full max-w-sm  space-x-3">
                    <Input type="email" 
                    placeholder="Enter your email address" 
                    className="font-inter font-semibold bg-(--teritary) pt-5 pb-5"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Invalid email format",
                        },
                      })}
                      
                    
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <Button type="submit" className="text-white bg-(--secondary) font-bold text-[1.2rem] " >Verify</Button>
                    
                </div>
                <br/>
                {/* Toast Notification Container (for better popup messages) */}
                <ToastContainer position="top-center" autoClose={3000} />

            </div><br />

            </form>

        </>
    )
}
export default Email;
