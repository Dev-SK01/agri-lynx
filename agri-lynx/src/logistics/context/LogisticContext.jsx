import VehicleDetails from "@/registration/components/VehicleDetails";
import { createContext, useState } from "react";

const LogisticContext = createContext({});

export const LogisticContextProvider = ({ children }) => {
  const [LogisticData, setLogisticData] = useState({
    logisticId: "mkt123abc987xyz",
    name: "Rajesh Kumar",
    email: "rajeshmarket@gmail.com",
    phoneNumber: "9876543210",
    alternateNumber: "9012345678",
    shopName: "Rajesh Fresh Market",
    address: "45, Anna Market, Gandhi Road",
    taluk: "Thirumangalam",
    district: "Madurai",
    state: "TAMIL NADU",
    pincode: "625001",
    ifscCode: "SBI0000123",
    accountNumber: "123456789012",
    accountHolderName: "Rajesh Kumar",
    bankName: "State Bank of India",
    bankBranch: "Madurai",
    upiId: "rajesh@upi",
    vehicleNumber: "TN-09-AQ-2004",
    vehicleType: "Van",
    licenseNumber: "DL-1420110012345"

  });

  const [LogisticOrders, setLogisticOrders] = useState([
    {
      orderId: "1234567890",
      listingId: "u7g6b52bd7dn9n3b",
      quantity: "100",
      price: "250",
      commodityPrice: "2.5",
      orderDate: new Date().toUTCString(),
      orderStatus: "ordered",
      bookingStatus: "pending",
      commodity: "Bitter Guard",
      imageUrl: "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
        name: "Ravi",
        phoneNumber: "8760254168",
        address: "123, ucer shop, ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
      },
      logistics: {
        name: "Sanjay Krishna",
        phoneNumber: "7094493944",
        email: "logistics@gamil.com",
        address: "9870, Aranmanai, kenikarai",
        taluk: "kenikarai",
        district: "Ramanathapuram",
        pincode: "623513",
      },
      customer: {
        name: "Elumalai Velu",
        phoneNumber: "7654324578",
        email: "eleumalaivelu@gmail.com",
        address: "1271, maran poratta kadai",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "623513",
      },
    },
    {
      orderId: "012347859955885669987455",
      listingId: "u7g6b52bd7dn9n3b",
      quantity: "100",
      price: "250",
      commodityPrice: "2.5",
      orderDate: new Date().toUTCString(),
      orderStatus: "ordered",
      bookingStatus: "pending",
      commodity: "Bitter Guard",
      imageUrl: "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
        name: "Ravi",
        phoneNumber: "8760254168",
        address: "123, ucer shop, ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
      },
      logistics: {
        name: "Sanjay Krishna",
        phoneNumber: "7094493944",
        email: "logistics@gamil.com",
        address: "9870, Aranmanai, kenikarai",
        taluk: "kenikarai",
        district: "Ramanathapuram",
        pincode: "623513",
      },
      customer: {
        name: "Elumalai Velu",
        phoneNumber: "7654324578",
        email: "eleumalaivelu@gmail.com",
        address: "1271, maran poratta kadai",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "623513",
      },
    },
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



