import React, { useContext, useEffect, useState } from "react";
import RegistrationContext from "@/registration/context/RegistrationContext";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Produce from "./components/Produce";
import BottomNavigation from "./components/BottomNavigation";
import { PulseLoader } from "react-spinners";
import FarmerContext from "./context/FarmerContext";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";

const FarmerDashboard = () => {
  const {
    userData,
    farmerData,
    setFarmerData,
    isContentLoading,
    setIsContentLoading,
  } = useContext(FarmerContext);

  const fetchFarmerDataById = () => {
    // here used user data from the registration context for fetch user data by id
    try {
      setIsContentLoading(true);
      // backend api
      const response = userData;
      if (response) {
        Toast(toast.success, "Data Fectched Successfully");
      } else {
        Toast(toast.error, "Failed to Fetch Data");
      }
      setTimeout(() => setIsContentLoading(false), 2000);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchFarmerDataById();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="w-[95%] h-[20vh] mt-4">
          <Navigation />
          <Search />
        </div>
        <div
          className={
            !isContentLoading
              ? "w-[95%] overflow-auto h-[67vh] rounded-md scrollbar"
              : "w-[95%] h-[67vh] flex items-center justify-center"
          }
        >
          {!isContentLoading && (
            <>
              <Produce />
            </>
          )}
          {isContentLoading && <PulseLoader />}
        </div>
        <BottomNavigation />
      </div>
    </>
  );
};

export default FarmerDashboard;
