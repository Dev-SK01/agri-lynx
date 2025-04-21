import FarmerDashboard from "@/farmers/FarmerDashboard";
import RegistrationContext from "@/registration/context/RegistrationContext";
import React, { useContext } from "react";
import DashBoard from "@/logistics/DashBoard/DashBoard";
import LogisticHome from "@/logistics/OrderManagement/LogisticHome";
import ProductHeader from "@/owners/ProductList/ProductHeader";
import LocalMarketOwnerProductList from "@/owners/LocalMarketOwnerProductList";
import LocalMarketOwnerMyOrder from "@/owners/LocalMarketOwnerMyOrder";

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
