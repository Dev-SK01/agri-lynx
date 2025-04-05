import { createContext, useState } from "react";

const OwnerContext = createContext({});

export const OwnerContextProvider = ({ children }) => {
  // Market owner data from server
  const [OwnerData, setOwnerData] = useState({
    ownerId: "fuc1258539",
    name: "luffy",
    email: "luffy12@gmail.com",
    phoneNumber: "8456254895",
    alternateNumber: "9021547863",
    shopName: "luffy Veg Market",
    address: "1/67,nethaji street,Chennai",
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

  return (
    <OwnerContext value={{ OwnerData, setOwnerData }}>
      {children}
    </OwnerContext>
  );
};

export default OwnerContext;