import VehicleDetails from "@/registration/components/VehicleDetails";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Toast from "@/utils/toast";

const LogisticContext = createContext({});

export const LogisticContextProvider = ({ children }) => {
  const [LogisticData, setLogisticData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [LogisticOrders, setLogisticOrders] = useState([]);
  const [orderedOrders, setOrderedOrders] = useState([]);
  const [intransitOrders, setIntransitOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState("ordered");

  // OTP verification states
  const [otpVerified, setOtpVerified] = useState({
    intransit: false,
    delivered: true,
  });

  // Lock delivered status to prevent changes
  const [statusLocked, setStatusLocked] = useState(false);

  const acceptOrder = (orderId) => {
    const prevOrders = LogisticOrders.filter((order) => {
      if (order.orderId !== orderId) {
        return order;
      }
    });
    console.log(prevOrders);
    setLogisticOrders(prevOrders);
    console.log("executed");
  };
  const updateOrderStatus = (orderId, newStatus) => {
    setLogisticOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, orderStatus: newStatus } : order
      )
    );
  };
  const deleteOrder = (orderId) => {
    setLogisticOrders((prevOrders) =>
      prevOrders.filter((order) => order.orderId !== orderId)
    );
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

        updateOrderStatus,
        acceptOrder,

        intransitOrders,
        setIntransitOrders,

        deliveredOrders,
        setDeliveredOrders,

        orderedOrders,
        setOrderedOrders,
      }}
    >
      {children}
    </LogisticContext.Provider>
  );
};

export default LogisticContext;
