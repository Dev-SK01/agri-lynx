import React from "react";
import Navigation from "./components/Navigation";
import analyticsImg from "../assets/analytics.svg";
import AnalyticsHistory from "./components/AnalyticsHistory";
import BottomNavigation from "./components/BottomNavigation";

const FarmerAnalytics = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[95%] h-[17vh] mt-4">
        <Navigation />
        <div className="flex items-center justify-center mt-4">
          <h1 className="font-inknut text-2xl font-[600]">Your Analytics</h1>
          <img
            src={analyticsImg}
            alt="analytics"
            className="h-[30px] w-[30px] ml-2"
          />
        </div>
      </div>
      <div className="overflow-auto h-[70vh] rounded-md scrollbar">
        {/* farmer orders analytics */}
        <AnalyticsHistory />
        {/* market price section */}
        <div className="w-full mt-6">
          <a href="https://www.agmarknet.gov.in" target="_self">
            <div className="mb-2">
              <span className="font-bold font-inter bg-(--green) text-2xl px-4 py-[.2rem] border-1 border-black rounded-md">
                MARKET PRICE
              </span>
            </div>
            <div className="w-[100%] h-[350px] mt-4">
              <embed
                src="https://www.agmarknet.gov.in"
                height="100%"
                width="100%"
                className="rounded-md bg-(--green)"
              />
            </div>
          </a>
        </div>
      </div>
      {/* bottom nav */}
      <BottomNavigation />
    </div>
  );
};

export default FarmerAnalytics;
