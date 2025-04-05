import { createContext, useState } from "react";

const LogisticContext = createContext({});

export const LogisticContextProvider = ({ children }) => {
  // Market owner data from server
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
  });

  const [isContentLoading, setIsContentLoading] = useState(true);
  const [LogisticOrders, setLogisticOrders] = useState([
    {
      orderId: "9g3h57hs34n84hi08er38rje",
      listingId: "u7g6b52bd7dn9n3b",
      quantity: "100",
      price: "250",
      commodityPrice: "2.5",
      orderDate: new Date().toUTCString(),
      orderStatus: "ordered",
      bookingStatus: "pending",
      commodity: "Bitter Guard",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
        name:"Ravi",
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
        email: "logistics@gamil.com",
        address: "9870,Aranmanai,kenikarai",
        taluk: "kenikarai",
        district: "Ramanathapuram",
        pincode: "623513",
      },
      customer: {
        name: "Elumalai Velu",
        phoneNumber: "7654324578",
        email: "eleumalaivelu@gmail.com",
        address: "1271, maran poratta kadai,kazhukumalai",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "623513",
      },
    },
  ]);

  return (
    <LogisticContext
      value={{ 
        LogisticData, 
        setLogisticData,
        isContentLoading, 
        setIsContentLoading,
        LogisticOrders,
        setLogisticOrders
       }}
    >
      {children}
    </LogisticContext>
  );
};

export default LogisticContext;
