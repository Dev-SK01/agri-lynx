import { createContext, useContext, useState } from "react";
import RegistrationContext from "@/registration/context/RegistrationContext";

const FarmerContext = createContext({});

export const FarmerContextProvider = ({ children }) => {
  const { userData } = useContext(RegistrationContext);
  // farmer data from server
  const [farmerData, setFarmerData] = useState([
    {
      farmerId: "s63hdb38dyb9ae4",
      name: "Prasanth Muthusamy",
      email: "prasanthfarmer@gmail.com",
      phoneNumber: "8760254168",
      alternateNumber: "7094295944",
      village: "SanjaySriram",
      postOffice: "Pullangudi",
      taluk: "kalaiyarkovil",
      district: "Ramanathapuram",
      pincode: "630661",
      state: "Tamilnadu",
      ifscCode: "IOBA0000876",
      accountNumber: "187200023992",
      accountHolderName: "Prasanth",
      bankName: "Indian Overseas Bank",
      bankBranch: "Ramanathapuram",
      upiID: "prasanth@okaxis",
      productList: [
        {
          commodity: "Tomato",
          quantity: "1000",
          price: "120",
          listingId: "u7g6b52bd7dn9n3b",
          farmerId: "s63hdb38dyb9ae4",
        },
        {
          commodity: "Potato",
          quantity: "100",
          price: "12",
          listingId: "u7g6b52bd7dn9n3q",
          farmerId: "s63hdb38dyb9ae4",
        },
        {
          commodity: "Brinjal",
          quantity: "300",
          price: "20",
          listingId: "u7g6b52bd7dn9n3c",
          farmerId: "s63hdb38dyb9ae4",
        },
        {
          commodity: "Water Melon",
          quantity: "200",
          price: "10",
          listingId: "u7g6b52bd7dn9n3d",
          farmerId: "s63hdb38dyb9ae4",
        },
        {
          commodity: "Bitter Guard",
          quantity: "1000",
          price: "250",
          listingId: "u7g6b52bd7dn9n3e",
          farmerId: "s63hdb38dyb9ae4",
        },
      ],
    },
  ]);
  const [isContentLoading, setIsContentLoading] = useState(false);
  // copying the farmer produce list 
  const farmerProduces = farmerData[0].productList || [];
  const [produceList, setProduceList] = useState(farmerProduces);

  return (
    <FarmerContext
      value={{
        userData,
        farmerData,
        setFarmerData,
        produceList,
        farmerProduces,
        setProduceList,
        isContentLoading,
        setIsContentLoading,
      }}
    >
      {children}
    </FarmerContext>
  );
};

export default FarmerContext;
