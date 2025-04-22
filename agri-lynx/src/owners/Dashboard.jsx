import React from 'react'
import { OwnerContextProvider } from './context/OwnerContext'
import OwnerContext from './context/OwnerContext'
import LocalMarketOwnerDashboard from './DashBoard/LocalMarketOwnerDashboard'
import OrderCheckOut from './OrderCheckOut'
import Analytics from './Analytics'
const Dashboard = () => {
  return (
    <>
    
        {/* <LocalMarketOwnerDashboard></LocalMarketOwnerDashboard>  */}
       <OrderCheckOut/> 
      {/*<Analytics/>*/}
     
    </>
    
  )
}

export default Dashboard
