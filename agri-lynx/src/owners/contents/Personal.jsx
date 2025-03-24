import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import phoneSvg from "../../Assest/phone.svg";
import React from "react";
import { useForm } from "react-hook-form";

const Personal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full max-w-sm mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="name" className="font-bold font-inter mb-2">
            Name:
          </Label>
          <Input
            type="text"
            placeholder="Enter Your Name"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="phoneNumber" className="font-bold font-inter mb-2">
            Phone number <img src={phoneSvg} className="ml-2 h-[20px] w-[20px]" />
          </Label>
          <Input
            type="tel"
            placeholder="Enter Your Number"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="alternateNumber" className="font-bold font-inter mb-2">
            Alternate number <img src={phoneSvg} className="ml-2 h-[20px] w-[20px]" />
          </Label>
          <Input
            type="number"
            placeholder="Enter Your Number"
            id="alternateNumber"
            {...register("alternateNumber", {
              required: "Alternate number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit alternate phone number",
              },
            })}
          />
          {errors.alternateNumber && (
            <p className="text-red-500">{errors.alternateNumber.message}</p>
          )}
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="shopName" className="font-bold font-inter mb-2">
            Shop Name:
          </Label>
          <Input
            type="text"
            placeholder="Enter Your Shop Name"
            id="shopName"
            {...register("shopName", { required: "Shop Name is required" })}
          />
          {errors.shopName && <p className="text-red-500">{errors.shopName.message}</p>}
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="address" className="font-bold font-inter mb-2">
            Door No, Village, Post:
          </Label>
          <Input
            type="text"
            placeholder="Enter Your Address"
            id="address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="taluk" className="font-bold font-inter mb-2">
            Taluk:
          </Label>
          <Input
            type="text"
            placeholder="Enter Your Taluk"
            id="taluk"
            {...register("taluk", { required: "Taluk is required" })}
          />
          {errors.taluk && <p className="text-red-500">{errors.taluk.message}</p>}
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="district" className="font-bold font-inter mb-2">
            District:
          </Label>
          <Input
            type="text"
            placeholder="Enter Your District"
            id="district"
            {...register("district", { required: "District is required" })}
          />
          {errors.district && <p className="text-red-500">{errors.district.message}</p>}
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="state" className="font-bold font-inter mb-2">
            State:
          </Label>
          <Input
            type="text"
            placeholder="Enter Your State"
            id="state"
            {...register("state", { required: "State is required" })}
          />
          {errors.state && <p className="text-red-500">{errors.state.message}</p>}
        </div>

        <div className="w-full max-w-sm mt-5">
          <Label htmlFor="pincode" className="font-bold font-inter mb-2">
            Pincode:
          </Label>
          <Input
            type="number"
            placeholder="Enter Your Pincode"
            id="pincode"
            {...register("pincode", {
              required: "Pincode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Enter a valid 6-digit pincode",
              },
            })}
          />
          {errors.pincode && <p className="text-red-500">{errors.pincode.message}</p>}
        </div>

        <Button
          type="submit"
          className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5"
        >
          Register Now
        </Button>
      </form>
    </div>
  );
};

export default Personal;
