import VehicleDetails from "@/registration/components/VehicleDetails";
import React,{ createContext, useState,useEffect,useContext } from "react";
import axios from 'axios';

const LogisticContext = createContext({});

export const LogisticContextProvider = ({ children }) => {
  const [LogisticData, setLogisticData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [LogisticOrders, setLogisticOrders] = useState([
   
  ]);

  const [currentPage, setCurrentPage] = useState("home");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("Ordered");

  // OTP verification states
  const [otpVerified, setOtpVerified] = useState({
    "In-Transit": false,
    "Delivered": true,
  });

  // Lock delivered status to prevent changes
  const [statusLocked, setStatusLocked] = useState(false);

  // Call this function after OTP is verified
  const verifyOtpAndChangeStatus = (newStatus) => {
    if (newStatus === "In-Transit") {
      setOtpVerified((prev) => ({ ...prev, "In-Transit": true }));
      setOrderStatus("In-Transit");
    } else if (newStatus === "Delivered") {
      setOtpVerified((prev) => ({ ...prev, "Delivered": true }));
      setOrderStatus("Delivered");
      setStatusLocked(true); // Lock further changes
    }
    setShowOtpPopup(true);
  };
  const acceptOrder = (orderId) => {
    setLogisticOrders(prevOrders =>
      prevOrders.map(order =>
        order.orderId === orderId
          ? { ...order, status: "accepted", orderStatus: "ordered" }
          : order
      )
    );
  };
  const updateOrderStatus = (orderId, newStatus) => {
    setLogisticOrders(prevOrders =>
      prevOrders.map(order =>
        order.orderId === orderId
          ? { ...order, orderStatus: newStatus }
          : order
      )
    );
  };
  const deleteOrder = (orderId) => {
    setLogisticOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
  };
  const [isContentLoading, setIsContentLoading] = useState(true);
  

  
 
  return (
    <LogisticContext.Provider
      value={{
        LogisticData,
        setLogisticData,
        isContentLoading,
        setIsContentLoading,
        LogisticOrders,
        setLogisticOrders,
        deleteOrder,
        currentPage,
        setCurrentPage,

        orderStatus,
        setOrderStatus,

        showOtpPopup,
        setShowOtpPopup,

        otpVerified,
        setOtpVerified,

        statusLocked,
        setStatusLocked,

        verifyOtpAndChangeStatus,
        updateOrderStatus,
        acceptOrder

      }}
    >
      {children}
    </LogisticContext.Provider>
  );
};

export default LogisticContext;



