import { createContext, useContext, useState } from "react";


const OwnerContext = createContext({});

export const OwnerContextProvider = ({ children }) => {
  // Market owner data from server   
  const [marketOwnerData, setMarketOwnerData] = useState({
    ownerId: "mkt123abc987xyz",
    name: "Rajesh Kumar",
    email: "rajeshmarket@gmail.com",
    phoneNumber: "9876543210",
    alternateNumber: "9012345678",
    shopName: "Rajesh Fresh Market",
    address: "45, Anna Market, Gandhi Road",
    city: "Madurai",
    district: "Madurai",
    state: "TAMIL NADU",
    pincode: "625001",
    ifscCode: "SBI0000123",
    accountNumber: "123456789012",
    accountHolderName: "Rajesh Kumar",
    bankName: "State Bank of India",
    bankBranch: "Madurai",
    upiId: "rajesh@upi",
    purchasedList: [
      {
        commodity: "Tomato",
        quantity: "500",
        price: "140",
        listingId: "purch123xyz",
        farmerId: "s63hdb38dyb9ae4",
        imageUrl: "https://media.istockphoto.com/id/1459115525/photo/tomato-vegetables-isolated-on-white-background.webp",
        purchaseDate: new Date().toUTCString(),
        status: "delivered",
      },
      {
        commodity: "Potato",
        quantity: "200",
        price: "15",
        listingId: "purch124xyz",
        farmerId: "s63hdb38dyb9ae4",
        imageUrl: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.webp",
        purchaseDate: new Date().toUTCString(),
        status: "shipped",
      },
      {
        commodity: "Brinjal",
        quantity: "350",
        price: "22",
        listingId: "purch125xyz",
        farmerId: "s63hdb38dyb9ae4",
        imageUrl: "https://images.unsplash.com/photo-1639428134238-b548770d4b77",
        purchaseDate: new Date().toUTCString(),
        status: "ordered",
      },
    ],
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
      imageUrl: "https://media.istockphoto.com/id/1459115525/photo/tomato-vegetables-isolated-on-white-background.webp",
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

  const [shippedOrders, setShippedOrders] = useState([
    {
      orderId: "mkt9g3h57hs35",
      listingId: "purch124xyz",
      quantity: "200",
      price: "15",
      orderDate: new Date().toUTCString(),
      orderStatus: "shipped",
      bookingStatus: "pending",
      commodity: "Potato",
      imageUrl: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.webp",
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
      imageUrl: "https://media.istockphoto.com/id/1459115525/photo/tomato-vegetables-isolated-on-white-background.webp",
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



  const [selectedStatus, setSelectedStatus] = useState("ordered");

  // Combining all orders   
  const allOrders = marketOrders.concat(shippedOrders,deliveredOrders)
 
  return (
    <OwnerContext
      value={{
        marketOwnerData,
        setMarketOwnerData,
        isContentLoading,
        setIsContentLoading,
        marketOrders,
        setMarketOrders,
        shippedOrders,
        setShippedOrders,
        deliveredOrders,
        setDeliveredOrders,
        selectedStatus,
        setSelectedStatus,
        allOrders,
      }}
    >
      {children}
    </OwnerContext>
  );
};

export default OwnerContext;
