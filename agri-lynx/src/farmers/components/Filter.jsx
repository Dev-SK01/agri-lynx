import React, { useContext } from "react";
import FarmerContext from "../context/FarmerContext";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";

const Filter = () => {
  const {
    selectedStatus,
    setSelectedStatus,
    setIsContentLoading,
    farmerOrders,
    setFarmerOrders,
    packedOrders,
    setPackedOrders,
    shippedOrders,
    setShippedOrders,
    cancelledOrders,
    setCancelledOrders,
    deliveredorders,
    setDeliveredOrders,
    farmerData,
  } = useContext(FarmerContext);

  // here added orders data for set state function
  const handleOrderedOrders = () => {
    setIsContentLoading(true);
    setSelectedStatus("ordered");
    try {
      // backend api
      const req = "";
      const res = farmerOrders;
      setFarmerOrders(res);
      setTimeout(() => setIsContentLoading(false), 2000);
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };
  const handlePackedOrders = () => {
    setIsContentLoading(true);
    setSelectedStatus("packed");
    try {
      // backend api
      const req = "";
      const res = packedOrders;
      setPackedOrders(res);
      setTimeout(() => setIsContentLoading(false), 2000);
    } catch (err) {
      Toast(toast.error,err.message);
    }
  };
  const handleShippedOrders = () => {
    setIsContentLoading(true);
    setSelectedStatus("shipped");
    try {
      // backend api
      const req = "";
      const res = shippedOrders;
      setShippedOrders(res);
      setTimeout(() => setIsContentLoading(false), 2000);
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };
  const handleDeliveredOrders = () => {
    setIsContentLoading(true);
    setSelectedStatus("delivered")
    try{
      // backend api
      const req = "";
      const res = deliveredorders;
      setDeliveredOrders(res);
      setTimeout(()=> setIsContentLoading(false),2000);
    }catch(err){
      Toast(toast.error,err.message)
    }
  }
  const handleCancelledOrders = () => {
    setIsContentLoading(true);
    setSelectedStatus("cancelled")
    try{
      // backend api
      const req = "";
      const res = cancelledOrders;
      setCancelledOrders(res);
      setTimeout(()=> setIsContentLoading(false),2000);
    }catch(err){
      Toast(toast.error,err.message)
    }
  }


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
