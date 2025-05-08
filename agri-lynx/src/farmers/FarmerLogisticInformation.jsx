import React from "react";
import FarmerLogisticsDetails from "./components/FarmerLogisticsDetails";
import Navigation from "./components/Navigation";
import BottomNavigation from "./components/BottomNavigation";


const FarmerLogisticInformation = () => {
 
  return (
    <>
      <div className="flex-col border-(--secondary) items-center   bg-(--primary) justify-center justify-items-center  bottom-0  w-[100%]  p-0 m-0 me-0 ">
       <div className="mt-4 w-[95dvw]"> <Navigation /></div>
        <FarmerLogisticsDetails />
        <BottomNavigation />
      </div>
    </>
  );
};

export default FarmerLogisticInformation;
