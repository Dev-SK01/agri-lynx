import React, { useContext, useEffect, useState } from "react";
import {BrowserRouter,Routes,Route, data} from "react-router-dom"

import Footer from "./components/Footer";
import Header from "./components/Header";
import FarmerLogisticsContext from "./Context/FarmerLogisticsContext";
import FarmerLogisticsDetails from "./components/FarmerLogisticsDetails";


const FarmerLogisticInformation = () => {
 
  return (
    <>
      <div className="flex-col border-(--secondary)   items-center p-2   bg-(--primary) justify-center justify-items-center  bottom-0 top-0 w-[100%] h-[100%]  m-0 me-0 ">
        <Header />
        <FarmerLogisticsDetails />
        <Footer />
      </div>
    </>
  );
};

export default FarmerLogisticInformation;
