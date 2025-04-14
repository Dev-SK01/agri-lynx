import React, { createContext, useState } from 'react'

const FarmerLogisticsContext = createContext({})


export const FarmerLogisticsContextProvider = ({children}) => {
    const [LogisticsDetails, setLogisticsDetails] = useState([{
        name: "S.RishiKesavan",
        phoneNumber:"7094295944",
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
        phoneNumber:"7094295944",
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
        name: "Srikanth",
        phoneNumber:"7094295944",
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

  return (
      <FarmerLogisticsContext value={{
         LogisticsDetails,setLogisticsDetails
      }}>
        {children}
      </FarmerLogisticsContext>
  )
}




export default FarmerLogisticsContext
