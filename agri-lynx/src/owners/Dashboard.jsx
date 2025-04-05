import React from 'react'
import { OwnerContextProvider } from './context/OwnerContext'
import OwnerContext from './context/OwnerContext'
import LocalMarketOwnerDashboard from './DashBoard/LocalMarketOwnerDashboard'
import OrderCheckOut from './OrderCheckOut'
const Dashboard = () => {
  return (
    <>
    <OwnerContextProvider>
        {/* <LocalMarketOwnerDashboard></LocalMarketOwnerDashboard> */}
      <OrderCheckOut/>
    </OwnerContextProvider>
    </>
    
  )
}

export default Dashboard
