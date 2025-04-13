import React, { createContext, useState } from 'react'

const FarmerLogisticsContext = createContext({})


export const FarmerLogisticsContextProvider = ({children}) => {
    const [LogisticsDetails, setLogisticsDetails] = useState([{
        name: "S.RishiKesavan",
        phoneNumber:"8438017812",
        email: "rishikesavan881@gmail.com",
        village: "pullangudi",
        postOffice: "devipattinam",
        taluk: "ramanathapuram",
        district: "Thanjavur",
        pincode: 623513,
        state: "Tamil Nadu",
        vehicleType:"Auto",
        address:`210,south street,`,
        logisticsPartnerId: "w36ft8ndy3y26h83r"
      },
      { 
        name: "Sridhar",
        phoneNumber:"24554257812",
        email: "ran881@gmail.com",
        village: "pullangudi",
        postOffice: "devipattinam",
        taluk: "ramanathapuram",
        district: "ramanathapuram",
        pincode: 613303,
        state: "Tamil Nadu",
        vehicleType:"car",
        address:`210,south street,`,
        logisticsPartnerId: "w36ft8ndy3y2t33t"
      },
      {
        name: "Srikant",
        phoneNumber:"84353533453",
        email: "rishivan881@gmail.com",
        village: "pullangudi",
        postOffice: "devipattinam",
        taluk: "ramanathapuram",
        district: "ramanathapuram",
        pincode: 623513,
        state: "Tamil Nadu",
        vehicleType:"Bus",
        address:`210,south street,`,
        logisticsPartnerId: "w36ft8ndy3y26hget5"
      }
    ])
      const [farmerOrders, setFarmerOrders] = useState([
        {
          orderId: "9g3h57hfwhq8y87by487qyvq",
          listingId: "u7g6b52bd7eh87ebt8t",
          quantity: "100",
          price: "250",
          commodityPrice: "2.5",
          orderDate: new Date().toUTCString(),
          orderStatus: "delivery",
          bookingStatus: "pending",
          commodity: "Bitter Guard",
          imageUrl:
            "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
          farmer: {
            name:"elumalai",
            phoneNumber: "8760254168",
            address: "123,ucer shop,ucer street",
            village: "MettuPatti",
            postOffice: "Pullangudi",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "630661",
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
        {
          orderId: "9g3h57hs34n84hi067597gyg97",
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
            name:"rishi",
            phoneNumber: "8760254168",
            address: "123,ucer shop,ucer street",
            village: "MettuPatti",
            postOffice: "Pullangudi",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "630661",
          },
          customer: {
            name: "Elumalai Velu",
            phoneNumber: "7654324578",
            email: "eleumalaivelu@gmail.com",
            address: "1271, maran poratta kadai,kazhukumalai",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "623513",
          }
        },
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
            name:"sridhar",
            phoneNumber: "8760254168",
            address: "123,ucer shop,ucer street",
            village: "MettuPatti",
            postOffice: "Pullangudi",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "630661",
          },
          customer: {
            name: "Elumalai Velu",
            phoneNumber: "7654324578",
            email: "eleumalaivelu@gmail.com",
            address: "1271, maran poratta kadai,kazhukumalai",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "623513",
          }
        },
        {
          orderId: "9g3h57hs3wjfniuf4fv7y",
          listingId: "u7g6b52bd7dn9ng5333b",
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
            name:"sanjay",
            phoneNumber: "8760254168",
            address: "123,ucer shop,ucer street",
            village: "MettuPatti",
            postOffice: "Pullangudi",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "630661",
          },
          customer: {
            name: "Elumalai Velu",
            phoneNumber: "7654324578",
            email: "eleumalaivelu@gmail.com",
            address: "1271, maran poratta kadai,kazhukumalai",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "623513",
          }
        },
        {
          orderId: "9g3h57hs34n84hirt35t3",
          listingId: "u7g6b52bd7dn9n3d",
          quantity: "100",
          price: "250",
          commodityPrice: "2.5",
          orderDate: new Date().toUTCString(),
          orderStatus: "deliver",
          bookingStatus: "pending",
          commodity: "Bitter Guard",
          imageUrl:
            "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
          farmer: {
            name:"jegan",
            phoneNumber: "8760254168",
            address: "123,ucer shop,ucer street",
            village: "MettuPatti",
            postOffice: "Pullangudi",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "630661",
          },
          customer: {
            name: "Elumalai Velu",
            phoneNumber: "7654324578",
            email: "eleumalaivelu@gmail.com",
            address: "1271, maran poratta kadai,kazhukumalai",
            taluk: "kalaiyarkovil",
            district: "Ramanathapuram",
            pincode: "623513",
          }
        },
    ])
  return (
      <FarmerLogisticsContext value={{
         LogisticsDetails,setLogisticsDetails,farmerOrders,setFarmerOrders
      }}>
        {children}
      </FarmerLogisticsContext>
  )
}




export default FarmerLogisticsContext
