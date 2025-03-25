import React, { useContext, useState } from "react";
import RegistrationContext from "@/registration/context/RegistrationContext";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Produce from "./components/Produce";
import BottomNavigation from "./components/BottomNavigation";
import { PulseLoader } from "react-spinners";

const FarmerDashboard = () => {
  const { userData } = useContext(RegistrationContext);
  const [isContentLoading, setIsContentLoading] = useState(false);
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
              ? "w-[95%] overflow-y-scroll h-[67vh]"
              : "w-[95%] h-[67vh] flex items-center justify-center"
          }
        >
          {!isContentLoading && (
            <>
              <Produce />
              <Produce />
              <Produce />
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

export default FarmerDashboard
