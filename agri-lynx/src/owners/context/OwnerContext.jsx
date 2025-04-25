import { createContext, useState } from "react";

const OwnerContext = createContext({});

export const OwnerContextProvider = ({ children }) => {
  // Market owner data from server
  const [OwnerData, setOwnerData] = useState({
    customerId: "fuc1258539",
    orderId: "mkt9g3h572h5823",
    name: "RishiKesavan",
    email: "luffy12@gmail.com",
    phoneNumber: "8456254895",
    alternateNumber: "9021547863",
    shopName: "luffy Veg Market",
    address: "5220,nethaji street,Chennai",
    taluk: "Erode",
    district: "Chennai",
    state: "TAMIL NADU",
    pincode: "625331",
    ifscCode: "CBNR0000123",
    accountNumber: "15247896465731",
    accountHolderName: "luffy",
    bankName: "Canara Bank",
    bankBranch: "Chennai",
    upiId: "luffy12@upi",
  });

  const [isContentLoading, setIsContentLoading] = useState(true);

  const [marketOrders, setMarketOrders] = useState([
    {
      orderId: "mkt9g3h57hs34",
      listingId: "purch123xyz",
      quantity: "500",
      price: "140",
      orderDate: new Date().toUTCString(),
      orderStatus: "ordered",
      bookingStatus: "pending",
      commodity: "Tomato",
      minPrice: "2000",
      maxPrice: "2300",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
        name: "Prasanth Muthusamy",
        phoneNumber: "8760254168",
        address: "123,ucer shop,ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
      },
      logistics: {
        name: "Sanjay Krishna",
        phoneNumber: "7094493944",
        email: "logistics@gmail.com",
        address: "9870,Aranmanai,kenikarai",
        taluk: "kenikarai",
        district: "Ramanathapuram",
        pincode: "623513",
      },
    },
  ]);

  const [cancelOrders, setcancelOrders] = useState([
    {
      orderId: "mkt9g3h57hs35",
      listingId: "purch124xyz",
      quantity: "200",
      price: "15",
      orderDate: new Date().toUTCString(),
      orderStatus: "cancelled",
      bookingStatus: "pending",
      commodity: "Potato",
      minPrice: "2000",
      maxPrice: "2300",
      imageUrl:
        "https://media.istockphoto.com/id/157430678/photo/three-potatoes.webp",
      farmer: {
        name: "Prasanth Muthusamy",
        phoneNumber: "8760254168",
        address: "123,ucer shop,ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
      },
      logistics: {
        name: "Sanjay Krishna",
        phoneNumber: "7094493944",
        email: "logistics@gmail.com",
        address: "9870,Aranmanai,kenikarai",
        taluk: "kenikarai",
        district: "Ramanathapuram",
        pincode: "623513",
      },
    },
  ]);

  const [deliveredOrders, setDeliveredOrders] = useState([
    {
      orderId: "mkt9g3h57hs36",
      listingId: "purch123xyz",
      quantity: "500",
      price: "140",
      orderDate: new Date().toUTCString(),
      orderStatus: "delivered",
      bookingStatus: "completed",
      commodity: "Tomato",
      minPrice: "2000",
      maxPrice: "2300",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
        name: "Prasanth Muthusamy",
        phoneNumber: "8760254168",
        address: "123,ucer shop,ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
      },
      logistics: {
        name: "Sanjay Krishna",
        phoneNumber: "7094493944",
        email: "logistics@gmail.com",
        address: "9870,Aranmanai,kenikarai",
        taluk: "kenikarai",
        district: "Ramanathapuram",
        pincode: "623513",
      },
    },
  ]);


  const [purchasedList, setPurchasedList] = useState([
    {
      commodity: "Tomato",
      quantity: 5100,
      price: 140,
      listingId: "purch123xyz",
      farmerId: "s63hdb38dyb9ae4",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      orderStatus: "ordered",
      bookingStatus: "pending",
      minPrice: "2000",
      maxPrice: "2300",
      district: "Chennai",
      farmer: {
        farmerId: "s63hdb38dyb9ae4",
        name: "prasanth",
        phoneNumber: "8898812345",
        address: "123,ucer shop,ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
        upiId: "devsk@upi",
      },
    },
    {
      commodity: "Potato",
      quantity: 200,
      price: 15,
      listingId: "purch124xyz",
      farmerId: "s63hdb38dyb9ae4",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      orderDate: new Date().toUTCString(),
      orderStatus: "ordered",
      bookingStatus: "pending",
      minPrice: "2000",
      maxPrice: "2300",
      district: "Chennai",
      farmer: {
        farmerId: "s63hdb38dyb9ae4",
        name: "prasanth",
        phoneNumber: "8898812345",
        address: "123,ucer shop,ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
        upiId: "prasanth@upi",
      },
    },
    {
      commodity: "Brinjal",
      quantity: 350,
      price: 22,
      listingId: "purchxyz",
      farmerId: "s63hdb38dyb9ae4",
      imageUrl: "https://images.unsplash.com/photo-1639428134238-b548770d4b77",
      orderDate: new Date().toUTCString(),
      orderStatus: "ordered",
      bookingStatus: "pending",
      minPrice: "2000",
      maxPrice: "2300",
      district: "Madurai",
      farmer: {
        farmerId: "s63hdb38dyb9ae4",
        name: "prasanth",
        phoneNumber: "8898812345",
        address: "123,ucer shop,ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
        upiId: "prasanth@upi",
      },
    },
  ]);

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
        { ...orderToCancel, orderStatus: "canceled" },
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
        setcancelOrders,
        deliveredOrders,
        setDeliveredOrders,
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
