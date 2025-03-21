import React, { useContext, useReducer } from "react";
import { Input } from "@/components/ui/input";
import phoneSvg from "../../assets/phone.svg";
import FarmerContext from "../context/FarmerContext";

const PersonalDetails = () => {
  const {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    alternatePhoneNumber,
    setAlternatePhoneNumber,
    personalDetailsError,
    setPersonalDetailsError,
  } = useContext(FarmerContext);

  // console.log({
  //   name: name,
  //   phoneNumber: phoneNumber,
  //   alternatePhoneNumber: alternatePhoneNumber,
  // });

  const handleUserInput = (e, fieldValue, stateFunc, fieldType) => {
    stateFunc(e.target.value);
    fieldTypeValidation(fieldType, fieldValue);
  };

  const fieldTypeValidation = (fieldType, fieldValue) => {
    // checking name input
    if (fieldType == "name") {
      if (fieldValue.length >= 4) {
        setPersonalDetailsError({
          nameError: false,
          numberError: false,
          alternateError: false,
        });
      } else {
        setPersonalDetailsError({
          nameError: true,
          numberError: false,
          alternateError: false,
        });
      }
    }
    // phone number input
    if (fieldType == "phone") {
      if (fieldValue.length == 9) {
        setPersonalDetailsError({
          nameError: false,
          numberError: false,
          alternateError: false,
        });
      } else {
        setPersonalDetailsError({
          nameError: false,
          numberError: true,
          alternateError: false,
        });
      }
    }
    if (fieldType == "alternate") {
      if (fieldValue.length == 9) {
        setPersonalDetailsError({
          nameError: false,
          numberError: false,
          alternateError: false,
        });
      } else {
        setPersonalDetailsError({
          nameError: false,
          numberError: false,
          alternateError: true,
        });
      }
    }
  };
  return (
    <>
      <div className="w-full max-w-sm">
        <label htmlFor="name" className="font-bold font-inter mb-2">
          Name
        </label>
        <Input
          type="text"
          placeholder="Enter Your Name"
          className="font-inter bg-(--teritary) pt-5 pb-5"
          id="name"
          onChange={(e) => handleUserInput(e, name, setName, "name")}
        />
        {personalDetailsError.nameError && (
          <p className="text-red-600 font-semibold">enter proper name</p>
        )}
      </div>
      <div className="w-full max-w-sm mt-5">
        <label htmlFor="number" className="font-bold font-inter flex mb-2">
          Phone Number <img src={phoneSvg} className="ml-2 h-[20px] w-[20px]" />
        </label>
        <Input
          type="number"
          placeholder="Enter Your Phone Number"
          className="font-inter  bg-(--teritary) pt-5 pb-5"
          id="number"
          onChange={(e) =>
            handleUserInput(e, phoneNumber, setPhoneNumber, "phone")
          }
        />
        {personalDetailsError.numberError && (
          <p className="text-red-600 font-semibold">
            number should be 10 digit!
          </p>
        )}
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
          onChange={(e) =>
            handleUserInput(
              e,
              alternatePhoneNumber,
              setAlternatePhoneNumber,
              "alternate"
            )
          }
        />
        {alternatePhoneNumber == phoneNumber && (
          <p className="text-red-600 font-semibold">
            alternate number not same to phone number!
          </p>
        )}
        {personalDetailsError.alternateError && (
          <p className="text-red-600 font-semibold">
            number should be 10 digit!
          </p>
        )}
      </div>
    </>
  );
};

export default PersonalDetails;
