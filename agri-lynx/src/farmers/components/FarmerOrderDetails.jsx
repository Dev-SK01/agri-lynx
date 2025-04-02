import React from "react";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";

const FarmerOrderDetails = () => {
  const { orderId } = useParams();
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[95%] h-[8vh] mt-4">
        <Navigation />
      </div>
      <div className="w-[95%] mt-4 text-center">
        <p>{orderId.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default FarmerOrderDetails;
