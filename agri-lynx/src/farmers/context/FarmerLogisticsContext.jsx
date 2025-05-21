import React, { createContext, useState } from 'react'

const FarmerLogisticsContext = createContext({})


export const FarmerLogisticsContextProvider = ({children}) => {
    const [LogisticsDetails, setLogisticsDetails] = useState([]);
  return (
      <FarmerLogisticsContext value={{
         LogisticsDetails,setLogisticsDetails
      }}>
        {children}
      </FarmerLogisticsContext>
  )
}




export default FarmerLogisticsContext
