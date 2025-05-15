import React, { useContext, useEffect } from "react";
import FarmerContext from "../context/FarmerContext";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";

const Filter = () => {
  const {
    selectedStatus,
    setSelectedStatus,
    setIsContentLoading,
    setFarmerOrders,
    setPackedOrders,
    setShippedOrders,
    setCancelledOrders,
    setDeliveredOrders,
    farmerData,
  } = useContext(FarmerContext);

  // here added orders data for set state function
  const handleOrderedOrders = async () => {
    setIsContentLoading(true);
    setSelectedStatus("ordered");
    try {
      // backend api
      const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/farmer/getfarmerorders?farmerId=${farmerData._id}&status=ordered`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      setFarmerOrders(res.reverse());
      setTimeout(() => setIsContentLoading(false), 1500);
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };
  const handlePackedOrders = async () => {
    setIsContentLoading(true);
    setSelectedStatus("packed");
    try {
       // backend api
       const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/farmer/getfarmerorders?farmerId=${farmerData._id}&status=packed`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      setPackedOrders(res.reverse());
      setTimeout(() => setIsContentLoading(false), 2000);
    } catch (err) {
      Toast(toast.error,err.message);
    }
  };
  const handleShippedOrders = async () => {
    setIsContentLoading(true);
    setSelectedStatus("shipped");
    try {
      // backend api
      const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/farmer/getfarmerorders?farmerId=${farmerData._id}&status=shipped`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      setShippedOrders(res.reverse());
      setTimeout(() => setIsContentLoading(false), 2000);
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };
  const handleDeliveredOrders = async () => {
    setIsContentLoading(true);
    setSelectedStatus("delivered")
    try{
       // backend api
       const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/farmer/getfarmerorders?farmerId=${farmerData._id}&status=delivered`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      setDeliveredOrders(res.reverse());
      setTimeout(()=> setIsContentLoading(false),2000);
    }catch(err){
      Toast(toast.error,err.message)
    }
  }
  const handleCancelledOrders = async() => {
    setIsContentLoading(true);
    setSelectedStatus("cancelled")
    try{
       // backend api
       const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/farmer/getfarmerorders?farmerId=${farmerData._id}&status=cancelled`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await req.json();
      setCancelledOrders(res.reverse());
      setTimeout(()=> setIsContentLoading(false),2000);
    }catch(err){
      Toast(toast.error,err.message)
    }
  }

  // farmer order status fetch
  useEffect(()=>{
   handleOrderedOrders();
  },[])

  return (
    <div className="flex rounded-sm  p-2 bg-(--green) mt-5 w-full text-xl justify-between items-center overflow-x-scroll scrollbar">
      <button
        onClick={handleOrderedOrders}
        className={`rounded-sm font-bold font-inter ml-2 px-2 py-1 ${
          selectedStatus == "ordered" &&
          "bg-(--primary) border-1 border-green-600"
        }`}
      >
        Ordered
      </button>
      <button
        onClick={handlePackedOrders}
        className={`rounded-sm font-bold font-inter ml-2 px-2 py-1 ${
          selectedStatus == "packed" &&
          "bg-(--primary) border-1 border-green-600"
        }`}
      >
        Packed
      </button>
      <button
        onClick={handleShippedOrders}
        className={`rounded-sm font-bold font-inter ml-2 px-2 py-1 ${
          selectedStatus == "shipped" &&
          "bg-(--primary) border-1 border-green-600"
        }`}
      >
        Shipped
      </button>
      <button
        onClick={handleDeliveredOrders}
        className={`rounded-sm font-bold font-inter ml-2 px-2 py-1 ${
          selectedStatus == "delivered" &&
          "bg-(--primary) border-1 border-green-600"
        }`}
      >
        Delivered
      </button>
      <button
        onClick={handleCancelledOrders}
        className={`rounded-sm font-bold font-inter ml-2 px-2 py-1 ${
          selectedStatus == "cancelled" &&
          "bg-(--primary) border-1 border-green-600"
        }`}
      >
        Cancelled
      </button>
    </div>
  );
};

export default Filter;
