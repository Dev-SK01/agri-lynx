import React from 'react'
import { OwnerContextProvider } from './context/OwnerContext'
import OwnerContext from './context/OwnerContext'
import LocalMarketOwnerDashboard from './DashBoard/LocalMarketOwnerDashboard'
import OrderCheckOut from './OrderCheckOut'
import Analytics from './Analytics'
const Dashboard = () => {
  return (
    <>
    <OwnerContextProvider>
        <LocalMarketOwnerDashboard></LocalMarketOwnerDashboard> 
      {/* <OrderCheckOut/> */}
      {/*<Analytics/>*/}
    </OwnerContextProvider>
    </>
    
  )
}

export default Dashboard
