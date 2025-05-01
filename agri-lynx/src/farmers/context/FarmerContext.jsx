import {createContext,useState} from "react";

const FarmerContext = createContext({});

export const FarmerContextProvider = ({ children }) => {
  // farmer data from server
  const [farmerData, setFarmerData] = useState([]);
  const [isContentLoading, setIsContentLoading] = useState(false);
  // copying the farmer produce list
  const farmerProduces = farmerData?.produceList;
  // console.log("FarmerProduces :",farmerProduces);
  const [produceList, setProduceList] = useState([]);
  const [produceDetails ,setProduceDetails] = useState();
  // console.log("ProduceList :" , produceList);

  // farmer orders states
  const [farmerOrders, setFarmerOrders] = useState([
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
        farmerId:"s63hdb38dyb9ae4",
        name:"Prasanth Muthusamy",
        phoneNumber: "8760254168",
        address: "123,ucer shop,ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
        upiId:"prasanth@okaxis"
      },
      customer: {
        customerId:"s63hdb38dyb9ae4",
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
  const [packedOrders, setPackedOrders] = useState([
    {
      orderId: "9g3h57hs34n84hi08er38swe",
      listingId: "u7g6b52bd7dn9n3b",
      quantity: "100",
      price: "250",
      commodityPrice: "2.5",
      orderDate: new Date().toUTCString(),
      orderStatus: "packed",
      bookingStatus: "booked",
      commodity: "Bitter Guard",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
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
  const [shippedOrders, setShippedOrders] = useState([
    {
      orderId: "9g3h57hs34n84hi08er38rjw2",
      listingId: "u7g6b52bd7dn9n3b",
      quantity: "100",
      price: "250",
      commodityPrice: "2.5",
      orderDate: new Date().toUTCString(),
      orderStatus: "shipped",
      bookingStatus: "booked",
      commodity: "Bitter Guard",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
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
  const [cancelledOrders, setCancelledOrders] = useState([
    {
      orderId: "9g3h57hs34n84hi08er38",
      listingId: "u7g6b52bd7dn9n3b",
      quantity: "100",
      price: "250",
      commodityPrice: "2.5",
      orderDate: new Date().toUTCString(),
      orderStatus: "cancelled",
      bookingStatus: "cancelled",
      commodity: "Bitter Guard",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
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
  const [deliveredorders, setDeliveredOrders] = useState([
    {
      orderId: "9g3h57hs34n84hi08er38w809",
      listingId: "u7g6b52bd7dn9n3b",
      quantity: "100",
      price: "250",
      commodityPrice: "2.5",
      orderDate: new Date().toUTCString(),
      orderStatus: "delivered",
      bookingStatus: "booked",
      commodity: "Bitter Guard",
      imageUrl:
        "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
      farmer: {
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
  const [selectedStatus, setSelectedStatus] = useState("ordered");
  // combining all orders for filtering orders
  const allOrders = farmerOrders.concat(
    packedOrders,
    shippedOrders,
    deliveredorders,
    cancelledOrders
  );
  return (  
    <FarmerContext
      value={{
        farmerData,
        setFarmerData,
        produceList,
        farmerProduces,
        setProduceList,
        produceDetails,
        setProduceDetails,
        isContentLoading,
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
        selectedStatus,
        setSelectedStatus,
        allOrders,
      }}
    >
      {children}
    </FarmerContext>
  );
};

export default FarmerContext;
