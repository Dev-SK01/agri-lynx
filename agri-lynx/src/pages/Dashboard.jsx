import FarmerDashboard from "@/farmers/FarmerDashboard";
import RegistrationContext from "@/registration/context/RegistrationContext";
import React, { useContext } from "react";

const Dashboard = () => {
  const { userData } = useContext(RegistrationContext);
  return (
    <>
      {userData?.userType === "farmer" ? (
        <FarmerDashboard />
      ) : userData?.userType === "market" ? (
        <FarmerDashboard />
      ) : (
        <FarmerDashboard />
      )}
    </>
  );
};

export default Dashboard;
