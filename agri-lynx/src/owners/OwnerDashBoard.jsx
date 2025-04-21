import React from 'react'
import { OwnerContextProvider } from './context/OwnerContext';
import LocalMarketOwnerDashboard from './DashBoard/LocalMarketOwnerDashboard';
const OwnerDashBoard = () => {
  return (
   <OwnerContextProvider>
<LocalMarketOwnerDashboard/>
   </OwnerContextProvider>
  )
}

export default OwnerDashBoard
