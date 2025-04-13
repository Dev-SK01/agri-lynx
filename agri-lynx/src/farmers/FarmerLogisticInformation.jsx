import React, { useContext, useEffect, useState } from "react";
import {BrowserRouter,Routes,Route, data} from "react-router-dom"

import Footer from "./components/Footer";
import Header from "./components/Header";
import FarmerLogisticsContext from "./context/FarmerLogisticsContext";
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
