import React, { useContext, useEffect } from "react";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import BottomNavigation from "./components/BottomNavigation";
import FarmerContext from "./context/FarmerContext";
import { PulseLoader } from "react-spinners";
import Orders from "./components/Orders";
import Filter from "./components/Filter";

const FarmerOrders = () => {
  const {
    isContentLoading,
    setIsContentLoading,
    farmerOrders,
    setFarmerOrders,
    packedOrders,
    setPackedOrders,
    shippedOrders,
    setShippedOrders,
    cancelledOrders,
    setcancelledOrders,
    deliveredorders,
    setDeliveredOrders,
    selectedStatus
  } = useContext(FarmerContext);

  const searchOrder = (e) => {
    const userInput = e.target.value;
    console.log(userInput);
  };

  const fetchFarmerOrdersById = () => {
    try {
      setIsContentLoading(true);
      // backend api status ordered
      const response = farmerOrders;
      if (!response) {
        Toast(toast.error, "Failed to Fetch Orders...");
      }
      setTimeout(() => setIsContentLoading(false), 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchFarmerOrdersById();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[95%] h-[17vh] mt-4">
        <Navigation />
        {/* <Search searchFunction={searchOrder} /> */}
        <Filter />
      </div>
      <div
        className={
          !isContentLoading
            ? "w-[95%] overflow-auto h-[70vh] rounded-md scrollbar"
            : "w-[95%] h-[70vh] flex items-center justify-center"
        }
      >
        {(!isContentLoading && selectedStatus === "ordered")  && <Orders orderData={farmerOrders}/>}
        {(!isContentLoading && selectedStatus === "packed") && <Orders orderData={packedOrders}/>}
        {(!isContentLoading && selectedStatus === "shipped")  && <Orders orderData={shippedOrders}/>}
        {(!isContentLoading && selectedStatus === "delivered") && <Orders orderData={deliveredorders}/>}
        {(!isContentLoading && selectedStatus === "cancelled")  && <Orders orderData={cancelledOrders}/>}
        {/* Loader */}
        {isContentLoading && <PulseLoader color="#4CA14D" />}
      </div>
      {/* bottom nav */}
      <BottomNavigation />
    </div>
  );
};

export default FarmerOrders;
