import React from 'react'
import avatar1 from "../assets/avatar1.svg";
import phone from "../assets/phone.svg";
import delivery from "../assets/delivery.svg";
import location from "../assets/location.svg";

const LogisticsDetails = () => {
  return (
    <>
      <div className="flex-col font-inter font-bold text-lg  border-s-10 border-(--secondary)  bg-(--teritary) rounded-xl p-2 mt-2 mb-2">
                  <p className=" flex me-20 p-1.5 m-1 bg-(--primary) rounded gap-3 pt-1.5 items-center">
                    {" "}
                    <img src={avatar1} className="size-8" alt="avatar" />
                    N. jegadeeshwaran{" "}
                  </p>
                  <p className="flex  me-20 p-1.5 m-2 bg-(--primary) rounded  gap-3">
                    {" "}
                    <img src={phone} alt="phone" /> +91 67682988238
                  </p>
                  <p className="flex p-1.5 m-2 bg-(--primary) rounded  gap-2.5">
                    {" "}
                    <img src={location} alt="location" />
                    kothamangalam ,south street, pudukottai-678672
                  </p>
                  <div className="flex-col justify-items-center w-[95%] ">
                    <button
                      type="submit"
                      className="flex gap-2   p-1 text-(--primary)  bg-(--secondary) rounded  "
                    >
                      Book Now <img src={delivery} alt="delivery" />
                    </button>
                  </div>
                </div>
    </>
  )
}

export default LogisticsDetails
