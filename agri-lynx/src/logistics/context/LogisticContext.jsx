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

  return (
    <LogisticContext value={{ LogisticData, setLogisticData }}>
      {children}
    </LogisticContext>
  );
};

export default LogisticContext;
