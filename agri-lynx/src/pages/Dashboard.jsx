import FarmerDashboard from "@/farmers/FarmerDashboard";
import RegistrationContext from "@/registration/context/RegistrationContext";
import React, { useContext } from "react";
import DashBoard from "@/logistics/DashBoard/DashBoard";
const Dashboard = () => {
  const { userData } = useContext(RegistrationContext);
  return (
    <>
      {userData?.userType === "farmer" ? (
        <FarmerDashboard />
      ) : userData?.userType === "market" ? (
        <FarmerDashboard />
      ) : (
        <DashBoard />
      )}
    </>
  );
};

export default Dashboard;
