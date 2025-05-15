import FarmerDashboard from "@/farmers/FarmerDashboard";
import RegistrationContext from "@/registration/context/RegistrationContext";
import React, { useContext } from "react";
import LogisticHome from "@/logistics/OrderManagement/LogisticHome";
import LocalMarketOwnerProductList from "@/owners/LocalMarketOwnerProductList";


const Dashboard = () => {

  const { userData } = useContext(RegistrationContext);
  return (
    <>
      {userData?.userType === "farmer" ? (
        <FarmerDashboard />
      ) : userData?.userType === "market" ? (
        <LocalMarketOwnerProductList />
      ) : (
        <LogisticHome /> 
      )}
    </>
  );
};

export default Dashboard;
