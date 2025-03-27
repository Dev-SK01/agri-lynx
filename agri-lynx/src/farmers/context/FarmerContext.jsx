import { createContext, useContext, useState } from "react";
import RegistrationContext from "@/registration/context/RegistrationContext";

const FarmerContext = createContext({});

export const FarmerContextProvider = ({ children }) => {
  const {userData} = useContext(RegistrationContext);
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
          imageUrl:"https://media.istockphoto.com/id/1459115525/photo/tomato-vegetables-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=q6pG5xZ_dEVlzwCvvURp1wNcT7xFYh4IQq_Hlk1bI3k="
        },
        {
          commodity: "Potato",
          quantity: "100",
          price: "12",
          listingId: "u7g6b52bd7dn9n3q",
          farmerId: "s63hdb38dyb9ae4",
          imageUrl:"https://media.istockphoto.com/id/157430678/photo/three-potatoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=xCQkT9Rwrz3XgFnLQfQZ2mq-xTA4WuGkdr23MkdPddA="
        },
        {
          commodity: "Brinjal",
          quantity: "300",
          price: "20",
          listingId: "u7g6b52bd7dn9n3c",
          farmerId: "s63hdb38dyb9ae4",
          imageUrl:"https://images.unsplash.com/photo-1639428134238-b548770d4b77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QnJpbmphbHxlbnwwfDF8MHx8fDI%3D"
        },
        {
          commodity: "Water Melon",
          quantity: "200",
          price: "10",
          listingId: "u7g6b52bd7dn9n3d",
          farmerId: "s63hdb38dyb9ae4",
          imageUrl:"https://images.unsplash.com/photo-1659667630176-1f2958367059?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGVyJTIwbWVsb258ZW58MHwxfDB8fHwy"
        },
        {
          commodity: "Bitter Guard",
          quantity: "1000",
          price: "250",
          listingId: "u7g6b52bd7dn9n3e",
          farmerId: "s63hdb38dyb9ae4",
          imageUrl:"https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy"
        },
      ],
    },
  ]);
  const [isContentLoading, setIsContentLoading] = useState(false);
  // copying the farmer produce list 
  const farmerProduces = farmerData[0].productList || [];
  console.log("FarmerContext:",farmerProduces);
  
  const [produceList, setProduceList] = useState(farmerProduces);
  // setting otp verifired false for toast container top 
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
