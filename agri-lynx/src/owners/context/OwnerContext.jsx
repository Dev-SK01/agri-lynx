import { createContext, useState } from "react";

const OwnerContext = createContext({});

export const OwnerContextProvider = ({ children }) => {
  // Market owner data from server
  const [OwnerData, setOwnerData] = useState({});

  const [isContentLoading, setIsContentLoading] = useState(true);
  const [filteredCommodities, setFilteredCommodities] = useState([]);
  const [marketOrders, setMarketOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [cancelOrders, setCancelOrders] = useState([]);
  const [purchasedList, setPurchasedList] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("ordered");

  // Combining all orders
  const allOrders = marketOrders.concat(cancelOrders, deliveredOrders);
  // console.log(marketOrders);

  const cancelOrder = (orderId) => {
    const orderToCancel = marketOrders.find(
      (order) => order.orderId === orderId
    );
    if (orderToCancel) {
      setMarketOrders((prev) =>
        prev.filter((order) => order.orderId !== orderId)
      );
      setcancelOrders((prev) => [
        ...prev,
        { ...orderToCancel, orderStatus: "cancelled" },
      ]);
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setMarketOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, orderStatus: newStatus } : order
      )
    );
  };

  const updateProductQuantity = (listingId, quantityOrderd) => {
    setPurchasedList((prevList) =>
      prevList.map((item) =>
        item.listingId === listingId
          ? { ...item, quantity: item.quantity - quantityOrderd }
          : item
      )
    );
  };

  return (
    <OwnerContext.Provider
      value={{
        OwnerData,
        setOwnerData,
        isContentLoading,
        setIsContentLoading,
        marketOrders,
        setMarketOrders,
        cancelOrders,
        setCancelOrders,
        deliveredOrders,
        setDeliveredOrders,
        filteredCommodities,
        setFilteredCommodities,

        selectedStatus,
        setSelectedStatus,
        allOrders,
        cancelOrder,
        purchasedList,
        setPurchasedList,
        updateOrderStatus,
        updateProductQuantity,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};

export default OwnerContext;
