import { useState } from "react";
import LocalMarketOwnerRegistration from "./owners/LocalMarketOwnerRegistration";
import FarmerLogin from "./farmers/FarmerLogin";
import FarmerProduceListing from "./farmers/FarmerProduceListing";
import { Route, Routes } from "react-router-dom";
import { FarmerLogisticsContextProvider } from "./farmers/Context/FarmerLogisticsContext";
import FarmerLogisticInformation from "./farmers/FarmerLogisticInformation";
import LogisticsBooking from "./farmers/components/LogisticsBooking";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <FarmerLogisticsContextProvider>
        <Routes>
          <Route path="/" element={<FarmerLogisticInformation />}></Route>
          <Route
            path="farmerlogisticsdetails">
            <Route path=":partnerId" element={<LogisticsBooking />}/>
          </Route>
        </Routes>
      </FarmerLogisticsContextProvider>
      {/* <LocalMarketOwnerRegistration /> */}
      {/* <FarmerLogin /> */}
      {/* <FarmerProduceListing /> */}
      {/* <ApiCommodityList /> */}
       {/* toast container */}
       <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        limit={1}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
